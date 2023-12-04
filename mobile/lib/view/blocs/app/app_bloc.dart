import 'package:bloc/bloc.dart';
import 'package:turboship/all.dart';

class AppBloc extends Bloc<AppEvent, AppState> {
  late OurState app;
  late String language = SYSTEM_LANG;
  // final AppPreferences _prefs = getIt.get<AppPreferences>();

  AppBloc()
      : super(
          AppInitial(
            OurState(
              color: '0xFFD4AF37',
              language: SYSTEM_LANG,
            ),
          ),
        ) {
    app = OurState(
      language: SYSTEM_LANG,
      color: '0xFFD4AF37',
    );
    on<SelectedLanguage>((event, emit) {
      final lang = event.language;
      // _prefs.setLanguage(lang);
      app.language = lang;
      emit(LanguageSelected(app, lang));
    });
    on<SelectedTheme>((event, emit) {
      app.color = event.color;
      emit(ThemeSelected(app, event.color));
    });
    on<LoadingStarted>((event, emit) {
      emit(Loading());
    });
    on<LoadingDone>((event, emit) {
      emit(Loaded(event.now));
    });
    on<StoppedTransfer>((event, emit) {
      emit(TransferStopped(app));
    });
    on<SignedIn>((event, emit) {
      emit(AuthenticateSuccess(app));
    });
    on<CreatedAccount>((event, emit) {
      emit(AuthenticateSuccess(app));
    });
    on<FocusingScreen>((event, emit) {
      emit(ScreenFocused(app));
    });
  }

  void addUser(user, [resp]) {
    if (resp != null) {
      TOKEN = resp['payload']!;
      // _prefs.storageToken(TOKEN);
      // _prefs.storeUser(user);
    }
    // app.user = user;
    add(SignedIn(app));
  }

  void changeLang(String language) {
    app.language = language;
    add(SelectedLanguage(language));
  }

  void changeTheme(String color) {
    THEME = color;
    app.color = THEME;
    // _prefs.setTheme(THEME);
    add(SelectedTheme(THEME));
  }

  getMyId() {
    // return app.user!.id;
  }

  void setFocusedScreen(String title) {
    app.title = title;
    add(FocusingScreen(app));
  }

  void setLightDark(val) {
    // _prefs.setDarkMode(val);
  }

  void startLoading() {
    app.loading = true;
    add(LoadingStarted());
  }

  void stopLoading() {
    app.loading = false;
    add(LoadingDone(app));
  }

  void stopTransfer() {
    app.modal = false;
    add(StoppedTransfer(app));
  }
}

class OurState {
  bool? modal;
  bool? loading;
  String? color;
  String? title;
  String? language;

  OurState({
    this.modal,
    this.color,
    this.loading,
    this.language,
  });
}
