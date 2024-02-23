import 'package:flutter/material.dart';

import '../../core/extensions/all.dart';
import '../resource/all.dart';

class CustomTabBar extends StatelessWidget implements PreferredSizeWidget {
  final List<Widget> tabs;

  final TabController? controller;
  const CustomTabBar({
    required this.tabs,
    super.key,
    this.controller,
  });

  @override
  Size get preferredSize => const Size.fromHeight(TSizes.s48);

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: const BoxDecoration(
        border: Border(bottom: BorderSide(color: Colors.grey)),
      ),
      child: Transform.translate(
        offset: const Offset(0, 1),
        child: TabBar(
          controller: controller,
          tabs: tabs,
          indicator: BoxDecoration(
            border: Border(
              bottom: BorderSide(
                color: context.colorTheme.bdDecorBrandBase,
                width: 2.0,
              ),
            ),
          ),
        ),
      ),
    );
  }
}
