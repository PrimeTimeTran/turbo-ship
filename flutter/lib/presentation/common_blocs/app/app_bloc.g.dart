// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'app_bloc.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$AppStateImpl _$$AppStateImplFromJson(Map<String, dynamic> json) =>
    _$AppStateImpl(
      locale: json['locale'] as String? ?? LocaleConfig.defaultLocale,
      isDarkTheme: json['isDarkTheme'] as bool? ?? false,
      currentUser: json['currentUser'] == null
          ? null
          : User.fromJson(json['currentUser'] as Map<String, dynamic>),
      isForceUpdate: json['isForceUpdate'] ?? false,
      isMaintaining: json['isMaintaining'] ?? false,
      lastUserId: json['lastUserId'] as String?,
    );

Map<String, dynamic> _$$AppStateImplToJson(_$AppStateImpl instance) =>
    <String, dynamic>{
      'locale': instance.locale,
      'isDarkTheme': instance.isDarkTheme,
      'currentUser': instance.currentUser,
      'isForceUpdate': instance.isForceUpdate,
      'isMaintaining': instance.isMaintaining,
      'lastUserId': instance.lastUserId,
    };
