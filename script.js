/* ────────────────────────────────────────────────────────────────
   script.js  –  light ↔ dark theme toggle with persistence
   • Default: light
   • Persist setting in localStorage  ("theme" = "light" | "dark")
   • Works on every page as long as the navbar contains
     <input type="checkbox" id="mode-toggle">
   ──────────────────────────────────────────────────────────────── */
   (function () {
    // Grab the checkbox in the navbar
    const checkbox = document.getElementById('mode-toggle');
    if (!checkbox) return;               // safety guard
  
    /* --- 1. Apply saved preference on page load ----------------- */
    const saved = localStorage.getItem('theme');   // "light" | "dark" | null
    if (saved === 'dark') {
      document.body.classList.add('dark');
      checkbox.checked = true;
    } else {
      // (No need to add "light" class; absence of "dark" means light)
      checkbox.checked = false;
    }
  
    /* --- 2. Flip theme & store preference when user toggles ----- */
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    });
  })();
  