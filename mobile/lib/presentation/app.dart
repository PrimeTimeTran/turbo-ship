import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_gen/gen_l10n/app_localizations.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

import '../core/configs/configs.dart';
import '../core/constants/all.dart';
import '../core/extensions/all.dart';
import 'common_blocs/app/app_bloc.dart';
import 'overlay_wrapper.dart';
import 'providers.dart';
import 'resource/styles/all.dart';
// import 'routing/routing.dart';

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
                previous.locale != current.locale,
            builder: (context, state) {
              return MaterialApp.router(
                builder: (context, child) => _OneLongApp(child!),
                // routerConfig: AppRouter.router,
                themeMode: state.isDarkTheme ? ThemeMode.dark : ThemeMode.light,
                theme: AppThemeConstants.light,
                darkTheme: AppThemeConstants.dark,
                debugShowCheckedModeBanner: false,
                locale: Locale(state.locale),
                supportedLocales: LocaleConfig.supportedLocales,
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

class _OneLongApp extends StatefulWidget {
  final Widget child;
  const _OneLongApp(this.child);

  @override
  State<_OneLongApp> createState() => _OneLongAppState();
}

class _OneLongAppState extends State<_OneLongApp> with WidgetsBindingObserver {
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
