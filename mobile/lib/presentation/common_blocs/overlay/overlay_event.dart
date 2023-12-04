part of 'overlay_bloc.dart';

class AppOverlayEvent {}

@freezed
class ShowOverlayEvent extends AppOverlayEvent with _$ShowOverlayEvent {
  const factory ShowOverlayEvent(
    String message, {
    required AlertType alertType,
    Duration? duration,
  }) = _ShowOverlayEvent;
}

@freezed
class HideOverlayEvent extends AppOverlayEvent with _$HideOverlayEvent {
  const factory HideOverlayEvent() = _HideOverlayEvent;
}
