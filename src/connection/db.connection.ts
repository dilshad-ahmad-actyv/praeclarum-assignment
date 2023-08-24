import { DataSource } from "typeorm";
import dotenv from 'dotenv';
import { Todo } from "../entities/todo.entity";
dotenv.config();

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: 'postgres',
    password: 'password',
    database: 'typescript_psql_crud',
    entities: [
       Todo
    ],

})


