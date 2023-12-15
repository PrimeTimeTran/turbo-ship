// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'entity.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

Entity _$EntityFromJson(Map<String, dynamic> json) => Entity(
      id: json['id'] as String?,
      email: json['email'] as String?,
      firstName: json['firstName'] as String?,
    );

Map<String, dynamic> _$EntityToJson(Entity instance) => <String, dynamic>{
      'id': instance.id,
      'email': instance.email,
      'firstName': instance.firstName,
    };
