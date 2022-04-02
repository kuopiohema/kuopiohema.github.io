const i18n = {
    en: {
        title: "KuopioHema Project",
        aboutTitle: "About the project",
        aboutText: "The KuopioHema project is a collection of helper apps intended for use in pediatrics, especially pediatric haematology and oncology.",
        browsersTitle: "Browser support",
        browsersText: "Apps support all common modern browsers (Edge, Firefox, Chrome, Safari). Internet Explorer and old versions of other browsers are not supported.",
        securityTitle: "Data security",
        securityText: "All apps on this site run entirely on the user's machine, using the browser's JavaScript engine. No user-entered data is transmitted to the server.",
        linksTitle: "Select tool:",
        catrest: "Cancer Treatment Summary Tool",
        pedkidcal: "Pediatric eGFR Calculator",
        maintenance: "Landing page currently undergoing maintenance, tools are functioning normally!",
        license: "License",
        copyright: "KuopioHema project and all included apps ©2018-2022 S. Becker"
    },
    fi: {
        title: "KuopioHema-projekti",
        aboutTitle: "Tietoa projektista",
        aboutText: "KuopioHema-projekti on kokoelma lastentautien, erityisesti lastenhematologian ja -onkologian apusovelluksia.",
        browsersTitle: "Selaintuki",
        browsersText: "Sovellukset toimivat kaikilla yleisillä moderneilla selaimilla (Edge, Firefox, Chrome, Safari). Internet Explorer -selainta ja muiden selainten vanhoja versioita ei tueta.",
        securityTitle: "Tietoturva",
        securityText: "Kaikki tämän sivuston sovellukset toimivat kokonaan käyttäjän omalla koneella, käyttäen selaimen JavaScript-moottoria. Mitään käyttäjän syöttämiä tietoja ei välitetä palvelimelle.",
        linksTitle: "Valitse työkalu:",
        catrest: "Syöpähoitojen yhteenveto -työkalu",
        pedkidcal: "Lasten eGFR-laskuri",
        maintenance: "Aloitussivu päivitetään juuri, työkalut toimivat normaalisti!",
        license: "Lisenssi",
        copyright: "KuopioHema-projekti ja kaikki siihen kuuluvat sovellukset ©2018-2022 S. Becker"
    }
};

const links = [
    'catrest',
    'pedkidcal'
];

const languages = {
    en: 'English',
    fi: 'Suomi'
};

const initialLanguage = navigator.language.slice(0, 2) || languages[0];

const languageSelect = document.getElementById('languageSelect');

function buildLinkList() {
    const list = document.getElementById('links');
    if (!list)
        return;
    links.forEach(link => {
        const listItem = document.createElement('li');
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', `./${link}`);
        linkElement.setAttribute('id', link);
        listItem.appendChild(linkElement);
        list.appendChild(listItem);
    });
}

function buildLanguageSelect() {
    if (!languageSelect)
        return;
    Object.entries(languages).forEach(([key, value]) => {
        const optionElement = document.createElement('option');
        optionElement.setAttribute('value', key);
        optionElement.innerText = value;
        languageSelect.appendChild(optionElement);
    });
    languageSelect.value = initialLanguage;
}

function setStrings(language) {
    const i18nStrings = i18n[language];
    Object.entries(i18nStrings).forEach(([key, value]) => {
        const element = document.getElementById(key);

        if (element && typeof(value) === 'string')
            element.innerText = value;
    });
}

buildLinkList();
buildLanguageSelect();
setStrings(initialLanguage);

if (languageSelect) {
    languageSelect.value = initialLanguage;
    languageSelect.addEventListener('change', (e) => setStrings(e.target.value));
}