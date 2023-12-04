import 'dart:ui';

import 'package:flutter/material.dart';
// ignore: depend_on_referenced_packages
import 'package:provider/provider.dart';
import 'package:turboship/all.dart';

ThemeData darkBlue = createTheme(Brightness.dark, shape, 0xFF0000FF);
ThemeData darkGold = createTheme(Brightness.dark, shape, 0xFFFFD700);
ThemeData darkGreen = createTheme(Brightness.dark, shape, 0xFF00FF00);
ThemeData darkOrange = createTheme(Brightness.dark, shape, 0xFFFFA500);
ThemeData darkPink = createTheme(Brightness.dark, shape, 0xFFFFC0CB);
ThemeData darkPurple = createTheme(Brightness.dark, shape, 0xFF00FF);
ThemeData darkRed = createTheme(Brightness.dark, shape, 0xFFFF0000);
ThemeData darkTheme = createTheme(Brightness.dark, shape, 0xFFD4AF37);

ThemeData lightBlue = createTheme(Brightness.light, shape, 0xFF0000FF);
ThemeData lightGold = createTheme(Brightness.light, shape, 0xFFFFD700);
ThemeData lightGreen = createTheme(Brightness.light, shape, 0xFF00FF00);
ThemeData lightOrange = createTheme(Brightness.light, shape, 0xFFFFA500);
ThemeData lightPink = createTheme(Brightness.light, shape, 0xFFFFC0CB);
ThemeData lightPurple = createTheme(Brightness.light, shape, 0xFF00FF);
ThemeData lightRed = createTheme(Brightness.light, shape, 0xFFFF0000);
ThemeData lightTheme = createTheme(Brightness.light, shape, 0xFFD4AF37);

RoundedRectangleBorder shape = RoundedRectangleBorder(
  borderRadius: BorderRadius.circular(10),
);

class ThemeModel with ChangeNotifier {
  bool _isDarkMode = window.platformBrightness == Brightness.dark;

  ThemeModel() {
    window.onPlatformBrightnessChanged = _handleBrightnessChange;
  }

  bool get isDarkMode => _isDarkMode;

  @override
  void dispose() {
    window.onPlatformBrightnessChanged = null;
    super.dispose();
  }

  void toggleTheme() {
    _isDarkMode = !_isDarkMode;
    Consumer<ThemeModel>(
      builder: (context, themeModel, _) {
        themeModel.toggleTheme();
        return const SizedBox(height: 0);
      },
    );
    notifyListeners();
  }

  void _handleBrightnessChange() {
    _isDarkMode = window.platformBrightness == Brightness.dark;
    notifyListeners();
  }
}
