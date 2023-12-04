import 'package:equatable/equatable.dart';
import 'package:json_annotation/json_annotation.dart';

part 'saving_account.g.dart';

@JsonSerializable()
class SavingAccount extends Equatable {
  final String id;
  final String planId;
  final String accountNumber;
  final double balance;
  final double interestAmount;
  final DateTime createdAt;

  const SavingAccount({
    required this.id,
    required this.planId,
    required this.accountNumber,
    required this.balance,
    required this.interestAmount,
    required this.createdAt,
  });

  factory SavingAccount.fromJson(Map<String, dynamic> json) => _$SavingAccountFromJson(json);

  Map<String, dynamic> toJson() => _$SavingAccountToJson(this);

  @override
  List<Object?> get props => [
        id,
        planId,
        accountNumber,
        balance,
        interestAmount,
        createdAt,
      ];
}
