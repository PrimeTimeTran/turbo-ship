// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'bank.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

Bank _$BankFromJson(Map<String, dynamic> json) => Bank(
      id: json['id'] as String,
      shortName: json['short_name'] as String,
      enName: json['en_name'] as String,
      viName: json['vi_name'] as String,
      iconUrl: json['icon_url'] as String,
    );

Map<String, dynamic> _$BankToJson(Bank instance) => <String, dynamic>{
      'id': instance.id,
      'short_name': instance.shortName,
      'en_name': instance.enName,
      'vi_name': instance.viName,
      'icon_url': instance.iconUrl,
    };
