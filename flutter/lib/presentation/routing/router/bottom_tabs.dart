import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:turboship/all.dart';

final bottomTabs = [
  AppPages.tabARoot.path,
  AppPages.tabBRoot.path,
  AppPages.tabCRoot.path,
  AppPages.tabDRoot.path,
  AppPages.tabERoot.path,
];

SvgGenImage _getTabIcon(AppPages page) {
  switch (page) {
    case AppPages.tabARoot:
      return Assets.icons.home;
    case AppPages.tabBRoot:
      return Assets.icons.user;
    case AppPages.tabCRoot:
      return Assets.icons.alertTriangle;
    case AppPages.tabDRoot:
      return Assets.icons.alertTriangle;
    case AppPages.tabERoot:
      return Assets.icons.alertTriangle;
    default:
      return Assets.icons.home;
  }
}

class BottomTabs extends StatefulWidget {
  const BottomTabs({super.key});

  @override
  State<BottomTabs> createState() => _BottomTabsState();
}

class _BottomTabsState extends State<BottomTabs> {
  var idx = 0;
  @override
  Widget build(BuildContext context) {
    return NavigationBar(
      onDestinationSelected: (int index) {
        LogUtil.i(name: 'NavigationBar', index);
        final screen = bottomTabs[index];
        context.go(screen);
        setState(() {
          idx = index;
        });
      },
      destinations: const <Widget>[
        NavigationDestination(
          label: 'Home',
          icon: Icon(Icons.home_outlined),
          selectedIcon: Icon(Icons.home),
        ),
        NavigationDestination(
          label: 'Feed',
          icon: Icon(Icons.newspaper),
          selectedIcon: Icon(Icons.home),
        ),
        NavigationDestination(
          label: 'Notifications',
          icon: Badge(child: Icon(Icons.notifications_sharp)),
        ),
        NavigationDestination(
          label: 'Design',
          icon: Badge(child: Icon(Icons.access_alarm)),
        ),
        NavigationDestination(
          label: 'Profile',
          icon: Icon(Icons.person),
          selectedIcon: Icon(Icons.home),
        ),
      ],
    );
  }
}
