window.onscroll =  () => {
    const header_navbar = document.querySelector(".navbar-area");
    const sticky = header_navbar.offsetTop;
    if (window.pageYOffset > sticky) {
        header_navbar.classList.add("sticky");
        header_navbar.classList.remove("top");
    } else {
        header_navbar.classList.remove("sticky");
        header_navbar.classList.add("top");
    }
    const backToTo = document.querySelector(".scroll-top");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        backToTo.style.display = "flex";
    } else {
        backToTo.style.display = "none";
    }
};

