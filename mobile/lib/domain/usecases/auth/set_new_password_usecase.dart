import 'package:injectable/injectable.dart';

import '../../../core/exceptions/all.dart';
import '../../all.dart';
import '../base/base.dart';

@injectable
class SetNewPasswordUseCase extends BaseFutureUseCase<SetNewPasswordParams, void> {
  SetNewPasswordUseCase(this._authRepository);

  final AuthRepository _authRepository;

  @override
  Future<void> buildUseCase(SetNewPasswordParams params) async {
    try {
      await _authRepository.setNewPassword(
        currentPassword: params.currentPassword,
        newPassword: params.newPassword,
      );
    } catch (e) {
      if (e is ApiException && e.kind == ApiExceptionKind.serverDefined) {
        if (e.generalServerMessage == 'incorrect password"') {
          throw SetNewPasswordException(e, SetNewPasswordExceptionKind.invalidCurrentPassword);
        }
      }

      rethrow;
    }
  }
}

class SetNewPasswordParams extends BaseUsecaseParams {
  const SetNewPasswordParams({
    required this.currentPassword,
    required this.newPassword,
  });

  final String currentPassword;
  final String newPassword;
}

class SetNewPasswordException extends AppException {
  SetNewPasswordException(this.rootException, this.kind) : super(AppExceptionType.custom);

  final Exception? rootException;
  final SetNewPasswordExceptionKind kind;
}

enum SetNewPasswordExceptionKind {
  invalidCurrentPassword,
}
