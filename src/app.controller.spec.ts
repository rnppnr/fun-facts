import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return a Fact object', () => {
      expect(appController.getFact()).toHaveProperty('id');
      expect(appController.getFact()).toHaveProperty('fact');
      expect(appController.getFact()).toHaveProperty('source');
    });
  });
});
