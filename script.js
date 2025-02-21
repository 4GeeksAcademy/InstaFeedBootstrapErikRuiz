function setGrid(columns) {
    const gallery = document.getElementById("gallery");
    gallery.className = columns === 3 ? "grid-container grid-3" : "grid-container grid-1";
}

function openModal() {
    document.getElementById("postModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("postModal").style.display = "none";
}