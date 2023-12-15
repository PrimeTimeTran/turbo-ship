import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:go_router/go_router.dart';
import 'package:turboship/all.dart';

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
              label: 'Wizards Screen',
            ),
            AppButton.primary(
              onPressed: () {
                getIt.get<AppBloc>().add(const GetEntities());
              },
              width: double.infinity,
              label: 'Wizards',
            ),
            BlocProvider(
              create: (_) => getIt.get<EntityBloc>(),
              child: BlocBuilder<EntityBloc, EntityState>(
                buildWhen: (previous, current) =>
                    previous.entities?.length != current.entities?.length,
                builder: (context, state) {
                  LogUtil.i(name: 'Building Bloc', state.entities?.length);
                  return Expanded(
                    child: ListView.builder(
                      itemCount: state.entities?.length ?? 0,
                      itemBuilder: (context, idx) {
                        LogUtil.i(
                            name: 'Widget: Home Screen ',
                            state.entities?.length);
                        return itemBuilder(state.entities![
                            idx]); // Assuming itemBuilder takes Entity data
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

  itemBuilder(item) {
    return Text(item.firstName);
  }

  void _handleOnLeadingPressed() {
    context.pop();
  }
}
