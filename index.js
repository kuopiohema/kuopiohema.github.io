const languageMenuButton = document.getElementById('languageMenuButton');
const languageMenu = document.getElementById('languageMenu');
let languageMenuOpen = false;

function setLanguageMenuOpen(open) {
    if (!languageMenu)
        return;
    languageMenuOpen = open;
    languageMenu.style.display = open ? 'block' : 'none';
}

function languageMenuButtonClick() {
    setLanguageMenuOpen(!languageMenuOpen);
}

function bodyClick(event) {
    const clickedLanguageMenu = event.target.closest('#languageMenu') !== null;
    const clickedLanguageMenuButton = event.target.closest('#languageMenuButton') !== null;
    if (languageMenuOpen && !clickedLanguageMenu && !clickedLanguageMenuButton) {
        setLanguageMenuOpen(false);
    }
}

document.body.addEventListener('click', bodyClick);
if (languageMenuButton)
    languageMenuButton.addEventListener('click', languageMenuButtonClick);