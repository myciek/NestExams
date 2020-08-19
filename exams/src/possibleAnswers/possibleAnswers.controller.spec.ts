import { Test, TestingModule } from '@nestjs/testing';
import { PossibleAnswersController } from './possibleAnswers.controller';

describe('PossibleAnswers Controller', () => {
  let controller: PossibleAnswersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PossibleAnswersController],
    }).compile();

    controller = module.get<PossibleAnswersController>(
      PossibleAnswersController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
