import mysql from "mysql2";

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "root",
  database: "dishes",
});

const getAllDishes = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM dishes", (err, results, fields) => {
      resolve(results);
    });
  });
};

const getDish = (dishId) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT * FROM dishes WHERE id = ?",
      [dishId],
      (err, results, fields) => {
        if (!results?.length) {
          reject(new Error("Dish does not exist"));
        } else {
          resolve(results); // results contains rows returned by server
        }
      }
    );
  });
};

const createDish = (dish) => {
  console.log({ dish });
  connection.query(
    "INSERT INTO dishes(name, time_prepare, steps) VALUES (?,?,?)",
    [dish.dishName, dish.timePrepare, dish.steps],
    (error, results) => {
      if (error) return res.json({ error: error });
    }
  );
};

export default { getAllDishes, getDish, createDish };
