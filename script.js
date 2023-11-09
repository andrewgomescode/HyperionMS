var classList = ["explorer", "cygnusknights", "heroes", "resistance", "others"];

classList.forEach(function (className) {
    var currentList = document.getElementById(className);
    var modal = document.getElementById("modal" + className);
    var modalImage = document.getElementById("modalimage" + className);
    var modalCaption = document.getElementById("modalcaption" + className);
    var closeBtn = document.querySelector("#modal" + className + " .close");
    var prevArrow = document.querySelector("#modal" + className + " .prev");
    var nextArrow = document.querySelector("#modal" + className + " .next");

    var currentIndex = 0;

    currentList.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
            var itemName = event.target.textContent;
            var imageSrc = event.target.getAttribute("data-image");

            if (itemName && imageSrc) {
                modalImage.src = imageSrc;
                modalCaption.textContent = itemName;
                modal.style.display = "block";
            }
        }
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    prevArrow.addEventListener("click", function () {
        plusSlides(-1);
    });

    nextArrow.addEventListener("click", function () {
        plusSlides(1);
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

    // Close modal when clicking outside the image
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    function plusSlides(n) {
        showSlide(currentIndex += n);
    }

    function showSlide(index) {
        var items = document.querySelectorAll("#" + className + " li");

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

        modalImage.src = imageSrc;
        modalCaption.textContent = itemName;
    }
});
