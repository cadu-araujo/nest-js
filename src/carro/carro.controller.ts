import { Controller, Get } from '@nestjs/common';

@Controller('carro')
export class CarroController {
    @Get()
    GetAll(){
        return 'rere'
    }
}
