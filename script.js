const galleryImages = [
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
    'images/photo_2025-12-09_18-04-09.jpg'
];

let currentImageIndex = 0;

// Build gallery dynamically - show all images
function buildGallery() {
    const grid = document.getElementById('gallery-grid');
    if (!grid) return;

    grid.innerHTML = '';

    galleryImages.forEach((src, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.style.animationDelay = `${0.03 * (index % 15)}s`;
        item.style.opacity = '0';

        const img = document.createElement('img');
        img.src = src;
        img.alt = `Фото ${index + 1} Даші`;
        img.loading = 'lazy';
        
        // Обробка помилок завантаження
        img.onerror = function() {
            this.style.display = 'none';
            item.style.display = 'none';
        };
        
        img.onload = function() {
            item.style.opacity = '1';
        };

        // Додаємо обробник кліку для відкриття модального вікна
        item.addEventListener('click', () => {
            openModal(index);
        });

        item.appendChild(img);
        grid.appendChild(item);
    });

    // Hover elevation per item
    setTimeout(() => {
        grid.querySelectorAll('.gallery-item').forEach((item) => {
            item.addEventListener('mouseenter', function() {
                this.style.zIndex = '10';
            });
            item.addEventListener('mouseleave', function() {
                this.style.zIndex = '1';
            });
        });
    }, 100);
}

// Open modal with image
function openModal(index) {
    currentImageIndex = index;
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');
    
    if (modal && modalImage) {
        modalImage.src = galleryImages[index];
        modalCaption.textContent = `Фото ${index + 1} з ${galleryImages.length}`;
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

// Close modal
function closeModal() {
    const modal = document.getElementById('image-modal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
}

// Navigate to next image
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    const modalImage = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');
    
    if (modalImage) {
        modalImage.src = galleryImages[currentImageIndex];
        modalCaption.textContent = `Фото ${currentImageIndex + 1} з ${galleryImages.length}`;
    }
}

// Navigate to previous image
function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    const modalImage = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');
    
    if (modalImage) {
        modalImage.src = galleryImages[currentImageIndex];
        modalCaption.textContent = `Фото ${currentImageIndex + 1} з ${galleryImages.length}`;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Build gallery once DOM is ready
    buildGallery();

    // Modal event listeners
    const modal = document.getElementById('image-modal');
    const closeBtn = document.querySelector('.close-btn');
    const nextBtn = document.querySelector('.modal-nav-btn.next');
    const prevBtn = document.querySelector('.modal-nav-btn.prev');

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            nextImage();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            prevImage();
        });
    }

    // Close modal when clicking outside
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (modal && modal.classList.contains('show')) {
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'ArrowRight') {
                nextImage();
            } else if (e.key === 'ArrowLeft') {
                prevImage();
            }
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Hide scroll indicator when scrolled
window.addEventListener('scroll', function() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        if (window.pageYOffset > 100) {
            scrollIndicator.style.opacity = '0';
        } else {
            scrollIndicator.style.opacity = '1';
        }
    }
});
