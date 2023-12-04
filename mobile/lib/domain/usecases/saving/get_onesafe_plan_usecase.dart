import 'package:injectable/injectable.dart';

import '../../entities/saving_plan.dart';
import '../base/base.dart';
import 'get_all_plans_usecase.dart';

@injectable
class GetOnesafePlanUsecase extends BaseFutureUseCase<NoParams, SavingPlan> {
  final GetAllSavingPlansUsecase _getAllPlansUsecase;

  GetOnesafePlanUsecase(this._getAllPlansUsecase);

  @override
  Future<SavingPlan> buildUseCase(NoParams params) {
    final plans = _getAllPlansUsecase.buildUseCase(params);

    return plans.then((value) => value.first);
  }
}
