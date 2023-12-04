import 'package:equatable/equatable.dart';

import 'app_bloc.dart';

class AppInitial extends AppState {
  final OurState now;
  const AppInitial(this.now);

  @override
  List<Object> get props => [now];
}

abstract class AppState extends Equatable {
  const AppState();

  @override
  List<Object> get props => [];
}

class AuthenticateSuccess extends AppState {
  final OurState now;

  const AuthenticateSuccess(this.now);

  @override
  List<Object> get props => [now];
}

class LanguageSelected extends AppState {
  final String language;
  final OurState now;

  const LanguageSelected(this.now, this.language);

  @override
  List<Object> get props => [now, language];
}

class Loaded extends AppState {
  final OurState now;

  const Loaded(this.now);

  @override
  List<Object> get props => [now];
}

class Loading extends AppState {}

class ScreenFocused extends AppState {
  final OurState now;

  const ScreenFocused(this.now);

  @override
  List<Object> get props => [now];
}

class ThemeSelected extends AppState {
  final OurState now;
  final String color;

  const ThemeSelected(this.now, this.color);

  @override
  List<Object> get props => [now, color];
}

class TransferStopped extends AppState {
  final OurState now;

  const TransferStopped(this.now);

  @override
  List<Object> get props => [now];
}
