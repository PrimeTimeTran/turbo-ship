import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import 'common_blocs/app/app_bloc.dart';

class AppBlocProviders extends StatelessWidget {
  final Widget child;
  const AppBlocProviders({
    required this.child,
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return BlocBuilder<AppBloc, AppState>(
      buildWhen: (previous, current) =>
          previous.currentUser != current.currentUser,
      builder: (context, state) {
        if (state.isLoggedIn) {
          return MultiBlocProvider(
            providers: const [
              // BlocProvider(create: (_) => getIt.get<SavingBloc>()),
              // BlocProvider(create: (_) => getIt.get<TransactionsBloc>()),
            ],
            child: child,
          );
        }

        return child;
      },
    );
  }
}
