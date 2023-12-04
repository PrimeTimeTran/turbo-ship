import 'package:injectable/injectable.dart';

import '../../repositories/saving_repo.dart';
import '../base/base.dart';

@injectable
class PreviewContractUsecase extends BaseFutureUseCase<PreviewContractParams, String> {
  final SavingRepository _repository;

  PreviewContractUsecase(this._repository);

  @override
  Future<String> buildUseCase(PreviewContractParams params) {
    return _repository.getPreviewContract(
      fullName: params.fullName,
      idNumber: params.idNumber,
    );
  }
}

class PreviewContractParams extends BaseUsecaseParams {
  final String fullName;
  final String idNumber;

  PreviewContractParams({required this.fullName, required this.idNumber});
}
