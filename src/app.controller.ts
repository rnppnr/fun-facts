import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Fact } from './interfaces/fact.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getFact(): Fact {
    return this.appService.getFact();
  }
}
