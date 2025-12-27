// Конфігурація для збереження фото
// ВАЖЛИВО: Створіть GitHub Personal Access Token та вставте його нижче
// Інструкція: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
// Потрібні права:
//   - gist (створення та редагування gist) - для збереження фото
//   - repo (повний доступ до репозиторію) - для автоматичного оновлення script.js
// Версія: 2.0 (оновлено токен)

// Глобальна змінна для конфігурації
var GITHUB_CONFIG = {
    // GitHub Personal Access Token (оновлено)
    // ⚠️ УВАГА: Якщо репозиторій публічний, краще використати GitHub Secrets
    // Потрібні права: repo (повний доступ до репозиторію) та gist
    GITHUB_TOKEN: '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',
    
    // ID вашого Gist (буде створено автоматично при першому використанні)
    // Після першого завантаження фото, ID збережеться тут автоматично
    // Або можете вставити вручну після першого створення Gist
    GIST_ID: (typeof localStorage !== 'undefined' ? localStorage.getItem('galleryGistId') : null) || '',
    
    // Ім'я файлу в Gist
    GIST_FILENAME: 'gallery-images.json',
    
    // Налаштування репозиторію для автоматичного оновлення script.js
    REPO_OWNER: 'i4dovpoli',
    REPO_NAME: 'mydaria',
    REPO_BRANCH: 'main'
};

// Також зберігаємо в window для глобального доступу
if (typeof window !== 'undefined') {
    window.GITHUB_CONFIG = GITHUB_CONFIG;
}

