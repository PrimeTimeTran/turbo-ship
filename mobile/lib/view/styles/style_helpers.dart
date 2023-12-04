import 'package:flutter/material.dart';
import 'package:turboship/all.dart';

Color C(BuildContext context, String key) {
  final cs = Theme.of(context).colorScheme;
  switch (key) {
    case 'primary':
      return cs.primary;
    case 'onPrimary':
      return cs.onPrimary;
    case 'primaryContainer':
      return cs.primaryContainer;
    case 'onPrimaryContainer':
      return cs.onPrimaryContainer;
    case 'secondary':
      return cs.secondary;
    case 'onSecondary':
      return cs.onSecondary;
    case 'secondaryContainer':
      return cs.secondaryContainer;
    case 'onSecondaryContainer':
      return cs.onSecondaryContainer;
    case 'tertiary':
      return cs.tertiary;
    case 'onTertiary':
      return cs.onTertiary;
    case 'tertiaryContainer':
      return cs.tertiaryContainer;
    case 'onTertiaryContainer':
      return cs.onSecondaryContainer;
    case 'error':
      return cs.error;
    case 'onError':
      return cs.onError;
    case 'errorContainer':
      return cs.errorContainer;
    case 'onErrorContainer':
      return cs.onSecondaryContainer;
    case 'background':
      return cs.background;
    case 'onBackground':
      return cs.onBackground;
    case 'surface':
      return cs.surface;
    case 'onSurface':
      return cs.onSurface;
    case 'surfaceVariant':
      return cs.surfaceVariant;
    case 'onSurfaceVariant':
      return cs.onSurfaceVariant;
    case 'outline':
      return cs.outline;
    case 'shadow':
      return cs.shadow;
    case 'inverseSurface':
      return cs.inverseSurface;
    case 'onInverseSurface':
      return cs.onInverseSurface;
    case 'inversePrimary':
      return cs.inversePrimary;
    default:
      throw Exception('Invalid color key: $key');
  }
}

ThemeData createTheme(Brightness brightness, s, color) {
  return ThemeData(
    useMaterial3: true,
    brightness: brightness,
    colorSchemeSeed: Color(color),
    elevatedButtonTheme: ElevatedButtonThemeData(
      style: ElevatedButton.styleFrom(
        shape: s,
      ),
    ),
    filledButtonTheme: FilledButtonThemeData(
      style: FilledButton.styleFrom(
        shape: s,
      ),
    ),
    outlinedButtonTheme: OutlinedButtonThemeData(
      style: OutlinedButton.styleFrom(
        shape: s,
      ),
    ),
    textButtonTheme: TextButtonThemeData(
      style: TextButton.styleFrom(
        shape: s,
      ),
    ),
  );
}

fontHeader(c) => isS(c)
    ? isXS(c)
        ? 'bLarge'
        : 'bLarge'
    : 'hLarge';

getDarkTheme(theme) {
  switch (theme) {
    case 'green':
      return darkGreen;
    case 'blue':
      return darkBlue;
    case 'gold':
      return darkGold;
    case 'red':
      return darkRed;
    case 'orange':
      return darkOrange;
    case 'purple':
      return darkPurple;
    case 'pink':
      return darkPink;
    default:
      return darkTheme;
  }
}

getLightTheme(theme) {
  switch (theme) {
    case 'green':
      return lightGreen;
    case 'blue':
      return lightBlue;
    case 'gold':
      return lightGold;
    case 'red':
      return lightRed;
    case 'orange':
      return lightOrange;
    case 'purple':
      return lightPurple;
    case 'pink':
      return lightPink;
    default:
      return lightTheme;
  }
}

bool isDarkMode(BuildContext context) {
  final theme = Theme.of(context).brightness;
  return theme == Brightness.dark;
}

TextStyle styleWithColor({required TextStyle type, Color? color}) {
  return type.copyWith(
    color: color ?? type.color,
  );
}

TextStyle? T(BuildContext context, String key) {
  final theme = Theme.of(context).textTheme;
  switch (key) {
    case 'bodySmall':
      return theme.bodySmall;
    case 'bodyMedium':
      return theme.bodyMedium;
    case 'bodyLarge':
      return theme.bodyLarge;
    case 'labelSmall':
      return theme.labelSmall;
    case 'labelMedium':
      return theme.labelMedium;
    case 'labelLarge':
      return theme.labelLarge;
    case 'titleSmall':
      return theme.titleSmall;
    case 'titleMedium':
      return theme.titleMedium;
    case 'titleLarge':
      return theme.titleLarge;
    case 'headlineSmall':
      return theme.headlineSmall;
    case 'headlineMedium':
      return theme.headlineMedium;
    case 'headlineLarge':
      return theme.headlineLarge;
    case 'displaySmall':
      return theme.displaySmall;
    case 'displayMedium':
      return theme.displayMedium;
    case 'displayLarge':
      return theme.displayLarge;
    default:
      throw Exception('Invalid color key: $key');
  }
}

texted(
  BuildContext c,
  String val,
  String t, {
  String? colorKey,
  double opacity = 1.0,
  String? weight,
  textAlign = TextAlign.start,
}) {
  Color? k;
  if (colorKey != null) {
    k = C(c, colorKey).withOpacity(opacity);
  }
  FontWeight w;
  if (weight == 'bold' || val[0] == 'l') {
    w = FontWeight.bold;
  } else {
    w = FontWeight.normal;
  }

  switch (val) {
    case 'bSmall':
      return _textHelper(c, 'bodySmall', t, k, textAlign, w);
    case 'bMedium':
      return _textHelper(c, 'bodyMedium', t, k, textAlign, w);
    case 'bLarge':
      return _textHelper(c, 'bodyLarge', t, k, textAlign, w);
    case 'lSmall':
      return _textHelper(c, 'labelSmall', t, k, textAlign, w);
    case 'lMedium':
      return _textHelper(c, 'labelMedium', t, k, textAlign, w);
    case 'lLarge':
      return _textHelper(c, 'labelLarge', t, k, textAlign, w);
    case 'tSmall':
      return _textHelper(c, 'titleSmall', t, k, textAlign, w);
    case 'tMedium':
      return _textHelper(c, 'titleMedium', t, k, textAlign, w);
    case 'tLarge':
      return _textHelper(c, 'titleLarge', t, k, textAlign, w);
    case 'hSmall':
      return _textHelper(c, 'headlineSmall', t, k, textAlign, w);
    case 'hMedium':
      return _textHelper(c, 'headlineMedium', t, k, textAlign, w);
    case 'hLarge':
      return _textHelper(c, 'headlineLarge', t, k, textAlign, w);
    case 'dSmall':
      return _textHelper(c, 'displaySmall', t, k, textAlign, w);
    case 'dMedium':
      return _textHelper(c, 'displayMedium', t, k, textAlign, w);
    case 'dLarge':
      return _textHelper(c, 'displayLarge', t, k, textAlign, w);
    default:
  }
}

_textHelper(
  BuildContext c,
  val,
  t,
  Color? color,
  align, [
  FontWeight? weight,
]) {
  return Text(
    t,
    textAlign: align,
    style: T(c, val)!.copyWith(color: color, fontWeight: weight),
  );
}
