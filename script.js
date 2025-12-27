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
        'images/photo_2025-12-06_20-24-47 (2).jpg',
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
        'images/photo_2025-12-06_20-37-37 (2).jpg',
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
        'images/photo_2025-12-25_22-26-25.jpg',
        // Додаткові фото з папки image
        'image/photo_2025-12-06_20-39-42.jpg',
        'image/photo_2025-12-06_20-37-39.jpg',
        'image/photo_2025-12-06_20-24-33.jpg',
        'image/photo_2025-12-06_20-24-20.jpg',
        'image/photo_2025-12-09_20-37-45.jpg',
        'image/photo_2025-12-09_20-37-34.jpg',
        'image/photo_2025-12-09_20-37-33.jpg',
        'image/photo_2025-12-09_20-37-35.jpg',
        'image/photo_2025-12-09_20-37-34 (2).jpg',
        'image/photo_2025-12-09_20-37-29.jpg',
        'image/photo_2025-12-09_20-34-48.jpg',
        'image/photo_2025-12-09_00-20-34.jpg',
        'image/photo_2025-12-09_20-34-47.jpg',
        'image/photo_2025-12-12_15-45-28.jpg',
        'image/photo_2025-12-12_15-43-56.jpg',
        'image/photo_2025-12-12_15-41-32.jpg',
        'image/photo_2025-12-13_14-02-09.jpg',
        'image/photo_2025-12-13_01-01-25.jpg',
        'image/photo_2025-12-13_00-15-34.jpg',
        'image/photo_2025-12-13_00-07-24.jpg',
        'image/photo_2025-12-13_00-06-23.jpg',
        'image/photo_2025-12-15_22-14-13.jpg',
        'image/photo_2025-12-15_22-12-35.jpg',
        'image/photo_2025-12-22_21-19-01.jpg',
        'image/photo_2025-12-25_20-20-01.jpg',
        'image/photo_2025-12-25_22-26-25 (2).jpg',
        'image/photo_2025-07-19_19-28-40.jpg',
        'image/photo_2025-10-03_00-42-55.jpg',
        'image/photo_2025-10-10_14-33-08.jpg',
        'image/photo_2025-10-17_19-41-44.jpg',
        'image/photo_2025-09-15_12-22-20.jpg',
        'image/photo_2025-11-03_20-36-18.jpg',
        'image/photo_2024-11-15_19-58-08.jpg',
        'image/photo_2024-11-15_20-01-16.jpg'
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

// Функція для завантаження актуального BASE_IMAGES з GitHub
async function loadBaseImagesFromGitHub() {
    if (typeof GITHUB_CONFIG === 'undefined' || !GITHUB_CONFIG || !GITHUB_CONFIG.GITHUB_TOKEN) {
        return BASE_IMAGES;
    }
    
    if (!GITHUB_CONFIG.REPO_OWNER || !GITHUB_CONFIG.REPO_NAME) {
        return BASE_IMAGES;
    }
    
    try {
        const scriptUrl = `https://api.github.com/repos/${GITHUB_CONFIG.REPO_OWNER}/${GITHUB_CONFIG.REPO_NAME}/contents/script.js`;
        const response = await fetch(scriptUrl, {
            headers: {
                'Authorization': `token ${GITHUB_CONFIG.GITHUB_TOKEN}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });
        
        if (response.ok) {
            const fileData = await response.json();
            let content = '';
            try {
                content = decodeURIComponent(escape(atob(fileData.content.replace(/\s/g, ''))));
            } catch (e) {
                content = decodeURIComponent(escape(atob(fileData.content)));
            }
            
            const baseImagesMatch = content.match(/const BASE_IMAGES = \[([\s\S]*?)\];/);
            if (baseImagesMatch) {
                const images = baseImagesMatch[1]
                    .split('\n')
                    .map(line => line.trim())
                    .filter(line => line && !line.startsWith('//'))
                    .map(line => {
                        const match = line.match(/['"]([^'"]+)['"]/);
                        return match ? match[1] : null;
                    })
                    .filter(img => img !== null);
                
                console.log('✅ Завантажено актуальний BASE_IMAGES з GitHub:', images.length, 'фото');
                return images;
            }
        }
    } catch (error) {
        console.error('Помилка завантаження BASE_IMAGES з GitHub:', error);
    }
    
    return BASE_IMAGES;
}

// Функція для завантаження зображень з GitHub Gist
async function loadGalleryImages() {
    // Спочатку завантажуємо актуальний BASE_IMAGES з GitHub (якщо можливо)
    let currentBaseImages = BASE_IMAGES;
    if (typeof GITHUB_CONFIG !== 'undefined' && GITHUB_CONFIG && GITHUB_CONFIG.GITHUB_TOKEN) {
        currentBaseImages = await loadBaseImagesFromGitHub();
    }
    
    // Показуємо базові зображення
    galleryImages = [...currentBaseImages];
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
                            // Об'єднуємо базові зображення з завантаженими (без дублікатів)
                            const allImages = [...new Set([...currentBaseImages, ...savedImages])];
                            galleryImages = allImages;
                            
                            // Оновлюємо localStorage для кешування
                            localStorage.setItem('galleryImages', JSON.stringify(savedImages));
                            localStorage.setItem('galleryGistId', gistId);
                            // Оновлюємо config
                            if (GITHUB_CONFIG) {
                                GITHUB_CONFIG.GIST_ID = gistId;
                            }
                            updateGallery();
                            console.log('✅ Завантажено фото з Gist:', savedImages.length, 'фото');
                            return;
                        }
                    }
                } else {
                    console.error('Помилка завантаження Gist:', response.status, response.statusText);
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
                        const allImages = [...new Set([...currentBaseImages, ...parsed])];
                        galleryImages = allImages;
                        updateGallery();
                        console.log('✅ Використано кеш з localStorage:', parsed.length, 'фото');
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
                    const allImages = [...new Set([...currentBaseImages, ...parsed])];
                    galleryImages = allImages;
                    updateGallery();
                }
            } catch (e) {
                console.error('Помилка парсингу localStorage:', e);
            }
        }
    }
}

// Функція для перевірки прав токену
async function checkTokenPermissions() {
    if (typeof GITHUB_CONFIG === 'undefined' || !GITHUB_CONFIG || !GITHUB_CONFIG.GITHUB_TOKEN) {
        return { hasRepo: false, hasGist: false };
    }
    
    try {
        // Перевіряємо права через спробу отримати інформацію про репозиторій
        if (GITHUB_CONFIG.REPO_OWNER && GITHUB_CONFIG.REPO_NAME) {
            const repoUrl = `https://api.github.com/repos/${GITHUB_CONFIG.REPO_OWNER}/${GITHUB_CONFIG.REPO_NAME}`;
            const repoResponse = await fetch(repoUrl, {
                headers: {
                    'Authorization': `token ${GITHUB_CONFIG.GITHUB_TOKEN}`,
                    'Accept': 'application/vnd.github.v3+json'
                }
            });
            
            // Якщо можемо отримати репозиторій, перевіряємо права на запис
            if (repoResponse.ok) {
                const scriptUrl = `https://api.github.com/repos/${GITHUB_CONFIG.REPO_OWNER}/${GITHUB_CONFIG.REPO_NAME}/contents/script.js`;
                const scriptResponse = await fetch(scriptUrl, {
                    headers: {
                        'Authorization': `token ${GITHUB_CONFIG.GITHUB_TOKEN}`,
                        'Accept': 'application/vnd.github.v3+json'
                    }
                });
                
                return { hasRepo: scriptResponse.ok, hasGist: true };
            }
        }
    } catch (error) {
        console.error('Помилка перевірки прав токену:', error);
    }
    
    return { hasRepo: false, hasGist: true };
}

// Функція для оновлення script.js в GitHub репозиторії
async function updateScriptJsInGitHub(newImages) {
    if (typeof GITHUB_CONFIG === 'undefined' || !GITHUB_CONFIG || !GITHUB_CONFIG.GITHUB_TOKEN) {
        console.log('⚠️ Токен не налаштовано');
        return false;
    }
    
    if (!GITHUB_CONFIG.REPO_OWNER || !GITHUB_CONFIG.REPO_NAME) {
        console.log('⚠️ Налаштування репозиторію не вказано, пропускаємо оновлення script.js');
        return false;
    }
    
    if (newImages.length === 0) {
        console.log('⚠️ Немає нових фото для додавання');
        return false;
    }
    
    try {
        // Отримуємо поточний вміст script.js
        const scriptUrl = `https://api.github.com/repos/${GITHUB_CONFIG.REPO_OWNER}/${GITHUB_CONFIG.REPO_NAME}/contents/script.js`;
        
        const getResponse = await fetch(scriptUrl, {
            headers: {
                'Authorization': `token ${GITHUB_CONFIG.GITHUB_TOKEN}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });
        
        if (!getResponse.ok) {
            const error = await getResponse.json().catch(() => ({}));
            console.error('❌ Не вдалося отримати script.js з GitHub:', getResponse.status, error.message || '');
            console.error('💡 Перевірте, що токен має права "repo" (повний доступ до репозиторію)');
            return false;
        }
        
        const fileData = await getResponse.json();
        
        // Декодуємо base64 контент
        let currentContent = '';
        try {
            // GitHub API повертає контент в base64, але з переносами рядків
            const base64Content = fileData.content.replace(/\n/g, '').replace(/\s/g, '');
            currentContent = decodeURIComponent(escape(atob(base64Content)));
        } catch (e) {
            // Якщо не вдалося, спробуємо без заміни пробілів
            try {
                currentContent = decodeURIComponent(escape(atob(fileData.content)));
            } catch (e2) {
                console.error('Помилка декодування файлу:', e2);
                return false;
            }
        }
        
        // Знаходимо масив BASE_IMAGES та додаємо нові фото
        const baseImagesMatch = currentContent.match(/const BASE_IMAGES = \[([\s\S]*?)\];/);
        if (!baseImagesMatch) {
            console.error('❌ Не вдалося знайти BASE_IMAGES в script.js');
            return false;
        }
        
        // Парсимо існуючі фото
        const existingImages = baseImagesMatch[1]
            .split('\n')
            .map(line => line.trim())
            .filter(line => line && !line.startsWith('//') && !line.startsWith('*'))
            .map(line => {
                // Шукаємо рядки з 'images/...' або 'image/...'
                const match = line.match(/['"](images\/[^'"]+|image\/[^'"]+)['"]/);
                return match ? match[1] : null;
            })
            .filter(img => img !== null);
        
        console.log('📸 Знайдено існуючих фото в BASE_IMAGES:', existingImages.length);
        console.log('➕ Додаємо нових фото:', newImages.length);
        
        // Додаємо нові фото (які ще не є в списку)
        const allImages = [...new Set([...existingImages, ...newImages])];
        
        console.log('📊 Всього фото після об\'єднання:', allImages.length);
        
        // Формуємо новий масив (зберігаємо форматування)
        const newBaseImagesArray = allImages.map(img => `        '${img}'`).join(',\n');
        const newContent = currentContent.replace(
            /const BASE_IMAGES = \[[\s\S]*?\];/,
            `const BASE_IMAGES = [\n${newBaseImagesArray}\n];`
        );
        
        // Кодуємо в base64 для GitHub API
        const encodedContent = btoa(unescape(encodeURIComponent(newContent)));
        
        // Оновлюємо файл через GitHub API
        const updateResponse = await fetch(scriptUrl, {
            method: 'PUT',
            headers: {
                'Authorization': `token ${GITHUB_CONFIG.GITHUB_TOKEN}`,
                'Accept': 'application/vnd.github.v3+json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: `Додано ${newImages.length} нових фото до галереї (автоматично)`,
                content: encodedContent,
                sha: fileData.sha,
                branch: GITHUB_CONFIG.REPO_BRANCH || 'main'
            })
        });
        
        if (updateResponse.ok) {
            const result = await updateResponse.json();
            console.log('✅ script.js успішно оновлено в GitHub репозиторії!');
            console.log('📝 Commit:', result.commit.html_url);
            return true;
        } else {
            const error = await updateResponse.json();
            console.error('❌ Помилка оновлення script.js:', error.message || '');
            if (error.message && error.message.includes('Bad credentials')) {
                console.error('💡 Перевірте правильність токену');
            } else if (error.message && error.message.includes('insufficient_scope')) {
                console.error('💡 Токен не має прав "repo". Створіть новий токен з правами "repo"');
            }
            return false;
        }
    } catch (error) {
        console.error('❌ Помилка оновлення script.js:', error);
        return false;
    }
}

// Функція для збереження зображень у GitHub Gist
async function saveGalleryImagesToGist(images) {
    // Детальна перевірка токену
    if (typeof GITHUB_CONFIG === 'undefined') {
        console.error('❌ GITHUB_CONFIG не визначено. Перевірте, чи завантажився config.js');
        console.error('💡 Оновіть сторінку (Ctrl+F5 або Cmd+Shift+R)');
        const uploadedImages = images.filter(img => !BASE_IMAGES.includes(img));
        localStorage.setItem('galleryImages', JSON.stringify(uploadedImages));
        return false;
    }
    
    if (!GITHUB_CONFIG) {
        console.error('❌ GITHUB_CONFIG порожній');
        const uploadedImages = images.filter(img => !BASE_IMAGES.includes(img));
        localStorage.setItem('galleryImages', JSON.stringify(uploadedImages));
        return false;
    }
    
    if (!GITHUB_CONFIG.GITHUB_TOKEN || GITHUB_CONFIG.GITHUB_TOKEN.trim() === '') {
        console.error('❌ GITHUB_TOKEN не налаштовано або порожній');
        console.error('💡 Перевірте файл config.js та оновіть сторінку (Ctrl+F5)');
        // Якщо токен не налаштовано, зберігаємо тільки в localStorage
        const uploadedImages = images.filter(img => !BASE_IMAGES.includes(img));
        localStorage.setItem('galleryImages', JSON.stringify(uploadedImages));
        return false;
    }
    
    // Перевіряємо, чи токен не старий (починається з ghp_)
    if (!GITHUB_CONFIG.GITHUB_TOKEN.startsWith('ghp_')) {
        console.error('❌ Токен має неправильний формат');
        const uploadedImages = images.filter(img => !BASE_IMAGES.includes(img));
        localStorage.setItem('galleryImages', JSON.stringify(uploadedImages));
        return false;
    }
    
    console.log('✅ Токен знайдено, спроба зберегти в Gist...');
    
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
        // Отримуємо тільки нові фото (які ще не в BASE_IMAGES)
        const newImages = galleryImages.filter(img => !BASE_IMAGES.includes(img));
        
        // Зберігаємо в GitHub Gist (або localStorage якщо не налаштовано)
        const savedToGist = await saveGalleryImagesToGist(galleryImages);
        
        // Оновлюємо script.js в GitHub репозиторії (додаємо нові фото до BASE_IMAGES)
        let savedToScript = false;
        if (newImages.length > 0 && typeof GITHUB_CONFIG !== 'undefined' && GITHUB_CONFIG && GITHUB_CONFIG.GITHUB_TOKEN) {
            console.log('🔄 Спроба оновити script.js в GitHub...');
            savedToScript = await updateScriptJsInGitHub(newImages);
            if (savedToScript) {
                console.log('✅ Фото успішно додано в script.js!');
            } else {
                console.log('⚠️ Не вдалося оновити script.js (перевірте права токену)');
            }
        }
        
        // Оновлюємо галерею
        updateGallery();
        
        // Оновлюємо BASE_IMAGES локально
        BASE_IMAGES.push(...newImages);
        
        // Закриваємо модальне вікно
        closeUploadModal();
        
        // Показуємо повідомлення
        let message = '';
        if (savedToScript) {
            message = `✅ Успішно додано ${files.length} фото!\n\n📸 Фото додано до галереї\n💾 Збережено в GitHub Gist\n📝 Оновлено script.js в репозиторії\n\nВсі користувачі тепер бачать ці фото!`;
        } else if (savedToGist) {
            message = `✅ Успішно додано ${files.length} фото!\n\n📸 Фото додано до галереї\n💾 Збережено в GitHub Gist\n\n⚠️ script.js не оновлено (потрібні права на репозиторій)`;
        } else {
            message = `✅ Успішно додано ${files.length} фото!\n\n📸 Фото додано до галереї (локально)\n\n⚠️ Налаштуйте GitHub токен для синхронізації`;
        }
        
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
