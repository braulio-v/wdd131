const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Initialize chapters array from localStorage or empty if none exists
let chaptersArray = getChapterList() || [];

// Populate the displayed list on page load
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

// Event listener for adding a new chapter
button.addEventListener('click', () => {
    if (input.value.trim() !== '') {
        displayList(input.value);          // Display new entry
        chaptersArray.push(input.value);   // Add to array
        setChapterList();                  // Update localStorage
        input.value = '';                  // Clear input
        input.focus();                     // Focus back on input
    } else {
        input.focus();
    }
});

// Function to display a chapter in the list
function displayList(item) {
    const li = document.createElement('li');
    li.textContent = item;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete'); // apply CSS rule

    li.append(deleteButton);
    list.append(li);

    // Delete functionality
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);      // Remove from DOM
        deleteChapter(li.textContent); // Remove from array and localStorage
        input.focus();
    });
}

// Save chaptersArray to localStorage
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// Get chaptersArray from localStorage
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// Delete a chapter from array and localStorage
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1); // Remove ❌
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}

