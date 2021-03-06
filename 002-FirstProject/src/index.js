const express = require('express');
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.json());

const customers = [];

app.get("/account", (req, res) => {
  return res.json();
})

app.post("/account", (req, res) => {
  const { cpf, name } = req.body;

  const customerAlreadyExists = customers.some(
    (customer) => customer.cpf === cpf
  );

  if (customerAlreadyExists) {
    return res.status(400).json({ error: "Customer already exists!" })
  }

  customers.push({
    cpf,
    name,
    id: uuidv4(),
    statment: [],
  });

  return res.status(201).send();
});

app.listen(3333);
console.log('Server is running! 👻')``