require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')

const Employee = require('./models/employee')

app.use(cors());
app.use(express.json());

app.get("/employees", async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
});

app.post("/employees", async (req, res) => {
  const newEmployee = new Employee(req.body);
  const saved = await newEmployee.save();
  res.status(201).json(saved);
});

app.patch("/employees/:id", async (req, res) => {
  const updated = await Employee.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
