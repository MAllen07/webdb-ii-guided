const knex = require("knex");
const router = require("express").Router();

const config = {
  client: "sqlite3",
  useNullAsDefault: true,
  connection: {
    filename: "./data/rolex.db3"
  }
};

const db = knex(config);

router.get("/", (req, res) => {
  //Select * from roles
  db("roles")
    .then(records => res.status(200).json(records))
    .catch(err => res.status(500).json(err));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  //Select * from roles where id=req.params.id
  db("roles")
    .where({ id: id })
    .first()
    .then(results => res.status(200).json(results))
    .catch(err => res.status(500).json(err));
});

router.post("/", (req, res) => {
  const role = req.body;
  //insert into roles ( name ) values ( 'red.body' )
  db("roles")
    .insert(role)
    .then(ids => res.status(201).json(ids))
    .catch(err => res.status(500).json(err));
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const role = req.body;
  //update roles set name = req.body.name  where id=req.params.id
  db("roles")
    .where({ id })
    .update(role)
    .then(count => res.status(200).json(count))
    .catch(err => res.status(500).json(err));
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  //delete from roles where id = req.params.id
  db("roles")
    .where({ id })
    .del()
    .then(count => res.status(200).json(count))
    .catch(err => res.status(500).json(err));
});

module.exports = router;
