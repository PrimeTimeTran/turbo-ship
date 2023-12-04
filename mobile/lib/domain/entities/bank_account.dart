import 'package:equatable/equatable.dart';
import 'package:freezed_annotation/freezed_annotation.dart';

import 'bank.dart';

part 'bank_account.g.dart';

@JsonSerializable()
class BankAccount extends Equatable {
  final String id;
  final Bank bank;
  final String accountNumber;
  final String accountName;
  final DateTime updatedAt;

  const BankAccount({
    required this.id,
    required this.bank,
    required this.accountNumber,
    required this.accountName,
    required this.updatedAt,
  });

  factory BankAccount.fromJson(Map<String, dynamic> json) => _$BankAccountFromJson(json);

  Map<String, dynamic> toJson() => _$BankAccountToJson(this);

  @override
  List<Object?> get props => [
        id,
        bank,
        accountNumber,
        accountName,
        updatedAt,
      ];
}
