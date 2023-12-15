import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:turboship/all.dart';

const kBottomNavigationBarHeight = 88.0;

const _tabPages = [
  AppPages.home,
  AppPages.feed,
  AppPages.notification,
  AppPages.profile,
  AppPages.settings,
];

class ScaffoldWithNavigationBar extends StatelessWidget {
  final Widget child;

  final String location;
  const ScaffoldWithNavigationBar({
    required this.child,
    required this.location,
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return CommonScaffold(
      body: child,
      appBar: CommonAppBar(
        drawer: true,
        title: 'Home',
      ),
      bottomNavigationBar: Container(
        decoration: BoxDecoration(
          color: context.colorTheme.bgSurfaceMain,
          border: Border(
            top: BorderSide(
              color: context.colorTheme.bdSurfaceMain,
            ),
          ),
        ),
        height: kBottomNavigationBarHeight,
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: _tabPages
              .map(
                (e) => _buildTabItem(
                  context: context,
                  icon: _getTabIcon(e),
                  location: e.path,
                ),
              )
              .toList(),
        ),
      ),
    );
  }

  Widget _buildTabItem({
    required BuildContext context,
    required SvgGenImage icon,
    required String location,
  }) {
    final isSelected = location == this.location;

    final child = Container(
      decoration: !isSelected
          ? null
          : BoxDecoration(
              borderRadius: BorderRadius.circular(50),
              color: context.colorTheme.bgSurfaceSf1,
            ),
      margin: AppSpacing.edgeInsetsAll16,
      child: AppIcon(
        padding: const EdgeInsets.symmetric(
          horizontal: Sizes.s10,
          vertical: Sizes.s10,
        ),
        icon: icon,
        size: Sizes.s20,
        color: isSelected
            ? context.colorTheme.icNormalPrimary
            : context.colorTheme.icNormalTertiary,
      ),
    );

    return child.clickable(() => _onTap(context, location));
  }

  int _getLocation(String location) {
    return _tabPages.indexWhere((e) => e.path == location);
  }

  SvgGenImage _getTabIcon(AppPages page) {
    switch (page) {
      case AppPages.home:
        return Assets.icons.home;
      case AppPages.feed:
        return Assets.icons.user;
      case AppPages.notification:
        return Assets.icons.alertTriangle;
      case AppPages.profile:
        return Assets.icons.account;
      case AppPages.settings:
        return Assets.icons.menu;
      default:
        return Assets.icons.home;
    }
  }

  _handleOnLeadingPressed(context) {
    LogUtil.i(name: 'home', GoRouter.of(context).canPop());
  }

  void _onTap(BuildContext context, String location) {
    final index = _getLocation(location);

    if (index == -1) {
      return;
    }

    context.go(_tabPages[index].path);
  }
}
