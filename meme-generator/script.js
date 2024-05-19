const goBtn = document.getElementById('go-btn');
const topTxtInput = document.getElementById('top-text-input');
const btmTxtInput = document.getElementById('btm-text-input');
const imgUrl = document.getElementById('img-input');
const result = document.getElementById('result');
const gallery = document.getElementById('gallery');
const keep = document.getElementById('keep-img');
const discard = document.getElementById('discard-img');


//Functions:
function toggleResult() {
    const resultBox = document.getElementById('result-div');
    resultBox.classList.toggle("hidden");
}

function generateMeme(img, top, btm) {
    if (result.classList.contains("current")) {
        return;
    } else if (!img || !top || !btm) {
        alert("All fields required");
    } else {
        result.classList.add("current");
        result.innerHTML = `
        <div class="new-meme meme" style="background-image: url(${img})">
            <p class="top">${top}</p>
            <p class="btm">${btm}</p>
        </div>`;
        toggleResult();
    } 
}

function reset() {
    result.classList.remove("current");
    result.innerHTML = "";
    topTxtInput.value = "";
    btmTxtInput.value = "";
    imgUrl.value = "";
    toggleResult();
}

function addToGallery() {
    const newMemeDiv = document.querySelector('.new-meme');
    newMemeDiv.classList.replace('new-meme', 'gallery-img');
    gallery.innerHTML += `${newMemeDiv.outerHTML} <button type="button" class="delete"></button>`;
    reset();
}

function deleteFromGallery(e) {
    const imgToDelete = e.target.previousElementSibling;
    imgToDelete.remove();
    e.target.remove();
}

//Event listeners:
keep.addEventListener('click', addToGallery);
discard.addEventListener('click', reset);
goBtn.addEventListener('click', () => {generateMeme(imgUrl.value, topTxtInput.value, btmTxtInput.value)});
document.addEventListener('submit', (e) => {e.preventDefault()});
gallery.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        deleteFromGallery(e);
    }
})
