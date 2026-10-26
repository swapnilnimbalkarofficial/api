import express, { response } from "express";

const APP = express();

APP.get("/api/users", function (req, res) {
  res.send(["Sakshi", "Prathvi", "Paras"]);
});

APP.post("/api/users/add", function (req, res) {
  res.send({ msg: "User Added in DB" });
});

APP.put("/api/users/update", function (req, res) {
  res.send({ msg: "User Updated in DB" });
});

APP.delete("/api/users/delete", function (req, res) {
  res.send({ msg: "User Deleted in DB" });
});

APP.listen(4002, function () {
  console.log("Application Started");
});

//https://localhost:4002/api/users ---> API Path
