import 'package:flutter/material.dart';

extension ContextExtensions on BuildContext {
  MediaQueryData get mediaQuery => MediaQuery.of(this);
  double get height => mediaQuery.size.height;
  double get width => mediaQuery.size.width;
  double get textScaleFactor => mediaQuery.textScaleFactor;
  double get pixelRatio => mediaQuery.devicePixelRatio;
  bool get isLandscape => mediaQuery.orientation == Orientation.landscape;
  bool get isPortrait => mediaQuery.orientation == Orientation.portrait;
  EdgeInsets get padding => mediaQuery.padding;
  EdgeInsets get viewInsets => mediaQuery.viewInsets;
  double get topPadding => padding.top;
  double get leftPadding => padding.left;
  double get rightPadding => padding.right;
  double get topViewInsets => viewInsets.top;
  double get bottomViewInsets => viewInsets.bottom;
  double get leftViewInsets => viewInsets.left;
  double get rightViewInsets => viewInsets.right;
  double get bottomPadding => padding.bottom == 0 ? 16 : padding.bottom;

  ThemeData get theme => Theme.of(this);
  ColorScheme get colorScheme => theme.colorScheme;
  TextTheme get textTheme => theme.textTheme;
}