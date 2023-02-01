import { Test, TestingModule } from '@nestjs/testing';
import { CatsController  } from './cats.controller';
import { CatsService } from './cats.service';

describe('AppController', () => {
  let appController: CatsController ;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CatsController ],
      providers: [CatsService],
    }).compile();

    appController = app.get<CatsController >(CatsController );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      //expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
