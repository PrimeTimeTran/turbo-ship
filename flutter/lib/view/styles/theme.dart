import 'dart:ui';

import 'package:flutter/material.dart';
// ignore: depend_on_referenced_packages
import 'package:provider/provider.dart';

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
