const navBarMobileButton = document.querySelectorAll('.nav-mobileButton');

navBarMobileButton.forEach(e => {
    e.addEventListener('click', () => {
        const navBar = document.querySelector('.nav-mobileWrapper');
        navBar.classList.toggle('active');
        console.log('NavBar toggled!');
    })
});


const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(e => {
    e.addEventListener('click', () => {
        setTimeout(() => {
            const navBar = document.querySelector('.nav-mobileWrapper');
            navBar.classList.remove('active');
            console.log('NavBar closed!');
        }, 50);
    })
});

