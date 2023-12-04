import 'package:flutter/material.dart';

import 'app_colors_ext.dart';
import 'scheme_constants.dart';
import 'text_theme_ext.dart';

class AppThemeConstants {
  const AppThemeConstants._();

  static ThemeData get light {
    final defaultTheme = ThemeData.light();

    final appColors = SchemeConstants.lightColorsTheme;
    final textThemeExt = SchemeConstants.textTheme.applyColor(
      appColors,
    );

    final textTheme = (textThemeExt as AppTextTheme).toTextTheme(
      defaultTheme.textTheme,
      appColors,
    );

    return defaultTheme.copyWith(
      primaryColor: appColors.bgDecorBrandBase,
      textTheme: textTheme,
      colorScheme: appColors.toColorScheme(Brightness.light),
      dividerTheme: DividerThemeData(color: appColors.bdSurfaceMain, thickness: 1.0, space: 5.0),
      iconTheme: IconThemeData(color: appColors.icNormalPrimary),
      extensions: [appColors, textThemeExt],
    );
  }

  static ThemeData get dark {
    final defaultTheme = ThemeData.dark();

    final appColors = SchemeConstants.darkColorsTheme;
    final textThemeExt = SchemeConstants.textTheme.applyColor(
      appColors,
    );

    final textTheme = (textThemeExt as AppTextTheme).toTextTheme(
      defaultTheme.textTheme,
      appColors,
    );

    return defaultTheme.copyWith(
      primaryColor: appColors.bgDecorBrandBase,
      textTheme: textTheme,
      colorScheme: appColors.toColorScheme(Brightness.dark),
      dividerTheme: DividerThemeData(color: appColors.bdSurfaceMain, thickness: 1.0, space: 5.0),
      iconTheme: IconThemeData(color: appColors.icNormalPrimary),
      extensions: [appColors, textThemeExt],
    );
  }
}
