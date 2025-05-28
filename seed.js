require('dotenv').config();
const mongoose = require('mongoose');
const Employee = require('./models/employee');

const seedData = [
  {
    name: "Aino Virtanen",
    title: "HR Manager",
    salary: 7000,
    phone: "040-1234567",
    email: "aino.virtanen@example.com",
    animal: "🦉",
    startDate: "2010-04-01",
    location: "Helsinki",
    department: "Department",
    skills: []
  },
  {
    name: "Mikko Nieminen",
    title: "Software Developer",
    salary: 7001,
    phone: "045-2345678",
    email: "mikko.nieminen@example.com",
    animal: "🦊",
    startDate: "2014-04-13",
    location: "Espoo",
    department: "IT",
    skills: ["JavaScript", "React", "Node.js"]
  },
  {
    name: "Sofia Korhonen",
    title: "Marketing Specialist",
    salary: 11113,
    phone: "050-3456789",
    email: "sofia.korhonen@example.com",
    animal: "🐈",
    startDate: "2023-11-10",
    location: "helsinki",
    department: "Marketing",
    skills: ["SEO", "Content Creation", "Analytic"]
  },
  {
    name: "Janne Lehtonen",
    title: "Product Manager",
    salary: 5601,
    phone: "044-4567890",
    email: "janne.lehtonen@example.com",
    animal: "🐺",
    startDate: "2019-04-13",
    location: "Helsinki",
    department: "Product",
    skills: ["Agile", "Roadmapping", "Stakeholder Management"]
  },
  {
    name: "Emilia Laine",
    title: "UX Designer",
    salary: 4700,
    phone: "046-5678901",
    email: "emilia.laine@example.com",
    animal: "🦆",
    startDate: "2024-12-01",
    location: "Turku",
    department: "Design",
    skills: ["Figma", "User Research", "Prototyping"]
  },
  {
    name: "Tuomas Salmi",
    title: "Data Analyst",
    salary: 4900,
    phone: "041-6789012",
    email: "tuomas.salmi@example.com",
    animal: "🦡",
    startDate: "2019-11-18",
    location: "Jyväskylä",
    department: "Analytics",
    skills: ["SQL", "Python", "Data Visualization"]
  },
  {
    name: "Laura Mäkinen",
    title: "Customer Support Lead",
    salary: 3901,
    phone: "050-7890123",
    email: "laura.makinen@example.com",
    animal: "🐬",
    startDate: "2016-07-22",
    location: "Helsinki",
    department: "Customer Service",
    skills: ["CRM", "Problem Solving", "Team Management"]
  }
];

async function seedDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    await Employee.deleteMany({});
    console.log("Cleared old employee data");

    await Employee.insertMany(seedData);
    console.log("Seeded new employee data");

    await mongoose.connection.close();
    console.log("Disconnected from MongoDB");
  } catch (err) {
    console.error("Error seeding data:", err);
  }
}

seedDB();
