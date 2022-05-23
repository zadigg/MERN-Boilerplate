const router = require("express").Router();
const userController = require("../controllers/UserControllers.js");

module.exports = (app) => {
  router.get("/", userController.findAll);
  router.post("/", userController.createUser);
  router.delete("/:id", userController.deleteUser);
  router.put("/:id", userController.updateUser);
  app.use("/api/users", router);
};
