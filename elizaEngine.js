/*
  elizaEngine.js - Motor do ELIZA refatorado em classe ES6
  Isolado de dependências globais e pronto para reutilização.
*/

export default class ElizaBot {
  constructor(data = {}, noRandom = false) {
    this.noRandom = Boolean(noRandom);
    this.capitalizeFirstLetter = true;
    this.debug = false;
    this.memSize = 20;
    this.version = "2.0-ES6 (PT)";

    // Recebe os dados de regras diretamente por parâmetro
    this.initials = data.initials || [];
    this.finals = data.finals || [];
    this.quits = data.quits || [];
    this.pres = data.pres || [];
    this.posts = data.posts || [];
    this.synons = data.synons || {};
    this.keywords = data.keywords || [['###', 0, [['###', []]]]];
    this.postTransforms = data.postTransforms || [];

    this._dataParsed = false;
    this._init();
    this.reset();
  }

  reset() {
    this.quit = false;
    this.mem = [];
    this.lastchoice = [];
    for (let k = 0; k < this.keywords.length; k++) {
      this.lastchoice[k] = [];
      const rules = this.keywords[k][2];
      for (let i = 0; i < rules.length; i++) {
        this.lastchoice[k][i] = -1;
      }
    }
  }

  _init() {
    // Processamento de sinônimos
    const synPatterns = {};
    if (this.synons && typeof this.synons === 'object') {
      for (const i in this.synons) {
        synPatterns[i] = '(' + i + '|' + this.synons[i].join('|') + ')';
      }
    }

    // Regras de conversão e expansão de regex
    const sre = /@(\S+)/;
    const are = /(\S)\s*\*\s*(\S)/;
    const are1 = /^\s*\*\s*(\S)/;
    const are2 = /(\S)\s*\*\s*$/;
    const are3 = /^\s*\*\s*$/;
    const wsre = /\s+/g;

    for (let k = 0; k < this.keywords.length; k++) {
      const rules = this.keywords[k][2];
      this.keywords[k][3] = k; // guarda o índice original para ordenação
      for (let i = 0; i < rules.length; i++) {
        const r = rules[i];
        if (r[0].charAt(0) === '$') {
          let ofs = 1;
          while (r[0].charAt(ofs) === ' ') ofs++;
          r[0] = r[0].substring(ofs);
          r[2] = true;
        } else {
          r[2] = false;
        }

        // Expande sinônimos
        let m = sre.exec(r[0]);
        while (m) {
          const sp = synPatterns[m[1]] ? synPatterns[m[1]] : m[1];
          r[0] = r[0].substring(0, m.index) + sp + r[0].substring(m.index + m[0].length);
          m = sre.exec(r[0]);
        }

        // Expande asteriscos (*)
        if (are3.test(r[0])) {
          r[0] = '\\s*(.*)\\s*';
        } else {
          m = are.exec(r[0]);
          if (m) {
            let lp = '';
            let rp = r[0];
            while (m) {
              lp += rp.substring(0, m.index + 1);
              if (m[1] !== ')') lp += '\\b';
              lp += '\\s*(.*)\\s*';
              if (m[2] !== '(' && m[2] !== '\\') lp += '\\b';
              lp += m[2];
              rp = rp.substring(m.index + m[0].length);
              m = are.exec(rp);
            }
            r[0] = lp + rp;
          }
          m = are1.exec(r[0]);
          if (m) {
            let lp = '\\s*(.*)\\s*';
            if (m[1] !== ')' && m[1] !== '\\') lp += '\\b';
            r[0] = lp + r[0].substring(m.index - 1 + m[0].length);
          }
          m = are2.exec(r[0]);
          if (m) {
            let lp = r[0].substring(0, m.index + 1);
            if (m[1] !== '(') lp += '\\b';
            r[0] = lp + '\\s*(.*)\\s*';
          }
        }

        // Expande espaços em branco
        r[0] = r[0].replace(wsre, '\\s+');
        wsre.lastIndex = 0;
      }
    }

    // Ordena palavras-chave pelo peso (rank)
    this.keywords.sort(this._sortKeywords);

    // Mapeamento de pré e pós processamento
    this.parsedPres = {};
    this.parsedPosts = {};

    if (this.pres && this.pres.length) {
      const a = [];
      for (let i = 0; i < this.pres.length; i += 2) {
        a.push(this.pres[i]);
        this.parsedPres[this.pres[i]] = this.pres[i + 1];
      }
      this.preExp = new RegExp('\\b(' + a.join('|') + ')\\b');
    } else {
      this.preExp = /####/;
      this.parsedPres['####'] = '####';
    }

    if (this.posts && this.posts.length) {
      const a = [];
      for (let i = 0; i < this.posts.length; i += 2) {
        a.push(this.posts[i]);
        this.parsedPosts[this.posts[i]] = this.posts[i + 1];
      }
      this.postExp = new RegExp('\\b(' + a.join('|') + ')\\b');
    } else {
      this.postExp = /####/;
      this.parsedPosts['####'] = '####';
    }

    this._dataParsed = true;
  }

  _sortKeywords(a, b) {
    if (a[1] > b[1]) return -1;
    if (a[1] < b[1]) return 1;
    if (a[3] > b[3]) return 1;
    if (a[3] < b[3]) return -1;
    return 0;
  }

  transform(text) {
    let rpl = '';
    this.quit = false;

    text = text.toLowerCase();
    text = text.replace(/@#\$%\^&\*\(\)_\+=~`\{\[\}\]\|:;<>\/\\\t/g, ' ');
    text = text.replace(/\s+-+\s+/g, '.');
    text = text.replace(/\s*[,\.\?!;]+\s*/g, '.');
    text = text.replace(/\s*\bmas\b\s*/g, '.');
    text = text.replace(/\s{2,}/g, ' ');

    const parts = text.split('.');
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      if (part !== '') {
        // Verifica termos de saída
        for (let q = 0; q < this.quits.length; q++) {
          if (this.quits[q] === part) {
            this.quit = true;
            return this.getFinal();
          }
        }

        // Pré-processamento
        let m = this.preExp.exec(part);
        let currentPart = part;
        if (m) {
          let lp = '';
          let rp = currentPart;
          while (m) {
            lp += rp.substring(0, m.index) + this.parsedPres[m[1]];
            rp = rp.substring(m.index + m[0].length);
            m = this.preExp.exec(rp);
          }
          currentPart = lp + rp;
        }
        this.sentence = currentPart;

        // Pesquisa palavras-chave
        for (let k = 0; k < this.keywords.length; k++) {
          if (currentPart.search(new RegExp('\\b' + this.keywords[k][0] + '\\b', 'i')) >= 0) {
            rpl = this._execRule(k);
          }
          if (rpl !== '') return rpl;
        }
      }
    }

    // Tenta a memória
    rpl = this._memGet();

    // Tenta o xnone se a memória estiver vazia
    if (rpl === '') {
      this.sentence = ' ';
      const k = this._getRuleIndexByKey('xnone');
      if (k >= 0) rpl = this._execRule(k);
    }

    return rpl !== '' ? rpl : 'Não tenho palavras para responder.';
  }

  _execRule(k) {
    const rule = this.keywords[k];
    const decomps = rule[2];
    const paramre = /\(([0-9]+)\)/;

    for (let i = 0; i < decomps.length; i++) {
      const m = this.sentence.match(decomps[i][0]);
      if (m !== null) {
        const reasmbs = decomps[i][1];
        const memflag = decomps[i][2];
        let ri = this.noRandom ? 0 : Math.floor(Math.random() * reasmbs.length);

        if ((this.noRandom && this.lastchoice[k][i] > ri) || this.lastchoice[k][i] === ri) {
          ri = ++this.lastchoice[k][i];
          if (ri >= reasmbs.length) {
            ri = 0;
            this.lastchoice[k][i] = -1;
          }
        } else {
          this.lastchoice[k][i] = ri;
        }

        let rpl = reasmbs[ri];

        if (rpl.search('^goto ', 'i') === 0) {
          const ki = this._getRuleIndexByKey(rpl.substring(5));
          if (ki >= 0) return this._execRule(ki);
        }

        // Substituição dos parâmetros posicionais (1), (2), etc.
        let m1 = paramre.exec(rpl);
        if (m1) {
          let lp = '';
          let rp = rpl;
          while (m1) {
            let param = m[parseInt(m1[1])];
            let m2 = this.postExp.exec(param);
            if (m2) {
              let lp2 = '';
              let rp2 = param;
              while (m2) {
                lp2 += rp2.substring(0, m2.index) + this.parsedPosts[m2[1]];
                rp2 = rp2.substring(m2.index + m2[0].length);
                m2 = this.postExp.exec(rp2);
              }
              param = lp2 + rp2;
            }
            lp += rp.substring(0, m1.index) + param;
            rp = rp.substring(m1.index + m1[0].length);
            m1 = paramre.exec(rp);
          }
          rpl = lp + rp;
        }

        rpl = this._postTransform(rpl);
        if (memflag) {
          this._memSave(rpl);
        } else {
          return rpl;
        }
      }
    }
    return '';
  }

  _postTransform(s) {
    let str = s.replace(/\s{2,}/g, ' ');
    str = str.replace(/\s+\./g, '.');
    if (this.postTransforms && this.postTransforms.length) {
      for (let i = 0; i < this.postTransforms.length; i += 2) {
        str = str.replace(this.postTransforms[i], this.postTransforms[i + 1]);
        this.postTransforms[i].lastIndex = 0;
      }
    }
    if (this.capitalizeFirstLetter) {
      const re = /^([a-z])/;
      const m = re.exec(str);
      if (m) str = m[0].toUpperCase() + str.substring(1);
    }
    return str;
  }

  _getRuleIndexByKey(key) {
    for (let k = 0; k < this.keywords.length; k++) {
      if (this.keywords[k][0] === key) return k;
    }
    return -1;
  }

  _memSave(t) {
    this.mem.push(t);
    if (this.mem.length > this.memSize) this.mem.shift();
  }

  _memGet() {
    if (this.mem.length) {
      if (this.noRandom) {
        return this.mem.shift();
      } else {
        const n = Math.floor(Math.random() * this.mem.length);
        const rpl = this.mem[n];
        for (let i = n + 1; i < this.mem.length; i++) {
          this.mem[i - 1] = this.mem[i];
        }
        this.mem.length--;
        return rpl;
      }
    }
    return '';
  }

  getFinal() {
    if (!this.finals || !this.finals.length) return '';
    return this.finals[Math.floor(Math.random() * this.finals.length)];
  }

  getInitial() {
    if (!this.initials || !this.initials.length) return '';
    return this.initials[Math.floor(Math.random() * this.initials.length)];
  }
}
