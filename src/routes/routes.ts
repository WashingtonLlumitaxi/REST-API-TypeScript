import { RolesRepository } from "@repositories/rolesRepositories";
import { UserRepository } from "@repositories/userRepositories";
import { RolesService } from "@services/RolesService";
import { UserService } from "@services/userService";
import { Router } from "express";
import { IUserRepository, IUserService, User } from "types/UsersTypes";
import { IRolesRepository, IRolesService, Roles } from "types/RolesTypes";
import { createUser, deleteUser, findUsers, findUsersById, updateUser } from "@controllers/usersControllers";
import { createRoles, deleteRoles, findRoles, findRolesById, updateRoles } from "@controllers/rolesControllers";
import { loginUser, registerUser } from "@controllers/auth/authControllers";

const router = Router();

//dependency inyection
//const userRepository: IUserRepository = new //UserRepository();
//const userService: IUserService = new UserService(userRepository);


//const rolesRepository: IRolesRepository = new RolesRepository();
//const rolesService: IRolesService = new RolesService(rolesRepository);


export default () => {
    router.get("/health", (req, res) => {
        res.send("Api is Healthy!!!");
    });

    //Auth Routes
    router.post("/auth/register", registerUser);
    router.post("/auth/login", loginUser);
   


    //User Routes
    router.get("/users", findUsers);
    router.get("/users/:id", findUsersById);
    router.post("/users", createUser);
    router.put("/users/:id", updateUser);
    router.delete("/users/:id", deleteUser);


    //Roles Roles
    router.get("/roles", findRoles);
    router.get("/roles/:id", findRolesById);
    //Create
    //router.post("/roles", async(req, res) => {
    //  const newRoles: Roles = req.body;
    //  const result = await rolesService.createRoles//(newRoles);
    //  res.json(result);

    //});
    router.post("/roles", createRoles);
    router.put("/roles/:id", updateRoles);
    router.delete("/roles/:id", deleteRoles);


    return router;
};