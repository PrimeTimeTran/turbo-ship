import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:turboship/all.dart';

getTab(location) {
  switch (getTabName(location)) {
    case 'a':
      return AppPages.tabAStacked.path;
    case 'b':
      return AppPages.tabBStacked.path;
    case 'c':
      return AppPages.tabCStacked.path;
  }
}

getTabName(location) {
  try {
    location = location.toLowerCase();
    List<String> result = location.split('/tab_');
    String tabValue = result[1].split('_')[0];
    return tabValue;
  } catch (e) {
    debugPrint('Error: $e');
  }
}

class ScreenStacked extends StatefulWidget {
  final String name;
  final String path;
  final String tab;
  final Widget? child;
  const ScreenStacked(
      {super.key,
      required this.name,
      required this.path,
      required this.tab,
      this.child});

  @override
  State<ScreenStacked> createState() => _ScreenStackedState();
}

class _ScreenStackedState extends State<ScreenStacked> {
  @override
  Widget build(BuildContext context) {
    final root = AppRouter.navMap[widget.tab];
    return Scaffold(
      appBar: root
          ? AppBar(
              title: Text(widget.name),
            )
          : null,
      body: widget.child ??
          Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              TextButton(
                child: Text('Add to ${widget.tab} stack'),
                onPressed: () {
                  AppRouter.navMap[widget.tab] = true;
                  // final destination = getTab(widget.path);
                  final destination = AppPages.entity.path;
                  GoRouter.of(context).push(destination);
                },
              ),
            ],
          ),
    );
  }
}
