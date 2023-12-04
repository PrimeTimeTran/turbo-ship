import 'package:injectable/injectable.dart';

import '../../all.dart';
import '../base/base.dart';

@injectable
class SignUpVerifyOtpUseCase extends BaseFutureUseCase<SignUpVerifyOtpParams, void> {
  SignUpVerifyOtpUseCase(this._authRepository);

  final AuthRepository _authRepository;

  @override
  Future<void> buildUseCase(SignUpVerifyOtpParams params) async {
    await _authRepository.verifySignUp(params.otp);
  }
}

class SignUpVerifyOtpParams extends BaseUsecaseParams {
  const SignUpVerifyOtpParams({required this.otp});

  final String otp;
}
