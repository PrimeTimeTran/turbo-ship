import 'package:injectable/injectable.dart';

import '../../repositories/payment_repo.dart';
import '../base/base.dart';

@injectable
class DeleteBankAccountUseCase extends BaseFutureUseCase<DeleteBankAccountParams, void> {
  DeleteBankAccountUseCase(this._paymentRepository);

  final PaymentRepository _paymentRepository;

  @override
  Future<void> buildUseCase(DeleteBankAccountParams params) {
    return _paymentRepository.deleteBankAccount(bankAccountId: params.bankAccountId);
  }
}

class DeleteBankAccountParams extends BaseUsecaseParams {
  const DeleteBankAccountParams({required this.bankAccountId});

  final String bankAccountId;
}
