const strings = {
    en: {
        title: "KuopioHema Project",
        select: "Select tool:",
        catrest: "Cancer Treatment Summary Tool",
        pedkidcal: "Pediatric eGFR Calculator",
        maintenance: "Landing page currently undergoing maintenance, tools are functioning normally!"
    },
    fi: {
        title: "KuopioHema-projekti",
        select: "Valitse työkalu:",
        catrest: "Syöpähoitojen yhteenveto -työkalu",
        pedkidcal: "Lasten eGFR-laskuri",
        maintenance: "Aloitussivu päivitetään juuri, työkalut toimivat normaalisti!"
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

const languageSelect = document.getElementById('language_select');

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
}

function setStrings(language) {
    if (!Object.keys(languages).includes(language))
        language = languages[0];
    const useStrings = strings[language];


    /*const title = document.getElementById('title');
    if (title)
        title.innerText = useStrings.title;

    const select = document.getElementById('select_text');
    if (select)
        select.innerText = useStrings.select;

    links.forEach(link => {
        const linkElement = document.getElementById(link);
        if (!linkElement)
            return;
        linkElement.innerText = strings[language][link];
    });*/
    Object.entries(useStrings).forEach(([key, value]) => {
        const element = document.getElementById(key);

        if (element)
            element.innerText = value;
    });
}

buildLinkList();
buildLanguageSelect();
const initialLanguage = navigator.language || languages[0]
setStrings(initialLanguage);

if (languageSelect) {
    languageSelect.value = initialLanguage;
    languageSelect.addEventListener('change', (e) => setStrings(e.target.value));
}