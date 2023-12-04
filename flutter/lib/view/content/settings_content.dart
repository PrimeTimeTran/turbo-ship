import 'package:flutter/material.dart';
import 'package:turboship/all.dart';

class SettingsContent extends StatefulWidget {
  const SettingsContent({super.key});

  @override
  State<SettingsContent> createState() => _SettingsContentState();
}

class _SettingsContentState extends State<SettingsContent> {
  @override
  Widget build(BuildContext context) {
    return texted(context, 'hLarge', context.t!.settings);
  }
}
