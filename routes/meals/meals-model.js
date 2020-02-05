const db = require("../../data/dbConfig");

module.exports = {
  getAllMeals,
  insert,
  addMeal,
  deleteMeal
};

function getAllMeals() {
  return db("meals");
};

function insert(meal) {
  return db("meals")
    .insert(meal);
};

async function addMeal(meal) {
  const [id] = await db("meals").insert(meal, "id");
  return findMealsById(id);
};

function findMealsById(id) {
  return db("meals")
    .where({ id })
    .first()
};

function deleteMeal(meal) {
  
}