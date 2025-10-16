
const currentYearSpan = document.querySelector("#current-year");
currentYearSpan.textContent = new Date().getFullYear();

const lastUpdatedP = document.querySelector("#last-updated");
lastUpdatedP.textContent = `Last Updated: ${document.lastModified}`;

// localStorage Logic for Submission Counter

let reviewCount = Number(localStorage.getItem("formSubmissionCount")) || 0;

reviewCount++;

localStorage.setItem("formSubmissionCount", reviewCount);

const countDisplay = document.getElementById("reviewCounter");

if (countDisplay) {
    countDisplay.textContent = reviewCount;
}

//Product Data Array 
const productList = [
    {
        id: "fc-1888",
        name: "Flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "Power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "Time Circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "Low Voltage Reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "Warp Equalizer",
        averagerating: 5.0
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const selectElement = document.getElementById("productSelect");

    productList.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        selectElement.appendChild(option);
    });
});