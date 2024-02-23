import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_gen/gen_l10n/app_localizations.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:turboship/all.dart';

import 'app_overlay_wrapper.dart';

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return ScreenUtilInit(
      designSize: const Size(
        DeviceConstants.designDeviceWidth,
        DeviceConstants.designDeviceHeight,
      ),
      builder: (context, _) {
        return BlocProvider(
          create: (_) => getIt.get<AppBloc>()..add(const AppInitiated()),
          child: BlocBuilder<AppBloc, AppState>(
            buildWhen: (previous, current) =>
                previous.isDarkTheme != current.isDarkTheme ||
                previous.palette != current.palette ||
                previous.locale != current.locale,
            builder: (context, state) {
              var palette = state.palette;
              ThemeData dark = themeMap[palette]!['dark']!;
              ThemeData light = themeMap[palette]!['light']!;
              ThemeMode themeMode =
                  state.isDarkTheme ? ThemeMode.dark : ThemeMode.light;
              return MaterialApp.router(
                theme: light,
                darkTheme: dark,
                // Haven't figured out how to turn this guy yet.
                // theme: AppThemeConstants.light,
                // darkTheme: AppThemeConstants.dark,
                themeMode: themeMode,
                locale: Locale(state.locale),
                routerConfig: AppRouter.router,
                debugShowCheckedModeBanner: false,
                supportedLocales: LocaleConfig.supportedLocales,
                builder: (context, child) => _TurboshipApp(child!),
                localeResolutionCallback:
                    (Locale? locale, Iterable<Locale> supportedLocales) =>
                        supportedLocales.contains(locale)
                            ? locale
                            : const Locale(LocaleConfig.defaultLocale),
                localizationsDelegates: const [
                  AppLocalizations.delegate,
                  GlobalMaterialLocalizations.delegate,
                  GlobalWidgetsLocalizations.delegate,
                  GlobalCupertinoLocalizations.delegate,
                ],
              );
            },
          ),
        );
      },
    );
  }
}

class _TurboshipApp extends StatefulWidget {
  final Widget child;
  const _TurboshipApp(this.child);

  @override
  State<_TurboshipApp> createState() => _TurboshipAppState();
}

class _TurboshipAppState extends State<_TurboshipApp>
    with WidgetsBindingObserver {
  late final AppBloc _appBloc;

  @override
  Widget build(BuildContext context) {
    final MediaQueryData data = MediaQuery.of(context);
    return MediaQuery(
      data: data.copyWith(textScaler: const TextScaler.linear(1.0)),
      child: ScrollConfiguration(
        behavior: const ScrollBehavior().copyWith(
          physics: const ClampingScrollPhysics(),
        ),
        child: DefaultTextStyle(
          style: context.textTheme.b14BaseMedium,
          child: AppOverlayWrapper(
            child: AppBlocProviders(
              child: widget.child,
            ),
          ),
        ),
      ),
    );
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    if (state == AppLifecycleState.resumed) {
      _appBloc.add(const AppResumed());
    }
    super.didChangeAppLifecycleState(state);
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    super.dispose();
  }

  @override
  void initState() {
    super.initState();
    _appBloc = getIt.get<AppBloc>();
    WidgetsBinding.instance.addObserver(this);
  }
}
