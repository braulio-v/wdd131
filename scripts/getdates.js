const currentYear = new Date().getFullYear();

document.getElementById("currentyear").textContent = `© ${currentYear} . Braulio Villa . Ecuador`;

const lastModified = document.lastModified;

document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;
