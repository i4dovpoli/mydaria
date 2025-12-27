// Конфігурація для збереження фото
// ВАЖЛИВО: Створіть GitHub Personal Access Token та вставте його нижче
// Інструкція: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
// Потрібні права: gist (створення та редагування gist)

// Глобальна змінна для конфігурації
var GITHUB_CONFIG = {
    // GitHub Personal Access Token (вже налаштовано)
    // ⚠️ УВАГА: Якщо репозиторій публічний, краще використати GitHub Secrets
    GITHUB_TOKEN: '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',
    
    // ID вашого Gist (буде створено автоматично при першому використанні)
    // Після першого завантаження фото, ID збережеться тут автоматично
    // Або можете вставити вручну після першого створення Gist
    GIST_ID: (typeof localStorage !== 'undefined' ? localStorage.getItem('galleryGistId') : null) || '',
    
    // Ім'я файлу в Gist
    GIST_FILENAME: 'gallery-images.json'
};

// Також зберігаємо в window для глобального доступу
if (typeof window !== 'undefined') {
    window.GITHUB_CONFIG = GITHUB_CONFIG;
}

