import data from "./repositories.js";

export const getAllDishes = () => {
  return data.dishes;
};

export const getDish = (dishName) => {
  return data.dishes.find((item) => {
    const itemName = item.name.toLowerCase();
    if (itemName.includes(dishName)) {
      return true;
    }
    return false;
  });
};
