import { Test, TestingModule } from '@nestjs/testing';
import { AuthService2 } from './auth2.service';

describe('AuthService2', () => {
  let service2: AuthService2;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService2],
    }).compile();

    service2 = module.get<AuthService2>(AuthService2);
  });

  it('should be defined', () => {
    expect(service2).toBeDefined();
  });
});
