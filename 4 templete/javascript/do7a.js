// ********************* Random Pages *********************
let myImg = '';
let myImgName = '';
let imgs = document.querySelectorAll('img');
let animals = document.querySelectorAll('span.animal-name');
let imgsArray = [
	{
		imageName: 'Pengien',
		image: './png/2.png',
	},
	{
		imageName: 'Dog',
		image: './png/3.png',
	},
];
// Random Function
setInterval(() => {
	let randomNum = Math.random();
	let randomValue = parseInt(randomNum * imgsArray.length);
	myImg = imgsArray[randomValue].image;
	myImgName = imgsArray[randomValue].imageName;
	console.log(myImg);
	imgs.forEach((img) => {
		img.setAttribute('src', myImg);
	});
	animals.forEach((animal) => {
		animal.innerHTML = myImgName;
	});
}, 4000);

console.log(imgs);
// snap scroll ............%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// ********* by Wheel ************
const slider = document.querySelector('.scroll-bar');

slider.addEventListener('wheel', (e) => {
	e.preventDefault();
	slider.scrollLeft += e.deltaY;
});

// Scroll by Draging.....................

let isDown = false;
let startX;
let scrollX;

slider.addEventListener('mousedown', (e) => {
	e.preventDefault();
	isDown = true;
	slider.classList.add('active');
	startX = e.pageX - slider.offsetLeft;
	scrollX = slider.scrollLeft;
	console.log(startX, scrollX);
});
slider.addEventListener('mouseleave', () => {
	isDown = false;
	slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
	isDown = false;
	slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
	if (!isDown) return;
	e.preventDefault();
	const x = e.pageX - slider.offsetLeft;
	const walk = (x - startX) * 2;
	slider.scrollLeft = scrollX - walk;
});

// $$$$$$$$$$$$$$$$$$$$$$$$$$$ Scrolling Animation $$$$$$$$$$$$$$$$$$$$$$$$$$$
let html = document.documentElement;
let viewHeight = html.clientHeight;
// $$$$$$$$$$$$$$$$$$$$$$$$$$$  Page One Scrolling $$$$$$$$$$$$$$$$$$$$$$$$$$$
let pageOne = document.querySelector('.page-one');
let pageTwo = document.querySelector('.page-two');
let pageThree = document.querySelector('.page-three');

window.addEventListener('scroll', () => {
	let pageOneScroll = html.scrollTop;
	let pageOneHeight = pageOne.offsetHeight;
	let pageOneBottomToTop = pageOne.offsetTop;
	let pageOneTop = pageOneBottomToTop - pageOneHeight;
	let scrollInpageOne = pageOneScroll - pageOneTop;
	let pageOneScrollPerc = (scrollInpageOne / pageOneHeight) * 100;
	html.style.setProperty('--scroll-one', Math.min(pageOneScrollPerc, 100));
});
// $$$$$$$$$$$$$$$$$$$$$$$$$$$  Page Two Scrolling $$$$$$$$$$$$$$$$$$$$$$$$$$$

window.addEventListener('scroll', () => {
	let pageTwoScroll = html.scrollTop;
	let pageTwoHeight = pageTwo.offsetHeight;
	let pageTwoBottomToTop = pageTwo.offsetTop;
	let pageTwoTop = pageTwoBottomToTop - pageTwoHeight;
	let scrollInpageTwo = pageTwoScroll - pageTwoTop;
	let pageTwoScrollPerc = (scrollInpageTwo / pageTwoHeight) * 100;
	html.style.setProperty('--scroll-two', Math.min(pageTwoScrollPerc, 100));
	// console.log("scroll = " + pageTwoScroll);
	// console.log("pageOneHeight = " + pageTwoHeight);
	// console.log("pageOneBottomToTop = " + pageTwoBottomToTop);
	// console.log("pageOneTop = " + pageTwoTop);
	// console.log("scrollInpageOne = " + scrollInpageTwo);
	// console.log("pageOneScrollPerc = " + pageTwoScrollPerc);
	// console.log("**********************");
});
// $$$$$$$$$$$$$$$$$$$$$$$$$$$  Page Three Scrolling $$$$$$$$$$$$$$$$$$$$$$$$$$$

window.addEventListener('scroll', () => {
	let pageThreeScroll = html.scrollTop;
	let pageThreeHeight = pageThree.offsetHeight;
	let pageThreeBottomToTop = pageThree.offsetTop;
	let pageThreeTop = pageThreeBottomToTop - pageThreeHeight;
	let scrollInpageThree = pageThreeScroll - pageThreeTop;
	let pageThreeScrollPerc = (scrollInpageThree / pageThreeHeight) * 100;
	html.style.setProperty('--scroll-three', Math.min(pageThreeScrollPerc, 100));
});
