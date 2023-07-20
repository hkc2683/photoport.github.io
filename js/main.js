// Changing Navigation Bar Style on Sroll

window.addEventListener('scroll', 
    () => {
        document.querySelector('nav').
        classList.toggle('window-scrolled', window.scrollY > 0);

    })