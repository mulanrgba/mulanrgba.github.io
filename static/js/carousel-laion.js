let currentSlideIndex = 0;

    function showSlidel(index) {
        const slides = document.querySelector('.slides-laion');
        const totalSlides = slides.children.length;
        const dots = document.querySelectorAll('.dot');

        // Loop to the first slide if index is out of range
        if (index >= totalSlides) {
            currentSlideIndex = 0;
        } else if (index < 0) {
            currentSlideIndex = totalSlides - 1;
        } else {
            currentSlideIndex = index;
        }

        // Move slides and update active dot
        slides.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentSlideIndex].classList.add('active');
    }

    function changeSlidel(step) {
        showSlidel(currentSlideIndex + step);
    }

    function currentSlidel(index) {
        showSlidel(index);
    }

    // Show the initial slide
    showSlidel(currentSlideIndex);

