"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verifyJWT_1 = __importDefault(require("../middlewares/verifyJWT"));
const verifyRole_1 = __importDefault(require("../middlewares/verifyRole"));
const userController_1 = require("../controllers/userController");
const router = (0, express_1.Router)({ caseSensitive: true }).use(verifyJWT_1.default).use((0, verifyRole_1.default)("employee"));
router.route("/tasks").get(userController_1.getTasks);
router.route("/tasks/:id").get(userController_1.getDetails).patch(userController_1.updateDetails);
router.route("/").get(userController_1.verify);
exports.default = router;
