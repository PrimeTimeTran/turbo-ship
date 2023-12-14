import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:turboship/all.dart';
import 'package:turboship/presentation/common_widgets/all.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> with WidgetsBindingObserver {
  @override
  Widget build(BuildContext context) {
    return CommonScaffold(
      appBar: CommonAppBar(
        onLeadingPressed: _handleOnLeadingPressed,
      ),
      body: SizedBox(
        width: double.infinity,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text('HomeScreen'),
            AppButton.primary(
              onPressed: () => context.push(AppPages.wizards.path),
              width: double.infinity,
              label: 'Welcome',
            ),
          ],
        ),
      ),
    );
  }

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
  }

  void _handleOnLeadingPressed() {
    context.pop();
  }
}
