const galleryImages = [
    "image/IMG_2035.JPG",
    "image/IMG_2052.JPG",
    "image/IMG_2062.JPG",
    "image/IMG_2070.JPG",
    "image/IMG_2094.JPG",
    "image/IMG_2202.JPG",
    "image/IMG_2206.JPG",
    "image/IMG_2359.JPG",
    "image/IMG_3851.JPG",
    "image/photo_2024-11-15_19-58-08.jpg",
    "image/photo_2024-11-15_20-01-16.jpg",
    "image/photo_2025-07-19_19-28-12.jpg",
    "image/photo_2025-07-19_19-28-40.jpg",
    "image/photo_2025-09-15_12-22-20.jpg",
    "image/photo_2025-09-29_14-08-59.jpg",
    "image/photo_2025-10-03_00-42-55.jpg",
    "image/photo_2025-10-07_11-21-57.jpg",
    "image/photo_2025-10-07_19-11-35.jpg",
    "image/photo_2025-10-10_14-33-08.jpg",
    "image/photo_2025-10-17_19-41-44.jpg",
    "image/photo_2025-11-03_20-36-18.jpg",
    "image/photo_2025-11-28_23-38-26.jpg",
    "image/photo_2025-12-06_20-10-26.jpg",
    "image/photo_2025-12-06_20-12-09.jpg",
    "image/photo_2025-12-06_20-13-07.jpg",
    "image/photo_2025-12-06_20-16-34.jpg",
    "image/photo_2025-12-06_20-19-39.jpg",
    "image/photo_2025-12-06_20-24-16.jpg",
    "image/photo_2025-12-06_20-24-18.jpg",
    "image/photo_2025-12-06_20-24-19.jpg",
    "image/photo_2025-12-06_20-24-20.jpg",
    "image/photo_2025-12-06_20-24-22.jpg",
    "image/photo_2025-12-06_20-24-27.jpg",
    "image/photo_2025-12-06_20-24-33.jpg",
    "image/photo_2025-12-06_20-24-35.jpg",
    "image/photo_2025-12-06_20-24-37.jpg",
    "image/photo_2025-12-06_20-24-44.jpg",
    "image/photo_2025-12-06_20-24-47.jpg",
    "image/photo_2025-12-06_20-24-49.jpg",
    "image/photo_2025-12-06_20-24-55.jpg",
    "image/photo_2025-12-06_20-25-04.jpg",
    "image/photo_2025-12-06_20-25-09.jpg",
    "image/photo_2025-12-06_20-25-21.jpg",
    "image/photo_2025-12-06_20-37-39.jpg",
    "image/photo_2025-12-06_20-38-32.jpg",
    "image/photo_2025-12-06_20-39-42.jpg",
    "image/photo_2025-12-06_20-40-40.jpg",
    "image/photo_2025-12-06_20-40-43.jpg",
    "image/photo_2025-12-06_20-40-50.jpg",
    "image/photo_2025-12-06_20-41-03.jpg",
    "image/photo_2025-12-06_20-44-29.jpg",
    "image/photo_2025-12-06_20-44-30.jpg",
    "image/photo_2025-12-06_21-28-10.jpg",
    "image/photo_2025-12-07_21-08-36.jpg",
    "image/photo_2025-12-09_00-20-34.jpg",
    "image/photo_2025-12-09_20-34-47.jpg",
    "image/photo_2025-12-09_20-34-48.jpg",
    "image/photo_2025-12-09_20-37-29.jpg",
    "image/photo_2025-12-09_20-37-30.jpg",
    "image/photo_2025-12-09_20-37-32.jpg",
    "image/photo_2025-12-09_20-37-33.jpg",
    "image/photo_2025-12-09_20-37-34 (2).jpg",
    "image/photo_2025-12-09_20-37-34.jpg",
    "image/photo_2025-12-09_20-37-35.jpg",
    "image/photo_2025-12-09_20-37-45.jpg",
    "image/photo_2025-12-12_15-41-32.jpg",
    "image/photo_2025-12-12_15-43-56.jpg",
    "image/photo_2025-12-12_15-45-28.jpg",
    "image/photo_2025-12-13_00-06-23.jpg",
    "image/photo_2025-12-13_00-07-24.jpg",
    "image/photo_2025-12-13_00-15-34.jpg",
    "image/photo_2025-12-13_01-01-25.jpg",
    "image/photo_2025-12-13_14-02-09.jpg",
    "image/photo_2025-12-15_22-12-35.jpg",
    "image/photo_2025-12-15_22-14-13.jpg",
    "image/photo_2025-12-22_21-19-01.jpg",
    "image/photo_2025-12-25_20-20-01.jpg",
    "image/photo_2025-12-25_22-26-25 (2).jpg",
    "image/photo_2026-03-28_12-21-33.jpg",
    "image/photo_2026-03-30_18-17-07.jpg",
    "image/photo_2026-03-30_18-17-16.jpg",
    "image/photo_2026-03-31_16-36-49.jpg",
    "image/photo_2026-04-04_01-21-22.jpg",
    "image/photo_2026-04-14_08-16-20.jpg",
    "image/photo_2026-04-18_16-55-12.jpg",
    "image/photo_2026-05-03_22-34-11.jpg",
    "image/photo_2026-05-07_11-40-24.jpg",
    "image/photo_2026-05-07_12-49-34.jpg",
    "image/photo_2026-05-10_13-00-05.jpg",
    "image/photo_2026-05-10_13-03-37 (2).jpg",
    "image/photo_2026-05-10_13-03-37.jpg"
];

for (let index = galleryImages.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [galleryImages[index], galleryImages[randomIndex]] = [galleryImages[randomIndex], galleryImages[index]];
}

const galleryGrid = document.getElementById("gallery-grid");
const modal = document.getElementById("image-modal");
const modalImage = document.getElementById("modal-image");
const closeButton = document.querySelector(".modal-close");
const prevButton = document.querySelector(".modal-nav.prev");
const nextButton = document.querySelector(".modal-nav.next");
const diaryForm = document.getElementById("diary-form");
const memoryText = document.getElementById("memory-text");
const memoryPhoto = document.getElementById("memory-photo");
const diaryList = document.getElementById("diary-list");
const diarySearch = document.getElementById("diary-search");
const calendarGrid = document.getElementById("calendar-grid");
const calendarTitle = document.getElementById("calendar-title");
const calendarSelected = document.getElementById("calendar-selected");
const calendarPrev = document.getElementById("calendar-prev");
const calendarNext = document.getElementById("calendar-next");
const favoritesGrid = document.getElementById("favorites-grid");
const galleryFilterButtons = document.querySelectorAll(".gallery-filter");
const photoUploadForm = document.getElementById("add-photo");
const galleryPhotoInput = document.getElementById("gallery-photo");
const uploadStatus = document.getElementById("upload-status");
const diaryStorageKey = "ourDiaryEntries";
const galleryStorageKey = "ourGalleryUploads";
const favoritesStorageKey = "ourFavoritePhotos";
let currentIndex = 0;
let diaryEntries = loadDiaryEntries();
let favoritePhotos = loadFavoritePhotos();
let calendarDate = new Date();
let selectedCalendarDate = "";
let activeGalleryFilter = "photos";

galleryImages.push(...loadLocalGalleryPhotos());
galleryImages.push(...diaryEntries.filter((entry) => entry.photo).map((entry) => entry.photo));

function renderGallery() {
    const fragment = document.createDocumentFragment();
    galleryGrid.innerHTML = "";

    const memoryPhotos = new Set(diaryEntries.map((entry) => entry.photo).filter(Boolean));
    const filteredImages = galleryImages.filter((src) => {
        if (activeGalleryFilter === "memories") return memoryPhotos.has(src);
        if (activeGalleryFilter === "favorites") return favoritePhotos.includes(src);
        return !memoryPhotos.has(src);
    });

    if (filteredImages.length === 0) {
        const empty = document.createElement("p");
        empty.className = "favorite-empty";
        empty.textContent = activeGalleryFilter === "memories"
            ? "Тут будуть фото, які додані через спогади."
            : activeGalleryFilter === "favorites"
                ? "Натисни сердечко на фото, і воно з'явиться тут."
                : "Тут поки немає простих фото.";
        galleryGrid.appendChild(empty);
        return;
    }

    filteredImages.forEach((src) => {
        const index = galleryImages.indexOf(src);
        const button = document.createElement("button");
        button.className = "gallery-item";
        button.type = "button";
        button.setAttribute("aria-label", `Відкрити фото ${index + 1}`);

        const image = document.createElement("img");
        image.src = src;
        image.alt = `Фото ${index + 1}`;
        image.loading = "lazy";

        const favoriteButton = document.createElement("button");
        favoriteButton.className = `favorite-toggle${favoritePhotos.includes(src) ? " is-active" : ""}`;
        favoriteButton.type = "button";
        favoriteButton.setAttribute("aria-label", "Додати в улюблені");
        favoriteButton.textContent = "♡";
        favoriteButton.addEventListener("click", (event) => {
            event.stopPropagation();
            toggleFavorite(src);
        });

        button.appendChild(image);
        button.appendChild(favoriteButton);
        button.addEventListener("click", () => openModal(index));
        fragment.appendChild(button);
    });

    galleryGrid.appendChild(fragment);
}

function loadDiaryEntries() {
    try {
        const savedEntries = localStorage.getItem(diaryStorageKey);
        return savedEntries ? JSON.parse(savedEntries) : [];
    } catch (error) {
        return [];
    }
}

function loadLocalGalleryPhotos() {
    try {
        const savedPhotos = localStorage.getItem(galleryStorageKey);
        return savedPhotos ? JSON.parse(savedPhotos) : [];
    } catch (error) {
        return [];
    }
}

function loadFavoritePhotos() {
    try {
        const savedPhotos = localStorage.getItem(favoritesStorageKey);
        return savedPhotos ? JSON.parse(savedPhotos) : [];
    } catch (error) {
        return [];
    }
}

function saveFavoritePhotos() {
    localStorage.setItem(favoritesStorageKey, JSON.stringify(favoritePhotos));
}

function saveLocalGalleryPhotos(photos) {
    localStorage.setItem(galleryStorageKey, JSON.stringify(photos));
}

function saveDiaryEntries() {
    localStorage.setItem(diaryStorageKey, JSON.stringify(diaryEntries));
}

function rememberLocalGalleryPhoto(src) {
    if (!src || src.startsWith("image/")) return;

    const localPhotos = loadLocalGalleryPhotos();
    if (!localPhotos.includes(src)) {
        localPhotos.unshift(src);
        saveLocalGalleryPhotos(localPhotos);
    }
}

function addGalleryPhoto(src) {
    if (src && !galleryImages.includes(src)) {
        galleryImages.unshift(src);
    }
}

async function fetchJson(url) {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Request failed");
    return response.json();
}

async function loadServerData() {
    try {
        const photos = await fetchJson("/api/photos");
        photos
            .map((photo) => photo.src)
            .filter(Boolean)
            .reverse()
            .forEach((src) => {
                addGalleryPhoto(src);
                rememberLocalGalleryPhoto(src);
            });
    } catch (error) {
        // Static hosting fallback keeps using localStorage.
    }

    try {
        const serverDiary = await fetchJson("/api/diary");
        if (Array.isArray(serverDiary) && serverDiary.length > 0) {
            const mergedEntries = [...serverDiary];
            diaryEntries.forEach((entry) => {
                if (!mergedEntries.some((savedEntry) => savedEntry.id === entry.id)) {
                    mergedEntries.push(entry);
                }
            });

            diaryEntries = mergedEntries;
            saveDiaryEntries();
            diaryEntries
                .map((entry) => entry.photo)
                .filter(Boolean)
                .reverse()
                .forEach((src) => {
                    addGalleryPhoto(src);
                });
        }
    } catch (error) {
        // Static hosting fallback keeps using localStorage.
    }
}

async function uploadPhotoToServer(file) {
    const formData = new FormData();
    formData.append("photo", file);

    const response = await fetch("/api/photos", {
        method: "POST",
        body: formData
    });

    if (!response.ok) throw new Error("Upload failed");
    return response.json();
}

async function createDiaryEntryOnServer(text, file) {
    const formData = new FormData();
    formData.append("text", text);
    if (file) formData.append("photo", file);

    const response = await fetch("/api/diary", {
        method: "POST",
        body: formData
    });

    if (!response.ok) throw new Error("Diary upload failed");
    return response.json();
}

function formatDiaryDate(dateValue) {
    return new Intl.DateTimeFormat("uk-UA", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric"
    }).format(new Date(dateValue));
}

function renderDiary() {
    const query = diarySearch.value.trim().toLowerCase();
    const filteredEntries = diaryEntries.filter((entry) => {
        const formattedDate = formatDiaryDate(entry.createdAt).toLowerCase();
        const matchesSearch = !query || entry.text.toLowerCase().includes(query) || formattedDate.includes(query);
        const matchesDate = !selectedCalendarDate || toDateKey(entry.createdAt) === selectedCalendarDate;
        return matchesSearch && matchesDate;
    });

    diaryList.innerHTML = "";

    if (filteredEntries.length === 0) {
        const empty = document.createElement("p");
        empty.className = "diary-empty";
        empty.textContent = diaryEntries.length === 0
            ? "Тут поки немає записів. Додай перший спогад, і він залишиться тут."
            : "За цим пошуком або датою спогадів не знайдено.";
        diaryList.appendChild(empty);
        return;
    }

    filteredEntries.forEach((entry) => {
        const article = document.createElement("article");
        article.className = "diary-entry";

        if (entry.photo) {
            const image = document.createElement("img");
            image.src = entry.photo;
            image.alt = "Фото зі спогаду";
            article.appendChild(image);
        }

        const content = document.createElement("div");
        content.className = "diary-entry-content";

        const date = document.createElement("p");
        date.className = "diary-entry-date";
        date.textContent = formatDiaryDate(entry.createdAt);

        const text = document.createElement("p");
        text.className = "diary-entry-text";
        text.textContent = entry.text;

        const actions = document.createElement("div");
        actions.className = "diary-entry-actions";

        const deleteButton = document.createElement("button");
        deleteButton.className = "diary-delete";
        deleteButton.type = "button";
        deleteButton.textContent = "Видалити";
        deleteButton.addEventListener("click", () => deleteDiaryEntry(entry.id));

        actions.appendChild(deleteButton);
        content.append(date, text, actions);
        article.appendChild(content);
        diaryList.appendChild(article);
    });
}

function renderCalendar() {
    const year = calendarDate.getFullYear();
    const month = calendarDate.getMonth();
    const monthName = new Intl.DateTimeFormat("uk-UA", { month: "long", year: "numeric" }).format(calendarDate);
    const firstDay = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const offset = (firstDay.getDay() + 6) % 7;
    const memoryDates = new Set(diaryEntries.map((entry) => toDateKey(entry.createdAt)));

    calendarTitle.textContent = monthName;
    calendarSelected.textContent = selectedCalendarDate
        ? `Показуємо спогади за ${formatDiaryDate(selectedCalendarDate)}`
        : "Натисни на червону дату, щоб побачити спогади за цей день.";
    calendarGrid.innerHTML = "";

    for (let index = 0; index < offset; index += 1) {
        calendarGrid.appendChild(document.createElement("span"));
    }

    for (let day = 1; day <= daysInMonth; day += 1) {
        const dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
        const button = document.createElement("button");
        button.className = "calendar-day";
        button.type = "button";
        button.textContent = day;

        if (memoryDates.has(dateKey)) {
            button.classList.add("has-memory");
            button.addEventListener("click", () => {
                selectedCalendarDate = selectedCalendarDate === dateKey ? "" : dateKey;
                renderCalendar();
                renderDiary();
            });
        }

        if (selectedCalendarDate === dateKey) {
            button.classList.add("is-selected");
        }

        calendarGrid.appendChild(button);
    }
}

function toDateKey(dateValue) {
    const date = new Date(dateValue);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function toggleFavorite(src) {
    if (favoritePhotos.includes(src)) {
        favoritePhotos = favoritePhotos.filter((photo) => photo !== src);
    } else {
        favoritePhotos.unshift(src);
    }

    saveFavoritePhotos();
    renderGallery();
    renderFavorites();
}

function renderFavorites() {
    favoritesGrid.innerHTML = "";

    const visibleFavorites = favoritePhotos.filter((src) => galleryImages.includes(src));
    if (visibleFavorites.length === 0) {
        const empty = document.createElement("p");
        empty.className = "favorite-empty";
        empty.textContent = "Натисни сердечко на фото, і воно з'явиться тут.";
        favoritesGrid.appendChild(empty);
        return;
    }

    visibleFavorites.forEach((src) => {
        const index = galleryImages.indexOf(src);
        const button = document.createElement("button");
        button.className = "gallery-item";
        button.type = "button";

        const image = document.createElement("img");
        image.src = src;
        image.alt = "Улюблене фото";
        image.loading = "lazy";

        const favoriteButton = document.createElement("button");
        favoriteButton.className = "favorite-toggle is-active";
        favoriteButton.type = "button";
        favoriteButton.textContent = "♡";
        favoriteButton.addEventListener("click", (event) => {
            event.stopPropagation();
            toggleFavorite(src);
        });

        button.append(image, favoriteButton);
        button.addEventListener("click", () => openModal(index));
        favoritesGrid.appendChild(button);
    });
}

async function deleteDiaryEntry(entryId) {
    try {
        await fetch(`/api/diary/${entryId}`, { method: "DELETE" });
    } catch (error) {
        // Static hosting fallback deletes only local entries.
    }

    diaryEntries = diaryEntries.filter((entry) => entry.id !== entryId);
    saveDiaryEntries();
    if (selectedCalendarDate && !diaryEntries.some((entry) => toDateKey(entry.createdAt) === selectedCalendarDate)) {
        selectedCalendarDate = "";
    }
    syncDiaryPhotosToGallery();
    renderCalendar();
    renderDiary();
}

function syncDiaryPhotosToGallery() {
    const localPhotos = new Set(diaryEntries.filter((entry) => entry.photo).map((entry) => entry.photo));
    for (let index = galleryImages.length - 1; index >= 0; index -= 1) {
        if (galleryImages[index].startsWith("data:image/") && !localPhotos.has(galleryImages[index])) {
            galleryImages.splice(index, 1);
        }
    }

    localPhotos.forEach((photo) => {
        if (!galleryImages.includes(photo)) {
            galleryImages.unshift(photo);
        }
    });

    renderGallery();
    renderFavorites();
}

function resizeImage(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onerror = () => reject(new Error("Не вдалося прочитати фото"));
        reader.onload = () => {
            const image = new Image();
            image.onerror = () => reject(new Error("Не вдалося обробити фото"));
            image.onload = () => {
                const maxSize = 1600;
                const scale = Math.min(1, maxSize / Math.max(image.width, image.height));
                const canvas = document.createElement("canvas");
                canvas.width = Math.round(image.width * scale);
                canvas.height = Math.round(image.height * scale);

                const context = canvas.getContext("2d");
                context.drawImage(image, 0, 0, canvas.width, canvas.height);
                resolve(canvas.toDataURL("image/jpeg", 0.82));
            };
            image.src = reader.result;
        };
        reader.readAsDataURL(file);
    });
}

function openModal(index) {
    currentIndex = index;
    modalImage.src = galleryImages[currentIndex];
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    modalImage.src = "";
    document.body.style.overflow = "";
}

function showImage(direction) {
    currentIndex = (currentIndex + direction + galleryImages.length) % galleryImages.length;
    modalImage.src = galleryImages[currentIndex];
}

function updateTimers() {
    document.querySelectorAll(".timer").forEach((timer) => {
        const startDate = new Date(timer.dataset.startDate);
        const diff = Math.max(0, Date.now() - startDate.getTime());
        const totalHours = Math.floor(diff / 1000 / 60 / 60);
        const days = Math.floor(totalHours / 24);
        const hours = totalHours % 24;
        const minutes = Math.floor(diff / 1000 / 60) % 60;
        const seconds = Math.floor(diff / 1000) % 60;

        timer.querySelector('[data-unit="days"]').textContent = days;
        timer.querySelector('[data-unit="hours"]').textContent = hours;
        timer.querySelector('[data-unit="minutes"]').textContent = minutes;
        timer.querySelector('[data-unit="seconds"]').textContent = seconds;
    });
}

closeButton.addEventListener("click", closeModal);
prevButton.addEventListener("click", () => showImage(-1));
nextButton.addEventListener("click", () => showImage(1));

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

document.addEventListener("keydown", (event) => {
    if (!modal.classList.contains("show")) {
        return;
    }

    if (event.key === "Escape") closeModal();
    if (event.key === "ArrowLeft") showImage(-1);
    if (event.key === "ArrowRight") showImage(1);
});

photoUploadForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const file = galleryPhotoInput.files[0];
    if (!file) return;

    const submitButton = photoUploadForm.querySelector(".photo-upload-submit");
    submitButton.disabled = true;
    submitButton.textContent = "Додаю...";
    uploadStatus.textContent = "Завантажую фото...";

    try {
        const savedPhoto = await uploadPhotoToServer(file);
        addGalleryPhoto(savedPhoto.src);
        rememberLocalGalleryPhoto(savedPhoto.src);
        activeGalleryFilter = "photos";
        updateGalleryFilters();
        uploadStatus.textContent = "Фото збережено в папку uploads/gallery і додано в галерею.";
    } catch (error) {
        const localPhoto = await resizeImage(file);
        const localPhotos = loadLocalGalleryPhotos();
        localPhotos.unshift(localPhoto);
        saveLocalGalleryPhotos(localPhotos);
        addGalleryPhoto(localPhoto);
        activeGalleryFilter = "photos";
        updateGalleryFilters();
        uploadStatus.textContent = "Фото додано локально. Для збереження в папку запускай сайт через Node/Render.";
    } finally {
        photoUploadForm.reset();
        renderGallery();
        submitButton.disabled = false;
        submitButton.textContent = "Додати фото";
    }
});

diaryForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const text = memoryText.value.trim();
    if (!text) {
        return;
    }

    const submitButton = diaryForm.querySelector(".diary-submit");
    submitButton.disabled = true;
    submitButton.textContent = "Додаю...";

    try {
        const file = memoryPhoto.files[0];
        let entry;

        try {
            entry = await createDiaryEntryOnServer(text, file);
        } catch (serverError) {
            const photo = file ? await resizeImage(file) : "";
            entry = {
                id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
                text,
                photo,
                createdAt: new Date().toISOString()
            };
            diaryEntries.unshift(entry);
            saveDiaryEntries();
        }

        if (!diaryEntries.some((savedEntry) => savedEntry.id === entry.id)) {
            diaryEntries.unshift(entry);
        }
        saveDiaryEntries();

        if (entry.photo) {
            addGalleryPhoto(entry.photo);
            activeGalleryFilter = "memories";
            updateGalleryFilters();
        }

        diaryForm.reset();
        renderCalendar();
        renderDiary();
        renderGallery();
        renderFavorites();
    } catch (error) {
        alert("Не вдалося додати спогад. Спробуй інше фото або менший файл.");
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = "Додати спогад";
    }
});

async function initializeSite() {
    await loadServerData();
    renderGallery();
    renderFavorites();
    renderCalendar();
    renderDiary();
    updateTimers();
    setInterval(updateTimers, 1000);
}

diarySearch.addEventListener("input", renderDiary);
calendarPrev.addEventListener("click", () => {
    calendarDate = new Date(calendarDate.getFullYear(), calendarDate.getMonth() - 1, 1);
    renderCalendar();
});
calendarNext.addEventListener("click", () => {
    calendarDate = new Date(calendarDate.getFullYear(), calendarDate.getMonth() + 1, 1);
    renderCalendar();
});
galleryFilterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        activeGalleryFilter = button.dataset.filter;
        updateGalleryFilters();
        renderGallery();
    });
});

function updateGalleryFilters() {
    galleryFilterButtons.forEach((button) => {
        button.classList.toggle("is-active", button.dataset.filter === activeGalleryFilter);
    });
}

initializeSite();
