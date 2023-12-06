import 'package:flutter/material.dart';

ThemeData darkBlue = createTheme(Brightness.dark, shape, 0xFF0000FF);
ThemeData darkGold = createTheme(Brightness.dark, shape, 0xFFFFD700);
ThemeData darkGreen = createTheme(Brightness.dark, shape, 0xFF00FF00);
ThemeData darkOrange = createTheme(Brightness.dark, shape, 0xFFFFA500);
ThemeData darkPink = createTheme(Brightness.dark, shape, 0xFFFFC0CB);
ThemeData darkPurple = createTheme(Brightness.dark, shape, 0xFF00FF);
ThemeData darkRed = createTheme(Brightness.dark, shape, 0xFFFF0000);

final darks = [
  darkBlue,
  darkGold,
  darkGreen,
  darkOrange,
  darkPink,
  darkPurple,
  darkRed,
  darkTheme,
];

ThemeData darkTheme = createTheme(Brightness.dark, shape, 0xFFD4AF37);

ThemeData lightBlue = createTheme(Brightness.light, shape, 0xFF0000FF);
ThemeData lightGold = createTheme(Brightness.light, shape, 0xFFFFD700);
ThemeData lightGreen = createTheme(Brightness.light, shape, 0xFF00FF00);
ThemeData lightOrange = createTheme(Brightness.light, shape, 0xFFFFA500);
ThemeData lightPink = createTheme(Brightness.light, shape, 0xFFFFC0CB);
ThemeData lightPurple = createTheme(Brightness.light, shape, 0xFF00FF);
ThemeData lightRed = createTheme(Brightness.light, shape, 0xFFFF0000);

final lights = [
  lightBlue,
  lightGold,
  lightGreen,
  lightOrange,
  lightPink,
  lightPurple,
  lightRed,
  lightTheme,
];

ThemeData lightTheme = createTheme(Brightness.light, shape, 0xFFD4AF37);
RoundedRectangleBorder shape = RoundedRectangleBorder(
  borderRadius: BorderRadius.circular(10),
);

// final themeColors = [
//   'Blue',
//   'Green',
//   'Gold',
//   'Orange',
//   'Pink',
//   'Purple',
//   'Red',
// ];
// ThemeData darkTheme = createTheme(Brightness.dark, shape, 0xFFD4AF37);
// ThemeData lightTheme = createTheme(Brightness.light, shape, 0xFFD4AF37);

final themeMap = {
  'Blue': {
    'light': lightBlue,
    'dark': darkBlue,
  },
  'Red': {
    'light': lightRed,
    'dark': darkRed,
  },
  'Gold': {
    'light': lightGold,
    'dark': darkGold,
  },
  'Orange': {
    'light': lightOrange,
    'dark': darkOrange,
  },
  'Pink': {
    'light': lightPink,
    'dark': darkPink,
  },
  'Purple': {
    'light': lightPurple,
    'dark': darkPurple,
  },
  'Green': {
    'light': lightGreen,
    'dark': darkGreen,
  }
};

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
