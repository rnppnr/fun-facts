import { Injectable } from '@nestjs/common';
import * as facts from './data.json';
import { Fact } from './interfaces/fact.interface';

@Injectable()
export class AppService {
  getFact(): Fact {
    const id = Math.floor(Math.random() * facts.data.length);
    return {
      id: facts.data[id].id,
      fact: facts.data[id].fact,
      source: facts.data[id].source,
    };
  }
}
