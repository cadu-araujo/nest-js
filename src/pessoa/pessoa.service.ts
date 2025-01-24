import { Injectable } from '@nestjs/common';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pessoa } from './entities/pessoa.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PessoaService {

  constructor(
    @InjectRepository(Pessoa) private pessoaRepository: Repository<Pessoa>,
  ){}
  create(createPessoaDto: CreatePessoaDto) {
    try{
        const pessoa = this.pessoaRepository.create(createPessoaDto);
        return this.pessoaRepository.save(pessoa);
    }catch(e){
      return e;
    }
  }

  findAll() {
    try{
      return this.pessoaRepository.find();
    }catch(e){
        return e;
      }
  }

  findOne(id: number) {
    try{
        return this.pessoaRepository.findOne({where: {id}});
        }catch(e){
      return e;
    }
  }

  update(id: number, updatePessoaDto: UpdatePessoaDto) {
    try{
        return this.pessoaRepository.update(id, updatePessoaDto);
    }catch(e){
      return e;
    }
  }

  remove(id: number) {
    try{
      return this.pessoaRepository.delete(id);
    }catch(e){
      return e;
    }
  }

}
