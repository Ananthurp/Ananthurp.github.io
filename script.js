/* ───────────────────────────────────────────────────────────────
   script.js
   1. Light-mode default  + persistence in localStorage
   2. Hamburger toggle for narrow screens
   ───────────────────────────────────────────────────────────── */
  //  (() => {
  //   /* ---------- Theme toggle ---------- */
  //   const cb = document.getElementById('mode-toggle');
  //   if (cb){
  //     const saved = localStorage.getItem('theme');       // "light" | "dark" | null
  //     if (saved === 'dark'){ document.body.classList.add('dark'); cb.checked = true; }
  
  //     cb.addEventListener('change', () => {
  //       if (cb.checked){
  //         document.body.classList.add('dark');
  //         localStorage.setItem('theme','dark');
  //       } else {
  //         document.body.classList.remove('dark');
  //         localStorage.setItem('theme','light');
  //       }
  //     });
  //   }
  
  //   /* ---------- Hamburger menu ---------- */
  //   const btn  = document.querySelector('.hamburger');
  //   const menu = document.querySelector('.nav-links');
  //   if(btn && menu){
  //     btn.addEventListener('click', () => menu.classList.toggle('open'));
  //   }
  // })();
  

 /* ──────────────────────────────────────────────
   script.js  •  icon-button theme toggle + menu
   ───────────────────────────────────────────── */
(() => {
  /* Theme toggle */
  const btn = document.getElementById('mode-toggle');
  const key = 'theme';
  if (btn){
    const setIcon = dark =>
      btn.innerHTML = dark
        ? '<i class="fa-regular fa-sun"></i>'
        : '<i class="fa-regular fa-moon"></i>';

    const saved = localStorage.getItem(key);
    const dark  = saved === 'dark';
    if (dark) document.body.classList.add('dark');
    setIcon(dark);

    btn.addEventListener('click', () => {
      const nowDark = document.body.classList.toggle('dark');
      localStorage.setItem(key, nowDark ? 'dark' : 'light');
      setIcon(nowDark);
    });
  }

  /* Hamburger menu */
  const ham  = document.querySelector('.hamburger');
  const menu = document.querySelector('.nav-links');
  if (ham && menu){
    ham.addEventListener('click', () => menu.classList.toggle('open'));
  }
})();
