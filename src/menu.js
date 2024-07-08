const menuItems = [
	{
		name: "Garlic Bread",
		price: 4.95,
		description: "Add cheese +€1",
		category: "Starter",
	},
	{
		name: "Soup of The Day",
		price: 6.95,
		description: "Served with brown bread / roll",
		category: "Starter",
	},
	{
		name: "Buffalo Wings",
		price: 9.95,
		description: "Hot sauce, celery & blue cheese dip",
		category: "Starter",
	},
	{
		name: "Deep Fried Mushrooms",
		price: 7.95,
		description: "Garlic & chive mayonnaise",
		category: "Starter",
	},
	{
		name: "Seafood Chowder",
		price: 9.95,
		description: "todays fresh seafood, cream & jameson whiskey",
		category: "Starter",
	},
	{
		name: "Homemade 8oz Beef Burger",
		price: 15.95,
		description: "Lettuce, tomato, pickle",
		category: "Main",
	},
	{
		name: "Homemade 8oz Beef Burger",
		price: 15.95,
		description: "Lettuce, tomato, pickle",
		category: "Main",
	},
	{
		name: "Sirloin Steak 6oz",
		price: 22.95,
		description: "",
		category: "Main",
	},
	{
		name: "Rib Eye 10oz",
		price: 31.95,
		description: "",
		category: "Main",
	},
	{
		name: "ribs & Wings",
		price: 15.95,
		description:
			"Slow & low BBQ ribs, crispy buffalo chicken wings, served with french fries",
		category: "Main",
	},
	{
		name: "Roast stuffed chicken & bacon",
		price: 19.95,
		description: "Creamy mash potato and mushroom sauce",
		category: "Main",
	},
	{
		name: "Fries",
		price: 4.5,
		description: "",
		category: "Side",
	},
	{
		name: "Parmesan Fries",
		price: 5.0,
		description: "",
		category: "Side",
	},
	{
		name: "House Salad",
		price: 4.5,
		description: "",
		category: "Side",
	},
	{
		name: "Sautéed Mushrooms & Onions",
		price: 4.0,
		description: "",
		category: "Side",
	},
	{
		name: "Seasonal Vegetables",
		price: 4.0,
		description: "",
		category: "Side",
	},
	{
		name: "Coleslaw",
		price: 4.0,
		description: "",
		category: "Side",
	},
	{
		name: "Onion rings",
		price: 5.0,
		description: "",
		category: "Side",
	},
	{
		name: "Ice Cream",
		price: 3.5,
		description: "V cold",
		category: "Dessert",
	},
	{
		name: "Diet Coke",
		price: 4.0,
		description: "",
		category: "Drink",
	},
	{
		name: "Coke",
		price: 4.0,
		description: "",
		category: "Drink",
	},
	{
		name: "Sprite",
		price: 4.0,
		description: "",
		category: "Drink",
	},
];

function menuPage() {
	content.innerHTML = "";
	content.innerHTML = `<div class="menu-header">
    <h3>Our Menu</h3>
    <p>Each and every dish is meticulously prepared by our chefs with the freshest local ingredients each day from local producers</p>
    </div>`;

	function showMenu(menuItems) {
		const starterContainer = document.createElement("div");
		const starterHeading = document.createElement("H3");
		const mainContainer = document.createElement("div");
		const mainHeading = document.createElement("H3");
		const dessertContainer = document.createElement("div");
		const dessertHeading = document.createElement("H3");
		const drinkContainer = document.createElement("div");
		const drinkHeading = document.createElement("H3");
		const sideContainer = document.createElement("div");
		const sideHeading = document.createElement("H3");
		starterHeading.textContent = "Starters";
		content.append(starterHeading);
		starterContainer.classList.add("starters");
		content.append(starterContainer);

		mainHeading.textContent = "Mains";
		content.append(mainHeading);
		mainContainer.classList.add("mains");
		content.append(mainContainer);

		dessertHeading.textContent = "Desserts";
		content.append(dessertHeading);
		dessertContainer.classList.add("dessert");
		content.append(dessertContainer);

		drinkHeading.textContent = "Drinks";
		content.append(drinkHeading);
		drinkContainer.classList.add("drinks");
		content.append(drinkContainer);

		sideHeading.textContent = "Sides";
		content.append(sideHeading);
		sideContainer.classList.add("sides");
		content.append(sideContainer);
		menuItems.forEach((item) => {
			if (item.category == "Starter") {
				const menuItem = document.createElement("div");
				menuItem.classList.add("menu-item");
				menuItem.innerHTML = `
                <div class="menu-item-header">
                <h4 class="item-name">${item.name}</h4>
                 <div class="price-wrapper"><p class="item-price">€ ${item.price}</p></div>
                </div>
                <div class="menu-item-body>
                <p class="item-description">${item.description}</p>
                </div>`;
				starterContainer.append(menuItem);
			}
			if (item.category == "Main") {
				const menuItem = document.createElement("div");
				menuItem.classList.add("menu-item");
				menuItem.innerHTML = `
                <div class="menu-item-header">
                <h4  class="item-name">${item.name}</h4>
                <div class="price-wrapper"><p class="item-price">€ ${item.price}</p></div>
                </div>
                <div class="menu-item-body>
                <p class="item-description">${item.description}</p>
                </div>`;
				mainContainer.append(menuItem);
			}
			if (item.category == "Dessert") {
				const menuItem = document.createElement("div");
				menuItem.classList.add("menu-item");
				menuItem.innerHTML = `
                <div class="menu-item-header">
                <h4  class="item-name">${item.name}</h4>
                 <div class="price-wrapper"><p class="item-price">€ ${item.price}</p></div>
                </div>
                <div class="menu-item-body>
                <p class="item-description">${item.description}</p>
                </div>`;
				dessertContainer.append(menuItem);
			}
			if (item.category == "Drink") {
				const menuItem = document.createElement("div");
				menuItem.classList.add("menu-item");
				menuItem.innerHTML = `
                <div class="menu-item-header">
                <h4  class="item-name">${item.name}</h4>
                 <div class="price-wrapper"><p class="item-price">€ ${item.price}</p></div>
                </div>
                <div class="menu-item-body>
                <p class="item-description">${item.description}</p>
                </div>`;
				drinkContainer.append(menuItem);
			}
			if (item.category == "Side") {
				const menuItem = document.createElement("div");
				menuItem.classList.add("menu-item");
				menuItem.innerHTML = `
                <div class="menu-item-header">
                <h4  class="item-name">${item.name}</h4>
                <div class="price-wrapper"><p class="item-price">€ ${item.price}</p></div>
                </div>
                <div class="menu-item-body>
                <p class="item-description">${item.description}</p>
                </div>`;
				sideContainer.append(menuItem);
			}
		});
	}
	showMenu(menuItems);
}

export default menuPage;
