import 'package:injectable/injectable.dart';

import '../../entities/bank_account.dart';
import '../../repositories/payment_repo.dart';
import '../base/base.dart';

@injectable
class GetBankAccountsUseCase extends BaseFutureUseCase<NoParams, List<BankAccount>> {
  GetBankAccountsUseCase(this._paymentRepository);

  final PaymentRepository _paymentRepository;

  @override
  Future<List<BankAccount>> buildUseCase(NoParams params) {
    return _paymentRepository.getBankAccounts();
  }
}
