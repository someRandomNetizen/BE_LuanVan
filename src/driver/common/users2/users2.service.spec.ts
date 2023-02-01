import { Test, TestingModule } from '@nestjs/testing';
import { UsersService2 } from './users2.service';

describe('UsersService', () => {
  let service: UsersService2;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService2],
    }).compile();

    service = module.get<UsersService2>(UsersService2);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
