import 'package:injectable/injectable.dart';

import '../../entities/user.dart';
import '../../repositories/user_repo.dart';
import '../base/base_params.dart';
import '../base/base_usecases.dart';

@injectable
class GetCurrentUserUseCase extends BaseFutureUseCase<GetCurrentUserParams, User> {
  final UserRepository _repository;

  GetCurrentUserUseCase(this._repository);

  @override
  Future<User> buildUseCase(GetCurrentUserParams params) async {
    return _repository.getCurrentUser(
      forceRefreshToken: params.forceRefreshToken,
    );
  }
}

class GetCurrentUserParams extends BaseUsecaseParams {
  final bool forceRefreshToken;

  const GetCurrentUserParams({this.forceRefreshToken = false});
}
