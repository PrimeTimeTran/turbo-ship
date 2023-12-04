import 'package:injectable/injectable.dart';

import '../../all.dart';
import '../base/base.dart';

@injectable
class ForgotPasswordResendOtpUseCase extends BaseFutureUseCase<ForgotPasswordResendOtpUseCaseParams, void> {
  ForgotPasswordResendOtpUseCase(this._authRepository);

  final AuthRepository _authRepository;

  @override
  Future<void> buildUseCase(ForgotPasswordResendOtpUseCaseParams params) async {
    await _authRepository.resendForgotPasswordOtp(params.email);
  }
}

class ForgotPasswordResendOtpUseCaseParams extends BaseUsecaseParams {
  final String email;
  const ForgotPasswordResendOtpUseCaseParams(this.email);
}
