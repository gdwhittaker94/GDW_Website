function log(input) {
	console.log(input);
}

// *HAMBURGER MENU (SMALL SCREENS)
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav__list");
const navLi = document.querySelectorAll(".nav__li")

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navList.classList.toggle("active");
})

navLi.forEach(n => n.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navList.classList.toggle("active");
}))

// *HERO IMAGE EFFECT
const heroImg = document.querySelector(".hero__img");
const height = heroImg.clientHeight;
const width = heroImg.clientWidth;

heroImg.addEventListener('mousemove', (evt) => {
	const clientX = evt.clientX;
	const clientY = evt.clientY;

	const boundingRect = heroImg.getBoundingClientRect();
	const offsetX = clientX - boundingRect.left;
	const offsetY = clientY - boundingRect.top;

	const yRotation = ((offsetX - width / 2) / width) * 20;
	const xRotation = ((offsetY - height / 2) / height) * 20;

	const string = `perspective(500px) scale(1.1) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;

	heroImg.style.transform = string;
});

heroImg.addEventListener('mouseout', () => {
	heroImg.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)';
});


// * CHANGING IMAGE (PROJECT CARDS)

const cardImg1 = document.querySelector('#card__image1');
const cardImg2 = document.querySelector('#card__image2');
const cardImg3 = document.querySelector('#card__image3');

log(cardImg1, cardImg2, cardImg3)

window.addEventListener('resize', () => {
	if (window.innerWidth < 768) {
		cardImg1.src = './img/WWF_eventpage_small.png'
		cardImg2.src = './img/WWF_website_small.png'
	} else {
		cardImg1.src = './img/WWF_eventpage.png'
		cardImg2.src = './img/WWF_website.png'
	}
})