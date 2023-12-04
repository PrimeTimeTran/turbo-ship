import 'package:injectable/injectable.dart';

import '../../all.dart';
import '../base/base.dart';

@injectable
class ForgotPasswordVerifyOtpUseCase extends BaseFutureUseCase<ForgotPassVerifyOtpParams, void> {
  ForgotPasswordVerifyOtpUseCase(this._authRepository);

  final AuthRepository _authRepository;

  @override
  Future<void> buildUseCase(ForgotPassVerifyOtpParams params) async {
    await _authRepository.verifyForgotPassword(
      email: params.email,
      newPassword: params.newPassword,
      otp: params.otp,
    );
  }
}

class ForgotPassVerifyOtpParams extends BaseUsecaseParams {
  const ForgotPassVerifyOtpParams({
    required this.email,
    required this.newPassword,
    required this.otp,
  });

  final String email;
  final String newPassword;
  final String otp;
}
