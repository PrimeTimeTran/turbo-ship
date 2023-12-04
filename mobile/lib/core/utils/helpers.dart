import 'dart:developer';

void delay({required int milliseconds, required Function fn}) async {
  await Future.delayed(Duration(milliseconds: milliseconds));
  fn();
}

void p(v, {icon}) {
  icon = icon ?? 'ℹ😃';
  switch (icon) {
    case 'error' || 'e':
      icon = '❗️';
      break;
  }
  log('\x1B[32m$icon $v');
}
