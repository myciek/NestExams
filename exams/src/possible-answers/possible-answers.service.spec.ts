import { Test, TestingModule } from '@nestjs/testing';
import { PossibleAnswersService } from './possible-answers.service';

describe('PossibleAnswersService', () => {
  let service: PossibleAnswersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PossibleAnswersService],
    }).compile();

    service = module.get<PossibleAnswersService>(PossibleAnswersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
