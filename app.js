'use strict';

// ================================================
// FESTIVAL DATA — Horarios oficiales
// Fuente: infiernofestival.com
// Emparejado por solapamiento máximo entre escenarios
// ================================================

const FESTIVAL = {
  name: 'INFIERNO FEST',
  year: '2026',
  edition: 'V EDICIÓN',
  location: 'SALOBREÑA · GRANADA',
  dates: '26 — 27 JUNIO',
  organizer: 'LA VENDICIÓN',
  web: 'INFIERNOFESTIVAL.COM',

  // Escenarios: Ron Montero Lujuria · Jäger Limbo · Burn Infierno Club
  // Slots emparejados por solapamiento máximo real entre escenarios

  dias: {
    viernes: {
      key: 'viernes',
      label: 'VIERNES',
      date: '26 JUN',
      fullDate: 'Viernes, 26 de Junio de 2026',
      dayNum: '26',
      pills: ['Pxxr Gvng', 'Pablo Chill-E', 'Omega El Fuerte', 'El Junco'],
      slots: [
        {
          time: '17:45',
          artistas: [
            { nombre: 'El Junco',           escenario: 'Ron Montero Lujuria', tag: 'Flamenco' },
            { nombre: 'Royer de Tepito',    escenario: 'Jäger Limbo',         tag: 'Trap' },
            { nombre: 'DJ Lao + Bailarines',escenario: 'Burn Infierno Club',  tag: 'DJ Set' },
          ]
        },
        {
          time: '18:40',
          artistas: [
            { nombre: 'Sinaka',              escenario: 'Ron Montero Lujuria', tag: 'Trap' },
            { nombre: 'Serchito Trambotiko', escenario: 'Jäger Limbo',         tag: 'Perreo' },
            { nombre: 'DJ Lao + Bailarines', escenario: 'Burn Infierno Club',  tag: 'DJ Set' },
          ]
        },
        {
          time: '19:35',
          artistas: [
            { nombre: 'Ronny GTA', escenario: 'Ron Montero Lujuria', tag: 'Latin Trap' },
            { nombre: 'Lampa',     escenario: 'Jäger Limbo',         tag: 'Urban' },
            { nombre: 'DJ Nieto',  escenario: 'Burn Infierno Club',  tag: 'DJ Set' },
          ]
        },
        {
          time: '20:35',
          artistas: [
            { nombre: 'Moncho Chavea', escenario: 'Ron Montero Lujuria', tag: 'Flamenco Urbano' },
            { nombre: 'El Mini',       escenario: 'Jäger Limbo',         tag: 'Trap' },
            { nombre: 'DJ Nieto',      escenario: 'Burn Infierno Club',  tag: 'DJ Set' },
          ]
        },
        {
          time: '21:35',
          artistas: [
            { nombre: 'Pablo Chill-E', escenario: 'Ron Montero Lujuria', tag: 'Trap Latino' },
            { nombre: 'El Mini',       escenario: 'Jäger Limbo',         tag: 'Trap' },
            { nombre: 'Cookinsoul',    escenario: 'Burn Infierno Club',  tag: 'DJ Set' },
          ]
        },
        {
          time: '22:45',
          artistas: [
            { nombre: 'Pxxr Gvng',   escenario: 'Ron Montero Lujuria', tag: 'Trap · Regreso' },
            { nombre: 'QBaoGang',    escenario: 'Jäger Limbo',         tag: 'Trap' },
            { nombre: 'Olivia Babe', escenario: 'Burn Infierno Club',  tag: 'DJ Set' },
          ]
        },
        {
          time: '00:00',
          artistas: [
            { nombre: 'Rosa Pistola',  escenario: 'Ron Montero Lujuria', tag: 'Urban' },
            { nombre: 'Pedro Ladroga', escenario: 'Jäger Limbo',         tag: 'Trap' },
            { nombre: 'Pipo Beatz',    escenario: 'Burn Infierno Club',  tag: 'DJ Set' },
          ]
        },
        {
          time: '00:55',
          artistas: [
            { nombre: 'El Bogueto', escenario: 'Ron Montero Lujuria', tag: 'Trap' },
            { nombre: 'Main Costa', escenario: 'Jäger Limbo',         tag: 'Urban' },
            { nombre: 'Pipo Beatz', escenario: 'Burn Infierno Club',  tag: 'DJ Set' },
          ]
        },
        {
          time: '02:05',
          artistas: [
            { nombre: 'Omega El Fuerte', escenario: 'Ron Montero Lujuria', tag: 'Reggaeton' },
            { nombre: 'La Musa',         escenario: 'Jäger Limbo',         tag: 'Trap' },
            { nombre: '2C Perrea',       escenario: 'Burn Infierno Club',  tag: 'DJ Set' },
          ]
        },
        {
          time: '03:30',
          artistas: [
            { nombre: 'Dany Ome & Kevincito El 13', escenario: 'Ron Montero Lujuria', tag: 'Reggaeton' },
            { nombre: 'Los Hijos de Yayo',          escenario: 'Jäger Limbo',         tag: 'Perreo' },
          ]
        },
        {
          time: '04:30',
          artistas: [
            { nombre: 'Leo RD', escenario: 'Ron Montero Lujuria', tag: 'Reggaeton' },
            { nombre: 'Flexeo', escenario: 'Jäger Limbo',         tag: 'Trap' },
          ]
        },
      ]
    },

    sabado: {
      key: 'sabado',
      label: 'SÁBADO',
      date: '27 JUN',
      fullDate: 'Sábado, 27 de Junio de 2026',
      dayNum: '27',
      pills: ['La Zowi', 'Gucci Mane', 'Neo Pistea', 'Ms Nina'],
      slots: [
        {
          time: '17:45',
          artistas: [
            { nombre: 'Khaled',  escenario: 'Ron Montero Lujuria', tag: 'Trap · La Vendición' },
            { nombre: 'Trapani', escenario: 'Jäger Limbo',         tag: 'Urban' },
            { nombre: 'DJ Yai',  escenario: 'Burn Infierno Club',  tag: 'DJ Set' },
          ]
        },
        {
          time: '18:40',
          artistas: [
            { nombre: 'Raul Clyde',    escenario: 'Ron Montero Lujuria', tag: 'Trap' },
            { nombre: 'Chico Da Tina', escenario: 'Jäger Limbo',         tag: 'Reggaeton' },
            { nombre: 'DJ Yai',        escenario: 'Burn Infierno Club',  tag: 'DJ Set' },
          ]
        },
        {
          time: '19:40',
          artistas: [
            { nombre: 'Ms Nina',      escenario: 'Ron Montero Lujuria', tag: 'Trap · La Vendición' },
            { nombre: 'La Jefatura',  escenario: 'Jäger Limbo',         tag: 'Urban' },
            { nombre: 'DJ Dominik',   escenario: 'Burn Infierno Club',  tag: 'DJ Set' },
          ]
        },
        {
          time: '20:40',
          artistas: [
            { nombre: 'Kaydy Cain', escenario: 'Ron Montero Lujuria', tag: 'Trap' },
            { nombre: 'TK Mami',    escenario: 'Jäger Limbo',         tag: 'Perreo' },
            { nombre: 'DJ Dominik', escenario: 'Burn Infierno Club',  tag: 'DJ Set' },
          ]
        },
        {
          time: '21:40',
          artistas: [
            { nombre: 'Neo Pistea',       escenario: 'Ron Montero Lujuria', tag: 'Trap Argentino' },
            { nombre: 'Uzii Gang',        escenario: 'Jäger Limbo',         tag: 'Trap' },
            { nombre: 'Yung Beef DJ Set', escenario: 'Burn Infierno Club',  tag: 'Trap · La Vendición' },
          ]
        },
        {
          time: '22:55',
          artistas: [
            { nombre: 'La Zowi',         escenario: 'Ron Montero Lujuria', tag: 'Trap · La Vendición' },
            { nombre: 'Marce y Dlomalo', escenario: 'Jäger Limbo',         tag: 'Trap' },
            { nombre: 'Carmen Bumpin',   escenario: 'Burn Infierno Club',  tag: 'DJ Set' },
          ]
        },
        {
          time: '00:20',
          artistas: [
            { nombre: 'Gucci Mane',        escenario: 'Ron Montero Lujuria', tag: 'Trap USA' },
            { nombre: 'Ladiferencia 2006', escenario: 'Jäger Limbo',         tag: 'Urban' },
            { nombre: 'Belze',             escenario: 'Burn Infierno Club',  tag: 'DJ Set' },
          ]
        },
        {
          time: '01:35',
          artistas: [
            { nombre: 'Cecilio G', escenario: 'Ron Montero Lujuria', tag: 'Trap' },
            { nombre: 'Kristina',  escenario: 'Jäger Limbo',         tag: 'Urban' },
            { nombre: 'Belze',     escenario: 'Burn Infierno Club',  tag: 'DJ Set' },
          ]
        },
        {
          time: '02:35',
          artistas: [
            { nombre: 'Bea Pelea',  escenario: 'Ron Montero Lujuria', tag: 'Urban' },
            { nombre: 'DJ Lizz',    escenario: 'Jäger Limbo',         tag: 'DJ Set' },
            { nombre: 'Zora Jones', escenario: 'Burn Infierno Club',  tag: 'DJ Set' },
          ]
        },
        {
          time: '03:30',
          artistas: [
            { nombre: 'Xiyo y Fernandezz', escenario: 'Ron Montero Lujuria', tag: 'Trap' },
            { nombre: 'Ben Yart',          escenario: 'Jäger Limbo',         tag: 'Trap' },
          ]
        },
        {
          time: '04:25',
          artistas: [
            { nombre: 'Glorysixvain', escenario: 'Ron Montero Lujuria', tag: 'Urban' },
            { nombre: 'DJ Karpin',    escenario: 'Jäger Limbo',         tag: 'DJ Set' },
          ]
        },
        {
          time: '05:20',
          artistas: [
            { nombre: 'La Vendicion X Aniversario', escenario: 'Ron Montero Lujuria', tag: 'X Aniversario' },
            { nombre: 'DJ Karpin',                  escenario: 'Jäger Limbo',         tag: 'DJ Set' },
          ]
        },
      ]
    }
  }
};

// ================================================
// STATE
// ================================================

let state = {
  view: 'landing',
  selectedDay: null,
  currentSlot: 0,
  selections: {},
};

function setState(updates) {
  state = { ...state, ...updates };
  render();
}

// ================================================
// ACTIONS
// ================================================

function goToLanding() {
  setState({ view: 'landing' });
}

function goToDaySelect() {
  setState({ view: 'daySelect' });
}

function selectDay(day) {
  setState({ view: 'schedule', selectedDay: day, currentSlot: 0, selections: {} });
}

function selectArtist(time, nombre) {
  setState({ selections: { ...state.selections, [time]: nombre } });
}

function nextSlot() {
  const slots = FESTIVAL.dias[state.selectedDay].slots;
  if (state.currentSlot < slots.length - 1) {
    setState({ currentSlot: state.currentSlot + 1 });
  }
}

function prevSlot() {
  if (state.currentSlot > 0) {
    setState({ currentSlot: state.currentSlot - 1 });
  } else {
    goToDaySelect();
  }
}

function showResult() {
  setState({ view: 'result' });
}

function restartDay() {
  setState({ view: 'schedule', currentSlot: 0, selections: {} });
}

// ================================================
// RENDER
// ================================================

function render() {
  const app = document.getElementById('app');
  switch (state.view) {
    case 'landing':   app.innerHTML = renderLanding();   break;
    case 'daySelect': app.innerHTML = renderDaySelect(); break;
    case 'schedule':  app.innerHTML = renderSchedule();  break;
    case 'result':    app.innerHTML = renderResult();    break;
  }
}

// ---- Landing ----
function renderLanding() {
  return `
    <div class="landing">
      <div class="landing-content">
        <span class="org-label">LA VENDICIÓN PRESENTA · V EDICIÓN</span>
        <h1 class="festival-title">
          <span class="title-infierno">INFIERNO</span>
          <span class="title-fest">FEST</span>
        </h1>
        <div class="year-tag">2026</div>
        <div class="event-meta">
          <span>SALOBREÑA</span>
          <span class="sep">·</span>
          <span>GRANADA</span>
          <span class="sep">·</span>
          <span>26 — 27 JUNIO</span>
        </div>
        <button class="btn-cta" onclick="goToDaySelect()">
          CREA TU CARTEL
          <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
        <div class="sponsors-bar">
          <span>JÄGERMEISTER</span>
          <span>·</span>
          <span>BURN</span>
          <span>·</span>
          <span>RON MONTERO</span>
        </div>
        <div class="prod-credit">prod by ManuelilloElpillo</div>
      </div>
      <div class="fire-floor"></div>
    </div>
  `;
}

// ---- Day Select ----
function renderDaySelect() {
  const days = Object.values(FESTIVAL.dias);
  return `
    <div class="day-select">
      <button class="nav-back" onclick="goToLanding()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        VOLVER
      </button>
      <p class="section-eyebrow">INFIERNO FEST 2026</p>
      <h2 class="section-title">ELIGE TU JORNADA</h2>
      <div class="day-grid">
        ${days.map(d => `
          <button class="day-card" onclick="selectDay('${d.key}')">
            <span class="card-day-num">${d.dayNum || d.date.split(' ')[0]}</span>
            <span class="card-day-name">${d.label}</span>
            <span class="card-day-month">JUNIO 2026</span>
            <div class="card-artist-pills">
              ${d.pills.map(p => `<span>${p}</span>`).join('')}
            </div>
            <span class="card-arrow">→</span>
          </button>
        `).join('')}
      </div>
    </div>
  `;
}

// ---- Schedule ----
function renderSchedule() {
  const dayData  = FESTIVAL.dias[state.selectedDay];
  const slot     = dayData.slots[state.currentSlot];
  const total    = dayData.slots.length;
  const progress = ((state.currentSlot) / total) * 100;
  const picked   = state.selections[slot.time];
  const isLast   = state.currentSlot === total - 1;

  return `
    <div class="schedule">
      <div class="sch-header">
        <div class="sch-top-row">
          <button class="btn-back-sm" onclick="prevSlot()">← ATRÁS</button>
          <span class="sch-day-label">${dayData.label} ${dayData.date}</span>
          <span class="sch-counter">${state.currentSlot + 1} / ${total}</span>
        </div>
        <div class="progress-track">
          <div class="progress-bar" style="width:${progress}%"></div>
        </div>
      </div>

      <div class="slot-area">
        <div class="slot-time-display">${slot.time}</div>
        <p class="slot-prompt">¿A QUIÉN VAS A VER?</p>

        <div class="artist-pick-grid${slot.artistas.length >= 3 ? ' three-cols' : ''}">
          ${slot.artistas.map(a => `
            <button
              class="pick-card ${picked === a.nombre ? 'selected' : ''}"
              onclick="selectArtist('${slot.time}', '${a.nombre}')"
            >
              <div class="pc-stage">${a.escenario}</div>
              <div class="pc-name">${a.nombre}</div>
              <div class="pc-tag">${a.tag}</div>
              <div class="pc-check">
                <svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>
              </div>
            </button>
          `).join('')}
        </div>
      </div>

      <div class="sch-footer">
        <div class="current-selection">
          ${picked
            ? `<span class="sel-label">ELEGIDO:</span><span class="sel-name">${picked}</span>`
            : `<span class="sel-label">ELIGE UN ARTISTA PARA CONTINUAR</span>`
          }
        </div>
        <button
          class="btn-next"
          onclick="${picked ? (isLast ? 'showResult()' : 'nextSlot()') : ''}"
          ${picked ? '' : 'disabled'}
        >
          ${isLast ? 'VER MI CARTEL' : 'SIGUIENTE →'}
        </button>
      </div>
    </div>
  `;
}

// ---- Transitions helpers ----
function timeToMins(t) {
  const [h, m] = t.split(':').map(Number);
  return (h < 12 ? h + 24 : h) * 60 + m;
}

function buildTransitions(dayData) {
  const picked = dayData.slots.filter(s => state.selections[s.time]);
  const out = [];
  for (let i = 0; i < picked.length - 1; i++) {
    const curr = picked[i];
    const next = picked[i + 1];
    const currSel  = state.selections[curr.time];
    const nextSel  = state.selections[next.time];
    const currArt  = curr.artistas.find(a => a.nombre === currSel);
    const nextArt  = next.artistas.find(a => a.nombre === nextSel);
    const gap      = timeToMins(next.time) - timeToMins(curr.time);
    const sameStage = currArt?.escenario === nextArt?.escenario;
    let urgency;
    if (sameStage)       urgency = 'easy';
    else if (gap >= 55)  urgency = 'ok';
    else if (gap >= 30)  urgency = 'warn';
    else                 urgency = 'tight';
    out.push({ curr: currSel, next: nextSel, gap, sameStage, currStage: currArt?.escenario, nextStage: nextArt?.escenario, urgency });
  }
  return out;
}

const URGENCY_LABEL = { easy: 'MISMO ESCENARIO', ok: 'CAMBIO TRANQUILO', warn: 'SAL CON TIEMPO', tight: 'CORRE' };

// ---- Result ----
function renderResult() {
  const dayData = FESTIVAL.dias[state.selectedDay];

  return `
    <div class="result">
      <div class="result-top">
        <div class="result-tag">TU CARTEL OFICIAL</div>
        <h2 class="result-heading">INFIERNO FEST <em>2026</em></h2>
        <p class="result-date">${dayData.label} · ${dayData.date} · SALOBREÑA, GRANADA</p>
      </div>

      <div class="result-scroll">
        <div class="lineup-list">
          ${dayData.slots.map(slot => {
            const sel      = state.selections[slot.time];
            const artista  = slot.artistas.find(a => a.nombre === sel);
            return `
              <div class="lineup-row ${sel ? 'picked' : 'empty'}">
                <span class="lr-time">${slot.time}</span>
                <div class="lr-info">
                  <span class="lr-name">${sel || '—'}</span>
                  ${artista ? `<span class="lr-stage">${artista.escenario.toUpperCase()}</span>` : ''}
                </div>
                <div class="lr-dot"></div>
              </div>
            `;
          }).join('')}
        </div>

        ${(() => {
          const transitions = buildTransitions(dayData);
          if (transitions.length === 0) return '';
          return `
            <div class="transitions-section">
              <div class="trans-header">COORDINACIÓN DE RUTA</div>
              ${transitions.map(t => `
                <div class="trans-row">
                  <div class="trans-acts">${t.curr} → ${t.next}</div>
                  <div class="trans-meta">
                    <span class="trans-badge ${t.urgency}">${URGENCY_LABEL[t.urgency]}</span>
                    <span class="trans-gap ${t.urgency}">${t.gap} MIN</span>
                    <span class="trans-stages">${t.sameStage ? t.currStage : `${t.currStage} → ${t.nextStage}`}</span>
                  </div>
                </div>
              `).join('')}
            </div>
          `;
        })()}
      </div>

      <div class="result-actions">
        <button class="btn-download" onclick="downloadLineup()">
          <svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
          DESCARGAR CARTEL
        </button>
        <button class="btn-ghost" onclick="goToDaySelect()">CAMBIAR JORNADA</button>
        <button class="btn-link" onclick="restartDay()">EMPEZAR DE NUEVO</button>
      </div>

      <div class="result-footer">INFIERNOFESTIVAL.COM · LA VENDICIÓN · 26-27 JUNIO 2026</div>
    </div>
  `;
}

// ================================================
// DOWNLOAD (Canvas)
// ================================================

function downloadLineup() {
  const dayData = FESTIVAL.dias[state.selectedDay];
  const slots   = dayData.slots;
  const W       = 900;
  const ROW_H   = 88;
  const H       = 185 + slots.length * ROW_H + 90;

  const canvas = document.createElement('canvas');
  canvas.width  = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');

  // --- Background ---
  const bg = ctx.createLinearGradient(0, 0, 0, H);
  bg.addColorStop(0,   '#010a01');
  bg.addColorStop(0.5, '#020d02');
  bg.addColorStop(1,   '#010a01');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  // --- Top glow ---
  const topGlow = ctx.createRadialGradient(W/2, H, 0, W/2, H, W * 0.7);
  topGlow.addColorStop(0,   'rgba(0, 200, 50, 0.22)');
  topGlow.addColorStop(0.5, 'rgba(0, 200, 50, 0.06)');
  topGlow.addColorStop(1,   'transparent');
  ctx.fillStyle = topGlow;
  ctx.fillRect(0, 0, W, H);

  // --- Border lines ---
  const lineGrad = (x0, y0, x1, y1) => {
    const g = ctx.createLinearGradient(x0, y0, x1, y1);
    g.addColorStop(0,   'transparent');
    g.addColorStop(0.2, '#00dd00');
    g.addColorStop(0.8, '#39ff14');
    g.addColorStop(1,   'transparent');
    return g;
  };
  ctx.lineWidth = 1.5;
  ctx.strokeStyle = lineGrad(0, 0, W, 0);
  ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(W, 0); ctx.stroke();
  ctx.strokeStyle = lineGrad(0, H, W, H);
  ctx.beginPath(); ctx.moveTo(0, H); ctx.lineTo(W, H); ctx.stroke();
  ctx.strokeStyle = lineGrad(0, 0, 0, H);
  ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(1, 0); ctx.lineTo(1, H); ctx.stroke();
  ctx.strokeStyle = lineGrad(W, 0, W, H);
  ctx.beginPath(); ctx.moveTo(W-1, 0); ctx.lineTo(W-1, H); ctx.stroke();

  // --- Festival name ---
  ctx.textAlign = 'center';
  ctx.shadowBlur  = 28;
  ctx.shadowColor = '#00dd00';
  ctx.fillStyle   = '#00dd00';
  ctx.font        = 'bold 78px Impact, Arial Black, sans-serif';
  ctx.fillText('INFIERNO FEST', W/2, 78);

  ctx.shadowBlur  = 14;
  ctx.shadowColor = '#39ff14';
  ctx.fillStyle   = '#39ff14';
  ctx.font        = 'bold 44px Impact, Arial Black, sans-serif';
  ctx.fillText('2026', W/2, 128);

  // --- Day ---
  ctx.shadowBlur = 0;
  ctx.fillStyle  = '#4a7a4a';
  ctx.font       = 'bold 17px Arial, sans-serif';
  ctx.fillText(dayData.fullDate.toUpperCase(), W/2, 164);

  // --- Divider ---
  const divG = ctx.createLinearGradient(0, 0, W, 0);
  divG.addColorStop(0,    'transparent');
  divG.addColorStop(0.15, 'rgba(0,200,0,0.5)');
  divG.addColorStop(0.5,  'rgba(57,255,20,0.8)');
  divG.addColorStop(0.85, 'rgba(0,200,0,0.5)');
  divG.addColorStop(1,    'transparent');
  ctx.strokeStyle = divG;
  ctx.lineWidth   = 1;
  ctx.beginPath(); ctx.moveTo(30, 180); ctx.lineTo(W-30, 180); ctx.stroke();

  // --- Rows ---
  let y = 188;
  slots.forEach((slot, i) => {
    const sel     = state.selections[slot.time];
    const artista = slot.artistas.find(a => a.nombre === sel);

    // Row bg alternating
    ctx.fillStyle = i % 2 === 0
      ? 'rgba(255,255,255,0.012)'
      : 'rgba(0,0,0,0.08)';
    ctx.fillRect(0, y, W, ROW_H);

    // Fire accent if selected
    if (sel) {
      const rowFire = ctx.createLinearGradient(0, 0, 100, 0);
      rowFire.addColorStop(0, 'rgba(0,220,50,0.25)');
      rowFire.addColorStop(1, 'transparent');
      ctx.fillStyle = rowFire;
      ctx.fillRect(0, y, W, ROW_H);
    }

    // Time
    ctx.textAlign  = 'left';
    ctx.shadowBlur  = 0;
    ctx.fillStyle   = sel ? '#39ff14' : '#1a3020';
    ctx.font        = 'bold 30px Impact, sans-serif';
    ctx.fillText(slot.time, 22, y + 52);

    // Separator
    ctx.strokeStyle = '#1a1a1a';
    ctx.lineWidth   = 1;
    ctx.beginPath();
    ctx.moveTo(112, y + 10);
    ctx.lineTo(112, y + ROW_H - 10);
    ctx.stroke();

    // Artist name
    ctx.fillStyle   = sel ? '#ffffff' : '#0e2010';
    ctx.shadowBlur  = sel ? 6 : 0;
    ctx.shadowColor = '#00dd00';
    ctx.font        = `bold ${sel ? 46 : 36}px Impact, sans-serif`;
    ctx.fillText(sel || '—', 130, y + 55);
    ctx.shadowBlur  = 0;

    // Stage label
    if (artista) {
      ctx.fillStyle = '#39ff14';
      ctx.font      = '14px Arial, sans-serif';
      ctx.fillText(artista.escenario.toUpperCase(), 130, y + 76);
    }

    // Fire dot
    if (sel) {
      ctx.beginPath();
      ctx.arc(W - 28, y + ROW_H/2, 6, 0, Math.PI * 2);
      ctx.fillStyle   = '#00dd00';
      ctx.shadowBlur  = 10;
      ctx.shadowColor = '#00dd00';
      ctx.fill();
      ctx.shadowBlur  = 0;
    }

    // Row divider
    ctx.strokeStyle = '#181818';
    ctx.lineWidth   = 1;
    ctx.beginPath();
    ctx.moveTo(15, y + ROW_H);
    ctx.lineTo(W - 15, y + ROW_H);
    ctx.stroke();

    y += ROW_H;
  });

  // --- Footer ---
  const footY = y + 10;
  const footGrad = ctx.createLinearGradient(0, footY - 10, 0, H);
  footGrad.addColorStop(0, 'transparent');
  footGrad.addColorStop(1, 'rgba(0,200,50,0.12)');
  ctx.fillStyle = footGrad;
  ctx.fillRect(0, footY - 10, W, H - footY + 10);

  ctx.textAlign = 'center';
  ctx.fillStyle = '#39ff14';
  ctx.font      = 'bold 16px Impact, sans-serif';
  ctx.fillText(
    `SALOBREÑA · GRANADA  ·  ${FESTIVAL.web}  ·  LA VENDICIÓN`,
    W/2,
    footY + 40
  );

  // --- Download ---
  const link    = document.createElement('a');
  link.download = `mi-cartel-infierno-fest-2026-${state.selectedDay}.png`;
  link.href     = canvas.toDataURL('image/png', 1.0);
  link.click();
}

// ================================================
// EMBER PARTICLES
// ================================================

function initEmbers() {
  const canvas = document.getElementById('ember-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W = window.innerWidth;
  let H = window.innerHeight;
  canvas.width  = W;
  canvas.height = H;

  window.addEventListener('resize', () => {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width  = W;
    canvas.height = H;
  });

  class Ember {
    constructor(immediate) { this.reset(immediate); }

    reset(immediate) {
      this.x         = Math.random() * W;
      this.y         = immediate ? Math.random() * H : H + 8;
      this.radius    = Math.random() * 2.2 + 0.4;
      this.vy        = Math.random() * 1.4 + 0.3;
      this.vx        = (Math.random() - 0.5) * 0.7;
      this.wobble    = Math.random() * Math.PI * 2;
      this.wobbleSpd = Math.random() * 0.028 + 0.008;
      this.alpha     = Math.random() * 0.75 + 0.25;
      this.decay     = Math.random() * 0.0038 + 0.0015;
      const r        = Math.random();
      this.rgb       = r < 0.45 ? '0,220,50' : r < 0.75 ? '57,255,20' : '127,255,0';
    }

    update() {
      this.y       -= this.vy;
      this.wobble  += this.wobbleSpd;
      this.x       += Math.sin(this.wobble) * 0.55 + this.vx;
      this.alpha   -= this.decay;
      if (this.alpha <= 0 || this.y < -8) this.reset(false);
    }

    draw() {
      ctx.save();
      ctx.globalAlpha  = this.alpha;
      ctx.fillStyle    = `rgb(${this.rgb})`;
      ctx.shadowBlur   = 5;
      ctx.shadowColor  = `rgb(${this.rgb})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  const embers = Array.from({ length: 65 }, () => new Ember(true));

  (function loop() {
    ctx.clearRect(0, 0, W, H);
    embers.forEach(e => { e.update(); e.draw(); });
    requestAnimationFrame(loop);
  })();
}

// ================================================
// INIT
// ================================================

document.addEventListener('DOMContentLoaded', () => {
  initEmbers();
  render();
});
