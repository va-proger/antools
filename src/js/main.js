
let more = document.querySelector(".more");
let appView = document.querySelector('.app__wrapper');
more.addEventListener('click', function () {
	appView.classList.toggle("active");
})


const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
var slideNumber = 0;

//Кнопка назад на слайдере
nextBtn.addEventListener("click", () => {
	slides.forEach((slide) => {
		slide.classList.remove("active");
	});
	slideIcons.forEach((slideIcon) => {
		slideIcon.classList.remove("active");
	});

	slideNumber++;

	if (slideNumber > (numberOfSlides - 1)) {
		slideNumber = 0;
	}

	slides[slideNumber].classList.add("active");
	slideIcons[slideNumber].classList.add("active");
});

//Кнопка вперед на слайдере
prevBtn.addEventListener("click", () => {
	slides.forEach((slide) => {
		slide.classList.remove("active");
	});
	slideIcons.forEach((slideIcon) => {
		slideIcon.classList.remove("active");
	});

	slideNumber--;

	if (slideNumber < 0) {
		slideNumber = numberOfSlides - 1;
	}

	slides[slideNumber].classList.add("active");
	slideIcons[slideNumber].classList.add("active");
});

//Функция autoplay
var playSlider;

var repeater = () => {
	playSlider = setInterval(function () {
		slides.forEach((slide) => {
			slide.classList.remove("active");
		});
		slideIcons.forEach((slideIcon) => {
			slideIcon.classList.remove("active");
		});

		slideNumber++;

		if (slideNumber > (numberOfSlides - 1)) {
			slideNumber = 0;
		}

		slides[slideNumber].classList.add("active");
		slideIcons[slideNumber].classList.add("active");
	}, 5000);
}