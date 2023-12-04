import 'package:injectable/injectable.dart';

import '../../repositories/auth_repo.dart';
import '../base/base_params.dart';
import '../base/base_usecases.dart';

@injectable
class SignInUseCase extends BaseFutureUseCase<SignInParams, void> {
  SignInUseCase(this._authRepository);

  final AuthRepository _authRepository;

  @override
  Future<void> buildUseCase(SignInParams params) async {
    return _authRepository.signIn(
      email: params.email,
      password: params.password,
      keepSignedIn: params.keepSignedIn,
    );
  }
}

class SignInParams extends BaseUsecaseParams {
  const SignInParams({
    required this.email,
    required this.password,
    this.keepSignedIn = false,
  });

  final String email;
  final String password;
  final bool keepSignedIn;
}
