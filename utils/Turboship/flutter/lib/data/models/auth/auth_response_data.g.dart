// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'auth_response_data.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$AuthResponseDataImpl _$$AuthResponseDataImplFromJson(
        Map<String, dynamic> json) =>
    _$AuthResponseDataImpl(
      token: json['token'] as String,
      user: json['user'] as Map<String, dynamic>,
    );

Map<String, dynamic> _$$AuthResponseDataImplToJson(
        _$AuthResponseDataImpl instance) =>
    <String, dynamic>{
      'token': instance.token,
      'user': instance.user,
    };
