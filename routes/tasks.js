const express = require("express");
const router = express.Router();
const Task = require("../models/Task");


router.post("/create", async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).send(task);
  } catch (error) {
    res.status(500).send({ message: "Error al crear la tarea", error });
  }
});


router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).send(tasks);
  } catch (error) {
    res.status(500).send({ message: "Error al obtener tareas" });
  }
});


router.put("/id/:_id", async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params._id, req.body, {
      new: true,
    });
    res.status(200).send(task);
  } catch (error) {
    res.status(500).send({ message: "Error al actualizar" });
  }
});

router.delete("/id/:_id", async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params._id);
    res.status(200).send({ message: "Tarea eliminada con éxito" });
  } catch (error) {
    res.status(500).send({ message: "Error al eliminar" });
  }
});

module.exports = router;
