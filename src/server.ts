import dotenv from 'dotenv';
import app from './app';
import { AppDataSource } from './connection/db.connection';

dotenv.config();

const port = process.env.PORT || 3001;

async function main() {
    try {
       await AppDataSource.initialize();
       console.log("Data Source has been initialized!")
        app.listen(port, () => {
            console.log(`Server is running on the port ${port}`);
        })
    } catch (error) {
        console.error("Error during Data Source initialization", error)
    }
}

main();

