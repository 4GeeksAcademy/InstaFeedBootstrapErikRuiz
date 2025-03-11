function openModal() {
    document.getElementById('postModal').style.display = 'block';
}
function closeModal() {
    document.getElementById('postModal').style.display = 'none';
}
function setGrid(columns) {
    const gallery = document.getElementById('gallery');
    gallery.className = 'grid-container grid-' + columns;
}
window.onclick = function(event) {
    if (event.target == document.getElementById('postModal')) {
        closeModal();
    }
}