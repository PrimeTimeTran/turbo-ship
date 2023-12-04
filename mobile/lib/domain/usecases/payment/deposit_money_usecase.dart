import 'package:injectable/injectable.dart';

import '../../all.dart';
import '../base/base.dart';

@injectable
class DepositMoneyUseCase extends BaseFutureUseCase<DepositMoneyParams, Transaction> {
  final PaymentRepository _paymentRepository;

  DepositMoneyUseCase(this._paymentRepository);

  @override
  Future<Transaction> buildUseCase(DepositMoneyParams params) {
    return _paymentRepository.deposit(
      accountId: params.accountId,
      amount: params.amount,
    );
  }
}

class DepositMoneyParams extends BaseUsecaseParams {
  final String accountId;
  final double amount;

  DepositMoneyParams({
    required this.accountId,
    required this.amount,
  });
}
