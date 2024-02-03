import 'package:flutter/cupertino.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:go_router/go_router.dart';
import 'package:package_info_plus/package_info_plus.dart';
import 'package:slider_button/slider_button.dart';
import 'package:turboship/all.dart';

var light = true;
var taps = 0;

class DrawerWrapper extends StatelessWidget {
  final StatefulNavigationShell navigationShell;

  const DrawerWrapper({
    required this.navigationShell,
    Key? key,
  }) : super(key: key ?? const ValueKey<String>('DrawerWrapper'));

  @override
  Widget build(BuildContext context) {
    final tabIdx = navigationShell.currentIndex;
    return Scaffold(
      appBar: getAppBar(tabIdx),
      drawer: _buildDrawer(context),
      body: navigationShell,
      bottomNavigationBar: Container(
        decoration: BoxDecoration(
          color: C(context, Kolor.onPrimary),
          border: Border(
            top: BorderSide(
              color: C(context, Kolor.outline),
            ),
          ),
        ),
        height: 88.0,
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: AppRouter.tabs.asMap().entries.map((entry) {
            final idx = entry.key;
            final e = entry.value;
            return _buildTabItem(
              idx: idx,
              context: context,
              location: e.path,
              icon: _getTabIcon(e),
              isSelected: tabIdx == idx,
            );
          }).toList(),
        ),
      ),
    );
  }

  ListTile buildDrawerItem(String title, IconData icon, [Function? func]) {
    return ListTile(
      leading: Icon(icon),
      title: Text(title),
      onTap: func != null ? func() : null,
    );
  }

  buildTabItem(context, String label, icon, bool selected) {
    return BottomNavigationBarItem(
      label: label,
      icon: AppIcon(
        icon: icon,
        size: TSizes.s4,
        padding: const EdgeInsets.symmetric(
          horizontal: TSizes.s2,
          vertical: TSizes.s10,
        ),
        color: selected
            ? C(context, Kolor.primary)
            : C(context, Kolor.onBackground),
      ),
    );
  }

  getAppBar(int idx) {
    final leading = AppRouter.hasDrawer(idx)
        ? Builder(
            builder: (BuildContext context) {
              return IconButton(
                icon: const Icon(Icons.menu),
                onPressed: () {
                  Scaffold.of(context).openDrawer();
                },
                tooltip: MaterialLocalizations.of(context).openAppDrawerTooltip,
              );
            },
          )
        : null;
    return AppRouter.isTabStacked(idx)
        ? null
        : AppBar(
            leading: leading,
            title: Text(AppRouter.getTabTitle(idx)),
            automaticallyImplyLeading: AppRouter.hasDrawer(idx),
          );
  }

  Future<String> getBuildString() async {
    try {
      PackageInfo packageInfo = await PackageInfo.fromPlatform();
      final packageName = packageInfo.packageName;
      return packageName;
    } on Exception catch (_) {
      return '';
    }
  }

  Future<String> getVersionId() async {
    try {
      PackageInfo packageInfo = await PackageInfo.fromPlatform();
      String version = packageInfo.version;
      String buildNumber = packageInfo.buildNumber;
      return '$version+$buildNumber';
    } on Exception catch (_) {
      return '';
    }
  }

  Padding _buildBuildInfo() {
    return Padding(
      padding: const EdgeInsets.fromLTRB(5, 5, 10, 30),
      child: Column(
        children: [
          if (taps > 2 || kDebugMode) _buildFutureBuilder(getVersionId()),
          if (taps > 2 || kDebugMode) _buildFutureBuilder(getBuildString()),
        ],
      ),
    );
  }

  Drawer _buildDrawer(BuildContext context) {
    const drawerHeader = DrawerHeader(
      decoration: BoxDecoration(
        color: Colors.blue,
      ),
      child: Row(
        crossAxisAlignment: TFlex.crossStart,
        children: [
          Avatar(imageUrl: 'assets/images/avatar-placeholder.png'),
          TSpacing.gapW4,
          Column(
            crossAxisAlignment: TFlex.crossStart,
            children: [
              Text('Loi Tran'),
              Text('Joined December 2023'),
            ],
          )
        ],
      ),
    );
    final drawerMain = [
      buildDrawerItem('Messages', Icons.inbox),
      buildDrawerItem('Feed', Icons.newspaper),
      buildDrawerItem('Notifications', Icons.notifications),
      buildDrawerItem('Profile', Icons.person),
      buildDrawerItem('Privacy', Icons.privacy_tip),
      buildDrawerItem('Settings', Icons.settings),
    ];
    final isDarkTheme = BlocProvider.of<AppBloc>(context).state.isDarkTheme;
    final drawerBottom = Expanded(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.end,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Divider(thickness: 0.5),
          Padding(
            padding: const EdgeInsets.only(left: 20),
            child: Switch(
              value: isDarkTheme,
              activeColor: Colors.yellow,
              onChanged: (bool value) {
                getIt.get<AppBloc>().add(AppThemeChanged(!isDarkTheme));
              },
            ),
          ),
          const Divider(thickness: 0.5),
          TSpacing.gapH8,
          SliderButton(
            height: 60.0,
            action: () async {
              context.goNamed(AppPages.ftue.name);
              return null;
            },
            label: const Text(
              "Slide to cancel sign out",
              style: TextStyle(
                fontSize: 14,
                color: Color(0xff4a4a4a),
                fontWeight: FontWeight.w500,
              ),
            ),
            icon: const Center(
                child: Icon(
              CupertinoIcons.power,
              size: 30.0,
              color: Colors.redAccent,
              semanticLabel: 'Text to announce in accessibility modes',
            )),
            boxShadow: BoxShadow(
              color: Colors.black.withOpacity(0.3),
              blurRadius: 4,
            ),
          ),
          TSpacing.gapH8,
          _buildBuildInfo(),
        ],
      ),
    );
    return Drawer(
      child: SizedBox(
        height: MediaQuery.of(context).size.height,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Expanded(
              child: ListView.builder(
                itemCount: drawerMain.length + 1,
                itemBuilder: (BuildContext context, int index) {
                  if (index == 0) {
                    return drawerHeader;
                  } else if (index == drawerMain.length) {
                    return const SizedBox.shrink();
                  } else {
                    return drawerMain[index - 1];
                  }
                },
              ),
            ),
            Align(
              alignment: Alignment.bottomCenter,
              child: drawerBottom,
            ),
          ],
        ),
      ),
    );
  }

  _buildFutureBuilder(d) {
    return FutureBuilder<String>(
      future: d,
      builder: (BuildContext context, AsyncSnapshot<String> snapshot) {
        if (snapshot.connectionState == ConnectionState.waiting) {
          return const SizedBox(height: 17);
        } else {
          return Row(
            mainAxisAlignment: MainAxisAlignment.end,
            children: [Text(snapshot.data ?? '')],
          );
        }
      },
    );
  }

  Widget _buildTabItem({
    required int idx,
    required bool isSelected,
    required String location,
    required SvgGenImage icon,
    required BuildContext context,
  }) {
    final box = isSelected
        ? BoxDecoration(
            borderRadius: BorderRadius.circular(50),
            color: C(context, Kolor.onSecondary),
          )
        : null;
    final item = Container(
      decoration: box,
      margin: TSpacing.edgeInsetsV2,
      child: AppIcon(
        padding: const EdgeInsets.symmetric(
          vertical: TSizes.s10,
          horizontal: TSizes.s32,
        ),
        icon: icon,
        size: TSizes.s20,
        color: C(
          context,
          isSelected ? Kolor.primary : Kolor.onPrimaryContainer,
        ),
      ),
    );

    return item.clickable(() => _onTap(context, idx));
  }

  SvgGenImage _getTabIcon(AppPages page) {
    switch (page) {
      case AppPages.tabARoot:
        return Assets.icons.home;
      case AppPages.tabBRoot:
        return Assets.icons.calendar;
      case AppPages.tabCRoot:
        return Assets.icons.history;
      case AppPages.tabDRoot:
        return Assets.icons.user;
      default:
        return Assets.icons.home;
    }
  }

  void _onTap(BuildContext context, int idx) {
    final location = idx == navigationShell.currentIndex;
    AppRouter.navMap['tabIdx'] = idx;
    navigationShell.goBranch(
      idx,
      initialLocation: location,
    );
  }
}
