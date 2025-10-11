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



const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Buenos Aires Argentina",
        location: "Buenos Aires City, Argentina",
        dedicated: "1986, January, 17",
        area: 30659,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/buenos-aires-argentina-temple/buenos-aires-argentina-temple-4087.jpg"
    },
    {
        templeName: "Cochabamba Bolivia",
        location: "Cochabamba City, Bolivia",
        dedicated: "2000, April, 30",
        area: 35500,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/cochabamba-bolivia-temple/cochabamba-bolivia-temple-13721.jpg"
    },
    {
        templeName: "Durban South Africa",
        location: "Durban South, Africa",
        dedicated: "2000, February, 16",
        area: 19860,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/durban-south-africa-temple/durban-south-africa-temple-7928.jpg"
    },
    // Add more temple objects here...
];
  
createTempleCard(temples);

const nonutahLink = document.querySelector("#nonutah");

nonutahLink.addEventListener("click", () => {
    let nonutah = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) < 1900);
    createTempleCard(nonutah);
});
///////

const newtempleLink = document.querySelector("#newtemple");

newtempleLink.addEventListener("click", () => {
    let newtemple = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) > 2000);
    createTempleCard(newtemple);
});

const largetempleLink = document.querySelector("#largetemple");

largetempleLink.addEventListener("click", () => {
    let largetemple = temples.filter(temple => temple.area < 90000);
    createTempleCard(largetemple);
});

const smalltempleLink = document.querySelector("#smalltemple");

smalltempleLink.addEventListener("click", () => {
    let smalltemple = temples.filter(temple => temple.area < 10000);
    createTempleCard(smalltemple);
});



// these is a shorter form and clear   createTempleCard(temples.filter(temple => !temple.location.includes("Utah")));


function createTempleCard(filteredTemples) {
    document.querySelector(".temple-gallery").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".temple-gallery").appendChild(card);
    });
}

