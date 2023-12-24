import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../../core/extensions/all.dart';
import '../resource/styles/all.dart';
import 'app_icon.dart';

class BottomSheetTitle extends StatelessWidget {
  final String title;
  final VoidCallback? onClose;

  const BottomSheetTitle({
    required this.title,
    this.onClose,
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: TSpacing.edgeInsetsH12,
      child: Column(
        children: [
          Row(
            children: [
              TSpacing.gapW8,
              Expanded(
                child: Text(
                  title,
                  style: context.textTheme.headingH42xlSemibold,
                ),
              ),
              AppIcon(
                icon: AppIcons.close,
                padding: TSpacing.edgeInsetsAll8,
                onTap: onClose ?? context.pop,
              ),
            ],
          ),
          const Padding(
            padding: TSpacing.edgeInsetsV16H8,
            child: Divider(),
          ),
        ],
      ),
    );
  }
}
