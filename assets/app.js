/* ===== AIF-C01 背题系统 — app.js ===== */
(function () {
  'use strict';

  /* ---------------------------------------------------------------- icons */
  const I = {
    home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5.5 9.5V20h13V9.5"/>',
    practice: '<path d="M9 11l3 3 8-8"/><path d="M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9"/>',
    cards: '<rect x="2.5" y="6" width="13" height="15" rx="2"/><path d="M6.5 6V4a1.5 1.5 0 0 1 1.5-1.5h11A1.5 1.5 0 0 1 20.5 4v12"/>',
    exam: '<circle cx="12" cy="12" r="9"/><path d="M12 7.5V12l3.2 2"/>',
    rapid: '<path d="M13 2 4.5 13.5H11l-1 8.5 8.5-11.5H12z"/>',
    book: '<path d="M4 4.5A1.5 1.5 0 0 1 5.5 3H19a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H5.5A1.5 1.5 0 0 1 4 19.5z"/><path d="M8 3v18"/>',
    wrong: '<circle cx="12" cy="12" r="9"/><path d="M15 9l-6 6M9 9l6 6"/>',
    star: '<path d="M12 3.5l2.7 5.5 6 .9-4.35 4.25 1.03 6L12 17.3l-5.38 2.85 1.03-6L3.3 9.9l6-.9z"/>',
    stats: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1 1.55V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.11-1.55 1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.7 1.7 0 0 0 .34-1.87 1.7 1.7 0 0 0-1.55-1H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.65 9a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.7 1.7 0 0 0 1.87.34H9a1.7 1.7 0 0 0 1-1.55V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.55 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0-.34 1.87V9a1.7 1.7 0 0 0 1.55 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    left: '<path d="M15 19l-7-7 7-7"/>',
    right: '<path d="M9 5l7 7-7 7"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18z"/>',
    shuffle: '<path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/>',
    flame: '<path d="M12 2s5 5.5 5 10a5 5 0 0 1-10 0c0-1.5.5-3 1.5-4.5C9.5 9.5 12 7 12 2z"/>',
    refresh: '<path d="M3 12a9 9 0 0 1 15.5-6.2M21 12a9 9 0 0 1-15.5 6.2"/><path d="M18 3v4h-4M6 21v-4h4"/>',
    trash: '<path d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M6 7l1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
    arrowUp: '<path d="M12 19V5M5 12l7-7 7 7"/>',
  };
  const svg = (k, cls) =>
    `<svg class="${cls || ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">${I[k] || ''}</svg>`;

  /* ---------------------------------------------------------------- topics */
  const TOPICS = {
    genai: '生成式 AI 与基础模型',
    sagemaker: 'SageMaker 与 ML 流程',
    services: 'AWS 托管 AI 服务',
    eval: '模型评估与调优',
    responsible: '负责任的 AI',
    security: '安全合规与治理',
    cost: '成本与推理选型',
    data: '数据准备与标注',
    ops: '部署与运维',
    general: '综合判断',
  };

  const BOX_MIN = [0, 6 * 60, 24 * 60, 3 * 1440, 7 * 1440, 16 * 1440]; // minutes

  /* ---------------------------------------------------------------- state */
  const DEFAULT_SETTINGS = { lang: 'zh', theme: 'auto', shuffle: false, autoNext: false, examCount: 60, examMin: 90, examScope: 'all' };

  const S = {
    qs: [],
    byId: {},
    prog: {},
    daily: {},
    settings: { ...DEFAULT_SETTINGS },
    session: null,
    exam: null,
    route: { name: 'home' },
  };

  function load() {
    try {
      const raw = localStorage.getItem('aif-c01:v1');
      if (raw) {
        const d = JSON.parse(raw);
        S.prog = d.prog || {};
        S.daily = d.daily || {};
        S.settings = { ...DEFAULT_SETTINGS, ...(d.settings || {}) };
        S.exam = d.exam || null;
        S.session = d.session || null;
      }
    } catch (e) { /* ignore */ }
  }
  let saveTimer = null;
  function save(now) {
    const write = () => {
      try {
        localStorage.setItem('aif-c01:v1', JSON.stringify({ prog: S.prog, daily: S.daily, settings: S.settings, exam: S.exam, session: S.session }));
      } catch (e) { /* quota */ }
    };
    if (now) return write();
    clearTimeout(saveTimer);
    saveTimer = setTimeout(write, 350);
  }

  const rec = (id) => S.prog[id] || null;
  function ensure(id) {
    if (!S.prog[id]) S.prog[id] = { c: 0, w: 0, box: 0, due: 0, last: 0, star: 0 };
    return S.prog[id];
  }
  const isDue = (id) => { const r = S.prog[id]; return !!r && r.due > 0 && r.due <= Date.now(); };
  const todayKey = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; };
  function bumpDaily(ok) {
    const k = todayKey();
    const d = S.daily[k] || { n: 0, c: 0 };
    d.n++; if (ok) d.c++;
    S.daily[k] = d;
  }

  /* ---------------------------------------------------------------- helpers */
  const $ = (sel, root) => (root || document).querySelector(sel);
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const lang = () => S.settings.lang;

  function stemText(q) {
    if (lang() === 'en') return q.stem.en;
    return q.stem.zh || q.stem.en;
  }
  function stemAlt(q) {
    if (lang() === 'both' && q.stem.zh) return q.stem.en;
    return '';
  }
  function optText(o) {
    if (lang() === 'en') return o.en;
    return o.zh || o.en;
  }
  function optAlt(o) {
    if (lang() === 'both' && o.zh) return o.en;
    return '';
  }
  function explText(q) {
    if (lang() === 'en') return q.explanation.en;
    return q.explanation.zh || q.explanation.en;
  }
  function explAlt(q) {
    if (lang() === 'both' && q.explanation.zh) return q.explanation.en;
    return '';
  }
  function tipText(q) {
    if (lang() === 'en') return q.tip.en || '';
    return q.tip.zh || q.tip.en || '';
  }

  const shuffle = (a) => { const r = a.slice(); for (let i = r.length - 1; i > 0; i--) { const j = (Math.random() * (i + 1)) | 0; [r[i], r[j]] = [r[j], r[i]]; } return r; };
  const pct = (a, b) => (b ? Math.round((a / b) * 100) : 0);

  function toast(msg) {
    const old = $('.toast'); if (old) old.remove();
    const el = document.createElement('div');
    el.className = 'toast'; el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1900);
  }

  // In-app confirm: native confirm() freezes some mobile in-app browsers and
  // returns nothing in PWA standalone mode, so ask with our own dialog.
  function askConfirm(message, onYes) {
    const wrap = document.createElement('div');
    wrap.className = 'modal-bg';
    wrap.innerHTML = `<div class="modal" role="dialog" aria-modal="true" style="width:min(420px,100%)">
        <p style="margin:0 0 18px;font-size:15px;line-height:1.65">${esc(message)}</p>
        <div class="row" style="gap:10px">
          <button class="btn block" data-ask="no" style="height:42px">取消</button>
          <button class="btn primary block" data-ask="yes" style="height:42px">确定</button>
        </div>
      </div>`;
    document.body.appendChild(wrap);
    const done = (ok) => { wrap.remove(); if (ok) onYes(); };
    wrap.addEventListener('click', (ev) => {
      const b = ev.target.closest('[data-ask]');
      if (b) { done(b.dataset.ask === 'yes'); return; }
      if (ev.target === wrap) done(false);
    });
    wrap.querySelector('[data-ask="yes"]').focus();
  }

  /* ---------------------------------------------------------------- progress math */
  function stats() {
    let seen = 0, correctTotal = 0, attempts = 0, due = 0, star = 0, mastered = 0;
    for (const q of S.qs) {
      const r = S.prog[q.id];
      if (!r) continue;
      if (r.c + r.w > 0) seen++;
      correctTotal += r.c; attempts += r.c + r.w;
      if (r.box >= 4) mastered++;
      if (r.star) star++;
      if (isDue(q.id)) due++;
    }
    return { seen, attempts, correctTotal, acc: pct(correctTotal, attempts), due, star, mastered, total: S.qs.length };
  }

  function topicStats() {
    const m = {};
    for (const q of S.qs) {
      const k = q.topic;
      m[k] = m[k] || { total: 0, seen: 0, correct: 0, attempts: 0 };
      m[k].total++;
      const r = S.prog[q.id];
      if (r) { m[k].seen++; m[k].correct += r.c; m[k].attempts += r.c + r.w; }
    }
    return Object.entries(m).map(([k, v]) => ({ key: k, label: TOPICS[k] || k, ...v, acc: pct(v.correct, v.attempts) }))
      .sort((a, b) => b.total - a.total);
  }

  /* ---------------------------------------------------------------- queue builders */
  function buildQueue(kind, opt) {
    opt = opt || {};
    let ids;
    const all = S.qs.map((q) => q.id);
    switch (kind) {
      case 'wrong': ids = all.filter((id) => { const r = S.prog[id]; return r && r.w > 0 && (r.box < 4 || r.w > r.c); }); break;
      case 'star': ids = all.filter((id) => S.prog[id] && S.prog[id].star); break;
      case 'due': ids = all.filter(isDue); break;
      case 'unseen': ids = all.filter((id) => !S.prog[id] || S.prog[id].c + S.prog[id].w === 0); break;
      case 'topic': ids = all.filter((id) => S.byId[id].topic === opt.topic); break;
      default: ids = all.slice();
    }
    if (opt.shuffle || S.settings.shuffle) ids = shuffle(ids);
    if (opt.limit) ids = ids.slice(0, opt.limit);
    return ids;
  }

  /* ---------------------------------------------------------------- router */
  const NAV = [
    { grp: '学习' },
    { key: 'home', label: '首页', icon: 'home' },
    { key: 'practice', label: '刷题练习', icon: 'practice' },
    { key: 'rapid', label: '速记模式', icon: 'rapid' },
    { key: 'cards', label: '闪卡复习', icon: 'cards' },
    { key: 'exam', label: '模拟考试', icon: 'exam' },
    { grp: '题库' },
    { key: 'browse', label: '全部题目', icon: 'book' },
    { key: 'wrong', label: '错题本', icon: 'wrong' },
    { key: 'star', label: '收藏夹', icon: 'star' },
    { grp: '数据' },
    { key: 'stats', label: '学习统计', icon: 'stats' },
    { key: 'settings', label: '设置', icon: 'settings' },
  ];

  function parseHash() {
    const h = (location.hash || '#/home').replace(/^#\/?/, '');
    const [path, qs] = h.split('?');
    const parts = path.split('/').filter(Boolean);
    const params = {};
    (qs || '').split('&').filter(Boolean).forEach((p) => { const [k, v] = p.split('='); params[decodeURIComponent(k)] = decodeURIComponent(v || ''); });
    return { name: parts[0] || 'home', arg: parts[1] || '', params };
  }
  function go(path) {
    if (location.hash === '#' + path) {
      // Same target: keep S.route in sync and re-render (re-clicking a nav item).
      S.route = parseHash();
      render();
      return;
    }
    location.hash = path;
    // hashchange fires asynchronously. Update S.route from the new hash NOW so
    // the just-clicked handler and viewPractice() don't read a stale route and
    // rebuild a freshly-created custom session with the full 334-question queue.
    S.route = parseHash();
  }

  /* ---------------------------------------------------------------- shell */
  function shell() {
    const st = stats();
    const navCounts = { wrong: st.total ? buildQueue('wrong').length : 0, star: st.star, due: st.due };
    const rail = NAV.map((n) => {
      if (n.grp) return `<div class="grp">${n.grp}</div>`;
      const on = S.route.name === n.key ? ' on' : '';
      const c = navCounts[n.key];
      return `<button class="navlink${on}" data-go="/${n.key}">${svg(n.icon)}<span>${n.label}</span>${c ? `<span class="count">${c}</span>` : ''}</button>`;
    }).join('');

    const tabs = [
      { key: 'home', label: '首页', icon: 'home' },
      { key: 'practice', label: '刷题', icon: 'practice' },
      { key: 'cards', label: '闪卡', icon: 'cards' },
      { key: 'browse', label: '题库', icon: 'book' },
      { key: 'stats', label: '统计', icon: 'stats' },
    ].map((t) => `<button class="${S.route.name === t.key ? 'on' : ''}" data-go="/${t.key}">${svg(t.icon)}<span>${t.label}</span></button>`).join('');

    const langLabel = { zh: '中', en: 'EN', both: '中英' }[S.settings.lang] || '中';
    const dark = document.documentElement.dataset.theme === 'dark';

    return `
    <header class="topbar">
      <button class="brand" data-go="/home" style="text-align:left">
        <span class="logo">AI</span>
        <span>AIF-C01<small>AWS 人工智能从业者 · 背题</small></span>
      </button>
      <span class="spacer"></span>
      <div class="seg" id="langseg">
        <button data-lang="zh" class="${S.settings.lang === 'zh' ? 'on' : ''}">中文</button>
        <button data-lang="en" class="${S.settings.lang === 'en' ? 'on' : ''}">English</button>
        <button data-lang="both" class="${S.settings.lang === 'both' ? 'on' : ''}">中英</button>
      </div>
      <button class="icon-btn" id="themeBtn" data-act="toggle-theme" title="切换主题">${svg(dark ? 'sun' : 'moon')}</button>
    </header>
    <div class="layout">
      <aside class="rail">${rail}
        <div class="grp">今日</div>
        <div style="padding:8px 10px;font-size:12.5px;color:var(--muted);line-height:1.7">
          已练 <b style="color:var(--text)">${(S.daily[todayKey()] || {}).n || 0}</b> 题<br>
          待复习 <b style="color:var(--text)">${st.due}</b> 题<br>
          掌握 <b style="color:var(--text)">${st.mastered}</b>/${st.total}
        </div>
      </aside>
      <main class="view" id="view"></main>
    </div>
    <nav class="tabbar">${tabs}</nav>`;
  }

  function renderShell() {
    const app = $('#app');
    app.innerHTML = shell();
    render();
  }

  /* ---------------------------------------------------------------- view dispatch */
  function render() {
    const v = $('#view');
    if (!v) return;
    const r = S.route;
    let html = '';
    switch (r.name) {
      case 'practice': html = viewPractice(); break;
      case 'rapid': html = viewRapid(); break;
      case 'cards': html = viewCards(); break;
      case 'exam': html = viewExam(); break;
      case 'browse': html = viewBrowse(); break;
      case 'wrong': html = viewList('wrong'); break;
      case 'star': html = viewList('star'); break;
      case 'stats': html = viewStats(); break;
      case 'settings': html = viewSettings(); break;
      case 'q': html = viewDetail(Number(r.arg)); break;
      default: html = viewHome();
    }
    v.innerHTML = `<div class="wrap fadein">${html}</div>`;
    v.scrollTop = 0;
    if (r.name !== 'exam') window.scrollTo(0, 0);
  }

  /* ================================================================ HOME */
  function viewHome() {
    const st = stats();
    const today = S.daily[todayKey()] || { n: 0, c: 0 };
    const R = 34, C = 2 * Math.PI * R;
    const p = pct(st.seen, st.total);
    const streak = (() => {
      let n = 0; const d = new Date();
      for (;;) {
        const k = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
        if (S.daily[k] && S.daily[k].n > 0) { n++; d.setDate(d.getDate() - 1); } else break;
      }
      return n;
    })();

    const modes = [
      { go: '/practice', icon: 'practice', t: '刷题练习', d: '选答案 → 立刻看解析和记忆点' },
      { go: '/rapid', icon: 'rapid', t: '速记模式', d: '题目+答案同屏，快速过一遍' },
      { go: '/cards', icon: 'cards', t: '闪卡复习', d: '翻卡自评，按遗忘曲线安排复习' },
      { go: '/exam', icon: 'exam', t: '模拟考试', d: '计时整套，交卷后看错题' },
    ].map((m) => `<button class="mode" data-go="${m.go}">
        <span class="ico">${svg(m.icon)}</span>
        <span><b>${m.t}</b><p>${m.d}</p></span>
      </button>`).join('');

    const ts = topicStats().slice(0, 5).map((t) => `
      <div class="bar-row">
        <span class="name" title="${esc(t.label)}">${esc(t.label)}</span>
        <span class="bar"><i style="width:${pct(t.seen, t.total)}%"></i></span>
        <span class="val">${t.seen}/${t.total}</span>
      </div>`).join('');

    return `
      <div class="hero">
        <div class="row" style="align-items:flex-start">
          <div style="flex:1;min-width:0">
            <h1>距离 12 月中旬还有 ${daysLeft()} 天</h1>
            <p class="sub">334 道题，每天 12 题，考前刚好过完 3 轮。</p>
          </div>
          <svg class="ring" viewBox="0 0 84 84" style="width:72px;height:72px">
            <circle class="bg" cx="42" cy="42" r="${R}"/>
            <circle class="fg" cx="42" cy="42" r="${R}" stroke="#fff" stroke-dasharray="${C}" stroke-dashoffset="${C * (1 - p / 100)}"/>
          </svg>
        </div>
        <div class="grid3">
          <div><div class="stat"><b>${st.seen}</b><span>/ ${st.total}</span></div><span style="font-size:11.5px;opacity:.8">已练习</span></div>
          <div><div class="stat"><b>${st.acc}%</b></div><span style="font-size:11.5px;opacity:.8">正确率</span></div>
          <div><div class="stat"><b>${streak}</b><span>天</span></div><span style="font-size:11.5px;opacity:.8">连续打卡</span></div>
        </div>
      </div>

      <div class="stack" style="margin-top:16px">
        ${st.due > 0 ? `<button class="card pad" data-act="start-due" style="display:flex;align-items:center;gap:12px;text-align:left;width:100%;border-color:color-mix(in srgb,var(--warn) 40%,var(--line));background:var(--warn-soft)">
          <span style="font-size:22px">🔔</span>
          <span style="flex:1"><b style="display:block;font-size:14.5px">有 ${st.due} 道题到复习时间了</b><span class="sub" style="font-size:12.5px">按遗忘曲线，现在复习效果最好</span></span>
          <span class="btn primary sm">开始复习</span>
        </button>` : ''}

        <div class="modegrid">${modes}</div>

        <div class="card pad">
          <div class="row" style="margin-bottom:12px"><h2>今日进度</h2><span class="spacer"></span>
            <span class="tag ${today.n >= 12 ? 'ok' : 'brand'}">${today.n} / 12 题</span></div>
          <div class="progressline"><i style="width:${Math.min(100, (today.n / 12) * 100)}%"></i></div>
          <p class="sub" style="margin-top:9px;font-size:12.5px">
            ${today.n >= 12 ? '今天的任务完成了，再刷几题可以提前冲刺 🎉' : `还差 ${12 - today.n} 题完成今日目标，大约 ${Math.ceil((12 - today.n) * 1.5)} 分钟。`}
          </p>
        </div>

        <div class="card pad">
          <div class="row" style="margin-bottom:12px"><h2>各模块掌握度</h2><span class="spacer"></span>
            <button class="btn ghost sm" data-go="/stats">详情 ${svg('right')}</button></div>
          <div class="bars">${ts || '<p class="sub">还没有数据</p>'}</div>
        </div>

        <div class="card pad">
          <h2 style="margin-bottom:10px">键盘快捷键</h2>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:8px;font-size:12.5px;color:var(--muted)">
            <div><span class="kbd">1</span>–<span class="kbd">5</span> 选择选项</div>
            <div><span class="kbd">Enter</span> 下一题 / 提交</div>
            <div><span class="kbd">Space</span> 闪卡翻面</div>
            <div><span class="kbd">←</span><span class="kbd">→</span> 上一题 / 下一题</div>
            <div><span class="kbd">S</span> 收藏本题</div>
            <div><span class="kbd">T</span> 切换中英文</div>
          </div>
        </div>
      </div>`;
  }

  function daysLeft() {
    const now = new Date();
    const target = new Date(now.getFullYear(), 11, 15); // Dec 15
    if (target < now) target.setFullYear(target.getFullYear() + 1);
    return Math.max(0, Math.ceil((target - now) / 86400000));
  }

  /* ================================================================ QUESTION CARD */
  function qHeader(q, extra) {
    const r = rec(q.id);
    const typeTag = q.type === 'multi' ? '<span class="tag warn">多选</span>' : q.type === 'hotspot' ? '<span class="tag warn">拖拽题</span>' : '';
    return `<div class="qhead">
      <span class="qnum">#${q.id}</span>
      <span class="tag brand">${esc(TOPICS[q.topic] || q.topic)}</span>
      ${typeTag}
      ${r && r.star ? '<span class="tag warn">★ 已收藏</span>' : ''}
      <span class="spacer"></span>
      ${extra || ''}
    </div>`;
  }

  function stemBlock(q) {
    const alt = stemAlt(q);
    return `<div class="stem ${lang() === 'en' ? 'en' : ''}">${esc(stemText(q))}</div>${alt ? `<div class="stem en" style="margin-top:10px;padding-top:10px;border-top:1px dashed var(--line);color:var(--muted);font-size:13.5px">${esc(alt)}</div>` : ''}`;
  }

  function optionHtml(q, o, st) {
    const sel = st.picked && st.picked.indexOf(o.key) >= 0;
    const isRight = q.answer.indexOf(o.key) >= 0;
    let cls = 'opt';
    if (st.revealed) {
      cls += ' locked';
      if (isRight) cls += ' right';
      else if (sel) cls += ' wrong';
      else cls += ' dim';
    } else if (sel) cls += ' sel';
    const alt = optAlt(o);
    return `<button class="${cls}" data-pick="${o.key}" ${st.revealed ? 'disabled' : ''}>
      <span class="key">${o.key}</span>
      <span class="txt">${esc(optText(o))}${alt ? `<span class="en">${esc(alt)}</span>` : ''}</span>
      ${st.revealed && isRight ? `<span style="color:var(--ok);flex:none">${svg('check')}</span>` : ''}
      ${st.revealed && sel && !isRight ? `<span style="color:var(--bad);flex:none">${svg('x')}</span>` : ''}
    </button>`;
  }

  function feedbackHtml(q, ok) {
    const tip = tipText(q);
    const expl = explText(q);
    const alt = explAlt(q);
    const drag = !q.options.length;
    return `<div class="feedback">
      <div class="fb-head ${drag ? 'good' : ok ? 'good' : 'bad'}">${svg(drag ? 'check' : ok ? 'check' : 'x')}
        <span>${drag ? '对照解析记一下' : ok ? '回答正确' : '答错了'}</span>
        <span class="spacer"></span>
        <span style="font-size:12px;font-weight:600;opacity:.85">${drag ? '拖拽题·不计分' : '正确答案 ' + q.answer.join('')}</span>
      </div>
      <div class="fb-body">
        ${tip ? `<div class="tipbox"><span class="lbl">记忆点</span><span>${esc(tip)}</span></div>` : ''}
        ${expl ? `<details class="disc" ${ok || drag ? 'open' : 'open'}><summary>详细解析</summary><div class="expl">${esc(expl)}</div>${alt ? `<div class="expl" style="color:var(--muted);font-size:12.5px;margin-top:8px">${esc(alt)}</div>` : ''}</details>` : ''}
        ${q.keywords && q.keywords.length ? `<div class="row wrap" style="gap:6px">${q.keywords.map((k) => `<span class="tag">${esc(k)}</span>`).join('')}</div>` : ''}
      </div>
    </div>`;
  }

  /* ================================================================ PRACTICE */
  function ensureSession(mode, kind, opt) {
    if (S.session && S.session.mode === mode && S.session.kind === kind && (!opt || !opt.force)) return;
    const ids = buildQueue(kind, opt || {});
    S.session = { mode, kind, ids, pos: 0, picked: {}, revealed: {}, results: {}, startedAt: Date.now() };
    save(true);
  }

  function viewPractice() {
    const p = S.route.params;
    const wantKind = p.kind || 'all';
    const wantTopic = p.topic || '';
    let ses = S.session;
    if (!ses || ses.mode !== 'practice' || ses.kind !== wantKind || (ses.topic || '') !== wantTopic || p.r) {
      ensureSession('practice', wantKind, { topic: wantTopic, force: true });
      S.session.topic = wantTopic;
      ses = S.session;
      if (p.r) {
        history.replaceState(null, '', '#/practice' + (wantKind !== 'all' ? '?kind=' + wantKind : ''));
        S.route = parseHash();
      }
    }
    if (!ses.ids.length) {
      return emptyState('这里还没有题目', '先去刷几题，或者换个筛选条件。', '<button class="btn primary" data-go="/practice?kind=all&r=1">开始练习</button>');
    }
    if (ses.pos >= ses.ids.length) return practiceSummary();

    const q = S.byId[ses.ids[ses.pos]];
    const picked = ses.picked[q.id] || [];
    const revealed = !!ses.revealed[q.id];
    const st = { picked, revealed };
    const done = Object.keys(ses.results).length;

    const opts = q.options.length
      ? q.options.map((o) => optionHtml(q, o, st)).join('')
      : `<div class="card pad" style="margin-top:14px;background:var(--warn-soft);border-color:color-mix(in srgb,var(--warn) 35%,var(--line))">
          <b style="font-size:13.5px">这是一道拖拽/下拉匹配题</b>
          <p class="sub" style="margin-top:6px;font-size:13px">原题需要在页面上把选项拖到对应位置。这里直接看下面的「记忆点」和「详细解析」记住匹配关系即可。</p>
        </div>`;

    const canSubmit = q.options.length ? picked.length > 0 : true;

    return `
      <div class="row" style="margin-bottom:14px">
        <span class="eyebrow">刷题练习</span>
        <span class="spacer"></span>
        <span class="sub" style="font-size:12.5px">${ses.pos + 1} / ${ses.ids.length}</span>
      </div>
      <div class="progressline" style="margin-bottom:16px"><i style="width:${pct(ses.pos, ses.ids.length)}%"></i></div>

      <div class="card pad">
        ${qHeader(q, `<button class="icon-btn" data-act="star" title="收藏 (S)">${svg('star')}</button>
                      <button class="icon-btn" data-act="lang" title="切换语言 (T)">${svg('globe')}</button>`)}
        ${stemBlock(q)}
        <div class="opts">${opts}</div>
        ${revealed ? feedbackHtml(q, ses.results[q.id]) : ''}
      </div>

      <div class="qfoot">
        <button class="btn ghost sm" data-act="prev" ${ses.pos === 0 ? 'disabled' : ''}>${svg('left')} 上一题</button>
        <span class="spacer"></span>
        ${!revealed
          ? `<button class="btn primary" data-act="submit" ${canSubmit ? '' : 'disabled'}>${q.type === 'multi' ? '确认答案' : '查看答案'}</button>`
          : `<button class="btn primary" data-act="next">${ses.pos + 1 >= ses.ids.length ? '完成练习' : '下一题'} ${svg('right')}</button>`}
      </div>
      <p class="sub" style="text-align:center;font-size:11.5px;margin-top:4px">已作答 ${done} 题 · 正确 ${Object.values(ses.results).filter(Boolean).length} 题</p>`;
  }

  function practiceSummary() {
    const ses = S.session;
    const total = Object.keys(ses.results).length;
    const ok = Object.values(ses.results).filter(Boolean).length;
    const wrongIds = Object.entries(ses.results).filter(([, v]) => !v).map(([k]) => Number(k));
    const mins = Math.max(1, Math.round((Date.now() - ses.startedAt) / 60000));
    return `
      <div class="card pad" style="text-align:center;padding:34px 22px">
        <div style="font-size:44px;line-height:1">${ok / Math.max(1, total) >= 0.8 ? '🎉' : ok / Math.max(1, total) >= 0.5 ? '💪' : '📚'}</div>
        <h1 style="margin-top:12px">练习完成</h1>
        <p class="sub">用时 ${mins} 分钟 · 共 ${total} 题</p>
        <div class="kpis" style="margin-top:20px;text-align:left">
          <div class="kpi"><b style="color:var(--ok)">${ok}</b><span>答对</span></div>
          <div class="kpi"><b style="color:var(--bad)">${total - ok}</b><span>答错</span></div>
          <div class="kpi"><b>${pct(ok, total)}%</b><span>正确率</span></div>
        </div>
        <div class="row" style="justify-content:center;margin-top:22px;flex-wrap:wrap">
          ${wrongIds.length ? `<button class="btn primary" data-act="redo-wrong">只重做错题 (${wrongIds.length})</button>` : ''}
          <button class="btn" data-act="restart">再来一组</button>
          <button class="btn ghost" data-go="/home">回首页</button>
        </div>
      </div>
      ${wrongIds.length ? `<div class="stack" style="margin-top:16px">
        <h2>本次错题</h2>
        ${wrongIds.map((id) => qListItem(S.byId[id])).join('')}
      </div>` : ''}`;
  }

  /* ================================================================ RAPID (速记) */
  function viewRapid() {
    const p = S.route.params;
    if (!S.session || S.session.mode !== 'rapid') {
      ensureSession('rapid', p.kind || 'all', { topic: p.topic, force: true });
    }
    const ses = S.session;
    if (!ses.ids.length) return emptyState('没有题目', '换个筛选条件试试。', '<button class="btn primary" data-go="/practice?kind=all&r=1">去刷题</button>');
    if (ses.pos >= ses.ids.length) {
      return `<div class="card pad" style="text-align:center;padding:34px">
        <div style="font-size:44px">✨</div><h1 style="margin-top:12px">这一轮速记完成</h1>
        <p class="sub">共 ${ses.ids.length} 题</p>
        <div class="row" style="justify-content:center;margin-top:20px"><button class="btn primary" data-act="restart">再来一轮</button><button class="btn ghost" data-go="/home">回首页</button></div>
      </div>`;
    }
    const q = S.byId[ses.ids[ses.pos]];
    const show = !!ses.revealed[q.id];
    return `
      <div class="row" style="margin-bottom:14px">
        <span class="eyebrow">速记模式 · 题目与答案同屏</span>
        <span class="spacer"></span>
        <span class="sub" style="font-size:12.5px">${ses.pos + 1} / ${ses.ids.length}</span>
      </div>
      <div class="progressline" style="margin-bottom:16px"><i style="width:${pct(ses.pos, ses.ids.length)}%"></i></div>
      <div class="card pad">
        ${qHeader(q, `<button class="icon-btn" data-act="star">${svg('star')}</button><button class="icon-btn" data-act="lang">${svg('globe')}</button>`)}
        ${stemBlock(q)}
        ${q.options.length ? `<div class="opts">${q.options.map((o) => {
          const right = q.answer.indexOf(o.key) >= 0;
          return `<div class="opt ${right ? 'right' : 'locked dim'}" style="cursor:default">
            <span class="key">${o.key}</span><span class="txt">${esc(optText(o))}${optAlt(o) ? `<span class="en">${esc(optAlt(o))}</span>` : ''}</span>
            ${right ? `<span style="color:var(--ok);flex:none">${svg('check')}</span>` : ''}
          </div>`;
        }).join('')}</div>` : ''}
        <div class="answerbox" style="margin-top:14px"><div class="lbl">正确答案</div><div class="val">${q.answer.join('') || '见解析'}</div></div>
        ${tipText(q) ? `<div class="tipbox" style="margin-top:12px"><span class="lbl">记忆点</span><span>${esc(tipText(q))}</span></div>` : ''}
        <details class="disc" style="margin-top:12px"><summary>展开完整解析</summary><div class="expl">${esc(explText(q))}</div></details>
      </div>
      <div class="qfoot">
        <button class="btn ghost sm" data-act="prev" ${ses.pos === 0 ? 'disabled' : ''}>${svg('left')} 上一题</button>
        <span class="spacer"></span>
        <button class="btn" data-act="star">收藏</button>
        <button class="btn primary" data-act="next">${ses.pos + 1 >= ses.ids.length ? '完成' : '下一个'} ${svg('right')}</button>
      </div>
      <p class="sub" style="text-align:center;font-size:11.5px">空格键或 → 下一个 · ← 上一个 · S 收藏</p>`;
  }

  /* ================================================================ CARDS */
  function viewCards() {
    const p = S.route.params;
    if (!S.session || S.session.mode !== 'cards') {
      ensureSession('cards', p.kind || 'due', { force: true });
      if (!S.session.ids.length) ensureSession('cards', 'all', { force: true });
    }
    const ses = S.session;
    if (!ses.ids.length) return emptyState('没有卡片', '先刷几题，闪卡会按遗忘曲线安排复习。', '<button class="btn primary" data-go="/practice?kind=all&r=1">去刷题</button>');
    if (ses.pos >= ses.ids.length) {
      return `<div class="card pad" style="text-align:center;padding:34px">
        <div style="font-size:44px">🃏</div><h1 style="margin-top:12px">这一轮卡片翻完了</h1>
        <p class="sub">共 ${ses.ids.length} 张</p>
        <div class="row" style="justify-content:center;margin-top:20px"><button class="btn primary" data-act="restart">再来一轮</button><button class="btn ghost" data-go="/home">回首页</button></div>
      </div>`;
    }
    const q = S.byId[ses.ids[ses.pos]];
    const flipped = !!ses.revealed[q.id];
    return `
      <div class="row" style="margin-bottom:14px">
        <span class="eyebrow">闪卡复习 · 先自己想，再翻面</span>
        <span class="spacer"></span>
        <span class="sub" style="font-size:12.5px">${ses.pos + 1} / ${ses.ids.length}</span>
      </div>
      <div class="progressline" style="margin-bottom:16px"><i style="width:${pct(ses.pos, ses.ids.length)}%"></i></div>
      <div class="fc-stage">
        <div class="fcard" id="fcard">
          ${qHeader(q, `<button class="icon-btn" data-act="star">${svg('star')}</button>`)}
          ${stemBlock(q)}
          ${flipped ? `
            <div class="answerbox"><div class="lbl">正确答案</div><div class="val">${q.answer.join('') || '见解析'}</div>
              ${q.options.length ? `<div style="margin-top:8px;font-size:13.5px;color:var(--text-2)">${q.answer.map((k) => { const o = q.options.find((x) => x.key === k); return o ? esc(optText(o)) : ''; }).filter(Boolean).join('<br>')}</div>` : ''}
            </div>
            ${tipText(q) ? `<div class="tipbox" style="margin-top:12px"><span class="lbl">记忆点</span><span>${esc(tipText(q))}</span></div>` : ''}
            <details class="disc" style="margin-top:12px"><summary>完整解析</summary><div class="expl">${esc(explText(q))}</div></details>
          ` : `<p class="sub" style="margin-top:22px;text-align:center;font-size:13px">先在心里想答案，然后点下面翻面</p>`}
        </div>
      </div>
      <div class="qfoot">
        ${flipped
          ? `<button class="btn block" data-act="rate" data-v="0" style="flex:1;background:var(--bad-soft);color:var(--bad);border-color:transparent">忘了</button>
             <button class="btn block" data-act="rate" data-v="1" style="flex:1;background:var(--warn-soft);color:var(--warn);border-color:transparent">有点难</button>
             <button class="btn block" data-act="rate" data-v="2" style="flex:1;background:var(--ok-soft);color:var(--ok);border-color:transparent">记住了</button>`
          : `<button class="btn primary block" data-act="flip" style="flex:1">翻面看答案 (空格)</button>`}
      </div>`;
  }

  /* ================================================================ EXAM */
  function viewExam() {
    if (S.exam && S.exam.finished) return examResult();
    if (!S.exam) return examSetup();
    return examRunning();
  }

  function examSetup() {
    const st = stats();
    return `
      <h1>模拟考试</h1>
      <p class="sub">按真实考试节奏计时，交卷后统一批改并生成错题分析。</p>
      <div class="card pad" style="margin-top:16px">
        <h2 style="margin-bottom:12px">考试设置</h2>
        <div class="stack">
          <div class="row"><span style="width:88px;font-size:13.5px;color:var(--muted)">题量</span>
            <div class="seg" id="examCount">
              ${[20, 40, 60, 90].map((n) => `<button data-n="${n}" class="${(S.settings.examCount === n) ? 'on' : ''}">${n} 题</button>`).join('')}
            </div>
          </div>
          <div class="row"><span style="width:88px;font-size:13.5px;color:var(--muted)">时限</span>
            <div class="seg" id="examMin">
              ${[15, 30, 45, 90].map((n) => `<button data-m="${n}" class="${(S.settings.examMin === n) ? 'on' : ''}">${n} 分钟</button>`).join('')}
            </div>
          </div>
          <div class="row"><span style="width:88px;font-size:13.5px;color:var(--muted)">范围</span>
            <div class="seg" id="examScope">
              ${[['all', '全部题目'], ['wrong', '只考错题'], ['unseen', '没做过的']].map(([s, label]) => `<button data-s="${s}" class="${(S.settings.examScope || 'all') === s ? 'on' : ''}">${label}</button>`).join('')}
            </div>
          </div>
        </div>
        <button class="btn primary block" style="margin-top:18px;height:44px" data-act="exam-start">开始考试</button>
      </div>
      <div class="card pad" style="margin-top:14px">
        <h2 style="margin-bottom:10px">当前水平</h2>
        <div class="kpis">
          <div class="kpi"><b>${st.seen}</b><span>练过的题</span></div>
          <div class="kpi"><b>${st.acc}%</b><span>历史正确率</span></div>
          <div class="kpi"><b>${st.mastered}</b><span>已掌握</span></div>
        </div>
        <p class="sub" style="margin-top:12px;font-size:12.5px">真实考试 65 题 / 90 分钟，及格线 700/1000。建议稳定在 80% 以上再去考。</p>
      </div>`;
  }

  function startExam(count, mins, scope) {
    let ids = buildQueue(scope === 'all' ? 'all' : scope === 'wrong' ? 'wrong' : 'unseen', { shuffle: true });
    // drag/drop questions have no clickable options, keep them out of the timed exam
    ids = ids.filter((id) => S.byId[id].options.length > 0);
    if (!ids.length) { toast('这个范围里没有可作答的题目'); return; }
    ids = shuffle(ids).slice(0, Math.min(count, ids.length));
    S.exam = { ids, pos: 0, answers: {}, startedAt: Date.now(), endsAt: Date.now() + mins * 60000, mins, finished: false };
    save(true);
    render();
  }

  function examRunning() {
    const ex = S.exam;
    const q = S.byId[ex.ids[ex.pos]];
    const picked = ex.answers[q.id] || [];
    const opts = q.options.length ? q.options.map((o) => {
      const sel = picked.indexOf(o.key) >= 0;
      return `<button class="opt ${sel ? 'sel' : ''}" data-pick="${o.key}">
        <span class="key">${o.key}</span>
        <span class="txt">${esc(optText(o))}${optAlt(o) ? `<span class="en">${esc(optAlt(o))}</span>` : ''}</span>
      </button>`;
    }).join('') : `<p class="sub">这是一道拖拽题，模拟考试中直接跳过，交卷后看解析。</p>`;

    const answeredCount = Object.keys(ex.answers).filter((k) => (ex.answers[k] || []).length).length;
    return `
      <div class="row" style="margin-bottom:12px">
        <span class="eyebrow">模拟考试</span>
        <span class="spacer"></span>
        <span class="timer" id="timer">--:--</span>
      </div>
      <div class="progressline" style="margin-bottom:16px"><i style="width:${pct(answeredCount, ex.ids.length)}%"></i></div>
      <div class="card pad">
        ${qHeader(q, `<span class="qnum">${ex.pos + 1}/${ex.ids.length}</span>`)}
        ${stemBlock(q)}
        <div class="opts">${opts}</div>
      </div>
      <div class="card pad" style="margin-top:14px">
        <div class="row" style="margin-bottom:10px"><h3>答题卡</h3><span class="spacer"></span><span class="sub" style="font-size:12px">已答 ${answeredCount}/${ex.ids.length}</span></div>
        <div class="sheet">${ex.ids.map((id, i) => {
          const a = ex.answers[id] || [];
          return `<button class="${a.length ? 'done' : ''} ${i === ex.pos ? 'cur' : ''}" data-jump="${i}">${i + 1}</button>`;
        }).join('')}</div>
      </div>
      <div class="qfoot">
        <button class="btn ghost sm" data-act="prev" ${ex.pos === 0 ? 'disabled' : ''}>${svg('left')} 上一题</button>
        <span class="spacer"></span>
        <button class="btn" data-act="exam-submit">交卷</button>
        <button class="btn primary" data-act="next">${ex.pos + 1 >= ex.ids.length ? '最后一题' : '下一题'} ${svg('right')}</button>
      </div>`;
  }

  function examResult() {
    const ex = S.exam;
    let ok = 0, wrong = [], skipped = 0;
    for (const id of ex.ids) {
      const q = S.byId[id];
      // drag/drop questions cannot be answered by clicking - exclude them from scoring
      if (!q.options.length) { skipped++; continue; }
      const a = (ex.answers[id] || []).slice().sort().join('');
      const b = q.answer.slice().sort().join('');
      if (a && a === b) ok++; else wrong.push(id);
    }
    const scored = Math.max(1, ex.ids.length - skipped);
    const score = Math.round((ok / scored) * 1000);
    const pass = score >= 700;
    const mins = Math.max(1, Math.round((Date.now() - ex.startedAt) / 60000));
    return `
      <div class="card pad" style="text-align:center;padding:32px 22px">
        <div style="font-size:44px">${pass ? '🏆' : '📉'}</div>
        <h1 style="margin-top:10px">${score} / 1000</h1>
        <p class="sub">${pass ? '通过线以上，保持住！' : '还没到 700 分，重点看下面的错题。'} · 用时 ${mins} 分钟${skipped ? ` · ${skipped} 道拖拽题已跳过不计分` : ''}</p>
        <div class="kpis" style="margin-top:18px;text-align:left">
          <div class="kpi"><b style="color:var(--ok)">${ok}</b><span>答对</span></div>
          <div class="kpi"><b style="color:var(--bad)">${wrong.length}</b><span>答错</span></div>
          <div class="kpi"><b>${pct(ok, scored)}%</b><span>正确率</span></div>
        </div>
        <div class="row" style="justify-content:center;margin-top:20px;flex-wrap:wrap">
          ${wrong.length ? `<button class="btn primary" data-act="exam-redo-wrong">重做错题 (${wrong.length})</button>` : ''}
          <button class="btn" data-act="exam-reset">再考一次</button>
        </div>
      </div>
      ${wrong.length ? `<div class="stack" style="margin-top:16px"><h2>错题分析</h2>${wrong.map((id) => qListItem(S.byId[id])).join('')}</div>` : ''}`;
  }

  /* ================================================================ BROWSE */
  function viewBrowse() {
    const p = S.route.params;
    const f = { q: p.q || '', topic: p.topic || '', status: p.status || '' };
    let list = S.qs;
    if (f.topic) list = list.filter((q) => q.topic === f.topic);
    if (f.status === 'wrong') list = list.filter((q) => { const r = rec(q.id); return r && r.w > 0; });
    if (f.status === 'star') list = list.filter((q) => rec(q.id) && rec(q.id).star);
    if (f.status === 'unseen') list = list.filter((q) => !rec(q.id));
    if (f.status === 'due') list = list.filter((q) => isDue(q.id));
    if (f.q) {
      const needle = f.q.toLowerCase();
      list = list.filter((q) => {
        const hay = [String(q.id), q.stem.en, q.stem.zh, q.explanation.en, q.explanation.zh, (q.keywords || []).join(' '),
          q.options.map((o) => o.en + ' ' + o.zh).join(' ')].join(' ').toLowerCase();
        return hay.indexOf(needle) >= 0;
      });
    }

    const topicChips = Object.keys(TOPICS).map((k) => {
      const n = S.qs.filter((q) => q.topic === k).length;
      if (!n) return '';
      return `<button class="chip ${f.topic === k ? 'on' : ''}" data-topic="${k}">${esc(TOPICS[k])} ${n}</button>`;
    }).join('');

    return `
      <h1>全部题目 <span class="sub" style="font-size:15px;font-weight:500">${list.length} / ${S.qs.length}</span></h1>
      <div class="search" style="margin-top:14px">
        ${svg('search')}
        <input id="searchInput" placeholder="搜索题干、选项、解析、关键词…" value="${esc(f.q)}">
        ${f.q ? `<button class="icon-btn" data-act="clear-search">${svg('x')}</button>` : ''}
      </div>
      <div class="row wrap" style="margin-top:12px;gap:6px">
        <button class="chip sm ${!f.status ? 'on' : ''}" data-status="">全部</button>
        <button class="chip sm ${f.status === 'unseen' ? 'on' : ''}" data-status="unseen">没做过</button>
        <button class="chip sm ${f.status === 'wrong' ? 'on' : ''}" data-status="wrong">做错过</button>
        <button class="chip sm ${f.status === 'star' ? 'on' : ''}" data-status="star">已收藏</button>
        <button class="chip sm ${f.status === 'due' ? 'on' : ''}" data-status="due">待复习</button>
      </div>
      <div class="row wrap" style="margin-top:8px;gap:6px">
        <button class="chip sm ${!f.topic ? 'on' : ''}" data-topic="">所有模块</button>
        ${topicChips}
      </div>
      <div class="qlist" style="margin-top:14px">
        ${list.length ? list.map((q) => qListItem(q)).join('') : emptyState('没有匹配的题目', '换个关键词试试。', '')}
      </div>`;
  }

  function qListItem(q) {
    const r = rec(q.id);
    const t = stemText(q);
    const short = t.length > 110 ? t.slice(0, 110) + '…' : t;
    return `<button class="qitem" data-q="${q.id}">
      <span class="n">#${q.id}</span>
      <span class="body">
        <span class="t">${esc(short)}</span>
        <span class="m">
          <span class="tag">${esc(TOPICS[q.topic] || q.topic)}</span>
          ${q.type === 'multi' ? '<span class="tag warn">多选</span>' : ''}
          ${q.type === 'hotspot' ? '<span class="tag warn">拖拽</span>' : ''}
          ${r && r.star ? '<span class="tag warn">★</span>' : ''}
          ${r && r.w > 0 ? `<span class="tag bad">错 ${r.w}</span>` : ''}
          ${r && r.box >= 4 ? '<span class="tag ok">已掌握</span>' : ''}
        </span>
      </span>
      ${svg('right')}
    </button>`;
  }

  /* ================================================================ LIST (wrong / star) */
  function viewList(kind) {
    const list = kind === 'wrong'
      ? S.qs.filter((q) => { const r = rec(q.id); return r && r.w > 0; }).sort((a, b) => (rec(b.id).w - rec(a.id).w))
      : S.qs.filter((q) => rec(q.id) && rec(q.id).star);

    const title = kind === 'wrong' ? '错题本' : '收藏夹';
    const sub = kind === 'wrong'
      ? '做错过的题会自动进来，答对 2 次以上会自动移出。'
      : '在题目里按 S 或点星标即可收藏。';

    return `
      <div class="row" style="align-items:flex-start">
        <div style="flex:1"><h1>${title}</h1><p class="sub">${sub}</p></div>
        ${list.length ? `<button class="btn primary sm" data-act="practice-list" data-kind="${kind}">开始复习 (${list.length})</button>` : ''}
      </div>
      <div class="qlist" style="margin-top:16px">
        ${list.length ? list.map((q) => qListItem(q)).join('') : emptyState(kind === 'wrong' ? '错题本是空的' : '还没有收藏', kind === 'wrong' ? '去刷题吧，答错的题会自动收录。' : '看到重点题目点一下星标就行。', `<button class="btn primary" data-go="/practice?kind=all&r=1">去刷题</button>`)}
      </div>`;
  }

  /* ================================================================ DETAIL */
  function viewDetail(id) {
    const q = S.byId[id];
    if (!q) return emptyState('题目不存在', '', '');
    const r = rec(id);
    const nav = `<button class="btn ghost sm" data-act="back">${svg('left')} 返回</button>`;
    return `
      ${nav}
      <div class="card pad" style="margin-top:12px">
        ${qHeader(q, `<button class="icon-btn" data-act="star">${svg('star')}</button>
                      <button class="icon-btn" data-act="lang">${svg('globe')}</button>`)}
        ${stemBlock(q)}
        <div class="opts">${q.options.map((o) => {
          const right = q.answer.indexOf(o.key) >= 0;
          return `<div class="opt locked ${right ? 'right' : 'dim'}">
            <span class="key">${o.key}</span>
            <span class="txt">${esc(optText(o))}${optAlt(o) ? `<span class="en">${esc(optAlt(o))}</span>` : ''}</span>
            ${right ? `<span style="color:var(--ok);flex:none">${svg('check')}</span>` : ''}
          </div>`;
        }).join('')}</div>
        ${q.type === 'hotspot' ? `<div class="card pad" style="margin-top:12px;background:var(--warn-soft)"><b style="font-size:13px">拖拽匹配题</b><p class="sub" style="font-size:12.5px;margin-top:4px">原题需要拖拽/下拉匹配，直接看解析记住对应关系。</p></div>` : ''}
        ${tipText(q) ? `<div class="tipbox" style="margin-top:14px"><span class="lbl">记忆点</span><span>${esc(tipText(q))}</span></div>` : ''}
        <details class="disc" open style="margin-top:12px"><summary>完整解析</summary><div class="expl">${esc(explText(q))}</div></details>
        ${q.keywords && q.keywords.length ? `<div class="row wrap" style="gap:6px;margin-top:12px">${q.keywords.map((k) => `<span class="tag">${esc(k)}</span>`).join('')}</div>` : ''}
      </div>
      ${r ? `<div class="card pad" style="margin-top:12px">
        <h3 style="margin-bottom:10px">这道题的记录</h3>
        <div class="kpis">
          <div class="kpi"><b>${r.c}</b><span>答对次数</span></div>
          <div class="kpi"><b>${r.w}</b><span>答错次数</span></div>
          <div class="kpi"><b>${['新题', '刚学', '1天', '3天', '7天', '16天'][r.box] || '新题'}</b><span>复习间隔</span></div>
        </div>
      </div>` : ''}
      <div class="row" style="margin-top:14px;justify-content:center">
        <button class="btn" data-act="detail-prev" data-id="${id}">上一题</button>
        <button class="btn" data-act="detail-next" data-id="${id}">下一题</button>
      </div>`;
  }

  /* ================================================================ STATS */
  function viewStats() {
    const st = stats();
    const ts = topicStats();
    const days = [];
    const d = new Date();
    for (let i = 29; i >= 0; i--) {
      const dd = new Date(d.getTime() - i * 86400000);
      const k = `${dd.getFullYear()}-${String(dd.getMonth() + 1).padStart(2, '0')}-${String(dd.getDate()).padStart(2, '0')}`;
      days.push({ k, n: (S.daily[k] || {}).n || 0 });
    }
    const maxN = Math.max(1, ...days.map((x) => x.n));
    const lvl = (n) => (n === 0 ? 0 : n < maxN * 0.25 ? 1 : n < maxN * 0.5 ? 2 : n < maxN * 0.8 ? 3 : 4);

    const bars = ts.map((t) => `
      <div class="bar-row" style="grid-template-columns:118px 1fr 56px">
        <span class="name" title="${esc(t.label)}">${esc(t.label)}</span>
        <span class="bar"><i style="width:${t.acc}%;background:${t.acc >= 80 ? 'var(--ok)' : t.acc >= 60 ? 'var(--warn)' : 'var(--bad)'}"></i></span>
        <span class="val">${t.acc}%</span>
      </div>`).join('');

    return `
      <h1>学习统计</h1>
      <p class="sub">数据保存在本机浏览器，换设备不会同步。</p>
      <div class="kpis" style="margin-top:16px">
        <div class="kpi"><b>${st.seen}<span style="font-size:13px;font-weight:600;color:var(--muted)">/${st.total}</span></b><span>已练习</span></div>
        <div class="kpi"><b>${st.acc}%</b><span>正确率</span></div>
        <div class="kpi"><b>${st.mastered}</b><span>已掌握</span></div>
        <div class="kpi"><b>${st.due}</b><span>待复习</span></div>
      </div>

      <div class="card pad" style="margin-top:14px">
        <h2 style="margin-bottom:12px">最近 30 天</h2>
        <div class="heat">${days.map((x) => `<i data-l="${lvl(x.n)}" title="${x.k}：${x.n} 题"></i>`).join('')}</div>
        <p class="sub" style="margin-top:10px;font-size:12px">今天 ${(S.daily[todayKey()] || {}).n || 0} 题 · 30 天共 ${days.reduce((a, b) => a + b.n, 0)} 题</p>
      </div>

      <div class="card pad" style="margin-top:14px">
        <h2 style="margin-bottom:12px">各模块正确率</h2>
        <div class="bars">${bars || '<p class="sub">还没有数据</p>'}</div>
      </div>

      <div class="card pad" style="margin-top:14px">
        <h2 style="margin-bottom:12px">模块进度</h2>
        <div class="bars">${ts.map((t) => `
          <div class="bar-row" style="grid-template-columns:118px 1fr 56px">
            <span class="name" title="${esc(t.label)}">${esc(t.label)}</span>
            <span class="bar"><i style="width:${pct(t.seen, t.total)}%"></i></span>
            <span class="val">${t.seen}/${t.total}</span>
          </div>`).join('')}</div>
      </div>`;
  }

  /* ================================================================ SETTINGS */
  function viewSettings() {
    const theme = S.settings.theme;
    return `
      <h1>设置</h1>
      <div class="card pad" style="margin-top:16px">
        <h2 style="margin-bottom:14px">显示</h2>
        <div class="stack">
          <div class="row"><span style="flex:1;font-size:14px">语言</span>
            <div class="seg" id="setLang">
              <button data-lang="zh" class="${lang() === 'zh' ? 'on' : ''}">中文</button>
              <button data-lang="en" class="${lang() === 'en' ? 'on' : ''}">English</button>
              <button data-lang="both" class="${lang() === 'both' ? 'on' : ''}">中英对照</button>
            </div>
          </div>
          <div class="row"><span style="flex:1;font-size:14px">主题</span>
            <div class="seg" id="setTheme">
              <button data-theme="auto" class="${theme === 'auto' ? 'on' : ''}">跟随系统</button>
              <button data-theme="light" class="${theme === 'light' ? 'on' : ''}">浅色</button>
              <button data-theme="dark" class="${theme === 'dark' ? 'on' : ''}">深色</button>
            </div>
          </div>
        </div>
      </div>

      <div class="card pad" style="margin-top:14px">
        <h2 style="margin-bottom:14px">练习</h2>
        <div class="stack">
          <div class="row"><span style="flex:1;font-size:14px">打乱题目顺序</span>
            <button class="btn sm ${S.settings.shuffle ? 'primary' : ''}" data-act="toggle-shuffle">${S.settings.shuffle ? '已开启' : '已关闭'}</button></div>
          <div class="row"><span style="flex:1;font-size:14px">答对后自动下一题</span>
            <button class="btn sm ${S.settings.autoNext ? 'primary' : ''}" data-act="toggle-autonext">${S.settings.autoNext ? '已开启' : '已关闭'}</button></div>
        </div>
      </div>

      <div class="card pad" style="margin-top:14px">
        <h2 style="margin-bottom:14px">数据</h2>
        <p class="sub" style="font-size:12.5px;margin-bottom:12px">学习记录保存在这台设备的浏览器里。清理浏览器数据会丢失进度。</p>
        <div class="row wrap" style="gap:8px">
          <button class="btn sm" data-act="export">导出学习记录</button>
          <button class="btn sm" data-act="import">导入记录</button>
          <button class="btn sm bad" data-act="reset">清空所有进度</button>
        </div>
        <input type="file" id="importFile" accept="application/json" class="sr">
      </div>

      <div class="card pad" style="margin-top:14px">
        <h2 style="margin-bottom:10px">关于</h2>
        <p class="sub" style="font-size:12.5px;line-height:1.7">
          AIF-C01（AWS Certified AI Practitioner）练习题库，共 ${S.qs.length} 题。<br>
          题目来源于题库 PDF，中文由 AI 翻译，仅供学习参考。<br>
          数据文件：<code style="font-family:var(--mono);font-size:11.5px">data/questions.json</code>
        </p>
      </div>`;
  }

  /* ================================================================ misc views */
  function emptyState(title, sub, btn) {
    return `<div class="empty">
      <div>${svg('book')}</div>
      <h3 style="font-size:15px;color:var(--text);margin:6px 0 4px">${esc(title)}</h3>
      <p style="font-size:13px;margin:0 0 16px">${esc(sub || '')}</p>
      ${btn || ''}
    </div>`;
  }

  /* ================================================================ actions */
  function markAnswer(q, picked) {
    const correct = q.answer.length === picked.length && q.answer.every((k) => picked.indexOf(k) >= 0);
    const r = ensure(q.id);
    r.last = Date.now();
    if (correct) {
      r.c++;
      r.box = Math.min(5, (r.box || 0) + 1);
    } else {
      r.w++;
      r.box = Math.max(0, (r.box || 0) - 1);
    }
    r.due = Date.now() + BOX_MIN[r.box] * 60000;
    bumpDaily(correct);
    save(true);
    return correct;
  }

  function rateCard(q, v) {
    const r = ensure(q.id);
    r.last = Date.now();
    if (v === 0) { r.w++; r.box = Math.max(0, (r.box || 0) - 1); r.due = Date.now() + BOX_MIN[0] * 60000; }
    else if (v === 1) { r.box = Math.max(1, (r.box || 0)); r.due = Date.now() + BOX_MIN[Math.min(5, r.box)] * 60000; }
    else { r.c++; r.box = Math.min(5, (r.box || 0) + 1); r.due = Date.now() + BOX_MIN[r.box] * 60000; }
    bumpDaily(v === 2);
    save(true);
  }

  function pickOption(key) {
    const r = S.route;
    if (r.name === 'practice') {
      const ses = S.session;
      const q = S.byId[ses.ids[ses.pos]];
      if (ses.revealed[q.id]) return;
      if (q.type === 'multi') {
        const cur = ses.picked[q.id] || [];
        const i = cur.indexOf(key);
        if (i >= 0) cur.splice(i, 1); else cur.push(key);
        ses.picked[q.id] = cur.sort();
      } else {
        ses.picked[q.id] = [key];
        // single choice auto-submits
        submitPractice();
        return;
      }
      save(true);
      render();
    } else if (r.name === 'exam') {
      const ex = S.exam;
      const q = S.byId[ex.ids[ex.pos]];
      const cur = ex.answers[q.id] || [];
      if (q.type === 'multi') {
        const i = cur.indexOf(key);
        if (i >= 0) cur.splice(i, 1); else cur.push(key);
        ex.answers[q.id] = cur.sort();
      } else {
        ex.answers[q.id] = [key];
      }
      save(true);
      render();
    }
  }

  function submitPractice() {
    const ses = S.session;
    const q = S.byId[ses.ids[ses.pos]];
    const picked = ses.picked[q.id] || [];
    // drag/drop questions have no clickable options: reveal the answer without scoring
    if (!q.options.length) {
      ses.revealed[q.id] = true;
      save(true);
      render();
      return;
    }
    if (!picked.length) return;
    ses.revealed[q.id] = true;
    ses.results[q.id] = markAnswer(q, picked);
    save(true);
    render();
    if (S.settings.autoNext && ses.results[q.id]) setTimeout(() => { if (S.route.name === 'practice') nextQ(); }, 900);
  }

  function activeSession() {
    if (S.route.name === 'exam' && S.exam && !S.exam.finished) return S.exam;
    return S.session;
  }
  function nextQ() {
    const ses = activeSession();
    if (!ses) return;
    ses.pos++;
    save(true);
    render();
  }
  function prevQ() {
    const ses = activeSession();
    if (!ses || ses.pos === 0) return;
    ses.pos--;
    save(true);
    render();
  }

  function toggleStar() {
    const r = S.route;
    let q = null;
    if (r.name === 'practice' || r.name === 'rapid' || r.name === 'cards') {
      const ses = S.session; if (ses) q = S.byId[ses.ids[ses.pos]];
    } else if (r.name === 'q') q = S.byId[Number(r.arg)];
    if (!q) return;
    const p = ensure(q.id);
    p.star = p.star ? 0 : 1;
    save(true);
    toast(p.star ? '已收藏' : '已取消收藏');
    render();
  }

  function cycleLang() {
    const order = ['zh', 'en', 'both'];
    S.settings.lang = order[(order.indexOf(S.settings.lang) + 1) % 3];
    save(true);
    renderShell();
  }

  /* ================================================================ events */
  document.addEventListener('click', (e) => {
    const goEl = e.target.closest('[data-go]');
    if (goEl) { go(goEl.dataset.go); return; }

    const pick = e.target.closest('[data-pick]');
    if (pick && !pick.disabled) { pickOption(pick.dataset.pick); return; }

    const qEl = e.target.closest('[data-q]');
    if (qEl) { go('/q/' + qEl.dataset.q); return; }

    const jump = e.target.closest('[data-jump]');
    if (jump && S.exam) { S.exam.pos = Number(jump.dataset.jump); render(); return; }

    const langBtn = e.target.closest('[data-lang]');
    if (langBtn) {
      S.settings.lang = langBtn.dataset.lang; save(true); renderShell(); return;
    }
    const themeBtn = e.target.closest('button[data-theme]');
    if (themeBtn) {
      S.settings.theme = themeBtn.dataset.theme; applyTheme(); save(true); render(); return;
    }
    const topicChip = e.target.closest('[data-topic]');
    if (topicChip) {
      const p = { ...S.route.params, topic: topicChip.dataset.topic };
      const qs = Object.entries(p).filter(([, v]) => v).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join('&');
      go('/browse' + (qs ? '?' + qs : '')); return;
    }
    const statusChip = e.target.closest('[data-status]');
    if (statusChip) {
      const p = { ...S.route.params, status: statusChip.dataset.status };
      const qs = Object.entries(p).filter(([, v]) => v).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join('&');
      go('/browse' + (qs ? '?' + qs : '')); return;
    }
    const examN = e.target.closest('[data-n]');
    if (examN) { S.settings.examCount = Number(examN.dataset.n); save(true); render(); return; }
    const examM = e.target.closest('[data-m]');
    if (examM) { S.settings.examMin = Number(examM.dataset.m); save(true); render(); return; }
    const examS = e.target.closest('[data-s]');
    if (examS) { S.settings.examScope = examS.dataset.s; save(true); render(); return; }

    const act = e.target.closest('[data-act]');
    if (!act) return;
    const a = act.dataset.act;

    switch (a) {
      case 'lang': cycleLang(); break;
      case 'star': toggleStar(); break;
      case 'submit': submitPractice(); break;
      case 'next': nextQ(); break;
      case 'prev': prevQ(); break;
      case 'flip': {
        const ses = S.session; const q = S.byId[ses.ids[ses.pos]];
        ses.revealed[q.id] = true; save(true); render(); break;
      }
      case 'rate': {
        const ses = S.session; const q = S.byId[ses.ids[ses.pos]];
        rateCard(q, Number(act.dataset.v));
        ses.pos++; save(true); render(); break;
      }
      case 'restart': {
        S.session = null; save(true); render(); break;
      }
      case 'redo-wrong': {
        const ses = S.session;
        const wrongIds = Object.entries(ses.results).filter(([, v]) => !v).map(([k]) => Number(k));
        S.session = { mode: 'practice', kind: 'custom', ids: wrongIds, pos: 0, picked: {}, revealed: {}, results: {}, startedAt: Date.now() };
        save(true); go('/practice?kind=custom'); render(); break;
      }
      case 'practice-list': {
        const kind = act.dataset.kind;
        S.session = { mode: 'practice', kind, ids: buildQueue(kind, { shuffle: true }), pos: 0, picked: {}, revealed: {}, results: {}, startedAt: Date.now() };
        save(true); go('/practice?kind=' + kind); render(); break;
      }
      case 'start-due': {
        S.session = { mode: 'practice', kind: 'due', ids: buildQueue('due', { shuffle: true }), pos: 0, picked: {}, revealed: {}, results: {}, startedAt: Date.now() };
        save(true); go('/practice?kind=due'); render(); break;
      }
      case 'back': history.back(); break;
      case 'detail-prev': go('/q/' + Math.max(1, Number(act.dataset.id) - 1)); break;
      case 'detail-next': go('/q/' + Math.min(S.qs.length, Number(act.dataset.id) + 1)); break;
      case 'toggle-shuffle': S.settings.shuffle = !S.settings.shuffle; save(true); render(); break;
      case 'toggle-autonext': S.settings.autoNext = !S.settings.autoNext; save(true); render(); break;
      case 'toggle-theme': {
        const cur = document.documentElement.dataset.theme;
        S.settings.theme = cur === 'dark' ? 'light' : 'dark';
        applyTheme(); save(true); renderShell(); break;
      }
      case 'clear-search': go('/browse'); break;
      case 'exam-start': {
        startExam(S.settings.examCount, S.settings.examMin, S.settings.examScope || 'all');
        break;
      }
      case 'exam-submit': {
        const ex = S.exam;
        const unanswered = ex.ids.filter((id) => !(ex.answers[id] || []).length).length;
        const finish = () => {
          for (const id of ex.ids) {
            const q = S.byId[id];
            const picked = ex.answers[id] || [];
            if (!picked.length) continue;
            markAnswer(q, picked);
          }
          ex.finished = true; ex.finishedAt = Date.now();
          save(true); render();
        };
        if (unanswered) {
          askConfirm(`还有 ${unanswered} 题没答，确定交卷吗？`, finish);
          break;
        }
        finish(); break;
      }
      case 'exam-reset': S.exam = null; save(true); render(); break;
      case 'exam-redo-wrong': {
        const ex = S.exam;
        const wrongIds = ex.ids.filter((id) => {
          const a = (ex.answers[id] || []).slice().sort().join('');
          const b = S.byId[id].answer.slice().sort().join('');
          return a !== b;
        });
        S.session = { mode: 'practice', kind: 'custom', ids: wrongIds, pos: 0, picked: {}, revealed: {}, results: {}, startedAt: Date.now() };
        save(true); go('/practice?kind=custom'); render(); break;
      }
      case 'export': {
        const blob = new Blob([JSON.stringify({ prog: S.prog, daily: S.daily, settings: S.settings, exportedAt: new Date().toISOString() }, null, 1)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a2 = document.createElement('a');
        a2.href = url; a2.download = `aif-c01-progress-${todayKey()}.json`; a2.click();
        setTimeout(() => URL.revokeObjectURL(url), 2000);
        break;
      }
      case 'import': $('#importFile').click(); break;
      case 'reset': {
        askConfirm('确定要清空所有学习进度吗？这个操作不可撤销。', () => {
          S.prog = {}; S.daily = {}; S.session = null; S.exam = null;
          save(true); toast('已清空'); render();
        });
        break;
      }
      default: break;
    }
  });

  document.addEventListener('input', (e) => {
    if (e.target.id === 'searchInput') {
      const v = e.target.value;
      clearTimeout(window.__st);
      window.__st = setTimeout(() => {
        const p = { ...S.route.params, q: v };
        const qs = Object.entries(p).filter(([, x]) => x).map(([k, x]) => `${k}=${encodeURIComponent(x)}`).join('&');
        history.replaceState(null, '', '#/browse' + (qs ? '?' + qs : ''));
        S.route = parseHash();
        const vw = $('#view');
        if (vw) {
          vw.innerHTML = `<div class="wrap fadein">${viewBrowse()}</div>`;
          const inp = $('#searchInput');
          if (inp) { inp.focus(); inp.setSelectionRange(v, v); }
        }
      }, 180);
    }
  });

  document.addEventListener('change', (e) => {
    if (e.target.id === 'importFile' && e.target.files && e.target.files[0]) {
      const f = e.target.files[0];
      const rd = new FileReader();
      rd.onload = () => {
        try {
          const d = JSON.parse(rd.result);
          if (d.prog) S.prog = d.prog;
          if (d.daily) S.daily = d.daily;
          if (d.settings) S.settings = { ...S.settings, ...d.settings };
          save(true); toast('导入成功'); render();
        } catch (err) { toast('文件格式不对'); }
      };
      rd.readAsText(f);
    }
  });

  document.addEventListener('keydown', (e) => {
    const tag = (e.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea') return;
    const r = S.route.name;

    if (e.key === 't' || e.key === 'T') { cycleLang(); return; }
    if (e.key === 's' || e.key === 'S') { toggleStar(); return; }

    if (/^[1-5]$/.test(e.key)) {
      const idx = Number(e.key) - 1;
      if (r === 'practice' || r === 'exam') {
        const ses = r === 'exam' ? S.exam : S.session;
        if (!ses) return;
        const q = S.byId[ses.ids[ses.pos]];
        const o = q.options[idx];
        if (o) { e.preventDefault(); pickOption(o.key); }
      }
      if (r === 'cards') {
        const ses = S.session; const q = S.byId[ses.ids[ses.pos]];
        if (ses.revealed[q.id]) { rateCard(q, Number(e.key) - 1); ses.pos++; save(true); render(); }
      }
      return;
    }

    if (e.key === ' ' || e.key === 'Spacebar') {
      if (r === 'cards') {
        e.preventDefault();
        const ses = S.session; const q = S.byId[ses.ids[ses.pos]];
        ses.revealed[q.id] = true; save(true); render();
      }
      if (r === 'practice') { e.preventDefault(); if (S.session.revealed[S.byId[S.session.ids[S.session.pos]].id]) nextQ(); }
      return;
    }

    if (e.key === 'Enter') {
      if (r === 'practice') {
        const ses = S.session; const q = S.byId[ses.ids[ses.pos]];
        if (ses.revealed[q.id]) nextQ();
        else submitPractice();
      } else if (r === 'rapid' || r === 'cards') { nextQ(); }
      return;
    }

    if (e.key === 'ArrowRight') { if (r === 'practice' || r === 'rapid' || r === 'cards') nextQ(); }
    if (e.key === 'ArrowLeft') { if (r === 'practice' || r === 'rapid' || r === 'cards') prevQ(); }
  });

  /* ================================================================ theme */
  function applyTheme() {
    const t = S.settings.theme;
    let real = t;
    if (t === 'auto') real = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.documentElement.dataset.theme = real;
  }

  /* ================================================================ exam timer */
  let timerHandle = null;
  function tickExam() {
    if (!S.exam || S.exam.finished) return;
    const el = $('#timer');
    if (!el) return;
    const left = Math.max(0, S.exam.endsAt - Date.now());
    const m = Math.floor(left / 60000);
    const s = Math.floor((left % 60000) / 1000);
    el.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    el.classList.toggle('warn', left < 5 * 60000);
    if (left <= 0) {
      S.exam.finished = true; save(true); render();
    }
  }
  function startTimer() {
    if (timerHandle) clearInterval(timerHandle);
    timerHandle = setInterval(tickExam, 1000);
    tickExam();
  }

  /* ================================================================ router loop */
  function onRoute() {
    S.route = parseHash();
    renderShell();
    if (S.route.name === 'exam') startTimer();
  }

  window.addEventListener('hashchange', onRoute);

  /* ================================================================ boot */
  function boot() {
    load();
    applyTheme();
    if (window.matchMedia) {
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      if (mq.addEventListener) mq.addEventListener('change', () => { if (S.settings.theme === 'auto') { applyTheme(); render(); } });
    }

    const data = window.AIF_QUESTIONS || [];
    S.qs = data;
    S.byId = {};
    data.forEach((q) => { S.byId[q.id] = q; });

    if (!location.hash) location.hash = '#/home';
    onRoute();

    if (!data.length) {
      $('#view').innerHTML = `<div class="wrap"><div class="card pad">题库加载失败，请确认 <code>data/questions.js</code> 存在。</div></div>`;
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
