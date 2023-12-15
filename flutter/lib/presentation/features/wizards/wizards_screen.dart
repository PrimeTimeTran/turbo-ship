import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:go_router/go_router.dart';
import 'package:turboship/all.dart';

class WizardsScreen extends StatefulWidget {
  const WizardsScreen({super.key});

  @override
  State<WizardsScreen> createState() => _WizardsScreenState();
}

class _WizardsScreenState extends State<WizardsScreen>
    with WidgetsBindingObserver {
  @override
  Widget build(BuildContext context) {
    final items = [];
    return CommonScaffold(
      appBar: CommonAppBar(
        onLeadingPressed: _handleOnLeadingPressed,
      ),
      body: SizedBox(
        width: double.infinity,
        height:
            MediaQuery.of(context).size.height, // Adjust this height as needed
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text('WizardsScreen'),
            BlocProvider(
              create: (_) => getIt.get<EntityBloc>(),
              child: BlocBuilder<EntityBloc, EntityState>(
                builder: (context, state) {
                  return Expanded(
                    child: ListView.builder(
                      itemCount: state.entities?.length ?? 0,
                      itemBuilder: (context, idx) {
                        return itemBuilder(state.entities![idx],
                            idx); // Assuming itemBuilder takes Entity data
                      },
                    ),
                  );
                },
              ),
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

  itemBuilder(item, idx) {
    return Text(item.firstName);
  }

  void _handleOnLeadingPressed() {
    context.pop();
  }
}
