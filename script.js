let files = [];

// event listener for file input changes. 
// If an image is appended to the array, it will be displayed at random.
document.getElementById('fileInput').addEventListener('change', (event) => {
    files = Array.from(event.target.files);
    if (files.length > 0) {
        showRandomImage();
    }
});

// event listener for any click.
// if there are remaning files, another image is displayed randomly.
document.addEventListener('click', () => {
    if (files.length > 0) {
        showRandomImage();
    }
})

// selects a random file from the array.
// creates a temporary URL as the source
// displayed files are removed from the array to prevent duplicates.
function showRandomImage() {
    const randomIndex = Math.floor(Math.random() * files.length);
    const file = files[randomIndex];
    const imgUrl = URL.createObjectURL(file);
    document.getElementById('randomImage').src = imgUrl;

    files.splice(randomIndex, 1);
}
