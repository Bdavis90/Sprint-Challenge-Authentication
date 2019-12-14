const db = require("../database/dbConfig");

const find = () => {
  return db("users");
};

const findBy = filter => {
  return db("users").where(filter);
};

const add = user => {
  return db("users").insert(user);
};

module.exports = { find, findBy, add };
