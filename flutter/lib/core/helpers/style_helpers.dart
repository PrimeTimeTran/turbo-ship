import 'package:turboship/all.dart';

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
