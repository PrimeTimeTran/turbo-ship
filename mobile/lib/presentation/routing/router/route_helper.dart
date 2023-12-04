// part of 'app_router.dart';

enum AppPages {
  onBoarding,
  signIn,
  signUp,
  forgotPassword,
  changePassword,
  home,
  oneSafe,
  oneSafeDeposit,
  oneSafeWithdraw,
  transactions,
  settings,
  personalInfo,
  referral,
  bankAccounts,
  signContract,
}

class RouterHelper {
  const RouterHelper._();

  static bool isUnauthorizedPage(String location) {
    return location == AppPages.signIn.path ||
        location == AppPages.signUp.path ||
        location == AppPages.forgotPassword.path ||
        location == AppPages.changePassword.path;
  }

  static bool needSignContract(String location) {
    return location == AppPages.oneSafeDeposit.path ||
        location == AppPages.oneSafeWithdraw.path;
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
      case AppPages.oneSafe:
        return 'ONE_SAFE';
      case AppPages.oneSafeDeposit:
        return 'ONE_SAFE_DEPOSIT';
      case AppPages.oneSafeWithdraw:
        return 'ONE_SAFE_WITHDRAW';
      case AppPages.transactions:
        return 'TRANSACTIONS';
      case AppPages.settings:
        return 'SETTINGS';
      case AppPages.personalInfo:
        return 'PERSONAL_INFO';
      case AppPages.referral:
        return 'REFERRAL';
      case AppPages.bankAccounts:
        return 'BANK_ACCOUNTS';
      case AppPages.signContract:
        return 'SIGN_CONTRACT_GUARD';
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
      case AppPages.oneSafe:
        return '/one-safe';
      case AppPages.oneSafeDeposit:
        return '/one-safe/deposit';
      case AppPages.oneSafeWithdraw:
        return '/one-safe/withdraw';
      case AppPages.transactions:
        return '/transactions';
      case AppPages.settings:
        return '/settings';
      case AppPages.personalInfo:
        return '/settings/personal-info';
      case AppPages.referral:
        return '/settings/referral';
      case AppPages.bankAccounts:
        return '/settings/bank-accounts';
      case AppPages.signContract:
        return '/sign-contract';
    }
  }
}
