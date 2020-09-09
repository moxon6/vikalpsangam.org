window.addEventListener('blur', function (e) {
    if (e.type === "blur" && e.target.classList.contains("components-text-control__input")) {
        e.stopPropagation();
    }
}, true);

