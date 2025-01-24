import { ApiProperty } from "@nestjs/swagger";

export class CreatePessoaDto {
    @ApiProperty()
    nome:string;

    @ApiProperty()
    sobrenome:string;

    @ApiProperty()
    dataNascimento:Date;
}
