import 'package:injectable/injectable.dart';

import '../../all.dart';
import '../base/base.dart';

@injectable
class GetTransactionsUsecase extends BaseFutureUseCase<NoParams, List<Transaction>> {
  final PaymentRepository _paymentRepository;
  final SavingRepository _savingRepository;

  GetTransactionsUsecase(
    this._paymentRepository,
    this._savingRepository,
  );

  @override
  Future<List<Transaction>> buildUseCase(NoParams params) async {
    final futures = await Future.wait<List<Transaction>>([
      _paymentRepository.getTransactions(),
      _savingRepository.getInterestTransactions(),
    ]);

    return futures.expand((element) => element).toList()..sort((a, b) => b.createdAt.compareTo(a.createdAt));
  }
}
