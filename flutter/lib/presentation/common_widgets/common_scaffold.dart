import 'package:flutter/material.dart';

import '../../core/extensions/all.dart';
import '../../core/utils/view_util.dart';
import '../resource/styles/all.dart';

class CommonScaffold extends StatelessWidget {
  const CommonScaffold({
    required this.body,
    Key? key,
    this.appBar,
    this.bottomNavigationBar,
    this.backgroundColor,
    this.padding = EdgeInsets.zero,
    this.hideKeyboardWhenTouchOutside = false,
    this.applyAutoPaddingBottom = false,
  }) : super(key: key);

  final PreferredSizeWidget? appBar;
  final Widget body;
  final Color? backgroundColor;
  final bool hideKeyboardWhenTouchOutside;
  final bool applyAutoPaddingBottom;
  final EdgeInsets padding;
  final Widget? bottomNavigationBar;

  @override
  Widget build(BuildContext context) {
    final scaffold = Scaffold(
      backgroundColor: backgroundColor ?? context.colorTheme.bgSurfaceMain,
      appBar: appBar,
      bottomNavigationBar: bottomNavigationBar,
      body: Padding(
        padding: _getPadding(context),
        child: body,
      ),
    );

    return hideKeyboardWhenTouchOutside
        ? GestureDetector(
            onTap: () => ViewUtil.hideKeyboard(context),
            child: scaffold,
          )
        : scaffold;
  }

  EdgeInsetsGeometry _getPadding(BuildContext context) {
    if (!applyAutoPaddingBottom) {
      return padding;
    }

    var bottomPadding = context.bottomPadding;
    if (bottomPadding == 0) {
      bottomPadding = Sizes.s16;
    }

    return padding.copyWith(bottom: bottomPadding);
  }
}
