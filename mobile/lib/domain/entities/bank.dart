import 'package:equatable/equatable.dart';
import 'package:json_annotation/json_annotation.dart';

part 'bank.g.dart';

@JsonSerializable()
class Bank extends Equatable {
  final String id;
  final String shortName;
  final String enName;
  final String viName;
  final String iconUrl;

  const Bank({
    required this.id,
    required this.shortName,
    required this.enName,
    required this.viName,
    required this.iconUrl,
  });

  factory Bank.fromJson(Map<String, dynamic> json) => _$BankFromJson(json);

  Map<String, dynamic> toJson() => _$BankToJson(this);

  @override
  List<Object> get props => [shortName, enName, viName, iconUrl];
}
