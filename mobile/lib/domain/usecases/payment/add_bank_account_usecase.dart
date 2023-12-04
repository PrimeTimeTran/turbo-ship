import 'package:injectable/injectable.dart';

import '../../entities/bank_account.dart';
import '../../repositories/payment_repo.dart';
import '../base/base.dart';

@injectable
class AddBankAccountUseCase extends BaseFutureUseCase<AddBankAccountParams, BankAccount> {
  AddBankAccountUseCase(this._paymentRepository);

  final PaymentRepository _paymentRepository;

  @override
  Future<BankAccount> buildUseCase(AddBankAccountParams params) {
    return _paymentRepository.addBankAccount(
      bankId: params.bankId,
      accountNumber: params.accountNumber,
      accountHolderName: params.accountHolderName,
    );
  }
}

class AddBankAccountParams extends BaseUsecaseParams {
  const AddBankAccountParams({
    required this.bankId,
    required this.accountNumber,
    required this.accountHolderName,
  });

  final String bankId;
  final String accountNumber;
  final String accountHolderName;
}
