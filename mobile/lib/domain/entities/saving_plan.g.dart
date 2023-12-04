// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'saving_plan.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

SavingPlan _$SavingPlanFromJson(Map<String, dynamic> json) => SavingPlan(
      id: json['id'] as String,
      name: json['name'] as String,
      interestRate: (json['interest_rate'] as num).toDouble(),
      minDeposit: (json['min_deposit'] as num).toDouble(),
      maxDeposit: (json['max_deposit'] as num?)?.toDouble(),
    );

Map<String, dynamic> _$SavingPlanToJson(SavingPlan instance) =>
    <String, dynamic>{
      'id': instance.id,
      'name': instance.name,
      'interest_rate': instance.interestRate,
      'min_deposit': instance.minDeposit,
      'max_deposit': instance.maxDeposit,
    };
