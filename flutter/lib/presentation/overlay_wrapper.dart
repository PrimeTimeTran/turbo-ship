import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import '../core/configs/di/di.dart';
import 'common_blocs/overlay/overlay_bloc.dart';
import 'common_widgets/all.dart';
import 'resource/styles/all.dart';

class AppOverlayWrapper extends StatelessWidget {
  final Widget child;
  const AppOverlayWrapper({required this.child, super.key});

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        child,
        _buildOverlay(),
      ],
    );
  }

  BlocProvider<AppOverlayBloc> _buildOverlay() {
    return BlocProvider(
      create: (_) => getIt.get<AppOverlayBloc>(),
      child: BlocBuilder<AppOverlayBloc, AppOverlayState>(
        builder: (context, state) {
          if (state.alertMessage == null) {
            return AppSpacing.emptyBox;
          }

          return _buildPageAlertMessage(
              context, state.alertMessage!.message, state.alertMessage!.type);
        },
      ),
    );
  }

  Widget _buildPageAlertMessage(
      BuildContext context, String message, AlertType alertType) {
    return Positioned(
      left: 0,
      right: 0,
      bottom: AppSpacing.bottomPaddingValue(context),
      child: Padding(
        padding: AppSpacing.edgeInsetsAll16,
        child: Align(
          alignment: Alignment.topCenter,
          child: DecoratedBox(
            decoration: const BoxDecoration(
              borderRadius: AppRadius.borderRadius8,
              boxShadow: [
                BoxShadow(
                  color: Colors.red,
                  // context.colorTheme.bdSurfaceInverseMain.withOpacity(0.1),
                  offset: Offset(0, 2),
                  blurRadius: 2,
                ),
              ],
            ),
            child: AppAlert(
              alertType: alertType,
              message: message,
              trailing: AppIcon(
                icon: AppIcons.close,
                size: Sizes.s20,
                color: AppAlert.getIcColor(context, alertType),
                onTap: () =>
                    getIt.get<AppOverlayBloc>().add(const HideOverlayEvent()),
              ),
            ),
          ).animate().slide(
                duration: const Duration(milliseconds: 150),
                begin: const Offset(0, 1),
                end: const Offset(0, 0),
              ),
        ),
      ),
    );
  }
}