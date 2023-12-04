import 'package:injectable/injectable.dart';

import '../../entities/saving_account.dart';
import '../../repositories/saving_repo.dart';
import '../base/base.dart';

@injectable
class GetAllSavingAccountsUsecase extends BaseFutureUseCase<NoParams, List<SavingAccount>> {
  final SavingRepository _savingRepository;

  GetAllSavingAccountsUsecase(this._savingRepository);

  @override
  Future<List<SavingAccount>> buildUseCase(NoParams params) {
    return _savingRepository.getAllAccounts();
  }
}
