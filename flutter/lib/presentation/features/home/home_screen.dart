import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:turboship/core/configs/di/di.dart';
import 'package:turboship/core/utils/log_util.dart';
import 'package:turboship/presentation/common_blocs/app/app_bloc.dart';
import 'package:turboship/presentation/common_widgets/all.dart';

import '../../../core/extensions/context_extensions.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> with WidgetsBindingObserver {
  @override
  Widget build(BuildContext context) {
    var alpha = context.l10n.accommodations;
    var locale = BlocProvider.of<AppBloc>(context).state.locale;

    return CommonScaffold(
      body: SizedBox(
        width: double.infinity,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            BlocBuilder<AppBloc, AppState>(
              builder: (c, state) {
                var isDarkTheme =
                    BlocProvider.of<AppBloc>(context).state.isDarkTheme;
                var darkText =
                    isDarkTheme ? 'Change to light' : 'Change to dark';
                return Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    TextButton(
                      onPressed: () {
                        LogUtil.i('Changing Theme $isDarkTheme');
                        getIt.get<AppBloc>().add(AppThemeChanged(!isDarkTheme));
                      },
                      child: Text(darkText),
                    ),
                    TextButton(
                      onPressed: () {
                        LogUtil.i('Changing Theme $locale');
                        String local = locale == 'en' ? 'vi' : 'en';
                        getIt.get<AppBloc>().add(AppLanguageChanged(local));
                      },
                      child: Text('Change from $locale $alpha'),
                    ),
                  ],
                );
              },
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
}
