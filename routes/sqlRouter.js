import express from 'express';
import {getAllUsers,createUser,getSingleUser, updateUser, deleteUser} from "../controllers/userControllers.js";

const sqlRouter = express.Router();

sqlRouter
.route('/')
.get(getAllUsers)
.post(createUser);

sqlRouter
.route('./:id')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser)


export default sqlRouter