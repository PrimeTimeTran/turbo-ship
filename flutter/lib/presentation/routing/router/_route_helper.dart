part of 'app_router.dart';

enum AppPages {
  welcome,
  signIn,
  signUp,
  forgotPassword,
  changePassword,
  home,
  settings,
  feed,
  profile,
  wizards,
  notification,
}

class RouterHelper {
  const RouterHelper._();

  static bool isUnauthorizedPage(String location) {
    return location == AppPages.signIn.path ||
        location == AppPages.signUp.path ||
        location == AppPages.forgotPassword.path ||
        location == AppPages.changePassword.path ||
        location == AppPages.home.path;
  }
}

extension AppPageX on AppPages {
  String get name {
    switch (this) {
      case AppPages.welcome:
        return 'WELCOME';
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
      case AppPages.feed:
        return 'FEED';
      case AppPages.notification:
        return 'NOTIFICATION';
      case AppPages.wizards:
        return 'WIZARDS';
      case AppPages.profile:
        return 'PROFILE';
    }
  }

  String get path {
    switch (this) {
      case AppPages.welcome:
        return '/welcome';
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
      case AppPages.feed:
        return '/feed';
      case AppPages.notification:
        return '/notification';
      case AppPages.wizards:
        return '/wizards';
      case AppPages.profile:
        return '/profile';
    }
  }
}
