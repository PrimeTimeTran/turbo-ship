import 'package:flutter/material.dart';

import 'all.dart';

extension TextStyleExtensions on TextStyle {
  TextStyle get bold => copyWith(fontWeight: FontWeight.bold);
  TextStyle get regular => copyWith(fontWeight: FontWeight.normal);
  TextStyle get italic => copyWith(fontStyle: FontStyle.italic);
  TextStyle get underline => copyWith(decoration: TextDecoration.underline);
  TextStyle branchColor(BuildContext context) => copyWith(color: context.colorTheme.txtNormalBrand);
  TextStyle primaryTextColor(BuildContext context) => copyWith(color: context.colorTheme.txtNormalPrimary);
  TextStyle secondaryTextColor(BuildContext context) => copyWith(color: context.colorTheme.txtNormalSecondary);
  TextStyle errorColor(BuildContext context) => copyWith(color: context.colorTheme.txtStatusDanger);
  TextStyle tertiaryTextColor(BuildContext context) => copyWith(color: context.colorTheme.txtNormalTertiary);

  TextStyle toColor(Color color) => copyWith(color: color);
}
