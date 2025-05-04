// Dark ↔ light theme toggle
const cb = document.getElementById('mode-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
if(prefersDark){document.body.classList.add('dark');cb.checked=true;}

cb.addEventListener('change', () => {
  document.body.classList.toggle('dark');
});
