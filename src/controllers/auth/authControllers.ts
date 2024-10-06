import { UserRepository } from "@repositories/userRepositories";
import { UserService } from "@services/userService";
import { Request, Response } from "express";
import { IUserRepository, IUserService, User } from "types/UsersTypes";

const userRepository: IUserRepository = new UserRepository();
const userService: IUserService = new UserService(userRepository);

export const registerUser = async (req: Request, res: Response) => {
    try {
        const { email }: User = req.body;
        const userExists = await userService.findUsersByEmail(email);
        if(userExists) return res.status(400).json({message: "Email already exist!!!"});

        const newUser = await userService.createUser(req.body);

        res.status(201).json(newUser);

    } catch (error) {
        console.log('error :>> ', error);
        res.status(500).json(error);
    }
}