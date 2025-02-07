function bajar(){
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('[data-bs-toggle="popover"]').forEach(function (popoverEl) {
        new bootstrap.Popover(popoverEl, {
            placement: 'bottom', 
            trigger: 'hover', 
            customClass: 'custom-popover'
        });
    });
});

