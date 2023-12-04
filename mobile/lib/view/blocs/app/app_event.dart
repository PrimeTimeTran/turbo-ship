import 'package:equatable/equatable.dart';

import 'app_bloc.dart';

abstract class AppEvent extends Equatable {
  const AppEvent();

  @override
  List<Object> get props => [];
}

class CreatedAccount extends AppEvent {
  final OurState now;

  const CreatedAccount(this.now);

  @override
  List<Object> get props => [now];
}

class FocusingScreen extends AppEvent {
  final OurState now;

  const FocusingScreen(this.now);

  @override
  List<Object> get props => [now];
}

class LoadingDone extends AppEvent {
  final OurState now;

  const LoadingDone(this.now);

  @override
  List<Object> get props => [now];
}

class LoadingStarted extends AppEvent {}

class SelectedLanguage extends AppEvent {
  final String language;

  const SelectedLanguage(this.language);

  @override
  List<Object> get props => [language];
}

class SelectedTheme extends AppEvent {
  final String color;

  const SelectedTheme(this.color);

  @override
  List<Object> get props => [color];
}

class SignedIn extends AppEvent {
  final OurState now;

  const SignedIn(this.now);

  @override
  List<Object> get props => [now];
}

class StoppedTransfer extends AppEvent {
  final OurState now;

  const StoppedTransfer(this.now);

  @override
  List<Object> get props => [now];
}
