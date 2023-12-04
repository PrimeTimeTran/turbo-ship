import 'package:injectable/injectable.dart';

import '../../entities/all.dart';
import '../../repositories/payment_repo.dart';
import '../base/base.dart';

@injectable
class GetTransactionDetailUsecase extends BaseFutureUseCase<GetTransactionDetailParams, Transaction> {
  final PaymentRepository _paymentRepository;

  GetTransactionDetailUsecase(this._paymentRepository);

  @override
  Future<Transaction> buildUseCase(GetTransactionDetailParams params) {
    return _paymentRepository.getTransactionDetail(
      transactionId: params.transactionId,
    );
  }
}

class GetTransactionDetailParams extends BaseUsecaseParams {
  final String transactionId;

  GetTransactionDetailParams({
    required this.transactionId,
  });
}
