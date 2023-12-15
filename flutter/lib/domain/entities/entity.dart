import 'package:equatable/equatable.dart';
import 'package:json_annotation/json_annotation.dart';

part 'entity.g.dart';

@JsonSerializable()
class Entity extends Equatable {
  final String? id;
  final String? email;
  final String? firstName;
  const Entity({
    this.id,
    this.email,
    this.firstName,
  });
  factory Entity.fromJson(Map<String, dynamic> json) => _$EntityFromJson(json);

  @override
  List<Object?> get props => [id, email, firstName];

  Map<String, dynamic> toJson() => _$EntityToJson(this);
}
