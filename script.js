const galleryImages = [
    'images/IMG_7611.JPG',
    'images/photo_2025-06-14_23-16-25_2.jpg', // ⚠️ краще без пробілів
    'images/photo_2025-06-14_23-16-25.jpg',
    'images/photo_2025-06-14_23-16-28.jpg',
    'images/photo_2025-07-19_19-28-12.jpg',
    'images/photo_2025-07-19_19-28-18.jpg',
    'images/photo_2025-09-12_14-42-22.jpg',
    'images/photo_2025-09-29_14-08-59.jpg',
    'images/photo_2025-10-07_11-21-57.jpg',
    'images/photo_2025-10-07_19-03-44.jpg',
    'images/photo_2025-10-07_19-11-35.jpg',
    'images/photo_2025-11-17_00-38-28.jpg',
    'images/photo_2025-11-28_23-38-26.jpg',
    'images/photo_2025-12-04_19-19-55.jpg',
    'images/photo_2025-12-06_20-10-26.jpg',
    'images/photo_2025-12-06_20-12-09.jpg',
    'images/photo_2025-12-06_20-13-07.jpg',
    'images/photo_2025-12-06_20-16-34.jpg',
    'images/photo_2025-12-06_20-19-39.jpg',
    'images/photo_2025-12-06_20-24-11.jpg',
    'images/photo_2025-12-06_20-24-13.jpg',
    'images/photo_2025-12-06_20-24-16.jpg',
    'images/photo_2025-12-06_20-24-18.jpg',
    'images/photo_2025-12-06_20-24-19.jpg',
    'images/photo_2025-12-06_20-24-22.jpg',
    'images/photo_2025-12-06_20-24-24.jpg',
    'images/photo_2025-12-06_20-24-25.jpg',
    'images/photo_2025-12-06_20-24-27.jpg',
    'images/photo_2025-12-06_20-24-30.jpg',
    'images/photo_2025-12-06_20-24-31.jpg',
    'images/photo_2025-12-06_20-24-35.jpg',
    'images/photo_2025-12-06_20-24-37.jpg',
    'images/photo_2025-12-06_20-24-39.jpg',
    'images/photo_2025-12-06_20-24-44.jpg',
    'images/photo_2025-12-06_20-24-47.jpg',
    'images/photo_2025-12-06_20-24-49.jpg',
    'images/photo_2025-12-06_20-24-55.jpg',
    'images/photo_2025-12-06_20-24-56.jpg',
    'images/photo_2025-12-06_20-25-04.jpg',
    'images/photo_2025-12-06_20-25-06.jpg',
    'images/photo_2025-12-06_20-25-09.jpg',
    'images/photo_2025-12-06_20-25-12.jpg',
    'images/photo_2025-12-06_20-25-14.jpg',
    'images/photo_2025-12-06_20-25-21.jpg',
    'images/photo_2025-12-06_20-25-30.jpg',
    'images/photo_2025-12-06_20-25-32.jpg',
    'images/photo_2025-12-06_20-26-10.jpg',
    'images/photo_2025-12-06_20-37-37.jpg',
    'images/photo_2025-12-06_20-38-32.jpg',
    'images/photo_2025-12-06_20-40-40.jpg',
    'images/photo_2025-12-06_20-40-43.jpg',
    'images/photo_2025-12-06_20-40-50.jpg',
    'images/photo_2025-12-06_20-41-03.jpg',
    'images/photo_2025-12-06_20-44-29.jpg',
    'images/photo_2025-12-06_20-44-30.jpg',
    'images/photo_2025-12-06_20-44-32.jpg',
    'images/photo_2025-12-06_21-02-51.jpg',
    'images/photo_2025-12-06_21-28-10.jpg',
    'images/photo_2025-12-07_21-08-36.jpg',
    'images/photo_2025-12-09_18-04-09.jpg',
    'images/photo_2025-12-09_20-37-30.jpg',
    'images/photo_2025-12-24_21-22-34.jpg',
    'images/photo_2025-12-25_22-26-25.jpg'
];

let currentImageIndex = 0;

// ---------- BUILD GALLERY ----------
function buildGallery() {
    const grid = document.getElementById('gallery-grid');
    if (!grid) return;

    grid.innerHTML = '';

    galleryImages.forEach((src, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';

        const img = document.createElement('img');
        img.src = src;
        img.alt = `Фото ${index + 1}`;
        img.loading = 'lazy';

        img.onerror = () => {
            item.remove(); // ❗ просто видаляємо биті фото
        };

        item.addEventListener('click', () => openModal(index));
        item.appendChild(img);
        grid.appendChild(item);
    });
}

// ---------- MODAL ----------
function openModal(index) {
    currentImageIndex = index;
    const modal = document.getElementById('image-modal');
    const img = document.getElementById('modal-image');
    const caption = document.getElementById('modal-caption');

    if (!modal || !img) return;

    img.src = galleryImages[currentImageIndex];
    caption.textContent = `Фото ${currentImageIndex + 1} з ${galleryImages.length}`;
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('image-modal');
    if (!modal) return;
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    openModal(currentImageIndex);
}

function prevImage() {
    currentImageIndex =
        (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    openModal(currentImageIndex);
}

// ---------- INIT ----------
document.addEventListener('DOMContentLoaded', () => {
    buildGallery();

    document.querySelector('.close-btn')?.addEventListener('click', closeModal);
    document.querySelector('.modal-nav-btn.next')?.addEventListener('click', e => {
        e.stopPropagation();
        nextImage();
    });
    document.querySelector('.modal-nav-btn.prev')?.addEventListener('click', e => {
        e.stopPropagation();
        prevImage();
    });

    document.addEventListener('keydown', e => {
        const modal = document.getElementById('image-modal');
        if (!modal?.classList.contains('show')) return;

        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
    });
});
