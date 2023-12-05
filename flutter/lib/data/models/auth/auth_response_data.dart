import 'package:freezed_annotation/freezed_annotation.dart';

part 'auth_response_data.freezed.dart';
part 'auth_response_data.g.dart';

@freezed
class AuthResponseData with _$AuthResponseData {
  const factory AuthResponseData({
    required String accessToken,
    required String refreshToken,
  }) = _AuthResponseData;

  factory AuthResponseData.fromJson(Map<String, dynamic> json) => _$AuthResponseDataFromJson(json);
}
