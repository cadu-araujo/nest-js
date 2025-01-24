import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pessoa {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nome: string;

    @Column()
    sobrenome: string;

    @Column()
    dataNascimento: Date;
}
