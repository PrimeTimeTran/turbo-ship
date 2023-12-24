import 'package:flutter/material.dart';

import '../../core/extensions/all.dart';
import '../resource/styles/all.dart';
import 'app_icon.dart';

enum AlertType {
  success,
  warning,
  error,
}

class AppAlert extends StatelessWidget {
  final AlertType alertType;
  final String message;
  final TextStyle? textStyle;
  final Widget? trailing;

  const AppAlert({
    required this.alertType,
    required this.message,
    super.key,
    this.textStyle,
    this.trailing,
  });

  factory AppAlert.success(String message,
      {TextStyle? textStyle, Widget? trailing}) {
    return AppAlert(
      alertType: AlertType.success,
      message: message,
      textStyle: textStyle,
      trailing: trailing,
    );
  }

  factory AppAlert.warning(String message,
      {TextStyle? textStyle, Widget? trailing}) {
    return AppAlert(
      alertType: AlertType.warning,
      message: message,
      textStyle: textStyle,
      trailing: trailing,
    );
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: TSpacing.edgeInsetsAll12,
      decoration: BoxDecoration(
        color: getBgColor(context, alertType),
        borderRadius: TRadius.borderRadius8,
        border: Border.all(color: _getBorderColor(context)),
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          _buildIcon(context),
          TSpacing.gapW8,
          Expanded(child: _buildMessage(context)),
          if (trailing != null) ...[TSpacing.gapW8, trailing!],
        ],
      ),
    );
  }

  Widget _buildIcon(BuildContext context) {
    return Transform.translate(
      offset: const Offset(0, 3),
      child: AppIcon(
        icon: _getIcon(),
        color: getIcColor(context, alertType),
      ),
    );
  }

  Text _buildMessage(BuildContext context) {
    final style = context.textTheme.b14BaseMedium
        .copyWith(
          color: _getTextColor(context),
          decoration: TextDecoration.none,
        )
        .merge(textStyle);

    return Text(
      message,
      style: style,
      textAlign: TextAlign.justify,
    );
  }

  Color _getBorderColor(BuildContext context) {
    switch (alertType) {
      case AlertType.success:
        return context.colorTheme.bgStatusSuccess;
      case AlertType.warning:
        return context.colorTheme.bdStatusWarning;
      case AlertType.error:
        return context.colorTheme.bdStatusDanger;
    }
  }

  Object _getIcon() {
    switch (alertType) {
      case AlertType.success:
        return AppIcons.checkCircle;
      case AlertType.warning:
        return AppIcons.info;
      case AlertType.error:
        return AppIcons.alertTriangle;
    }
  }

  Color _getTextColor(BuildContext context) {
    switch (alertType) {
      case AlertType.success:
        return context.colorTheme.txtStatusSuccess;
      case AlertType.warning:
        return context.colorTheme.txtStatusWarning;
      case AlertType.error:
        return context.colorTheme.txtStatusDanger;
    }
  }

  static Color getBgColor(BuildContext context, AlertType alertType) {
    switch (alertType) {
      case AlertType.success:
        return context.colorTheme.bgStatusSuccess;
      case AlertType.warning:
        return context.colorTheme.bgStatusWarning;
      case AlertType.error:
        return context.colorTheme.bgStatusDanger;
    }
  }

  static Color getIcColor(BuildContext context, AlertType alertType) {
    switch (alertType) {
      case AlertType.success:
        return context.colorTheme.icStatusSuccess;
      case AlertType.warning:
        return context.colorTheme.icStatusWarning;
      case AlertType.error:
        return context.colorTheme.icStatusDanger;
    }
  }
}
