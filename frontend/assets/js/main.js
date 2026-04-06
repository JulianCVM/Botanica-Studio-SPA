document.addEventListener('DOMContentLoaded', () => {
    
    // Theme Toggle Logic
    const themeBtn = document.getElementById('themeToggle');
    const bodyEl = document.body;
    
    const savedTheme = localStorage.getItem('botanica-theme');
    if (savedTheme === 'dark') {
        bodyEl.classList.add('dark-theme');
    }
    
    if(themeBtn) {
        themeBtn.addEventListener('click', () => {
            bodyEl.classList.toggle('dark-theme');
            if (bodyEl.classList.contains('dark-theme')) {
                localStorage.setItem('botanica-theme', 'dark');
            } else {
                localStorage.setItem('botanica-theme', 'light');
            }
        });
    }
    
    // Custom Cursor
    const cursor = document.getElementById('cursor');
    const clickables = document.querySelectorAll('.clickable, a, button');

    if (window.matchMedia("(pointer: fine)").matches) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        clickables.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
        });
    } else {
        cursor.style.display = 'none';
    }

    // Mobile Menu
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Scroll Animations (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Si es la sección de nosotros, animar contadores
                if(entry.target.classList.contains('nosotros-text')) {
                    animateCounters();
                }
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-up').forEach(el => {
        observer.observe(el);
    });

    // Counters Animation
    let countersAnimated = false;
    function animateCounters() {
        if(countersAnimated) return;
        countersAnimated = true;
        
        animateValue("counter-years", 0, 8, 2000, "");
        animateValue("counter-clients", 0, 2000, 2000, "+");
        animateValue("counter-staff", 0, 15, 2000, "");
    }

    function animateValue(id, start, end, duration, append) {
        let obj = document.getElementById(id);
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start) + append;
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    // Timeline Progress
    const timelineContainer = document.querySelector('.timeline-container');
    const timelineProgress = document.getElementById('timelineProgress');
    
    if(timelineContainer) {
        timelineContainer.addEventListener('mouseenter', () => {
            timelineProgress.style.width = '100%';
        });
    }

    // Load Mock Data
    const data = window.botanicaData;
    
    // Render Catalog
    const grid = document.getElementById('masonryGrid');
    
    function renderServices(filter = 'all') {
        grid.innerHTML = '';
        let index = 0;
        data.services.forEach(item => {
            if(filter !== 'all' && item.category !== filter) return;
            // Solo activos en public site
            if(!item.active) return;
            
            const el = document.createElement('div');
            el.className = 'service-card clickable fade-up';
            el.style.transitionDelay = `${index * 0.1}s`;
            
            el.innerHTML = `
                <img src="${item.image}" alt="${item.title}" loading="lazy">
                <div class="service-info">
                    <span class="service-tag">${item.category}</span>
                    <h3 class="service-title">${item.title}</h3>
                    <div class="service-meta">
                        <span>${item.duration}</span>
                        <span>${item.price}</span>
                    </div>
                </div>
            `;
            grid.appendChild(el);
            
            // Trigger animation after append
            setTimeout(() => el.classList.add('visible'), 50);
            
            index++;
        });
        
        // Re-apply hover effect logic since elements are new
        grid.querySelectorAll('.clickable').forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
        });
    }

    renderServices('all');

    // Filters
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            // Effect
            grid.style.opacity = 0;
            setTimeout(() => {
                renderServices(filter);
                grid.style.opacity = 1;
            }, 300);
        });
    });

    // Testimonials Carousel
    const carouselInner = document.getElementById('carouselInner');
    let activeTestimonials = data.testimonials.filter(t => t.active);
    
    activeTestimonials.forEach(t => {
        let starsHtml = '';
        for(let i=0; i<5; i++) {
            starsHtml += i < t.stars 
                ? '<svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>'
                : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>';
        }

        const el = document.createElement('div');
        el.className = 'testimonial-card';
        el.innerHTML = `
            <img src="${t.image}" alt="${t.name}" class="testimonial-img">
            <div class="stars">${starsHtml}</div>
            <p class="testimonial-text">"${t.text}"</p>
            <p style="text-transform:uppercase; font-size: 0.8rem;">
                <strong>${t.name}</strong> • ${t.service}
            </p>
        `;
        carouselInner.appendChild(el);
    });

    let currentSlide = 0;
    const updateCarousel = () => {
        carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
    };

    document.getElementById('prevTestimonial').addEventListener('click', () => {
        if(currentSlide > 0) {
            currentSlide--;
            updateCarousel();
        }
    });

    document.getElementById('nextTestimonial').addEventListener('click', () => {
        if(currentSlide < activeTestimonials.length - 1) {
            currentSlide++;
            updateCarousel();
        }
    });

});
