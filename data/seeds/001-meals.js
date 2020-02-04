
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("meals").insert([
    {
      restaurant_name: "Pizza Place",
      restaurant_type: "Italian",
      item_name: "Pepperoni Pizza",
      item_photo:
        "https://images.unsplash.com/photo-1544982503-9f984c14501a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
      food_rating: 5,
      item_comment: "Wow, pizza was really good! I loved the sauce!",
      wait_time: "About 10 minutes.",
      date_visited: "11-02-2018",
      user_id: 1
    },
    {
      restaurant_name: "The Taco Shop",
      restaurant_type: "Mexican",
      item_name: "Shredded Beef Tacos",
      item_photo:
        "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80",
      food_rating: 5,
      item_comment: "These tacos were awesome",
      wait_time: "There was no wait!",
      date_visited: "07-30-2018",
      user_id: 1
    },
    {
      restaurant_name: "Boy Burger",
      restaurant_type: "American",
      item_name: "The Original Cheese",
      item_photo:
        "https://images.unsplash.com/photo-1536510233921-8e5043fce771?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1971&q=80",
      food_rating: 3,
      item_comment: "Sloppy looking, and a little raw",
      wait_time: "We waited about 5 minutes",
      date_visited: "08-24-2017",
      user_id: 1
    },
    {
      restaurant_name: "We Are Yogurt",
      restaurant_type: "American",
      item_name: "Granola Yogurt Bowl",
      item_photo:
        "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2600&q=80",
      food_rating: 2,
      item_comment: "Yuck, not so good",
      wait_time: "We did take out. Took about 10 minutes",
      date_visited: "07-02-2016",
      user_id: 2
    },
    {
      restaurant_name: "Betty's Eggs",
      restaurant_type: "Breakfast",
      item_name: "Eggs Benedict",
      item_photo:
        "https://images.unsplash.com/photo-1477747219299-60f95c811fef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      food_rating: 5,
      item_comment: "Great hollandaise sauce!",
      wait_time: "15 minutes",
      date_visited: "09-17-2019",
      user_id: 2
    }
  ]);
};
