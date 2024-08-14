const menu = [
  {
    id: 301,
    name: "Pasta",
    category: "Main Course",
    price: 12.99,
    ingredients: ["Penne", "Tomato Sauce", "Parmesan", "Basil"],
  },
  {
    id: 302,
    name: "Caesar Salad",
    category: "Salad",
    price: 8.99,
    ingredients: ["Lettuce", "Croutons", "Caesar Dressing", "Parmesan"],
  },
  {
    id: 303,
    name: "Burger",
    category: "Main Course",
    price: 10.99,
    ingredients: ["Beef Patty", "Lettuce", "Tomato", "Cheese", "Bun"],
  },
  {
    id: 304,
    name: "French Fries",
    category: "Side Dish",
    price: 4.99,
    ingredients: ["Potatoes", "Salt", "Oil"],
  },
  {
    id: 305,
    name: "Cheesecake",
    category: "Dessert",
    price: 6.99,
    ingredients: ["Cream Cheese", "Graham Cracker Crust", "Strawberries"],
  },
];


const getTheMenuItemName = (menuItem) => menuItem.name;
console.log(getTheMenuItemName(menu[0]))

const isMenuItemInCategory = (menuItem, category) => menuItem.category == category ? true:false;
console.log(isMenuItemInCategory(menu[1], "Salad"))

const addMenuItem = (menu, menuItem) => {
  	menu.push(menuItem);
	return menu;
}
const newMenuItem = {
   id: 306,
   name: "Pizza",
   category: "Main Course",
   price: 14.99,
   ingredients: ["Dough", "Tomato Sauce", "Mozzarella", "Pepperoni"],
};
console.log(addMenuItem(menu, newMenuItem))


const countMainCourseItems = (menu) => {
	let count = 0;
	menu.forEach(courseItem => courseItem.category == "Main Course" ? count += 1 : false);
	return count;
}
console.log(countMainCourseItems(menu))


const listMenuItemNamesByCategory = (menu, category) =>{
  let items = menu.filter(menuItem => menuItem.category == category ? menuItem:false);
  return items.map(item => item.name)
} 
console.log(listMenuItemNamesByCategory(menu,"Main Course"))

const getCheapestMenuItem = (menu) => {
	let cheapestItem = menu[0];
	menu.forEach(menuItem => menuItem.price < cheapestItem.price ? cheapestItem = menuItem: false);
	return cheapestItem;
}
console.log(getCheapestMenuItem(menu))


const getMenuItemsByIngerdient = (menu, ingredient) => menu.filter(menuItem => menuItem.ingredients.find((i)=> i == ingredient) == undefined ? false: menuItem);
console.log("No Parmesan for you:",getMenuItemsByIngerdient(menu, "Parmesan"))

const removeMenuItemById = (menu, id) => menu.filter(menuItem => menuItem.id == id ? false: true);
console.log("remove:",removeMenuItemById(menu, 302))


