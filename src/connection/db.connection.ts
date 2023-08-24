import { DataSource } from "typeorm";
import dotenv from 'dotenv';
import { Todo } from "../entities/todo.entity";
dotenv.config();

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: process.env.PSQL_USERNAME,
    password: process.env.PSQL_PASSWORD,
    database: process.env.PSQL_DATABASE,
    entities: [
       Todo
    ],

})


