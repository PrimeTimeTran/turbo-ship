import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:turboship/all.dart';
import 'package:turboship/presentation/features/design_guide/design_guide_screen.dart';
import 'package:turboship/presentation/features/home/home_screen.dart';
import 'package:turboship/presentation/features/notification/notification_screen.dart';

part '_route_helper.dart';
part '_transitions.dart';

// Turbo:
// https://medium.com/@ahm4d.bilal/using-gorouters-shellroute-in-flutter-for-nested-navigation-777a9a20642f
// Shell routes maintain their own state.
//  - Nested routers
//  - Maintaining stack, forms, navigation

class AppRouter {
  static const List<AppPages> tabs = [
    AppPages.tabARoot,
    AppPages.tabBRoot,
    AppPages.tabCRoot,
    AppPages.tabDRoot,
    AppPages.tabERoot,
  ];
  static const List<String> navMapTabs = ['a', 'b', 'c', 'd', 'e'];
  static final Map navMap = {
    "a": false,
    "b": false,
    "c": false,
    "d": false,
    "e": false,
    "tabIdx": 0,
    "drawer": false,
  };
  static const _initialLocation = AppPages.tabARoot;
  static final _rootNavigatorKey = GlobalKey<NavigatorState>();
  static final _router = GoRouter(
    navigatorKey: _rootNavigatorKey,
    initialLocation: _initialLocation.path,
    refreshListenable: getIt.get<AppBloc>(),
    observers: [getIt.get<AppNavigatorObserver>()],
    routes: [
      StatefulShellRoute.indexedStack(
        builder: (
          BuildContext context,
          GoRouterState state,
          StatefulNavigationShell shell,
        ) {
          return DrawerWrapper(navigationShell: shell);
        },
        branches: <StatefulShellBranch>[
          StatefulShellBranch(
            navigatorKey: _sectionANavigatorKey,
            routes: <RouteBase>[
              ShellRoute(
                builder:
                    (BuildContext context, GoRouterState state, Widget child) {
                  return Scaffold(
                    body: child,
                  );
                },
                observers: [
                  AppNavigatorObserver(),
                ],
                routes: [
                  GoRoute(
                    path: AppPages.tabARoot.path,
                    name: AppPages.tabARoot.name,
                    builder: (context, state) => ScreenStacked(
                      tab: 'a',
                      name: AppPages.tabARoot.name,
                      path: AppPages.tabARoot.path,
                      child: const HomeScreen(tab: 'a'),
                    ),
                  ),
                  GoRoute(
                    path: AppPages.tabAStacked.path,
                    name: AppPages.tabAStacked.name,
                    builder: (context, state) {
                      final json =
                          (state.extra as Map<String, dynamic>?)?['entity'];
                      final firstName = json?['firstName'] ?? '';
                      final lastName = json?['lastName'] ?? '';
                      final title = '$firstName $lastName';
                      return ScreenStacked(
                        tab: 'a',
                        name: title,
                        path: AppPages.tabAStacked.path,
                        child: EntityScreen(
                            entityJson: json,
                            chatId: (state.extra
                                as Map<String, dynamic>?)?['chatId']),
                      );
                    },
                  ),
                ],
              ),
            ],
          ),
          StatefulShellBranch(
            navigatorKey: _sectionBNavigatorKey,
            routes: <RouteBase>[
              ShellRoute(
                builder:
                    (BuildContext context, GoRouterState state, Widget child) {
                  return Scaffold(
                    body: child,
                  );
                },
                observers: [
                  AppNavigatorObserver(),
                ],
                routes: [
                  GoRoute(
                    path: AppPages.tabBRoot.path,
                    name: AppPages.tabBRoot.name,
                    builder: (context, state) => ScreenStacked(
                      tab: 'b',
                      name: AppPages.tabBRoot.name,
                      path: AppPages.tabBRoot.path,
                      child: const FeedScreen(tab: 'b'),
                    ),
                  ),
                  GoRoute(
                    path: AppPages.tabBStacked.path,
                    name: AppPages.tabBStacked.name,
                    builder: (context, state) {
                      final json =
                          (state.extra as Map<String, dynamic>?)?['entity'];
                      final firstName = json?['firstName'] ?? '';
                      final lastName = json?['lastName'] ?? '';
                      final title = '$firstName $lastName';
                      return ScreenStacked(
                        tab: 'b',
                        name: title,
                        path: AppPages.tabBStacked.path,
                        child: EntityScreen(entityJson: json),
                      );
                    },
                  ),
                ],
              ),
            ],
          ),
          StatefulShellBranch(
            navigatorKey: _sectionCNavigatorKey,
            routes: <RouteBase>[
              ShellRoute(
                builder:
                    (BuildContext context, GoRouterState state, Widget child) {
                  return Scaffold(
                    body: child,
                  );
                },
                observers: [
                  AppNavigatorObserver(),
                ],
                routes: [
                  GoRoute(
                    path: AppPages.tabCRoot.path,
                    name: AppPages.tabCRoot.name,
                    builder: (context, state) => ScreenStacked(
                      tab: 'c',
                      name: AppPages.tabCRoot.name,
                      path: AppPages.tabCRoot.path,
                      child: const NotificationScreen(),
                    ),
                  ),
                  GoRoute(
                    path: AppPages.tabCStacked.path,
                    name: AppPages.tabCStacked.name,
                    builder: (context, state) {
                      final json =
                          (state.extra as Map<String, dynamic>?)?['entity'];
                      final firstName = json?['firstName'] ?? '';
                      final lastName = json?['lastName'] ?? '';
                      final title = '$firstName $lastName';
                      return ScreenStacked(
                        tab: 'c',
                        name: title,
                        path: AppPages.tabCStacked.path,
                        child: EntityScreen(entityJson: json),
                      );
                    },
                  ),
                ],
              ),
            ],
          ),
          StatefulShellBranch(
            navigatorKey: _sectionDNavigatorKey,
            routes: <RouteBase>[
              ShellRoute(
                builder:
                    (BuildContext context, GoRouterState state, Widget child) {
                  return Scaffold(
                    body: child,
                  );
                },
                observers: [
                  AppNavigatorObserver(),
                ],
                routes: [
                  GoRoute(
                    path: AppPages.tabDRoot.path,
                    name: AppPages.tabDRoot.name,
                    builder: (context, state) => ScreenStacked(
                      tab: 'd',
                      name: AppPages.tabDRoot.name,
                      path: AppPages.tabDRoot.path,
                      child: const ProfileScreen(tab: 'd'),
                    ),
                  ),
                  GoRoute(
                    path: AppPages.tabDStacked.path,
                    name: AppPages.tabDStacked.name,
                    builder: (context, state) {
                      final json =
                          (state.extra as Map<String, dynamic>?)?['entity'];
                      final firstName = json?['firstName'] ?? '';
                      final lastName = json?['lastName'] ?? '';
                      final title = '$firstName $lastName';
                      return ScreenStacked(
                        tab: 'd',
                        name: title,
                        path: AppPages.tabDStacked.path,
                        child: EntityScreen(entityJson: json),
                      );
                    },
                  ),
                ],
              ),
            ],
          ),
          StatefulShellBranch(
            navigatorKey: _sectionENavigatorKey,
            routes: <RouteBase>[
              ShellRoute(
                builder:
                    (BuildContext context, GoRouterState state, Widget child) {
                  return Scaffold(
                    body: child,
                  );
                },
                observers: [
                  AppNavigatorObserver(),
                ],
                routes: [
                  GoRoute(
                    path: AppPages.design_guide.path,
                    name: AppPages.design_guide.name,
                    builder: (context, state) => ScreenStacked(
                        tab: 'e',
                        name: AppPages.design_guide.name,
                        path: AppPages.design_guide.path,
                        child: const DesignGuideScreen()),
                  ),
                  GoRoute(
                    path: AppPages.tabEStacked.path,
                    name: AppPages.tabEStacked.name,
                    builder: (context, state) {
                      return const DesignGuideScreen();
                    },
                  ),
                ],
              ),
            ],
          ),
        ],
      ),
      GoRoute(
        path: AppPages.settings.path,
        name: AppPages.settings.name,
        builder: (context, state) {
          return ScreenStacked(
            tab: 'drawer',
            name: 'Settings',
            path: AppPages.settings.path,
            child: const SettingsScreen(),
          );
        },
      ),
      GoRoute(
        path: AppPages.ftue.path,
        name: AppPages.ftue.name,
        builder: (context, state) {
          return const FTUEScreen();
          return ScreenStacked(
            tab: 'drawer',
            name: 'welcome',
            path: AppPages.ftue.path,
            child: const FTUEScreen(),
          );
        },
      )
    ],
  );
  static final GlobalKey<NavigatorState> _sectionANavigatorKey =
      GlobalKey<NavigatorState>();
  static final GlobalKey<NavigatorState> _sectionBNavigatorKey =
      GlobalKey<NavigatorState>();
  static final GlobalKey<NavigatorState> _sectionCNavigatorKey =
      GlobalKey<NavigatorState>();
  static final GlobalKey<NavigatorState> _sectionDNavigatorKey =
      GlobalKey<NavigatorState>();
  static final GlobalKey<NavigatorState> _sectionENavigatorKey =
      GlobalKey<NavigatorState>();
  static GlobalKey<NavigatorState> get rootNavigatorKey => _rootNavigatorKey;
  static GoRouter get router => _router;
  const AppRouter._();

  static getTabTitle(int idx) {
    switch (idx) {
      case 0:
        return 'Home';
      case 1:
        return 'Feed';
      case 2:
        return 'Notifications';
      case 3:
        return 'Profile';
      case 4:
        return 'Design';
      default:
    }
  }

  static hasDrawer(int idx) {
    return [0, 1, 2].contains(idx);
  }

  static bool isTabStacked(int number) {
    return navMap[navMapTabs[number]];
  }
}
