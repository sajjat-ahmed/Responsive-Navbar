const navSlider = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // Toggle
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active')

        // Animate Links
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.3s ease forwards ${index / 7 + 2}s`;
            }  
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });

    

    
};

navSlider();
