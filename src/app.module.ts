import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PessoaModule } from './pessoa/pessoa.module';
import { Pessoa } from './pessoa/entities/pessoa.entity';
import { CarroModule } from './carro/carro.module';
import { CarroController } from './carro/carro.controller';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'banco_dra',
      entities: [Pessoa],
      synchronize: true,
    }),
    PessoaModule,
    CarroModule,
  ],
  controllers: [CarroController],
  providers: [],
})
export class AppModule {}
