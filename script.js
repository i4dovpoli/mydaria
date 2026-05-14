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
let currentIndex = 0;

function renderGallery() {
    const fragment = document.createDocumentFragment();

    galleryImages.forEach((src, index) => {
        const button = document.createElement("button");
        button.className = "gallery-item";
        button.type = "button";
        button.setAttribute("aria-label", `Відкрити фото ${index + 1}`);

        const image = document.createElement("img");
        image.src = src;
        image.alt = `Фото ${index + 1}`;
        image.loading = "lazy";

        button.appendChild(image);
        button.addEventListener("click", () => openModal(index));
        fragment.appendChild(button);
    });

    galleryGrid.appendChild(fragment);
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

renderGallery();
updateTimers();
setInterval(updateTimers, 1000);
