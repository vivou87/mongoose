const mongoose = require("mongoose");
const express = require("express");
const app = express();

const Person = require("./models/Person");

mongoose
  .connect(
    "mongodb+srv://olfakouki:olfapro2023@cluster0.hwolmml.mongodb.net/gmc?retryWrites=true&w=majority"
  )
  .then(() => console.log("connected to db"))
  .catch((err) => console.log(err));

//   let newPerson =Person({
//     name:"wafa",
//     age:30,
//     favoritefoods:["pizza","kebda","mechwi"]
//   });
//   newPerson.save()
//   .then(()=>console.log("person added succefully"))
//   .catch((err)=>console.log(err));

// Person.insertMany([
//   {
//     name: "Ahmed",
//     age: 25,
//     favoritefoods: ["Pizza", "lasagne", "sandwitch"],
//   },
//   {
//     name: "olfa",
//     age: 36,
//     favoritefoods: ["escalope", "lasagne", "healthyfood"],
//   },
//   {
//     name: "wafa",
//     age: 29,
//     favoritefoods: ["kasekrout", "loubeya", "jelbena"],
//   },
//   {
//     name: "dorra",
//     age: 22,
//     favoritefoods: ["couscous", "seafood", "mokli"],
//   },
//   {
//     name: "nour",
//     age: 12,
//     favoritefoods: ["crepe", "mloukeya", "kafteji"],
//   },
// ]);

// Person.find().select({age:0}).then((res)=>console.log(res))
// .catch((err)=>console.log(err));

// Person.findOne({ _id: "653f9a1a8e514916d3001bdc" })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// Person.findOne({favoritefoods:{$all:["Pizza"]}})
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));

// Person.findOne({ favoritefoods: "Pizza" } )
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// Person.findById("653f9a1a8e514916d3001bde")
//   .then((res) => console.log(res))
//   .catch((er) => console.log(err));

// Person.findByIdAndUpdate(
//   "653f9a1a8e514916d3001bde",
//   { $push: { favoritefoods: "mlewi" } },
//   { new: true }
// )
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// Person.deleteMany({name:"wafa"}).then(()=>console.log("person was deleted"))
// .catch((err)=>console.log(err));

app.listen(5000, () => {
  console.log("server is running");
});
