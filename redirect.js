const preferredLanguage = navigator.language.slice(0, 2) || 'en';
window.location.replace(`./index_${preferredLanguage}.html`);