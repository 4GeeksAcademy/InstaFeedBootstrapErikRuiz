function setGrid(columns) {
    const gallery = document.getElementById('galleryContent');
    gallery.className = `row ${columns === 3 ? 'row-cols-md-3' : 'row-cols-1'} g-4`;
    document.querySelectorAll('.col').forEach(col => {
        const cardHead = col.querySelector('.card-head');
        const cardBody = col.querySelector('.card-body');
        const cardContent = col.querySelector('.card-content');
        if (columns === 3) {
            if (cardHead) cardHead.style.display = 'none';
            if (cardBody) cardBody.style.display = 'none';
            if (cardContent) cardContent.style.display = 'none';
        } else {
            if (cardHead) cardHead.style.display = 'block';
            if (cardBody) cardBody.style.display = 'block';
            if (cardContent) cardContent.style.display = 'flex';
        }
    });
}