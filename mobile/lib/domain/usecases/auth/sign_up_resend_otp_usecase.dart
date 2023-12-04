import 'package:injectable/injectable.dart';

import '../../all.dart';
import '../base/base.dart';

@injectable
class SignUpResendOtpUseCase extends BaseFutureUseCase<SignUpResendOtpUseCaseParams, void> {
  SignUpResendOtpUseCase(this._authRepository);

  final AuthRepository _authRepository;

  @override
  Future<void> buildUseCase(SignUpResendOtpUseCaseParams params) async {
    await _authRepository.resendSignUpOtp(params.email);
  }
}

class SignUpResendOtpUseCaseParams extends BaseUsecaseParams {
  final String email;
  const SignUpResendOtpUseCaseParams(this.email);
}
