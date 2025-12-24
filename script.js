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

function toggleReadMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("readMoreBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read More";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read Less";
        moreText.style.display = "inline";
    }
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

// Typing Animation Enhancement - Add cursor
(function() {
    const roleText = document.getElementById('roleText');
    if (roleText) {
        roleText.style.borderRight = '2px solid #ff004f';
        roleText.style.paddingRight = '5px';
    }
})();
