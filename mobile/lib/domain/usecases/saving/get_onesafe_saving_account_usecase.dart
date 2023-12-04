import 'package:injectable/injectable.dart';

import '../../entities/saving_account.dart';
import '../base/base.dart';
import 'get_all_saving_accounts_usecase.dart';

@injectable
class GetOnesafeSavingAccountUsecase extends BaseFutureUseCase<NoParams, SavingAccount?> {
  final GetAllSavingAccountsUsecase _getAllSavingAccountsUsecase;

  GetOnesafeSavingAccountUsecase(this._getAllSavingAccountsUsecase);

  @override
  Future<SavingAccount?> buildUseCase(NoParams params) async {
    final accounts = await _getAllSavingAccountsUsecase.buildUseCase(params);

    if (accounts.isNotEmpty) {
      return Future.value(accounts.first);
    }

    return null;
  }
}
