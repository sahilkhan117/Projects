// *********** Hero Section **************
let ImageUrls = [ "i8.png", "i1.png", "i2.png", "i3.png", "i4.png", "i5.png", "i6.png", "i7.png", "i8.png", "i1.png",
];
let img_containers = document.querySelectorAll("#Dish-list >  img");
let left = document.querySelector("#left");
let colors = [ "81d3b2", "dd6767", "88bb88", "dc9048", "ffeeee", "99ffff", "f2a145", "a1f3d2", "81d3b2",
];
let dish_name = document.querySelector("#dish-name");
let dish_ns = [ "Dal Makhani", "Shahi Paneer", "Salad", "Egg Curry", "Kheer", "Biryani", "Rajma Chawal", "Chole Bhatoore", "Dal Makhani", "Shahi Paneer",
];

let dish_des = document.querySelector("#dish-content")
let dis_dess = [ "A rich and creamy North Indian dish made from slow-cooked black lentils and kidney beans, flavored with butter, cream, and aromatic spices.", "A royal dish featuring soft paneer cubes cooked in a luscious, creamy tomato and cashew-based gravy, flavored with cardamom, saffron, and rich spices.", "A refreshing combination of fresh vegetables or fruits, often dressed with olive oil, lemon, or herbs, providing a healthy, light accompaniment to meals.", "Hard-boiled eggs simmered in a flavorful onion, tomato, and spice-based gravy, creating a hearty and comforting dish commonly served with rice or bread.", "A traditional Indian rice pudding made by slow-cooking rice in milk and sugar, flavored with cardamom, and garnished with nuts and saffron.", "A fragrant rice dish cooked with marinated meat or vegetables, layered with spices, fried onions, and herbs, often served with yogurt or raita.", "A comforting North Indian dish of red kidney beans cooked in a spiced tomato gravy, served over steamed rice, perfect for a hearty meal.", "A popular Punjabi dish of spicy chickpea curry (chole) served with deep-fried, fluffy bread (bhature), making for a filling and flavorful combination.",
]

let dish_containt = document.querySelector("#dish-content");
let p = document.querySelector("#dish-prices");
let cutprice = p.firstElementChild;
let price = p.lastElementChild;
let prices = [189, 99, 199, 249, 299, 349, 399, 449];
// console.log(img_containers);
// time interval
k = 1;
setInterval(() => {
	left.style.transition = "all 0.5s ease";
	let i = k;
	dish_name.innerText = dish_ns[i];
	dish_des.innerText = dis_dess[i];
	left.style.backgroundColor = "#" + colors[i];
	price.innerHTML = `₹${prices[i]}\\-`;
	cutprice.innerHTML = `₹${prices[i] + 50}\\-`;
	img_containers.forEach((img) => {
		img.setAttribute("src", `img/${ImageUrls[i++]}`);
	});
	k == ImageUrls.length - 3 ? (k = 0) : k++;
}, 2000);



// *********** Menu Section **************
let menu_title = document.querySelectorAll("#Menu > #mop > #op");
let CardData = [
	[
		{ src: "img/b/1.jpeg", title: "Burrito", price: "₹189" },
		{ src: "img/b/2.jpeg", title: "Pan Cakes", price: "₹99" },
		{ src: "img/b/3.jpeg", title: "Egg Sandwich", price: "₹199" },
		{ src: "img/b/4.jpeg", title: "French Toast", price: "₹249" },
		{ src: "img/b/5.jpeg", title: "Oat Meel", price: "₹299" },
		{ src: "img/b/6.jpeg", title: "Vegane Pan Cakes", price: "₹349" },
	],
	[
		{ src: "img/l/1.jpeg", title: "Chicken and Goat Cheese", price: "₹399" },
		{ src: "img/l/2.jpeg", title: "Creemy Veg Soup", price: "₹449" },
		{ src: "img/l/3.jpeg", title: "Pizza", price: "₹189" },
		{ src: "img/l/4.jpeg", title: "Veg Pulao", price: "₹99" },
		{ src: "img/l/5.jpeg", title: "Rajma & Rice", price: "₹199" },
		{ src: "img/l/6.jpeg", title: "White Sauce Pasta", price: "₹249" },
	],
	[
		{ src: "img/d/1.jpeg", title: "Began Ka Bharta", price: "₹299" },
		{ src: "img/d/2.jpeg", title: "Chicken Alfrado Pasta", price: "₹349" },
		{ src: "img/d/3.jpeg", title: "Creemy Tomato Pasta", price: "₹399" },
		{ src: "img/d/4.jpeg", title: "Grilled Lamb", price: "₹449" },
		{ src: "img/d/5.jpg", title: "Hyderabadi Haleem", price: "₹189" },
		{ src: "img/d/6.jpeg", title: "Butter Paneer", price: "₹99" },
	],
	[
		{ src: "img/dr/1.jpeg", title: "Coco Cola", price: "₹199" },
		{ src: "img/dr/2.jpg", title: "Pepsi", price: "₹249" },
		{ src: "img/dr/3.jpeg", title: "Lassi", price: "₹299" },
		{ src: "img/dr/4.jpeg", title: "Masala Chai", price: "₹349" },
		{ src: "img/dr/5.jpeg", title: "Mocktail", price: "₹399" },
		{ src: "img/dr/7.jpg", title: "Red Bull", price: "₹449" },
	],
];

// menu_title.firstElementChild.style.textDecoration = "underline #ff9d9d";
let menu_card = document.querySelectorAll(
	"#Menu > #menu-card-par > #menu-card"
);


let menuHead = document.querySelector("#menu-option");

console.log(menu_title[0]);
menu_title[0].style.fontWeight = "bold";
menu_title[0].style.setProperty("--w-mop-0", "100%");

menu_title.forEach((op, title_index) => {
	op.addEventListener("click", (e) => {
		menu_card.forEach((card, card_index) => {
			// console.log(card);
			card.firstElementChild.setAttribute(
				"src",
				CardData[title_index][card_index].src
			);
			card.firstElementChild.nextElementSibling.textContent =
				CardData[title_index][card_index].title;
			card.lastElementChild.textContent =
				CardData[title_index][card_index].price;
		});

		menu_title.forEach((op) => {
			op.style.textDecoration = "none";
			op.style.fontWeight = "normal";
			op.style.setProperty("--w-mop-0", "0%");
		});
		console.log(e.target);
		e.target.style.fontWeight = "bold";
		e.target.style.setProperty("--w-mop-0", "100%");
		console.log(e.target.querySelector("::after"))

		menuHead.textContent = e.target.textContent;
	});
});


