(() => {
  /* Theme toggle */
  const modeToggleBtn = document.getElementById('mode-toggle');
  const THEME_KEY = 'theme';
  const sunIcon = '<i class="fa-solid fa-sun"></i>';
  const moonIcon = '<i class="fa-solid fa-moon"></i>';

  if (modeToggleBtn) {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    let currentTheme = localStorage.getItem(THEME_KEY);

    if (currentTheme === null) { // First visit
        currentTheme = prefersDarkScheme.matches ? 'dark' : 'light';
        localStorage.setItem(THEME_KEY, currentTheme);
    }

    const applyTheme = (theme) => {
      if (theme === 'dark') {
        document.body.classList.add('dark');
        modeToggleBtn.innerHTML = sunIcon;
        modeToggleBtn.setAttribute('aria-label', 'Switch to light mode');
      } else {
        document.body.classList.remove('dark');
        modeToggleBtn.innerHTML = moonIcon;
        modeToggleBtn.setAttribute('aria-label', 'Switch to dark mode');
      }
    };

    applyTheme(currentTheme); // Apply stored or preferred theme on load

    modeToggleBtn.onclick = () => {
      const isDark = document.body.classList.toggle('dark');
      localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
      applyTheme(isDark ? 'dark' : 'light'); // Re-apply to update icon and ARIA
    };

    // Listen for OS theme changes
    prefersDarkScheme.addEventListener("change", (event) => {
        const newTheme = event.matches ? "dark" : "light";
        localStorage.setItem(THEME_KEY, newTheme); // Update storage
        applyTheme(newTheme); // Apply the new OS-preferred theme
    });
  }

  /* Hamburger → slide drawer */
  const hamburgerBtn = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-links');
  const backdropOverlay = document.querySelector('.backdrop');

  const closeDrawer = () => {
    if (navMenu && backdropOverlay && hamburgerBtn) {
      navMenu.classList.remove('open');
      // For transform-based hiding/showing:
      // navMenu.style.transform = 'translateX(-100%)';
      backdropOverlay.classList.remove('show');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    }
  };

  const openDrawer = () => {
    if (navMenu && backdropOverlay && hamburgerBtn) {
      navMenu.classList.add('open');
      // For transform-based hiding/showing:
      // navMenu.style.transform = 'translateX(0)';
      backdropOverlay.classList.add('show');
      hamburgerBtn.setAttribute('aria-expanded', 'true');
    }
  };

  if (hamburgerBtn && navMenu && backdropOverlay) {
    hamburgerBtn.onclick = (e) => {
      e.stopPropagation(); 
      const isOpen = navMenu.classList.contains('open');
      if (isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    };
    backdropOverlay.onclick = closeDrawer;

    navMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
        closeDrawer();
    }));

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        closeDrawer();
      }
    });
  }

  /* Dynamic Year in Footer */
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

})();


  