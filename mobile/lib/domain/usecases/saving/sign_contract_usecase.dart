import 'package:injectable/injectable.dart';

import '../../repositories/saving_repo.dart';
import '../base/base.dart';

@injectable
class SignContractUsecase extends BaseFutureUseCase<SignContractParams, void> {
  final SavingRepository _repository;

  SignContractUsecase(this._repository);

  @override
  Future<void> buildUseCase(SignContractParams params) {
    return _repository.signContract(planId: params.currentPlanId);
  }
}

class SignContractParams extends BaseUsecaseParams {
  final String currentPlanId;

  SignContractParams({required this.currentPlanId});
}
