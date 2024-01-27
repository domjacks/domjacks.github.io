const COOKIE_NAME = 'darkmode';

// Variable to prepare for unchecking the checkbox if the user prefers light mode.
let uncheckBox = false;
function disableDarkMode() {
    console.log('disabling dark mode');
    uncheckBox = true;
    document.documentElement.classList.remove('dark-mode');
    document.documentElement.style.colorScheme = 'light';
    document.cookie = `${COOKIE_NAME}=false; expires=Fri, 31 Dec 9999 23:59:59 GMT;samesite=none;path=/`
}
function enableDarkMode() {
    console.log('enabling dark mode');
    uncheckBox = false;
    document.documentElement.classList.add('dark-mode');
    document.documentElement.style.colorScheme = 'dark';
    document.cookie = `${COOKIE_NAME}=true; expires=Fri, 31 Dec 9999 23:59:59 GMT;samesite=none;path=/`
}

  // If the user has the dark mode cookie, respect the cookie.
  if (document.cookie.split(';').some((item) => item.trim().startsWith(`${COOKIE_NAME}=true`))) {
    enableDarkMode();
    
  // If the user has the light mode cookie, respect the cookie.
  } else if (document.cookie.split(';').some((item) => item.trim().startsWith(`${COOKIE_NAME}=false`))) {
    disableDarkMode();
  // If the user doesn't have the cookie, then check the system preferences. 
} else {
    // If the user prefers dark mode, or doesn't care, enable dark mode.
    if (window.matchMedia && (window.matchMedia('(prefers-color-scheme: dark)').matches || window.matchMedia('(prefers-color-scheme: no-preference)').matches)) {
      enableDarkMode();
      // User prefers light mode via system preferences.
    } else {
      disableDarkMode();
    }
  }

// Gotta wait to do DOM stuff until DOM is ready
addEventListener('DOMContentLoaded', (event) => {
    // window.darkMode is the <input type="checkbox" />
    window.darkMode.addEventListener("click", () => {
        if (window.darkMode.checked) {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    });
    // Make sure the UI reflects the current state.
    if (uncheckBox) {
        window.darkMode.checked = false;
    }
});