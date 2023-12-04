import 'package:injectable/injectable.dart';

import '../../entities/transaction.dart';
import '../../repositories/payment_repo.dart';
import '../base/base.dart';

@injectable
class WithdrawMoneyUseCase extends BaseFutureUseCase<WithdrawMoneyParams, Transaction> {
  final PaymentRepository _paymentRepository;

  WithdrawMoneyUseCase(this._paymentRepository);

  @override
  Future<Transaction> buildUseCase(WithdrawMoneyParams params) {
    return _paymentRepository.withdrawMoney(
      bankAccountId: params.bankAccountId,
      accountId: params.accountId,
      amount: params.amount,
    );
  }
}

class WithdrawMoneyParams extends BaseUsecaseParams {
  final String bankAccountId;
  final String accountId;
  final double amount;

  WithdrawMoneyParams({
    required this.bankAccountId,
    required this.accountId,
    required this.amount,
  });
}
