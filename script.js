// // Dark ↔ light theme toggle
// const cb = document.getElementById('mode-toggle');
// const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
// if(prefersDark){document.body.classList.add('dark');cb.checked=true;}

// cb.addEventListener('change', () => {
//   document.body.classList.toggle('dark');
// });

/* ---------- light ↔ dark theme toggle with persistence ---------- */
const cb = document.getElementById('mode-toggle');

/* 1.  On load → honour the last choice (default = light) */
const saved = localStorage.getItem('theme');
if (saved === 'dark') {
  document.body.classList.add('dark');
  cb.checked = true;
}

/* 2.  When the switch is flipped → update page + storage */
cb.addEventListener('change', () => {
  if (cb.checked) {
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
});
