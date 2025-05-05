(() => {
  const btn = document.getElementById('mode-toggle');
  const KEY = 'theme';

  const icon = dark =>
    `<i class="fa-solid fa-${dark ? 'sun' : 'moon'}"></i>`;

  if (btn){
    const dark = localStorage.getItem(KEY) === 'dark';
    if (dark) document.body.classList.add('dark');
    btn.innerHTML = icon(dark);

    btn.addEventListener('click', () => {
      const nowDark = document.body.classList.toggle('dark');
      localStorage.setItem(KEY, nowDark ? 'dark' : 'light');
      btn.innerHTML = icon(nowDark);
    });
  }

  const ham = document.querySelector('.hamburger');
  const menu = document.querySelector('.nav-links');
  if (ham && menu){
    ham.addEventListener('click', () => menu.classList.toggle('open'));
  }
})();

  