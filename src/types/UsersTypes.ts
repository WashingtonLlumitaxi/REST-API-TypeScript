import { Document } from "mongoose";
import { Query, Repository } from "./RepositoryTypes";

export interface User extends Document{
    //id: string; //is not necesary because use mongo
    name: string;
    username: string;
    email: string;
    password: string;
}

export interface IUserRepository extends Repository<User> {
    findOne(query: Query): Promise<User | null>
}

//Esquema of services outline or business logic
export interface IUserService {
    createUser(user: User): Promise<User>;
    findUsers(): Promise<User[]>;
    findUsersById(id: string): Promise<User | null>;
    findUsersByEmail(email: string): Promise<User | null>;
    updateUser(id: string, user: Partial<User>): Promise<User | null>;
    deleteUser(id: string): Promise<boolean>;
    
}