import 'package:freezed_annotation/freezed_annotation.dart';

part 'entity_data.freezed.dart';
part 'entity_data.g.dart';

@freezed
class EntityData with _$EntityData {
  const factory EntityData({
    required String id,
    required String fullName,
    required String firstName,
    required String lastName,
    required String email,
    DateTime? dateOfBirth,
    String? gender,
    String? referralCode,
  }) = _EntityData;

  factory EntityData.fromJson(Map<String, dynamic> json) =>
      _$EntityDataFromJson(json);
}
