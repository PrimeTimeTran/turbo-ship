import 'package:flutter_gen/gen_l10n/app_localizations.dart';

String getAppTitle(AppLocalizations? t, route) {
  switch (route) {
    case '/home':
      return t!.home;
    case '/funds':
      return t!.funds;
    case '/budget':
      return t!.budget;
    case '/referral':
      return t!.referral;
    case '/notifications':
      return t!.notifications;
    case '/account':
      return t!.account;
    case '/1hedge':
      return t!.one_hedge;
    case '/1safe':
      return t!.one_safe;
    case '/budget_overview':
      return t!.goals;
    case '/budget_item':
      return t!.add_item;
    case '/investment_calculator':
      return t!.investment_calculator__title;
    case '/transfer/1safe':
      return t!.transfer;
    case '/transfer/1hedge':
      return t!.transfer;
    case '/withdrawal/1safe':
      return t!.make_a_withdrawal;
    case '/withdrawal/1hedge':
      return t!.make_a_withdrawal;
    default:
      return '';
  }
}

String getTitleByIndex(int index) {
  switch (index) {
    case 0:
      return 'Home';
    case 1:
      return 'Documents';
    case 2:
      return 'Activity';
    case 3:
      return 'Rewards';
    case 4:
      return 'Settings';
    case 5:
      return 'Transfer';
    case 6:
      return 'Settings';
    default:
      return 'Page not found';
  }
}

isFullScreenButton(name) {
  return ['/1safe', '/1hedge'].contains(name);
}
