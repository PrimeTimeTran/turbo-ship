import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:turboship/all.dart';
import 'package:turboship/core/extensions/all.dart';

class ViewUtils {
  const ViewUtils._();

  static InputBorder defaultInputBorder(
    BuildContext context, {
    bool focused = false,
    bool error = false,
  }) {
    var borderSide = BorderSide.none;
    if (focused) {
      borderSide = BorderSide(color: context.colorScheme.primary, width: 1.5);
    }
    if (error) {
      borderSide = BorderSide(
        color: context.colorScheme.error,
      );
    }

    return OutlineInputBorder(
      borderRadius: BorderRadius.circular(12.0),
      borderSide: borderSide,
    );
  }

  static void hideKeyboard(BuildContext context) {
    final currentFocus = FocusScope.of(context);
    if (!currentFocus.hasPrimaryFocus && currentFocus.focusedChild != null) {
      FocusManager.instance.primaryFocus?.unfocus();
    }
  }

  static Future<T?> showAlertDialog<T>(
    BuildContext context, {
    required String title,
    required String message,
    String? positiveText,
    String? negativeText,
    VoidCallback? onPositivePressed,
    VoidCallback? onNegativePressed,
  }) {
    return showDialog<T>(
      context: context,
      builder: (_) => AlertDialog(
        shape: const RoundedRectangleBorder(
          borderRadius: AppRadius.br12,
        ),
        title: Text(title),
        content: Text(message),
        actions: [
          if (negativeText != null)
            TextButton(
              onPressed: () {
                onNegativePressed?.call();
                context.pop();
              },
              child: Text(negativeText),
            ),
          if (positiveText != null)
            TextButton(
              onPressed: () {
                onPositivePressed?.call();
                context.pop();
              },
              child: Text(positiveText),
            ),
        ],
      ),
    );
  }

  static void showAppSnackBar(
    BuildContext context,
    String message, {
    Duration? duration,
    Color? backgroundColor,
  }) {
    final messengerState = ScaffoldMessenger.maybeOf(context);
    if (messengerState == null) {
      return;
    }
    messengerState.hideCurrentSnackBar();
    messengerState.showSnackBar(
      SnackBar(
        content: Text(message),
        backgroundColor: backgroundColor,
      ),
    );
  }

  static Future<T?> showBottomSheet<T>({
    required BuildContext context,
    required Widget child,
    bool isScrollControlled = false,
    Color? backgroundColor,
    double? elevation,
    ShapeBorder? shape,
    Clip? clipBehavior,
    Color? barrierColor,
    bool enableDrag = true,
    bool isDismissible = true,
    bool useRootNavigator = false,
    bool isFullScreen = false,
  }) {
    return showModalBottomSheet<T>(
      context: context,
      useRootNavigator: useRootNavigator,
      isScrollControlled: isFullScreen || isScrollControlled,
      backgroundColor: backgroundColor,
      elevation: elevation,
      clipBehavior: clipBehavior,
      barrierColor: barrierColor,
      enableDrag: enableDrag,
      isDismissible: isDismissible,
      shape: shape ??
          const RoundedRectangleBorder(
            borderRadius: BorderRadius.vertical(top: Radius.circular(48.0)),
          ),
      builder: (context) {
        return FractionallySizedBox(
          heightFactor: isFullScreen ? 0.9 : null,
          child: Container(
            padding: const EdgeInsets.only(top: 8.0),
            child: child,
          ),
        );
      },
    );
  }

  static Future<bool> showConfirmDialog(
    BuildContext context, {
    required String message,
    String? title,
    String? positiveText,
    String? negativeText,
  }) async {
    var isConfirmed = false;

    await showAlertDialog(
      context,
      title: title ?? context.t!.global__confirm_title,
      message: message,
      positiveText: positiveText ?? context.t!.global__confirm,
      negativeText: negativeText ?? context.t!.global__cancel,
      onPositivePressed: () {
        isConfirmed = true;
      },
    );

    return isConfirmed;
  }
}
