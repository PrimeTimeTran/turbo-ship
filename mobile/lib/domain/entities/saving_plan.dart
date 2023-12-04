import 'package:equatable/equatable.dart';
import 'package:freezed_annotation/freezed_annotation.dart';

part 'saving_plan.g.dart';

@JsonSerializable()
class SavingPlan extends Equatable {
  final String id;
  final String name;
  final double interestRate;
  final double minDeposit;
  final double? maxDeposit;

  const SavingPlan({
    required this.id,
    required this.name,
    required this.interestRate,
    required this.minDeposit,
    this.maxDeposit,
  });

  factory SavingPlan.empty() => const SavingPlan(
        id: '',
        name: '',
        interestRate: 0,
        minDeposit: 0,
      );

  factory SavingPlan.fromJson(Map<String, dynamic> json) => _$SavingPlanFromJson(json);

  Map<String, dynamic> toJson() => _$SavingPlanToJson(this);

  double get interestRatePercent => double.parse((interestRate * 100).toStringAsFixed(2));

  @override
  List<Object?> get props => [
        id,
        name,
        interestRate,
        minDeposit,
        maxDeposit,
      ];
}
