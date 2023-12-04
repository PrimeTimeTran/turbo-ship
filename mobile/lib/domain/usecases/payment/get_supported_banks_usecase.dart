import 'package:injectable/injectable.dart';

import '../../entities/bank.dart';
import '../../repositories/payment_repo.dart';
import '../base/base_params.dart';
import '../base/base_usecases.dart';

@injectable
class GetSupportedBanksUsecase extends BaseFutureUseCase<NoParams, List<Bank>> {
  final PaymentRepository repository;

  GetSupportedBanksUsecase({required this.repository});

  @override
  Future<List<Bank>> buildUseCase(NoParams params) {
    return repository.getSupportedBanks();
  }
}
