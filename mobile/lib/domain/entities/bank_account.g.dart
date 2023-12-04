// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'bank_account.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

BankAccount _$BankAccountFromJson(Map<String, dynamic> json) => BankAccount(
      id: json['id'] as String,
      bank: Bank.fromJson(json['bank'] as Map<String, dynamic>),
      accountNumber: json['account_number'] as String,
      accountName: json['account_name'] as String,
      updatedAt: DateTime.parse(json['updated_at'] as String),
    );

Map<String, dynamic> _$BankAccountToJson(BankAccount instance) =>
    <String, dynamic>{
      'id': instance.id,
      'bank': instance.bank.toJson(),
      'account_number': instance.accountNumber,
      'account_name': instance.accountName,
      'updated_at': instance.updatedAt.toIso8601String(),
    };
