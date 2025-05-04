// ---------- dark ↔ light ----------
const toggle=document.getElementById('mode-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
if(prefersDark) document.body.classList.add('dark');

toggle.addEventListener('click',()=>{
  document.body.classList.toggle('dark');
  // change icon
  toggle.textContent = document.body.classList.contains('dark') ? '🌞' : '🌙';
});
