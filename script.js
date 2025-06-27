document.addEventListener('DOMContentLoaded', function() {

    const themeToggle = document.getElementById('theme-toggle-checkbox');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            themeToggle.checked = true;
        }
    }

    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });

    const typingEffectSpan = document.querySelector('.typing-effect');
    if (typingEffectSpan) {
        new Typed('.typing-effect', {
            strings: ['Creative Developer.', 'Video Editor.', 'UI/UX Enthusiast.'],
            typeSpeed: 70,
            backSpeed: 50,
            loop: true
        });
    }

    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = { threshold: 0.1, rootMargin: "0px 0px -100px 0px" };
    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('visible');
            appearOnScroll.unobserve(entry.target);
        });
    }, appearOptions);
    faders.forEach(fader => { appearOnScroll.observe(fader); });

    const backToTopButton = document.getElementById('backToTopBtn');
    window.onscroll = () => {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            backToTopButton.style.display = "flex";
        } else {
            backToTopButton.style.display = "none";
        }
    };
    backToTopButton.addEventListener('click', () => { window.scrollTo({top: 0, behavior: 'smooth'}); });

});