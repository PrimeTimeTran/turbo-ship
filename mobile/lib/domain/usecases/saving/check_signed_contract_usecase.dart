import 'package:injectable/injectable.dart';

import '../../repositories/saving_repo.dart';
import '../base/base.dart';

@injectable
class CheckSignedContractUseCase extends BaseFutureUseCase<NoParams, bool> {
  final SavingRepository _repository;

  CheckSignedContractUseCase(this._repository);

  @override
  Future<bool> buildUseCase(NoParams params) {
    return _repository.checkSignedContract();
  }
}
