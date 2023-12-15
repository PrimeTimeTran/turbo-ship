// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'entity_data.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

EntityData _$EntityDataFromJson(Map<String, dynamic> json) {
  return _EntityData.fromJson(json);
}

/// @nodoc
mixin _$EntityData {
  String? get id => throw _privateConstructorUsedError;
  String? get firstName => throw _privateConstructorUsedError;
  String? get email => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $EntityDataCopyWith<EntityData> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $EntityDataCopyWith<$Res> {
  factory $EntityDataCopyWith(
          EntityData value, $Res Function(EntityData) then) =
      _$EntityDataCopyWithImpl<$Res, EntityData>;
  @useResult
  $Res call({String? id, String? firstName, String? email});
}

/// @nodoc
class _$EntityDataCopyWithImpl<$Res, $Val extends EntityData>
    implements $EntityDataCopyWith<$Res> {
  _$EntityDataCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = freezed,
    Object? firstName = freezed,
    Object? email = freezed,
  }) {
    return _then(_value.copyWith(
      id: freezed == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String?,
      firstName: freezed == firstName
          ? _value.firstName
          : firstName // ignore: cast_nullable_to_non_nullable
              as String?,
      email: freezed == email
          ? _value.email
          : email // ignore: cast_nullable_to_non_nullable
              as String?,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$EntityDataImplCopyWith<$Res>
    implements $EntityDataCopyWith<$Res> {
  factory _$$EntityDataImplCopyWith(
          _$EntityDataImpl value, $Res Function(_$EntityDataImpl) then) =
      __$$EntityDataImplCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call({String? id, String? firstName, String? email});
}

/// @nodoc
class __$$EntityDataImplCopyWithImpl<$Res>
    extends _$EntityDataCopyWithImpl<$Res, _$EntityDataImpl>
    implements _$$EntityDataImplCopyWith<$Res> {
  __$$EntityDataImplCopyWithImpl(
      _$EntityDataImpl _value, $Res Function(_$EntityDataImpl) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = freezed,
    Object? firstName = freezed,
    Object? email = freezed,
  }) {
    return _then(_$EntityDataImpl(
      id: freezed == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String?,
      firstName: freezed == firstName
          ? _value.firstName
          : firstName // ignore: cast_nullable_to_non_nullable
              as String?,
      email: freezed == email
          ? _value.email
          : email // ignore: cast_nullable_to_non_nullable
              as String?,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$EntityDataImpl implements _EntityData {
  const _$EntityDataImpl({this.id, this.firstName, this.email});

  factory _$EntityDataImpl.fromJson(Map<String, dynamic> json) =>
      _$$EntityDataImplFromJson(json);

  @override
  final String? id;
  @override
  final String? firstName;
  @override
  final String? email;

  @override
  String toString() {
    return 'EntityData(id: $id, firstName: $firstName, email: $email)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$EntityDataImpl &&
            (identical(other.id, id) || other.id == id) &&
            (identical(other.firstName, firstName) ||
                other.firstName == firstName) &&
            (identical(other.email, email) || other.email == email));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(runtimeType, id, firstName, email);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$EntityDataImplCopyWith<_$EntityDataImpl> get copyWith =>
      __$$EntityDataImplCopyWithImpl<_$EntityDataImpl>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$EntityDataImplToJson(
      this,
    );
  }
}

abstract class _EntityData implements EntityData {
  const factory _EntityData(
      {final String? id,
      final String? firstName,
      final String? email}) = _$EntityDataImpl;

  factory _EntityData.fromJson(Map<String, dynamic> json) =
      _$EntityDataImpl.fromJson;

  @override
  String? get id;
  @override
  String? get firstName;
  @override
  String? get email;
  @override
  @JsonKey(ignore: true)
  _$$EntityDataImplCopyWith<_$EntityDataImpl> get copyWith =>
      throw _privateConstructorUsedError;
}
