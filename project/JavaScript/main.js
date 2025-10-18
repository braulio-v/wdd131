//
const levels = [
    {
        id: 'A1',
        levelName: "Level A1",
        description: "Beginner: Can understand and use familiar everyday expressions.",
        duration: "Approx. 200 hours",
        imageUrl: "images/a1-main.jpg"
    },
    {
        id: 'A2',
        levelName: "Level A2",
        description: "Elementary: Can understand sentences and frequently used expressions related to areas of most immediate relevance.",
        duration: "Approx. 250 hours",
        imageUrl: "images/a2-main.jpg"
    },
    {
        id: 'B1',
        levelName: "Level B1",
        description: "Intermediate: Can understand the main points of clear standard input on familiar matters regularly encountered in work, school, leisure, etc.",
        duration: "Approx. 400 hours",
        imageUrl: "images/b1-main.jpg"
    },
];

const inquirySubjects = [
    { value: "grammar", text: "Grammar Question" },
    { value: "vocabulary", text: "Vocabulary Feedback" },
    { value: "technical", text: "Technical Issue" },
    { value: "general", text: "General Inquiry" }
];



document.addEventListener("DOMContentLoaded", () => {
    const currentYearSpan = document.getElementById("currentyear");
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }


    const page = window.location.pathname.split('/').pop();

    if (page === 'index.html' || page === '') {
        renderLevelCards(levels);
        setupLevelFilters();
    } else if (page === 'contact.html') {
        setupContactForm();
        populateFormSubjects(inquirySubjects);
        displaySubmissionCount();
    }
});



function renderLevelCards(filteredLevels) {
    const gallery = document.querySelector(".level-gallery");
    if (!gallery) return;

    gallery.innerHTML = ""; 


    filteredLevels.forEach(level => {
        const cardHTML = `
            <section class="level-card">
                <img src="${level.imageUrl}" alt="${level.levelName}" loading="lazy">
                <h3>${level.levelName}</h3>
                <p>${level.description}</p>
                <p class="duration">Duration: ${level.duration}</p>
            </section>
        `;
        gallery.innerHTML += cardHTML;
    });
}


function setupLevelFilters() {
    document.querySelectorAll("#a1level, #a2level, #b1level").forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const filterText = event.target.textContent.split(' ')[0]; 

            
            const filtered = levels.filter(level => level.id === filterText);

            
            if (filtered.length > 0) {
                renderLevelCards(filtered);
                document.querySelector(".section-title").textContent = `${filterText} Level Overview`;
            } else {
                renderLevelCards(levels); 
                document.querySelector(".section-title").textContent = `Levels At a Glance`;
            }
        });
    });

    document.querySelectorAll('a[href="index.html"]').forEach(link => {
        link.addEventListener('click', () => renderLevelCards(levels));
    });
}



function populateFormSubjects(subjects) {
    const select = document.getElementById("subject");
    if (!select) return;

    subjects.forEach(subject => {
        const option = document.createElement("option");
        option.value = subject.value;
        option.textContent = subject.text;
        select.appendChild(option);
    });
}

function displaySubmissionCount() {
    const count = localStorage.getItem('formSubmissions') || 0;
    const countElement = document.getElementById('submission-count');
    if (countElement) {
        countElement.textContent = count;
    }
}

function setupContactForm() {
    const form = document.getElementById("contact-form");
    const feedback = document.getElementById("form-feedback");
    if (!form || !feedback) return;

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 
        let count = Number(localStorage.getItem('formSubmissions')) || 0;
        count++;
        
        localStorage.setItem('formSubmissions', count);

        
        feedback.textContent = `Thank you for your message! Submission #${count} received. We will respond soon.`;
        feedback.style.display = 'block';

        
        displaySubmissionCount();

        
        form.reset();
        setTimeout(() => {
            feedback.style.display = 'none';
        }, 5000);
    });
}


createLevelCard(); 
function createLevelCard(levels) {
    levels.forEach(level => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let duration = document.createElement("p");
        let img = document.createElement("img");


        name.textContent = level.levelName;
        duration.innerHTML = `<span class="label">Duration:</span> ${level.Duration}`;
        img.setAttribute("src", level.imageUrl);
        img.setAttribute("alt", `${level.levelName} level`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(duration);
        card.appendChild(img);


        document.querySelector(".level-gallery").appendChild(card);
    });
}