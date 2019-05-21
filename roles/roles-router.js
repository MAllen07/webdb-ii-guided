const knex = require("knex");
const router = require("express").Router();

//use this for each project  - its saying the database using and passing in path to the database
const config = {
  client: "sqlite3",
  useNullAsDefault: true,
  connection: {
    filename: "./data/rolex.db3"
  }
};
//call next - next is a function --valuable is sb to perform quieres 
const db = knex(config);

router.get("/", (req, res) => {
  //select * from roles
  db("roles")
    .then(records => res.status(200).json(records))
    .catch(err => res.status(500).json(err));
});

router.get("/:id", (req, res) => {
  // retrieve a role by id
  res.send("Write code to retrieve a role by id");
});

router.post("/", (req, res) => {
  // add a role to the database
  res.send("Write code to add a role");
});

router.put("/:id", (req, res) => {
  // update roles
  res.send("Write code to modify a role");
});

router.delete("/:id", (req, res) => {
  // remove roles (inactivate the role)
  res.send("Write code to remove a role");
});

module.exports = router;
