import 'package:injectable/injectable.dart';

import '../../all.dart';
import '../base/base.dart';

@injectable
class GetAllSavingPlansUsecase extends BaseFutureUseCase<NoParams, List<SavingPlan>> {
  final SavingRepository _repository;

  GetAllSavingPlansUsecase(this._repository);

  @override
  Future<List<SavingPlan>> buildUseCase(NoParams params) {
    return _repository.getAllPlans();
  }
}
