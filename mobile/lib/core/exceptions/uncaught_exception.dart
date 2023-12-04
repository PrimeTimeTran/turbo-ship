import 'base/app_exception.dart';

class AppUncaughtException extends AppException {
  const AppUncaughtException(this.rootError) : super(AppExceptionType.uncaught);

  final Object? rootError;

  @override
  String toString() {
    return 'AppUncaughtException{rootError: $rootError}';
  }
}
