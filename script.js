// Пароль для додавання фото (залиште порожнім '', щоб дозволити всім додавати фото)
const PASSWORD = '';

// Базовий масив зображень
const BASE_IMAGES = [
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

// Функція для пошуку існуючого Gist
async function findExistingGist() {
    if (typeof GITHUB_CONFIG === 'undefined' || !GITHUB_CONFIG || !GITHUB_CONFIG.GITHUB_TOKEN) {
        return null;
    }
    
    try {
        // Спочатку перевіряємо localStorage
        const savedGistId = localStorage.getItem('galleryGistId');
        if (savedGistId) {
            const response = await fetch(`https://api.github.com/gists/${savedGistId}`, {
                headers: {
                    'Authorization': `token ${GITHUB_CONFIG.GITHUB_TOKEN}`,
                    'Accept': 'application/vnd.github.v3+json'
                }
            });
            
            if (response.ok) {
                const gist = await response.json();
                if (gist.files && gist.files[GITHUB_CONFIG.GIST_FILENAME]) {
                    return savedGistId;
                }
            }
        }
        
        // Якщо не знайдено, шукаємо серед всіх Gist користувача (включаючи приватні)
        const response = await fetch('https://api.github.com/gists', {
            headers: {
                'Authorization': `token ${GITHUB_CONFIG.GITHUB_TOKEN}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });
        
        if (response.ok) {
            const gists = await response.json();
            // Шукаємо Gist з нашим файлом та описом
            for (const gist of gists) {
                // Перевіряємо за описом та файлом
                if (gist.files && gist.files[GITHUB_CONFIG.GIST_FILENAME] && 
                    (gist.description === 'Галерея фото для сайту Дашеньки' || !gist.description)) {
                    localStorage.setItem('galleryGistId', gist.id);
                    if (GITHUB_CONFIG) {
                        GITHUB_CONFIG.GIST_ID = gist.id;
                    }
                    return gist.id;
                }
            }
        }
    } catch (error) {
        console.error('Помилка пошуку Gist:', error);
    }
    
    return null;
}

// Функція для завантаження зображень з GitHub Gist
async function loadGalleryImages() {
    // Спочатку показуємо базові зображення
    galleryImages = [...BASE_IMAGES];
    updateGallery();
    
    // Завантажуємо з GitHub Gist (якщо налаштовано)
    if (typeof GITHUB_CONFIG !== 'undefined' && GITHUB_CONFIG && GITHUB_CONFIG.GITHUB_TOKEN) {
        try {
            // Отримуємо GIST_ID з localStorage або config
            let gistId = GITHUB_CONFIG.GIST_ID || localStorage.getItem('galleryGistId');
            
            // Якщо GIST_ID не відомий, намагаємося знайти існуючий Gist
            if (!gistId) {
                gistId = await findExistingGist();
            }
            
            if (gistId) {
                const response = await fetch(`https://api.github.com/gists/${gistId}`, {
                    headers: {
                        'Authorization': `token ${GITHUB_CONFIG.GITHUB_TOKEN}`,
                        'Accept': 'application/vnd.github.v3+json'
                    }
                });
                
                if (response.ok) {
                    const gist = await response.json();
                    const content = gist.files[GITHUB_CONFIG.GIST_FILENAME];
                    if (content) {
                        const savedImages = JSON.parse(content.content);
                        if (Array.isArray(savedImages) && savedImages.length > 0) {
                            // Об'єднуємо базові зображення з завантаженими
                            galleryImages = [...BASE_IMAGES, ...savedImages.filter(img => !BASE_IMAGES.includes(img))];
                            // Оновлюємо localStorage для кешування
                            localStorage.setItem('galleryImages', JSON.stringify(savedImages));
                            localStorage.setItem('galleryGistId', gistId);
                            // Оновлюємо config
                            if (GITHUB_CONFIG) {
                                GITHUB_CONFIG.GIST_ID = gistId;
                            }
                            updateGallery();
                            return;
                        }
                    }
                }
            }
        } catch (error) {
            console.error('Помилка завантаження з GitHub:', error);
            // Використовуємо кеш з localStorage якщо є
            const localImages = localStorage.getItem('galleryImages');
            if (localImages) {
                try {
                    const parsed = JSON.parse(localImages);
                    if (Array.isArray(parsed) && parsed.length > 0) {
                        galleryImages = [...BASE_IMAGES, ...parsed.filter(img => !BASE_IMAGES.includes(img))];
                        updateGallery();
                    }
                } catch (e) {
                    console.error('Помилка парсингу localStorage:', e);
                }
            }
        }
    } else {
        // Якщо токен не налаштовано, використовуємо localStorage
        const localImages = localStorage.getItem('galleryImages');
        if (localImages) {
            try {
                const parsed = JSON.parse(localImages);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    galleryImages = [...BASE_IMAGES, ...parsed.filter(img => !BASE_IMAGES.includes(img))];
                    updateGallery();
                }
            } catch (e) {
                console.error('Помилка парсингу localStorage:', e);
            }
        }
    }
}

// Функція для збереження зображень у GitHub Gist
async function saveGalleryImagesToGist(images) {
    if (typeof GITHUB_CONFIG === 'undefined' || !GITHUB_CONFIG || !GITHUB_CONFIG.GITHUB_TOKEN) {
        // Якщо токен не налаштовано, зберігаємо тільки в localStorage
        const uploadedImages = images.filter(img => !BASE_IMAGES.includes(img));
        localStorage.setItem('galleryImages', JSON.stringify(uploadedImages));
        return true;
    }
    
    try {
        // Фільтруємо тільки завантажені зображення (без базових)
        const uploadedImages = images.filter(img => !BASE_IMAGES.includes(img));
        
        const gistData = {
            files: {
                [GITHUB_CONFIG.GIST_FILENAME]: {
                    content: JSON.stringify(uploadedImages, null, 2)
                }
            }
        };
        
        let response;
        // Спочатку намагаємося знайти існуючий Gist, якщо GIST_ID не відомий
        let gistId = GITHUB_CONFIG.GIST_ID || localStorage.getItem('galleryGistId');
        
        if (!gistId) {
            // Шукаємо існуючий Gist
            gistId = await findExistingGist();
        }
        
        if (gistId) {
            // Оновлюємо існуючий Gist
            response = await fetch(`https://api.github.com/gists/${gistId}`, {
                method: 'PATCH',
                headers: {
                    'Authorization': `token ${GITHUB_CONFIG.GITHUB_TOKEN}`,
                    'Accept': 'application/vnd.github.v3+json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(gistData)
            });
        } else {
            // Створюємо новий Gist
            gistData.description = 'Галерея фото для сайту Дашеньки';
            gistData.public = false; // Приватний Gist
            
            response = await fetch('https://api.github.com/gists', {
                method: 'POST',
                headers: {
                    'Authorization': `token ${GITHUB_CONFIG.GITHUB_TOKEN}`,
                    'Accept': 'application/vnd.github.v3+json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(gistData)
            });
        }
        
        if (response.ok) {
            const gist = await response.json();
            // Зберігаємо ID Gist (оновлюємо навіть якщо вже був)
            GITHUB_CONFIG.GIST_ID = gist.id;
            localStorage.setItem('galleryGistId', gist.id);
            // Оновлюємо config, якщо він глобальний
            if (typeof window !== 'undefined' && window.GITHUB_CONFIG) {
                window.GITHUB_CONFIG.GIST_ID = gist.id;
            }
            // Оновлюємо localStorage
            localStorage.setItem('galleryImages', JSON.stringify(uploadedImages));
            
            // Показуємо GIST_ID в консолі для копіювання
            console.log('✅ GIST_ID створено/оновлено:', gist.id);
            console.log('📋 Скопіюйте цей ID та вставте в config.js в поле GIST_ID для синхронізації на всіх пристроях');
            
            return true;
        } else {
            const error = await response.json();
            console.error('Помилка збереження в GitHub:', error);
            // Fallback до localStorage
            localStorage.setItem('galleryImages', JSON.stringify(uploadedImages));
            return false;
        }
    } catch (error) {
        console.error('Помилка збереження:', error);
        // Fallback до localStorage
        const uploadedImages = images.filter(img => !BASE_IMAGES.includes(img));
        localStorage.setItem('galleryImages', JSON.stringify(uploadedImages));
        return false;
    }
}

let galleryImages = [];

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
loadGalleryImages().then(() => {
    updateGallery();
});

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
    // Якщо пароль не встановлено, відкриваємо модальне вікно завантаження одразу
    if (!PASSWORD || PASSWORD === '') {
        openUploadModal();
        return;
    }
    
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
    
    // Показуємо індикатор завантаження
    uploadSubmitBtn.disabled = true;
    uploadSubmitBtn.textContent = 'Завантаження...';
    
    const uploadPromises = [];
    
    files.forEach((file) => {
        if (file.type.startsWith('image/')) {
            const promise = new Promise((resolve) => {
                const reader = new FileReader();
                reader.onload = (event) => {
                    // Додаємо фото до масиву
                    galleryImages.push(event.target.result);
                    resolve();
                };
                reader.readAsDataURL(file);
            });
            uploadPromises.push(promise);
        }
    });
    
    // Чекаємо, поки всі фото завантажаться
    Promise.all(uploadPromises).then(async () => {
        // Зберігаємо в GitHub Gist (або localStorage якщо не налаштовано)
        const saved = await saveGalleryImagesToGist(galleryImages);
        
        // Оновлюємо галерею
        updateGallery();
        
        // Закриваємо модальне вікно
        closeUploadModal();
        
        // Показуємо повідомлення
        const message = saved 
            ? `Успішно додано ${files.length} фото! Вони тепер доступні всім користувачам.`
            : `Успішно додано ${files.length} фото! (Збережено локально - налаштуйте GitHub токен для синхронізації)`;
        setTimeout(() => {
            alert(message);
        }, 100);
        
        // Відновлюємо кнопку
        uploadSubmitBtn.disabled = false;
        uploadSubmitBtn.textContent = 'Завантажити фото';
        
        // Скидаємо авторизацію після завантаження
        isAuthenticated = false;
    });
});
