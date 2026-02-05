var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

function toggleService(btn) {
    var serviceDiv = btn.parentElement;
    var dots = serviceDiv.querySelector(".service-dots");
    var moreText = serviceDiv.querySelector(".service-more");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btn.innerHTML = "Read More";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btn.innerHTML = "Read Less";
        moreText.style.display = "inline";
    }
}

function toggleWork(btn) {
    var workDiv = btn.closest('.layer');
    var dots = workDiv.querySelector(".work-dots");
    var moreText = workDiv.querySelector(".work-more");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btn.innerHTML = "Read More";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btn.innerHTML = "Read Less";
        moreText.style.display = "inline";
    }
}

// Rotate hero role text
(function(){
    var roles = ['Student', 'Learner', 'Programmer'];
    var el = document.getElementById('roleText');
    if(!el) return;

    // Respect reduced motion
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        el.textContent = roles[0];
        return;
    }

    var roleIndex = 0;
    var charIndex = 0;
    var deleting = false;
    var typeDelay = 80;
    var eraseDelay = 50;
    var pauseAfterType = 1200;
    var pauseAfterErase = 300;

    function tick(){
        var current = roles[roleIndex];

        if(!deleting){
            el.textContent = current.substring(0, charIndex + 1);
            charIndex++;
            if(charIndex === current.length){
                deleting = true;
                setTimeout(tick, pauseAfterType);
                return;
            }
        } else {
            el.textContent = current.substring(0, charIndex - 1);
            charIndex--;
            if(charIndex === 0){
                deleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                setTimeout(tick, pauseAfterErase);
                return;
            }
        }

        setTimeout(tick, deleting ? eraseDelay : typeDelay);
    }

    tick();
})();

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}

// Scroll to Top Button
(function() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollBtn);

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });

    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
})();

// Active Navigation on Scroll
(function() {
    const sections = document.querySelectorAll('div[id]');
    const navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
})();

// Scroll Reveal Animation
(function() {
    const reveals = document.querySelectorAll('.work, .services-list > div, .about-col-1, .about-col-2, .contact-left, .contact-right');
    
    function revealOnScroll() {
        reveals.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('reveal-active');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
})();

// Form Submission Handler
(function() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            const btn = form.querySelector('button[type="submit"]');
            btn.innerHTML = 'Sending...';
            btn.disabled = true;
            
            // Reset after 2 seconds (form will submit normally)
            setTimeout(() => {
                btn.innerHTML = 'Submit';
                btn.disabled = false;
            }, 2000);
        });
    }
})();

// Auto-close mobile menu on link click
(function() {
    const menuLinks = document.querySelectorAll('#sidemenu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 600) {
                closemenu();
            }
        });
    });
})();

// Parallax Effect for Sections
(function() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.about-col-1 img, .work img');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos * 0.05}px)`;
        });
    });
})();

// Magnetic Button Effect
(function() {
    const buttons = document.querySelectorAll('.btn, .layer a, .read-more-btn');
    
    buttons.forEach(button => {
        button.addEventListener('mousemove', function(e) {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });
        
        button.addEventListener('mouseleave', function() {
            button.style.transform = 'translate(0, 0)';
        });
    });
})();

// Smooth Section Reveal with Intersection Observer
(function() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
            }
        });
    }, observerOptions);
    
    const elements = document.querySelectorAll('.work, .services-list > div, .about-col-1, .about-col-2, .contact-left, .contact-right, .sub-title');
    elements.forEach(el => observer.observe(el));
})();

// Cursor Trail Effect
(function() {
    if (window.innerWidth > 768) {
        const coords = { x: 0, y: 0 };
        const circles = document.querySelectorAll('.cursor-circle');
        
        // Create cursor circles if they don't exist
        if (circles.length === 0) {
            for (let i = 0; i < 20; i++) {
                const circle = document.createElement('div');
                circle.classList.add('cursor-circle');
                circle.style.cssText = `
                    position: fixed;
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background: rgba(20, 184, 166, ${1 - i * 0.05});
                    pointer-events: none;
                    z-index: 9999;
                    transition: transform 0.1s ease;
                `;
                document.body.appendChild(circle);
            }
        }
        
        const newCircles = document.querySelectorAll('.cursor-circle');
        
        window.addEventListener('mousemove', function(e) {
            coords.x = e.clientX;
            coords.y = e.clientY;
        });
        
        function animateCircles() {
            let x = coords.x;
            let y = coords.y;
            
            newCircles.forEach(function(circle, index) {
                circle.style.left = x - 5 + 'px';
                circle.style.top = y - 5 + 'px';
                circle.style.transform = `scale(${(newCircles.length - index) / newCircles.length})`;
                
                const nextCircle = newCircles[index + 1] || newCircles[0];
                x += (nextCircle.offsetLeft - x) * 0.3;
                y += (nextCircle.offsetTop - y) * 0.3;
            });
            
            requestAnimationFrame(animateCircles);
        }
        
        animateCircles();
    }
})();

// Text Scramble Effect for Headings
(function() {
    class TextScramble {
        constructor(el) {
            this.el = el;
            this.chars = '!<>-_\\/[]{}—=+*^?#________';
            this.update = this.update.bind(this);
        }
        
        setText(newText) {
            const oldText = this.el.innerText;
            const length = Math.max(oldText.length, newText.length);
            const promise = new Promise((resolve) => this.resolve = resolve);
            this.queue = [];
            
            for (let i = 0; i < length; i++) {
                const from = oldText[i] || '';
                const to = newText[i] || '';
                const start = Math.floor(Math.random() * 40);
                const end = start + Math.floor(Math.random() * 40);
                this.queue.push({ from, to, start, end });
            }
            
            cancelAnimationFrame(this.frameRequest);
            this.frame = 0;
            this.update();
            return promise;
        }
        
        update() {
            let output = '';
            let complete = 0;
            
            for (let i = 0, n = this.queue.length; i < n; i++) {
                let { from, to, start, end, char } = this.queue[i];
                
                if (this.frame >= end) {
                    complete++;
                    output += to;
                } else if (this.frame >= start) {
                    if (!char || Math.random() < 0.28) {
                        char = this.randomChar();
                        this.queue[i].char = char;
                    }
                    output += `<span class="dud">${char}</span>`;
                } else {
                    output += from;
                }
            }
            
            this.el.innerHTML = output;
            
            if (complete === this.queue.length) {
                this.resolve();
            } else {
                this.frameRequest = requestAnimationFrame(this.update);
                this.frame++;
            }
        }
        
        randomChar() {
            return this.chars[Math.floor(Math.random() * this.chars.length)];
        }
    }
    
    const titles = document.querySelectorAll('.sub-title');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.scrambled) {
                const fx = new TextScramble(entry.target);
                fx.setText(entry.target.innerText);
                entry.target.dataset.scrambled = 'true';
            }
        });
    }, { threshold: 0.5 });
    
    titles.forEach(title => observer.observe(title));
})();

// Animated Counter for Stats
(function() {
    function animateValue(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            element.innerHTML = value + '+';
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
    
    const counters = document.querySelectorAll('.counter');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.counted) {
                const target = parseInt(entry.target.dataset.target);
                animateValue(entry.target, 0, target, 2000);
                entry.target.dataset.counted = 'true';
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
})();

// 3D Tilt Effect for Cards
(function() {
    const cards = document.querySelectorAll('.work, .services-list > div');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
})();

// Typewriter Effect for About Text - DISABLED
// (function() {
//     const aboutText = document.getElementById('about-text');
//     if (aboutText && aboutText.dataset.typed !== 'true') {
//         const text = aboutText.innerText;
//         aboutText.innerText = '';
//         let i = 0;
//         
//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     function typeWriter() {
//                         if (i < text.length) {
//                             aboutText.innerText += text.charAt(i);
//                             i++;
//                             setTimeout(typeWriter, 10);
//                         }
//                     }
//                     typeWriter();
//                     aboutText.dataset.typed = 'true';
//                     observer.disconnect();
//                 }
//             });
//         }, { threshold: 0.3 });
//         
//         observer.observe(aboutText);
//     }
// })();

// Progress Bar Animation
(function() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target;
                const width = progress.dataset.progress;
                progress.style.width = width + '%';
            }
        });
    }, { threshold: 0.5 });
    
    progressBars.forEach(bar => observer.observe(bar));
})();

// Floating Animation for Elements
(function() {
    const floatingElements = document.querySelectorAll('.services-list div i');
    
    floatingElements.forEach((element, index) => {
        element.style.animation = `iconFloat 3s ease-in-out infinite`;
        element.style.animationDelay = `${index * 0.2}s`;
    });
})();

// Add Page Load Animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Scroll Progress Indicator
(function() {
    const progressBar = document.getElementById('scrollProgress');
    
    window.addEventListener('scroll', function() {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        if (progressBar) {
            progressBar.style.width = scrolled + '%';
        }
    });
})();

// Enhanced Navbar Scroll Effect
(function() {
    const nav = document.querySelector('nav');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            nav.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3)';
        } else if (currentScroll > lastScroll && currentScroll > 100) {
            // Scrolling down
            nav.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            nav.style.transform = 'translateY(0)';
            nav.style.boxShadow = '0 8px 40px rgba(0, 0, 0, 0.5)';
        }
        
        lastScroll = currentScroll;
    });
})();

// Mouse Parallax Effect
(function() {
    if (window.innerWidth > 768) {
        document.addEventListener('mousemove', function(e) {
            const header = document.getElementById('header');
            if (header) {
                const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
                const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
                header.style.backgroundPosition = `${50 + moveX}% ${50 + moveY}%`;
            }
        });
    }
})();



