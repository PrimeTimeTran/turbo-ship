// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'saving_account.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

SavingAccount _$SavingAccountFromJson(Map<String, dynamic> json) =>
    SavingAccount(
      id: json['id'] as String,
      planId: json['plan_id'] as String,
      accountNumber: json['account_number'] as String,
      balance: (json['balance'] as num).toDouble(),
      interestAmount: (json['interest_amount'] as num).toDouble(),
      createdAt: DateTime.parse(json['created_at'] as String),
    );

Map<String, dynamic> _$SavingAccountToJson(SavingAccount instance) =>
    <String, dynamic>{
      'id': instance.id,
      'plan_id': instance.planId,
      'account_number': instance.accountNumber,
      'balance': instance.balance,
      'interest_amount': instance.interestAmount,
      'created_at': instance.createdAt.toIso8601String(),
    };
