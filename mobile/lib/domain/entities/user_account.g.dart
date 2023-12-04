// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'user_account.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

UserAccount _$UserAccountFromJson(Map<String, dynamic> json) => UserAccount(
      plSum: (json['pl_sum'] as num).toDouble(),
      plPercent: (json['pl_percent'] as num).toDouble(),
      totalSum: (json['total_sum'] as num).toDouble(),
      transfersSum: (json['transfers_sum'] as num).toDouble(),
      safe: BaseInfo.fromJson(json['safe'] as Map<String, dynamic>),
    );

Map<String, dynamic> _$UserAccountToJson(UserAccount instance) =>
    <String, dynamic>{
      'pl_sum': instance.plSum,
      'pl_percent': instance.plPercent,
      'total_sum': instance.totalSum,
      'transfers_sum': instance.transfersSum,
      'safe': instance.safe.toJson(),
    };

BaseInfo _$BaseInfoFromJson(Map<String, dynamic> json) => BaseInfo(
      rate: (json['rate'] as num).toDouble(),
      plSum: (json['pl_sum'] as num).toDouble(),
      totalSum: (json['total_sum'] as num).toDouble(),
      plPercent: (json['pl_percent'] as num).toDouble(),
      transfersSum: (json['transfers_sum'] as num).toDouble(),
    );

Map<String, dynamic> _$BaseInfoToJson(BaseInfo instance) => <String, dynamic>{
      'rate': instance.rate,
      'pl_sum': instance.plSum,
      'pl_percent': instance.plPercent,
      'total_sum': instance.totalSum,
      'transfers_sum': instance.transfersSum,
    };
