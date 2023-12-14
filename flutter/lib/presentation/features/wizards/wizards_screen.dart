import 'package:flutter/material.dart';
import 'package:turboship/presentation/common_widgets/all.dart';

class WizardsScreen extends StatefulWidget {
  const WizardsScreen({super.key});

  @override
  State<WizardsScreen> createState() => _WizardsScreenState();
}

class _WizardsScreenState extends State<WizardsScreen>
    with WidgetsBindingObserver {
  @override
  Widget build(BuildContext context) {
    return const CommonScaffold(
      body: SizedBox(
        width: double.infinity,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('WizardsScreen'),
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
}
