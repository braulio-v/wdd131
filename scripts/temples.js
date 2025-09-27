const currentYear = new Date().getFullYear();

document.getElementById("currentyear").textContent = `© ${currentYear} . Braulio Villa . Ecuador`;

const lastModified = document.lastModified;

document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;


const mainnav = document.querySelector('.nav-container');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

