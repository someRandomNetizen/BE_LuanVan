import { Test, TestingModule } from '@nestjs/testing';
import { UsersService3 } from './users3.service';

describe('UsersService', () => {
  let service: UsersService3;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService3],
    }).compile();

    service = module.get<UsersService3>(UsersService3);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
