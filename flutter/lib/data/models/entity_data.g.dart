// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'entity_data.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$EntityDataImpl _$$EntityDataImplFromJson(Map<String, dynamic> json) =>
    _$EntityDataImpl(
      id: json['id'] as String,
      fullName: json['fullName'] as String,
      firstName: json['firstName'] as String,
      lastName: json['lastName'] as String,
      email: json['email'] as String,
      dateOfBirth: json['dateOfBirth'] == null
          ? null
          : DateTime.parse(json['dateOfBirth'] as String),
      gender: json['gender'] as String?,
      referralCode: json['referralCode'] as String?,
    );

Map<String, dynamic> _$$EntityDataImplToJson(_$EntityDataImpl instance) =>
    <String, dynamic>{
      'id': instance.id,
      'fullName': instance.fullName,
      'firstName': instance.firstName,
      'lastName': instance.lastName,
      'email': instance.email,
      'dateOfBirth': instance.dateOfBirth?.toIso8601String(),
      'gender': instance.gender,
      'referralCode': instance.referralCode,
    };
