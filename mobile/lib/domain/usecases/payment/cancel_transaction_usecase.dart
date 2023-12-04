import 'package:injectable/injectable.dart';

import '../../all.dart';
import '../base/base.dart';

@injectable
class CancelTransactionUsecase extends BaseFutureUseCase<CancelTransactionParams, Transaction> {
  final PaymentRepository _repository;

  CancelTransactionUsecase(this._repository);

  @override
  Future<Transaction> buildUseCase(CancelTransactionParams params) {
    return _repository.cancelTransaction(params.transactionId);
  }
}

class CancelTransactionParams extends BaseUsecaseParams {
  final String transactionId;

  const CancelTransactionParams({required this.transactionId});
}
