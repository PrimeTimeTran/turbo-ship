import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:turboship/all.dart';
import 'package:turboship/presentation/features/feed/feed_screen.dart';
import 'package:turboship/presentation/features/home/home_screen.dart';
import 'package:turboship/presentation/features/notification/notification_screen.dart';
import 'package:turboship/presentation/features/settings/settings_screen.dart';

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
          ),
        ],
      ),
      GoRoute(
        path: AppPages.wizards.path,
        name: AppPages.wizards.name,
        builder: (context, state) => const WizardsScreen(),
      ),
      GoRoute(
        path: AppPages.entity.path,
        name: AppPages.entity.name,
        builder: (context, state) {
          final Map<String, dynamic>? extraMap =
              state.extra as Map<String, dynamic>?;
          final entityJson = extraMap?['entity'];
          if (entityJson != null && entityJson is Map<String, dynamic>) {
            return EntityScreen(entityJson: entityJson);
          }
          return Container(
            child: const Text('error'),
          );
        },
      ),
    ],
    redirect: (context, state) {
      return null;
    },
  );
  static GlobalKey<NavigatorState> get rootNavigatorKey => _rootNavigatorKey;
  static GoRouter get router => _router;
  const AppRouter._();
}
