(() => {
  /* theme toggle */
  const btn = document.getElementById('mode-toggle');
  const KEY = 'theme';
  const icon = d => `<i class="fa-solid fa-${d ? 'sun' : 'moon'}"></i>`;

  if (btn){
    const dark = localStorage.getItem(KEY) === 'dark';
    if (dark) document.body.classList.add('dark');
    btn.innerHTML = icon(dark);
    btn.onclick = () => {
      const d = document.body.classList.toggle('dark');
      localStorage.setItem(KEY, d ? 'dark' : 'light');
      btn.innerHTML = icon(d);
    };
  }

  /* Hamburger → slide drawer */
  const ham   = document.querySelector('.hamburger');
  const menu  = document.querySelector('.nav-links');
  const cover = document.querySelector('.backdrop');

  const closeDrawer = () => {
    menu.classList.remove('open');
    cover.classList.remove('show');
  };

  if (ham && menu && cover){
    ham.onclick = () => {
      menu.classList.toggle('open');
      cover.classList.toggle('show');
    };
    cover.onclick = closeDrawer;
    /* close when a nav link is tapped */
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeDrawer));
  }
})();


  