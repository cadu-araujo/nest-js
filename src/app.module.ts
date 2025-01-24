import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PessoaModule } from './pessoa/pessoa.module';
import { Pessoa } from './pessoa/entities/pessoa.entity';


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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
