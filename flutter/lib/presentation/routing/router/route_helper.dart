// part of 'app_router.dart';

enum AppPages {
  onBoarding,
  signIn,
  signUp,
  forgotPassword,
  changePassword,
  home,
  settings,
}

class RouterHelper {
  const RouterHelper._();

  static bool isUnauthorizedPage(String location) {
    return location == AppPages.signIn.path ||
        location == AppPages.signUp.path ||
        location == AppPages.forgotPassword.path ||
        location == AppPages.changePassword.path;
  }
}

extension AppPageX on AppPages {
  String get name {
    switch (this) {
      case AppPages.onBoarding:
        return 'ONBOARDING';
      case AppPages.signIn:
        return 'SIGN_IN';
      case AppPages.signUp:
        return 'SIGN_UP';
      case AppPages.forgotPassword:
        return 'FORGOT_PASSWORD';
      case AppPages.changePassword:
        return 'CHANGE_PASSWORD';
      case AppPages.home:
        return 'HOME';
      case AppPages.settings:
        return 'SETTINGS';
    }
  }

  String get path {
    switch (this) {
      case AppPages.onBoarding:
        return '/onboarding';
      case AppPages.signIn:
        return '/sign-in';
      case AppPages.signUp:
        return '/sign-up';
      case AppPages.forgotPassword:
        return '/forgot-password';
      case AppPages.changePassword:
        return '/change-password';
      case AppPages.home:
        return '/';
      case AppPages.settings:
        return '/settings';
    }
  }
}
