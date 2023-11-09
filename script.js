var explorer = document.getElementById("explorer");
var modal = document.getElementById("modal");
var modalimage = document.getElementById("modalimage");
var modalcaption = document.getElementById("modalcaption");
var closeBtn = document.querySelector(".close");
var currentIndex = 0;

explorer.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        var itemName = event.target.textContent;
        var imageSrc = event.target.getAttribute("data-image");

        if (itemName && imageSrc) {
            modalimage.src = imageSrc;
            modalcaption.textContent = itemName;
            modal.style.display = "block";
        }
    }
});

modal.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        modal.style.display = "none";
    } else if (event.key === "ArrowLeft") {
        plusSlides(-1);
    } else if (event.key === "ArrowRight") {
        plusSlides(1);
    }
});

function plusSlides(n) {
    showSlide(currentIndex += n);
}

function showSlide(index) {
    var items = document.querySelectorAll("#explorer li");

    if (index >= items.length) {
        currentIndex = 0; // Wrap around to the first item
    } else if (index < 0) {
        currentIndex = items.length - 1; // Wrap around to the last item
    } else {
        currentIndex = index;
    }

    var selectedListItem = items[currentIndex];
    var itemName = selectedListItem.textContent;
    var imageSrc = selectedListItem.getAttribute("data-image");

    modalimage.src = imageSrc;
    modalcaption.textContent = itemName;
}
