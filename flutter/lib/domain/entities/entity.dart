import 'package:equatable/equatable.dart';
import 'package:json_annotation/json_annotation.dart';

part 'entity.g.dart';

@JsonSerializable()
class Entity extends Equatable {
  final String id;
  final String email;
  final String firstName;
  final String lastName;
  final String fullName;
  const Entity({
    required this.id,
    required this.email,
    required this.firstName,
    required this.lastName,
    required this.fullName,
  });
  factory Entity.fromJson(Map<String, dynamic> json) => _$EntityFromJson(json);
  @override
  List<Object?> get props => [id, email, firstName, lastName, fullName];
  Map<String, dynamic> toJson() => _$EntityToJson(this);
}
