import 'package:flutter/material.dart';

import '../../core/extensions/all.dart';
import '../resource/styles/all.dart';

mixin AppThemeMixin<T extends StatefulWidget> on State<T> {
  AppColors get colorTheme => context.colorTheme;
  AppTextTheme get textTheme => context.textTheme;
}
