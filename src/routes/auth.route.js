const router = require("express").Router();
const controller = require("../controller");

router.post("/signup", controller.signup);
router.post("/login", controller.login);

router.get(
  "/say",
  controller.sayHello
);
router.get("/user", controller.getUsers);
router.get("/user/:userId", controller.user);
router.put("/user/:userId", controller.updateUser);
router.delete("/user/:userId", controller.deleteUser);

module.exports = router;
