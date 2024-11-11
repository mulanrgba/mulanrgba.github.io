 let currentSlideIndexCoco = 0;

    function showSlide(index) {
        const slides = document.querySelector('.slides-coco');
        const totalSlides = slides.children.length;
        const dots = document.querySelectorAll('.dot_c');

        // Loop to the first slide if index is out of range
        if (index >= totalSlides) {
            currentSlideIndexCoco = 0;
        } else if (index < 0) {
            currentSlideIndexCoco = totalSlides - 1;
        } else {
            currentSlideIndexCoco = index;
        }

        // Move the slides and update active dot
        slides.style.transform = `translateX(-${currentSlideIndexCoco * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentSlideIndexCoco].classList.add('active');
    }

    function changeSlide(step) {
        showSlide(currentSlideIndexCoco + step);
    }

    function currentSlide(index) {
        showSlide(index);
    }

    // Show the initial slide
    showSlide(currentSlideIndexCoco);