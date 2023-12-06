import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
// ignore: depend_on_referenced_packages
import 'package:provider/provider.dart';
import 'package:turboship/all.dart';

import 'blocs/app/app_bloc.dart';
import 'blocs/app/app_state.dart';

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  Widget build(BuildContext context) {
    return BlocConsumer<AppBloc, AppState>(
      listener: (context, state) {},
      builder: (context, state) {
        if (state is LanguageSelected) {
          return buildWrapper(state.language, state.now.color);
        }
        if (state is ThemeSelected) {
          return buildWrapper(state.now.language, state.now.color);
        }
        return buildWrapper(SYSTEM_LANG, THEME);
      },
    );
  }

  buildWrapper(lang, [theme]) {
    return MaterialApp.router(
      routerConfig: goRouter,
      locale: Locale(lang, null),
      // theme: getLightTheme(theme),
      // darkTheme: getDarkTheme(theme),
      title: 'Turboship',
      debugShowCheckedModeBanner: false,
      supportedLocales: supportedLocales,
      localizationsDelegates: localizationsDelegates,
      localeResolutionCallback: localeResolutionCallback,
      themeMode: Provider.of<ThemeModel>(context).isDarkMode
          ? ThemeMode.dark
          : ThemeMode.light,
    );
  }
}
