import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:turboship/presentation/features/feed/feed_screen.dart';
import 'package:turboship/presentation/features/home/home_screen.dart';
import 'package:turboship/presentation/features/notification/notification_screen.dart';
import 'package:turboship/presentation/features/settings/settings_screen.dart';

import '../../../core/configs/di/di.dart';
import '../../common_blocs/app/app_bloc.dart';
import '../../features/all.dart';
import '../observer/navigator_observer.dart';

part '_route_helper.dart';
part '_transitions.dart';

// https://medium.com/@ahm4d.bilal/using-gorouters-shellroute-in-flutter-for-nested-navigation-777a9a20642f

class AppRouter {
  static final _rootNavigatorKey = GlobalKey<NavigatorState>();

  static final _shellNavigatorKey = GlobalKey<NavigatorState>();
  static final _initialLocation = AppPages.home.path;

  static final _router = GoRouter(
    navigatorKey: _rootNavigatorKey,
    refreshListenable: getIt.get<AppBloc>(),
    observers: [getIt.get<AppNavigatorObserver>()],
    initialLocation: _initialLocation,
    routes: [
      // ########## AUTH ##########
      // GoRoute(
      //   parentNavigatorKey: _rootNavigatorKey,
      //   path: AppPages.welcome.path,
      //   name: AppPages.welcome.name,
      //   builder: (BuildContext context, GoRouterState state) {
      //     return const WelcomePage();
      //   },
      //   pageBuilder: (context, state) => FadeTransitionPage(
      //     child: const WelcomePage(),
      //   ),
      // ),
      ShellRoute(
        navigatorKey: _shellNavigatorKey,
        builder: (context, state, child) {
          return ScaffoldWithNavigationBar(
              location: state.matchedLocation, child: child);
        },
        routes: [
          GoRoute(
            parentNavigatorKey: _shellNavigatorKey,
            path: AppPages.home.path,
            name: AppPages.home.name,
            pageBuilder: (context, state) => const NoTransitionPage(
              child: HomeScreen(),
            ),
          ),
          GoRoute(
            parentNavigatorKey: _shellNavigatorKey,
            path: AppPages.feed.path,
            name: AppPages.feed.name,
            pageBuilder: (context, state) => const NoTransitionPage(
              child: FeedScreen(),
            ),
          ),
          GoRoute(
            parentNavigatorKey: _shellNavigatorKey,
            path: AppPages.notification.path,
            name: AppPages.notification.name,
            pageBuilder: (context, state) => const NoTransitionPage(
              child: NotificationScreen(),
            ),
          ),
          GoRoute(
            parentNavigatorKey: _shellNavigatorKey,
            path: AppPages.profile.path,
            name: AppPages.profile.name,
            pageBuilder: (context, state) => const NoTransitionPage(
              child: ProfileScreen(),
            ),
          ),
          GoRoute(
            parentNavigatorKey: _shellNavigatorKey,
            path: AppPages.settings.path,
            name: AppPages.settings.name,
            pageBuilder: (context, state) => const NoTransitionPage(
              child: SettingsScreen(),
            ),
            // builder: (BuildContext context, GoRouterState state) {
            //   return const SettingsScreen();
            // },
          ),
        ],
      ),
      GoRoute(
        path: AppPages.wizards.path,
        name: AppPages.wizards.name,
        builder: (context, state) => const WizardsScreen(),
      ),
      // GoRoute(
      //   parentNavigatorKey: _rootNavigatorKey,
      //   path: AppPages.wizards.path,
      //   name: AppPages.wizards.name,
      //   pageBuilder: (context, state) => const NoTransitionPage(
      //     child: WizardsScreen(),
      //   ),
      // ),
      // GoRoute(
      //   parentNavigatorKey: _rootNavigatorKey,
      //   path: AppPages.signUp.path,
      //   name: AppPages.signUp.name,
      //   builder: (BuildContext context, GoRouterState state) {
      //     return const SignUpPage();
      //   },
      // ),
      // GoRoute(
      //   parentNavigatorKey: _rootNavigatorKey,
      //   path: AppPages.signUp.path,
      //   name: AppPages.signUp.name,
      //   builder: (BuildContext context, GoRouterState state) {
      //     return const SignUpPage();
      //   },
      // ),
      // GoRoute(
      //   parentNavigatorKey: _rootNavigatorKey,
      //   path: '${AppPages.signUp.path}/verify-email',
      //   builder: (BuildContext context, GoRouterState state) {
      //     return const SignUpPage(
      //       isReVerifyEmail: true,
      //     );
      //   },
      // ),
      // GoRoute(
      //   parentNavigatorKey: _rootNavigatorKey,
      //   path: AppPages.forgotPassword.path,
      //   name: AppPages.forgotPassword.name,
      //   builder: (BuildContext context, GoRouterState state) {
      //     return const ForgotPassPage();
      //   },
      // ),
      // // ########## END AUTH ##########
      // ShellRoute(
      //   navigatorKey: _shellNavigatorKey,
      //   builder: (context, state, child) {
      //     return ScaffoldWithNavigationBar(location: state.location, child: child);
      //   },
      //   routes: [
      //     GoRoute(
      //       parentNavigatorKey: _shellNavigatorKey,
      //       name: AppPages.home.name,
      //       path: AppPages.home.path,
      //       pageBuilder: (context, state) => const NoTransitionPage(
      //         child: HomePage(),
      //       ),
      //     ),
      //     GoRoute(
      //       parentNavigatorKey: _shellNavigatorKey,
      //       name: AppPages.transactions.name,
      //       path: AppPages.transactions.path,
      //       pageBuilder: (context, state) => const NoTransitionPage(
      //         child: TransactionsPage(),
      //       ),
      //     ),
      //     GoRoute(
      //       parentNavigatorKey: _shellNavigatorKey,
      //       name: AppPages.settings.name,
      //       path: AppPages.settings.path,
      //       pageBuilder: (context, state) => const NoTransitionPage(child: SettingsPage()),
      //     ),
      //   ],
      // ),
      // // One safe
      // GoRoute(
      //   parentNavigatorKey: _rootNavigatorKey,
      //   path: AppPages.oneSafe.path,
      //   name: AppPages.oneSafe.name,
      //   builder: (BuildContext context, GoRouterState state) {
      //     return const OneSafePage();
      //   },
      // ),
      // GoRoute(
      //   parentNavigatorKey: _rootNavigatorKey,
      //   path: AppPages.oneSafeDeposit.path,
      //   name: AppPages.oneSafeDeposit.name,
      //   builder: (BuildContext context, GoRouterState state) {
      //     return const DepositPage();
      //   },
      // ),
      // GoRoute(
      //   parentNavigatorKey: _rootNavigatorKey,
      //   path: AppPages.oneSafeWithdraw.path,
      //   name: AppPages.oneSafeWithdraw.name,
      //   builder: (BuildContext context, GoRouterState state) {
      //     return const WithdrawalPage();
      //   },
      // ),
      // GoRoute(
      //   parentNavigatorKey: _rootNavigatorKey,
      //   path: AppPages.personalInfo.path,
      //   name: AppPages.personalInfo.name,
      //   builder: (BuildContext context, GoRouterState state) {
      //     return const PersonalInfoPage();
      //   },
      // ),
      // GoRoute(
      //   parentNavigatorKey: _rootNavigatorKey,
      //   path: AppPages.referral.path,
      //   name: AppPages.referral.name,
      //   builder: (BuildContext context, GoRouterState state) {
      //     return const ReferralPage();
      //   },
      // ),
      // GoRoute(
      //   parentNavigatorKey: _rootNavigatorKey,
      //   path: AppPages.changePassword.path,
      //   name: AppPages.changePassword.name,
      //   builder: (BuildContext context, GoRouterState state) {
      //     return const ChangePasswordPage();
      //   },
      // ),
      // GoRoute(
      //   parentNavigatorKey: _rootNavigatorKey,
      //   path: AppPages.bankAccounts.path,
      //   name: AppPages.bankAccounts.name,
      //   builder: (BuildContext context, GoRouterState state) {
      //     return const BankAccountsPage();
      //   },
      // ),
      // GoRoute(
      //   parentNavigatorKey: _rootNavigatorKey,
      //   path: AppPages.signContract.path,
      //   name: AppPages.signContract.name,
      //   pageBuilder: (context, state) => SlideUpTransitionPage(
      //     child: SignContractPageGuard(
      //       onSigned: () {
      //         getIt.get<SavingBloc>().add(const SavingEvent.started());
      //       },
      //     ),
      //   ),
      // ),
    ],
    redirect: (context, state) {
      final appState = getIt.get<AppBloc>().state;
      // // Auth guard
      // if (!RouterHelper.isUnauthorizedPage(state.location)) {
      //   if (!appState.isLoggedIn) {
      //     return AppPages.onBoarding.path;
      //   } else if (!appState.currentUser!.isEmailVerified) {
      //     return '${AppPages.signUp.path}/verify-email';
      //   }
      // }

      // if (RouterHelper.needSignContract(state.location) && !appState.currentUser!.hasSignedContract) {
      //   // if (RouterHelper.needSignContract(state.location)) {
      //   return AppPages.signContract.path;
      // }

      return null;
    },
  );
  static GlobalKey<NavigatorState> get rootNavigatorKey => _rootNavigatorKey;
  static GoRouter get router => _router;
  const AppRouter._();
}
