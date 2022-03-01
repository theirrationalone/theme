const htmlElement = document.documentElement;
const switchBtn = document.getElementById('theme-change-switch');
const themeLabelEl = document.querySelector('label');
const themeIconEl = document.getElementById('theme-icon');
const firstImageEl = document.getElementById('image-1');
const secondImageEl = document.getElementById('image-2');
const thridImageEl = document.getElementById('image-3');

const setAttributesHandler = mode => {
    if (mode === 'dark') {
        firstImageEl.setAttribute('src', './images/undraw_innovative_b409_dark.svg');
        secondImageEl.setAttribute('src', './images/undraw_solution_mindset_-34-bi_light.svg');
        thridImageEl.setAttribute('src', './images/undraw_conceptual_idea_xw7k_dark.svg');
    } else {
        firstImageEl.setAttribute('src', './images/undraw_innovative_b409_light.svg');
        secondImageEl.setAttribute('src', './images/undraw_solution_mindset_-34-bi_dark.svg');
        thridImageEl.setAttribute('src', './images/undraw_conceptual_idea_xw7k_light.svg');
    }
};

const removeAttributesHandler = mode => {
    if (mode === 'dark') {
        firstImageEl.removeAttribute('src', './images/undraw_innovative_b409_light.svg');
        secondImageEl.removeAttribute('src', './images/undraw_solution_mindset_-34-bi_dark.svg');
        thridImageEl.removeAttribute('src', './images/undraw_conceptual_idea_xw7k_light.svg');
    } else {
        firstImageEl.removeAttribute('src', './images/undraw_innovative_b409_dark.svg');
        secondImageEl.removeAttribute('src', './images/undraw_solution_mindset_-34-bi_light.svg');
        thridImageEl.removeAttribute('src', './images/undraw_conceptual_idea_xw7k_dark.svg');
    }
}

const themeChangeHandler = event => {
    if (event.target.checked) {
        htmlElement.setAttribute('data-theme', 'dark');
        themeLabelEl.textContent = 'Light';
        themeIconEl.classList.remove('fa-moon');
        themeIconEl.classList.add('fa-sun');

        removeAttributesHandler('dark');
        setAttributesHandler('dark');

        localStorage.removeItem('mode');
        localStorage.setItem('mode', 'dark');
    } else {
        htmlElement.removeAttribute('data-theme');
        themeLabelEl.textContent = 'Dark';
        themeIconEl.classList.add('fa-moon');
        themeIconEl.classList.remove('fa-sun');

        removeAttributesHandler('light');
        setAttributesHandler('light');

        localStorage.removeItem('mode');
        localStorage.setItem('mode', 'light');
    }
}

switchBtn.addEventListener('change', themeChangeHandler);

if (typeof (localStorage.getItem('mode')) !== 'undefined' && localStorage.getItem('mode') === 'dark') {
    switchBtn.checked = true;
    themeChangeHandler({ target: switchBtn });
} else {
    switchBtn.checked = false;
    themeChangeHandler({ target: switchBtn });
}

htmlElement.removeAttribute('data-theme');
htmlElement.setAttribute('data-theme', localStorage.getItem('mode'));