import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:turboship/all.dart';

var bottomTabs = [
  AppPages.home.path,
  AppPages.feed.path,
  AppPages.notification.path,
  AppPages.profile.path
];

class BottomTabs extends StatefulWidget {
  const BottomTabs({super.key});

  @override
  State<BottomTabs> createState() => _BottomTabsState();
}

class _BottomTabsState extends State<BottomTabs> {
  var idx = 0;
  @override
  Widget build(BuildContext context) {
    // GoRouteInformationProvider routeInfo =
    //     AppRouter.router.routeInformationProvider;

    // Map<String, dynamic> routeMap = {
    //   'location': routeInfo,
    // };

    // var go = AppRouter.router.namedLocation();
    // LogUtil.i(name: 'Route', go);
    // LogUtil.prettyJson({'sosos': 'sososo'});

    return NavigationBar(
      onDestinationSelected: (int index) {
        final screen = bottomTabs[index];
        context.go(screen);
        setState(() {
          idx = index;
        });
      },
      destinations: const <Widget>[
        NavigationDestination(
          selectedIcon: Icon(Icons.home),
          icon: Icon(Icons.home_outlined),
          label: 'Home',
        ),
        NavigationDestination(
          selectedIcon: Icon(Icons.home),
          icon: Icon(Icons.newspaper),
          label: 'Feed',
        ),
        NavigationDestination(
          icon: Badge(child: Icon(Icons.notifications_sharp)),
          label: 'Notifications',
        ),
        NavigationDestination(
          selectedIcon: Icon(Icons.home),
          icon: Icon(Icons.person),
          label: 'Profile',
        ),
      ],
    );
  }
}
