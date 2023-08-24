import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IsBoolean, IsNotEmpty} from 'class-validator';
@Entity({name: 'todos'})
export class Todo extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    @IsNotEmpty({ message: "Title is required" })
    title: string;

    @Column()
    @IsNotEmpty({ message: "Description is required" })
    description: string;

    @Column()
    @IsBoolean({ message: "Status must be a boolean value" })
    status: boolean;

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}