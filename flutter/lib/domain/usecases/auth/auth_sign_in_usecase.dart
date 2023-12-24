import 'package:injectable/injectable.dart';
import 'package:turboship/all.dart';

class SignInParams extends BaseUsecaseParams {
  final String email;
  final String password;
  const SignInParams(this.email, this.password);
}

@injectable
class SignInUseCase extends BaseFutureUseCase<SignInParams, void> {
  final AuthRepository _repository;

  SignInUseCase(this._repository);

  @override
  Future<void> buildUseCase(SignInParams params) async {
    return await _repository.signIn(
      email: params.email,
      password: params.password,
    );
  }
}
