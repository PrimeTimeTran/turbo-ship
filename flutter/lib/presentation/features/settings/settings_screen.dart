import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:go_router/go_router.dart';
import 'package:turboship/config/theme/themes.dart';
import 'package:turboship/core/configs/di/di.dart';
import 'package:turboship/core/utils/all.dart';
import 'package:turboship/presentation/common_blocs/app/app_bloc.dart';
import 'package:turboship/presentation/common_widgets/all.dart';
import 'package:turboship/presentation/resource/styles/gaps.dart';
import 'package:turboship/presentation/routing/router/app_router.dart';

import '../../../core/extensions/context_extensions.dart';

class __SettingsScreenStateState extends State<_SettingsScreenState>
    with WidgetsBindingObserver {
  @override
  Widget build(BuildContext context) {
    var alpha = context.l10n.accommodations;
    var locale = BlocProvider.of<AppBloc>(context).state.locale;
    return CommonScaffold(
      bottomNavigationBar: const BottomTabs(),
      body: SizedBox(
        width: double.infinity,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text('_SettingsScreenState'),
            BlocBuilder<AppBloc, AppState>(
              builder: (c, state) {
                var isDarkTheme =
                    BlocProvider.of<AppBloc>(context).state.isDarkTheme;
                var palette = BlocProvider.of<AppBloc>(context).state.palette;
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
                      child: Text(
                        darkText,
                        style: const TextStyle(
                            fontSize: 30, fontWeight: FontWeight.bold),
                      ),
                    ),
                    TextButton(
                      onPressed: () {
                        LogUtil.i('Changing Palette');
                        var item = sampleTheme();
                        LogUtil.i(item);
                        getIt.get<AppBloc>().add(AppPaletteChanged(item));
                      },
                      child: Text(
                        'Sample $palette',
                        style: const TextStyle(
                            fontSize: 30, fontWeight: FontWeight.bold),
                      ),
                    ),
                    TextButton(
                      onPressed: () {
                        LogUtil.i('Changing Theme $locale');
                        String local = locale == 'en' ? 'vi' : 'en';
                        getIt.get<AppBloc>().add(AppLanguageChanged(local));
                      },
                      child: Text(
                        'Change from $locale $alpha',
                        style: const TextStyle(
                            fontSize: 30, fontWeight: FontWeight.bold),
                      ),
                    ),
                    AppSpacing.gapH12,
                    AppButton.primary(
                      onPressed: () => context.go(AppPages.settings.path),
                      width: double.infinity,
                      label: 'Welcome',
                    ),
                    AppSpacing.gapH12,
                    buildThemeDark(),
                    buildThemeLight(),
                  ],
                );
              },
            ),
          ],
        ),
      ),
    );
  }

  buildThemeDark() {
    return BlocBuilder<AppBloc, AppState>(
      builder: (c, state) {
        final palette = state.palette;
        return Theme(
          data: themeMap[palette]!['dark']!,
          child: Builder(
            builder: (BuildContext context) {
              return Container(
                width: double.infinity,
                color: C(context, 'background'),
                padding: const EdgeInsets.all(8),
                child: const Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'Alpha',
                      style:
                          TextStyle(fontSize: 30, fontWeight: FontWeight.bold),
                    ),
                    Text(
                      'Bravo',
                      style:
                          TextStyle(fontSize: 30, fontWeight: FontWeight.bold),
                    ),
                    Text(
                      'Charlie',
                      style:
                          TextStyle(fontSize: 30, fontWeight: FontWeight.bold),
                    ),
                  ],
                ),
              );
            },
          ),
        );
      },
    );
  }

  buildThemeLight() {
    final palette = getIt.get<AppBloc>().state.palette;
    return Builder(
      builder: (BuildContext context) {
        return Theme(
          data: lightBlue,
          child: Builder(
            builder: (BuildContext context) {
              return Container(
                width: double.infinity,
                color: C(context, 'background'),
                padding: const EdgeInsets.all(8),
                child: const Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'Alpha',
                      style:
                          TextStyle(fontSize: 30, fontWeight: FontWeight.bold),
                    ),
                    Text(
                      'Bravo',
                      style:
                          TextStyle(fontSize: 30, fontWeight: FontWeight.bold),
                    ),
                    Text(
                      'Charlie',
                      style:
                          TextStyle(fontSize: 30, fontWeight: FontWeight.bold),
                    ),
                  ],
                ),
              );
            },
          ),
        );
      },
    );
  }

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
  }
}

class _SettingsScreenState extends StatefulWidget {
  const _SettingsScreenState({super.key});

  @override
  State<_SettingsScreenState> createState() => __SettingsScreenStateState();
}
