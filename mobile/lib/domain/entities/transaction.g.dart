// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'transaction.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

Transaction _$TransactionFromJson(Map<String, dynamic> json) => Transaction(
      id: json['id'] as String,
      code: json['code'] as String,
      amount: json['amount'] as int,
      status: $enumDecode(_$TransactionStatusEnumMap, json['status']),
      type: $enumDecode(_$TransactionTypeEnumMap, json['type']),
      createdAt: DateTime.parse(json['created_at'] as String),
      updatedAt: DateTime.parse(json['updated_at'] as String),
      fee: json['fee'] as int? ?? 0,
      transferAccount: json['transfer_account'] == null
          ? null
          : BankAccount.fromJson(
              json['transfer_account'] as Map<String, dynamic>),
      expirationDate: json['expiration_date'] == null
          ? null
          : DateTime.parse(json['expiration_date'] as String),
    );

Map<String, dynamic> _$TransactionToJson(Transaction instance) =>
    <String, dynamic>{
      'id': instance.id,
      'code': instance.code,
      'amount': instance.amount,
      'fee': instance.fee,
      'status': _$TransactionStatusEnumMap[instance.status]!,
      'type': _$TransactionTypeEnumMap[instance.type]!,
      'created_at': instance.createdAt.toIso8601String(),
      'updated_at': instance.updatedAt.toIso8601String(),
      'transfer_account': instance.transferAccount?.toJson(),
      'expiration_date': instance.expirationDate?.toIso8601String(),
    };

const _$TransactionStatusEnumMap = {
  TransactionStatus.processing: 'processing',
  TransactionStatus.success: 'success',
  TransactionStatus.failed: 'failed',
};

const _$TransactionTypeEnumMap = {
  TransactionType.deposit: 'deposit',
  TransactionType.withdrawal: 'withdrawal',
  TransactionType.accruedInterest: 'accruedInterest',
};
