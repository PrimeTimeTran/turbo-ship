import 'package:flutter/material.dart';
import 'package:turboship/all.dart';

class NoScrollbar extends StatelessWidget {
  final Widget child;
  const NoScrollbar({super.key, required this.child});

  @override
  Widget build(BuildContext context) {
    return ScrollConfiguration(
      behavior: ScrollConfiguration.of(context).copyWith(scrollbars: false),
      child: SingleChildScrollView(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          children: [
            Padding(
              padding: EdgeInsets.all(isS(context) ? 10 : 30),
              child: child,
            )
          ],
        ),
      ),
    );
  }
}
