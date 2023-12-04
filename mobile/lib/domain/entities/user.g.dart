// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'user.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

User _$UserFromJson(Map<String, dynamic> json) => User(
      id: json['id'] as String,
      fullName: json['full_name'] as String,
      email: json['email'] as String,
      dateOfBirth: json['date_of_birth'] == null
          ? null
          : DateTime.parse(json['date_of_birth'] as String),
      gender: $enumDecodeNullable(_$GenderEnumMap, json['gender']),
      referralCode: json['referral_code'] as String?,
      isEmailVerified: json['is_email_verified'] as bool? ?? false,
      hasSignedContract: json['has_signed_contract'] as bool? ?? false,
    );

Map<String, dynamic> _$UserToJson(User instance) => <String, dynamic>{
      'id': instance.id,
      'email': instance.email,
      'full_name': instance.fullName,
      'date_of_birth': instance.dateOfBirth?.toIso8601String(),
      'gender': _$GenderEnumMap[instance.gender],
      'referral_code': instance.referralCode,
      'is_email_verified': instance.isEmailVerified,
      'has_signed_contract': instance.hasSignedContract,
    };

const _$GenderEnumMap = {
  Gender.male: 'male',
  Gender.female: 'female',
  Gender.other: 'other',
};
