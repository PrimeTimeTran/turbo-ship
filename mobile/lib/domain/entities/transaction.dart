import 'package:equatable/equatable.dart';
import 'package:json_annotation/json_annotation.dart';

import 'bank_account.dart';

part 'transaction.g.dart';

@JsonSerializable()
class Transaction extends Equatable {
  final String id;
  final String code;
  final int amount;
  final int fee;
  final TransactionStatus status;
  final TransactionType type;
  final DateTime createdAt;
  final DateTime updatedAt;
  final BankAccount? transferAccount;
  final DateTime? expirationDate;

  const Transaction({
    required this.id,
    required this.code,
    required this.amount,
    required this.status,
    required this.type,
    required this.createdAt,
    required this.updatedAt,
    this.fee = 0,
    this.transferAccount,
    this.expirationDate,
  });

  factory Transaction.fromJson(Map<String, dynamic> json) => _$TransactionFromJson(json);

  Map<String, dynamic> toJson() => _$TransactionToJson(this);

  @override
  List<Object?> get props => [
        id,
        code,
        amount,
        fee,
        status,
        type,
        createdAt,
        updatedAt,
        transferAccount,
        expirationDate,
      ];
}

enum TransactionStatus {
  processing,
  success,
  failed,
}

enum TransactionType { deposit, withdrawal, accruedInterest }
