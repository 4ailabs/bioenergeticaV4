document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------------------------------------------
    // Smooth scroll
    // ----------------------------------------------------------------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ----------------------------------------------------------------
    // Scroll-reveal with staggered delays
    // ----------------------------------------------------------------
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08 });

    const revealSelectors = [
        '.jornada',
        '.stat-block',
        '.info-panel',
        '.hologram-row',
        '.area-tag',
        '.cta-frame',
        '.footer-quote',
        '.intro-heading',
        '.intro-body',
        '.intro-highlight',
    ];

    document.querySelectorAll(revealSelectors.join(', ')).forEach((el) => {
        el.classList.add('fade-up');
        // Stagger siblings within the same parent container
        const siblingIndex = Array.from(el.parentElement.children).indexOf(el);
        el.style.transitionDelay = `${siblingIndex * 70}ms`;
        revealObserver.observe(el);
    });

    // ----------------------------------------------------------------
    // Animated stat counters
    // ----------------------------------------------------------------
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-number[data-count]').forEach(el => {
        counterObserver.observe(el);
    });

    function animateCounter(el) {
        const target = parseFloat(el.dataset.count);
        const isDecimal = target % 1 !== 0;
        const duration = 1600;
        const start = performance.now();

        function update(now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // cubic ease-out
            const value = target * eased;
            el.textContent = isDecimal ? value.toFixed(1) : Math.round(value);
            if (progress < 1) requestAnimationFrame(update);
        }

        requestAnimationFrame(update);
    }

    // ----------------------------------------------------------------
    // Mobile menu
    // ----------------------------------------------------------------
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navAnchors = document.querySelectorAll('.nav-links a');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });

        navAnchors.forEach(anchor => {
            anchor.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // ----------------------------------------------------------------
    // Theme toggle
    // ----------------------------------------------------------------
    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            const next = current === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
        });
    }

    // ----------------------------------------------------------------
    // Parallax: hero rings drift slightly on scroll
    // ----------------------------------------------------------------
    const heroRings = document.querySelector('.hero-rings');
    if (heroRings) {
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const scrollY = window.scrollY;
                    if (scrollY < window.innerHeight) {
                        heroRings.style.transform = `translateY(${scrollY * 0.25}px)`;
                    }
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
    }

    // ----------------------------------------------------------------
    // Header: add subtle shadow on scroll
    // ----------------------------------------------------------------
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 40) {
                header.style.borderBottomColor = 'rgba(196, 208, 218, 0.12)';
            } else {
                header.style.borderBottomColor = '';
            }
        }, { passive: true });
    }

});
