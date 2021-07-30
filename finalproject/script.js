let nav = document.getElementById("sidenav")


function openSideNav() {
    if (nav.offsetWidth <= 0){
        nav.style.width = "275px";
        nav.style.boxShadow = "3px 0 5px 1px black";
    } else {
        closeSideNav();
    }
}

function closeSideNav() {
    nav.style.width = "0px";
    nav.style.boxShadow = "none";
}
