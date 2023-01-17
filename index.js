const navbar = document.querySelector('.header .navbar');
const menuButton = document.querySelector('.header .menu');

menuButton.addEventListener('click', () => {
  navbar.classList.toggle('show');
  menuButton.classList.toggle("fa-close");
});
document.onscroll = () => {
    navbar.classList.remove('show');
    menuButton.classList.remove("fa-close");

    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');

    }
    else {
        document.querySelector('.header').classList.remove('active');
    }}

    // testimonial

    const slider = function() {
        const slides = document.querySelectorAll(".slide");
        const btnLeft = document.querySelector(".slider-btn-left");
        const btnRight = document.querySelector(".slider-btn-right");
        const dotContainer = document.querySelector(".dots");

        let curSlide = 0;
        const maxSlide = slides.length;

        //funtion
        const createDots = function () {
            slides.forEach(function (_, i){
                dotContainer.insertAdjacentHTML("beforeend", `<button class="dots-dot" data-slide="${i}"></button>`);
            });
        };


        const activeDot = function (slide) {
            document.querySelectorAll(".dots-dot").forEach((dot) => dot.classList.remove("dots-dot-active"));

            document.querySelector(`.dots-dot[data-slide="${slide}"]`).classList.add("dots-dot-active");
        };

        const goToSlide = function (slide) {
            slides.forEach(
                (s, i) => (s.style.transform = ` translateX(${100 * (i - slide)}%)`)
            );
        };

        const nextSlide = function (){
            if(  curSlide === maxSlide -1 ){
                curSlide = 0;
            }
            else {
                curSlide++;
            }
            goToSlide(curSlide);
            activeDot(curSlide);
        };

        const preSlide = function (){
            if (curSlide === 0){
                curSlide = maxSlide -1;
            } else {
                curSlide--;
            }
            goToSlide(curSlide);
            activeDot(curSlide);

        };

        const init = function(){
            goToSlide(0);
            createDots();

            activeDot(0);
        };
        init();

        // event handler

        btnRight.addEventListener("click", nextSlide);
        btnLeft.addEventListener("click", preSlide);

        document.addEventListener("keydown", function (e){
            if(this.elementFromPoint.key === "ArrowLeft") preSlide();
            e.key === "ArrowRight" && nextSlide();
        });

        dotContainer.addEventListener("click", function(e){
            if(e.target.classList.contains("dots-dot")){
                const {slide} = e.target.dataset;
                goToSlide(slide);
                activeDot(slide);
            }
        });
    };
    slider();