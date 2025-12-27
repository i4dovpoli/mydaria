// Пароль для додавання фото
const PASSWORD = '2799';

// Завантаження зображень з localStorage або використання базового масиву
function loadGalleryImages() {
    const savedImages = localStorage.getItem('galleryImages');
    if (savedImages) {
        return JSON.parse(savedImages);
    }
    return [
        'images/IMG_7611.JPG',
        'images/photo_2025-06-14_23-16-25 (2).jpg',
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
        'images/photo_2025-12-09_18-04-09.jpg'
    ];
}

let galleryImages = loadGalleryImages();

// Елементи
const galleryGrid = document.getElementById('gallery-grid');
const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.querySelector('.modal-nav-btn.prev');
const nextBtn = document.querySelector('.modal-nav-btn.next');

let currentIndex = 0;

// Функція для створення елемента галереї
function createGalleryItem(src, index) {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Фото Дашеньки';
    img.loading = 'lazy';
    
    img.onerror = function() {
        item.style.display = 'none';
    };
    
    item.appendChild(img);
    item.addEventListener('click', () => openModal(index));
    
    return item;
}

// Функція для оновлення галереї
function updateGallery() {
    galleryGrid.innerHTML = '';
    galleryImages.forEach((src, index) => {
        const item = createGalleryItem(src, index);
        galleryGrid.appendChild(item);
    });
}

// Ініціалізація галереї
updateGallery();

// Відкрити модалку
function openModal(index) {
    currentIndex = index;
    modalImage.src = galleryImages[currentIndex];
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Закрити модалку зображення
function closeImageModal() {
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

closeBtn.addEventListener('click', closeImageModal);

// Клік поза фото
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeImageModal();
    }
});

// Навігація
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    modalImage.src = galleryImages[currentIndex];
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    modalImage.src = galleryImages[currentIndex];
});

// Клавіатура
document.addEventListener('keydown', (e) => {
    // Модальне вікно зображення
    if (modal.classList.contains('show')) {
        if (e.key === 'Escape') closeImageModal();
        if (e.key === 'ArrowRight') nextBtn.click();
        if (e.key === 'ArrowLeft') prevBtn.click();
        return;
    }
    
    // Модальне вікно пароля
    if (passwordModal.classList.contains('show')) {
        if (e.key === 'Escape') closePasswordModal();
        return;
    }
    
    // Модальне вікно завантаження
    if (uploadModal.classList.contains('show')) {
        if (e.key === 'Escape') closeUploadModal();
        return;
    }
});

// ========== ФУНКЦІОНАЛ ДОДАВАННЯ ФОТО ==========

// Елементи для пароля та завантаження
const passwordModal = document.getElementById('password-modal');
const passwordInput = document.getElementById('password-input');
const passwordError = document.getElementById('password-error');
const passwordSubmit = document.querySelector('.password-submit');
const passwordClose = document.querySelector('.password-close');
const authUploadBtn = document.getElementById('auth-upload-btn');
const uploadModal = document.getElementById('upload-modal');
const uploadInput = document.getElementById('photo-upload-input');
const uploadSubmitBtn = document.getElementById('upload-submit-btn');
const uploadPreview = document.getElementById('upload-preview');
const uploadClose = document.querySelector('.upload-close');

let isAuthenticated = false;

// Відкрити модальне вікно для пароля
authUploadBtn.addEventListener('click', () => {
    if (isAuthenticated) {
        openUploadModal();
    } else {
        passwordModal.classList.add('show');
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            passwordInput.focus();
        }, 100);
    }
});

// Закрити модальне вікно пароля
function closePasswordModal() {
    passwordModal.classList.remove('show');
    passwordInput.value = '';
    passwordError.textContent = '';
    document.body.style.overflow = '';
}

passwordClose.addEventListener('click', closePasswordModal);

// Закрити при кліку поза модальним вікном
passwordModal.addEventListener('click', (e) => {
    if (e.target === passwordModal) {
        closePasswordModal();
    }
});

// Перевірка пароля
passwordSubmit.addEventListener('click', () => {
    const enteredPassword = passwordInput.value.trim();
    
    if (enteredPassword === PASSWORD) {
        isAuthenticated = true;
        closePasswordModal();
        setTimeout(() => {
            openUploadModal();
        }, 200);
    } else {
        passwordError.textContent = 'Невірний пароль! Спробуйте ще раз.';
        passwordInput.value = '';
        passwordInput.focus();
    }
});

// Підтвердження пароля по Enter
passwordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        passwordSubmit.click();
    }
});

// Відкрити модальне вікно завантаження
function openUploadModal() {
    uploadModal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Закрити модальне вікно завантаження
function closeUploadModal() {
    uploadModal.classList.remove('show');
    document.body.style.overflow = '';
    uploadInput.value = '';
    uploadPreview.innerHTML = '';
}

uploadClose.addEventListener('click', closeUploadModal);

// Закрити при кліку поза модальним вікном
uploadModal.addEventListener('click', (e) => {
    if (e.target === uploadModal) {
        closeUploadModal();
    }
});

// Прев'ю завантажених фото
uploadInput.addEventListener('change', (e) => {
    uploadPreview.innerHTML = '';
    const files = Array.from(e.target.files);
    
    files.forEach((file) => {
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const previewItem = document.createElement('div');
                previewItem.className = 'upload-preview-item';
                previewItem.innerHTML = `
                    <img src="${event.target.result}" alt="Прев'ю">
                    <span>${file.name}</span>
                `;
                uploadPreview.appendChild(previewItem);
            };
            reader.readAsDataURL(file);
        }
    });
});

// Завантаження фото
uploadSubmitBtn.addEventListener('click', () => {
    const files = Array.from(uploadInput.files);
    
    if (files.length === 0) {
        alert('Будь ласка, виберіть фото для завантаження!');
        return;
    }
    
    files.forEach((file) => {
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (event) => {
                // Додаємо фото до масиву
                galleryImages.push(event.target.result);
                
                // Зберігаємо в localStorage
                localStorage.setItem('galleryImages', JSON.stringify(galleryImages));
                
                // Оновлюємо галерею
                updateGallery();
            };
            reader.readAsDataURL(file);
        }
    });
    
    // Закриваємо модальне вікно
    closeUploadModal();
    
    // Показуємо повідомлення
    setTimeout(() => {
        alert(`Успішно додано ${files.length} фото!`);
    }, 100);
    
    // Скидаємо авторизацію після завантаження
    isAuthenticated = false;
});
