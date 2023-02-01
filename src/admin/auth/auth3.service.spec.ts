import { Test, TestingModule } from '@nestjs/testing';
import { AuthService3 } from './auth3.service';

describe('AuthService3', () => {
  let service3: AuthService3;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService3],
    }).compile();

    service3 = module.get<AuthService3>(AuthService3);
  });

  it('should be defined', () => {
    expect(service3).toBeDefined();
  });
});
