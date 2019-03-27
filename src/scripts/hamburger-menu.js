const hamburgerIcon = document.querySelector('.hamburger-menu-link');

const hamburgerMenu = document.querySelector('.hamburger-menu');

const hamburgerMenuItems = document.querySelectorAll('#nav__item');

const hamburgerCloseIcon = document.querySelector('.close');



hamburgerIcon.addEventListener('click', function (event) {
    event.preventDefault();
    hamburgerMenu.style.display = 'flex';
    hamburgerIcon.style.display = 'none';
    document.body.style.overflow = 'hidden';
});
hamburgerCloseIcon.addEventListener('click', function (event) {
    event.preventDefault();
    hamburgerMenu.style.display = '';
    hamburgerIcon.style.display = '';
    document.body.style.overflow = '';
});


for (var hamburgerMenuItem of hamburgerMenuItems) {

    hamburgerMenuItem.addEventListener('click', function (event) {
        var curHamburgerMenuItem = event.currentTarget;
       
       var contentHamburgerMenuItem = curHamburgerMenuItem.querySelector('.menu-link');
       
       var hrefHamburgerMenuItem = contentHamburgerMenuItem.getAttribute('href');
       
        event.preventDefault();
        hamburgerMenu.style.display = '';
        hamburgerIcon.style.display = '';
        document.body.style.overflow = '';
        
        window.location.hash = hrefHamburgerMenuItem;
    })
};