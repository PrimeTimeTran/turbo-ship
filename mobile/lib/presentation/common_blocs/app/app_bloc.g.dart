// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'app_bloc.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$AppStateImpl _$$AppStateImplFromJson(Map<String, dynamic> json) =>
    _$AppStateImpl(
      locale: json['locale'] as String? ?? LocaleConfig.defaultLocale,
      isDarkTheme: json['is_dark_theme'] as bool? ?? false,
      currentUser: json['current_user'] == null
          ? null
          : null,
      isForceUpdate: json['is_force_update'] ?? false,
      isMaintaining: json['is_maintaining'] ?? false,
      lastUserId: json['last_user_id'] as String?,
    );

Map<String, dynamic> _$$AppStateImplToJson(_$AppStateImpl instance) =>
    <String, dynamic>{
      'locale': instance.locale,
      'is_dark_theme': instance.isDarkTheme,
      'current_user': instance.currentUser?.toJson(),
      'is_force_update': instance.isForceUpdate,
      'is_maintaining': instance.isMaintaining,
      'last_user_id': instance.lastUserId,
    };
