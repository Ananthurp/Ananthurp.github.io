/* ──────────────────────────────────────────────
   script.js – icon theme button + hamburger
   ───────────────────────────────────────────── */
   (() => {
    /* theme toggle */
    const btn = document.getElementById('mode-toggle');
    const STORAGE_KEY = 'theme';
  
    const setIcon = dark => {
      btn.innerHTML = dark
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';
    };
  
    if (btn){
      const dark = localStorage.getItem(STORAGE_KEY) === 'dark';
      if (dark) document.body.classList.add('dark');
      setIcon(dark);
  
      btn.addEventListener('click', () => {
        const nowDark = document.body.classList.toggle('dark');
        localStorage.setItem(STORAGE_KEY, nowDark ? 'dark' : 'light');
        setIcon(nowDark);
      });
    }
  
    /* hamburger */
    const ham  = document.querySelector('.hamburger');
    const menu = document.querySelector('.nav-links');
    if (ham && menu){
      ham.addEventListener('click', () => menu.classList.toggle('open'));
    }
  })();
  