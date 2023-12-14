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
  String get id => throw _privateConstructorUsedError;
  String get fullName => throw _privateConstructorUsedError;
  String get firstName => throw _privateConstructorUsedError;
  String get lastName => throw _privateConstructorUsedError;
  String get email => throw _privateConstructorUsedError;
  DateTime? get dateOfBirth => throw _privateConstructorUsedError;
  String? get gender => throw _privateConstructorUsedError;
  String? get referralCode => throw _privateConstructorUsedError;

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
  $Res call(
      {String id,
      String fullName,
      String firstName,
      String lastName,
      String email,
      DateTime? dateOfBirth,
      String? gender,
      String? referralCode});
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
    Object? id = null,
    Object? fullName = null,
    Object? firstName = null,
    Object? lastName = null,
    Object? email = null,
    Object? dateOfBirth = freezed,
    Object? gender = freezed,
    Object? referralCode = freezed,
  }) {
    return _then(_value.copyWith(
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
      fullName: null == fullName
          ? _value.fullName
          : fullName // ignore: cast_nullable_to_non_nullable
              as String,
      firstName: null == firstName
          ? _value.firstName
          : firstName // ignore: cast_nullable_to_non_nullable
              as String,
      lastName: null == lastName
          ? _value.lastName
          : lastName // ignore: cast_nullable_to_non_nullable
              as String,
      email: null == email
          ? _value.email
          : email // ignore: cast_nullable_to_non_nullable
              as String,
      dateOfBirth: freezed == dateOfBirth
          ? _value.dateOfBirth
          : dateOfBirth // ignore: cast_nullable_to_non_nullable
              as DateTime?,
      gender: freezed == gender
          ? _value.gender
          : gender // ignore: cast_nullable_to_non_nullable
              as String?,
      referralCode: freezed == referralCode
          ? _value.referralCode
          : referralCode // ignore: cast_nullable_to_non_nullable
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
  $Res call(
      {String id,
      String fullName,
      String firstName,
      String lastName,
      String email,
      DateTime? dateOfBirth,
      String? gender,
      String? referralCode});
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
    Object? id = null,
    Object? fullName = null,
    Object? firstName = null,
    Object? lastName = null,
    Object? email = null,
    Object? dateOfBirth = freezed,
    Object? gender = freezed,
    Object? referralCode = freezed,
  }) {
    return _then(_$EntityDataImpl(
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
      fullName: null == fullName
          ? _value.fullName
          : fullName // ignore: cast_nullable_to_non_nullable
              as String,
      firstName: null == firstName
          ? _value.firstName
          : firstName // ignore: cast_nullable_to_non_nullable
              as String,
      lastName: null == lastName
          ? _value.lastName
          : lastName // ignore: cast_nullable_to_non_nullable
              as String,
      email: null == email
          ? _value.email
          : email // ignore: cast_nullable_to_non_nullable
              as String,
      dateOfBirth: freezed == dateOfBirth
          ? _value.dateOfBirth
          : dateOfBirth // ignore: cast_nullable_to_non_nullable
              as DateTime?,
      gender: freezed == gender
          ? _value.gender
          : gender // ignore: cast_nullable_to_non_nullable
              as String?,
      referralCode: freezed == referralCode
          ? _value.referralCode
          : referralCode // ignore: cast_nullable_to_non_nullable
              as String?,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$EntityDataImpl implements _EntityData {
  const _$EntityDataImpl(
      {required this.id,
      required this.fullName,
      required this.firstName,
      required this.lastName,
      required this.email,
      this.dateOfBirth,
      this.gender,
      this.referralCode});

  factory _$EntityDataImpl.fromJson(Map<String, dynamic> json) =>
      _$$EntityDataImplFromJson(json);

  @override
  final String id;
  @override
  final String fullName;
  @override
  final String firstName;
  @override
  final String lastName;
  @override
  final String email;
  @override
  final DateTime? dateOfBirth;
  @override
  final String? gender;
  @override
  final String? referralCode;

  @override
  String toString() {
    return 'EntityData(id: $id, fullName: $fullName, firstName: $firstName, lastName: $lastName, email: $email, dateOfBirth: $dateOfBirth, gender: $gender, referralCode: $referralCode)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$EntityDataImpl &&
            (identical(other.id, id) || other.id == id) &&
            (identical(other.fullName, fullName) ||
                other.fullName == fullName) &&
            (identical(other.firstName, firstName) ||
                other.firstName == firstName) &&
            (identical(other.lastName, lastName) ||
                other.lastName == lastName) &&
            (identical(other.email, email) || other.email == email) &&
            (identical(other.dateOfBirth, dateOfBirth) ||
                other.dateOfBirth == dateOfBirth) &&
            (identical(other.gender, gender) || other.gender == gender) &&
            (identical(other.referralCode, referralCode) ||
                other.referralCode == referralCode));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(runtimeType, id, fullName, firstName,
      lastName, email, dateOfBirth, gender, referralCode);

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
      {required final String id,
      required final String fullName,
      required final String firstName,
      required final String lastName,
      required final String email,
      final DateTime? dateOfBirth,
      final String? gender,
      final String? referralCode}) = _$EntityDataImpl;

  factory _EntityData.fromJson(Map<String, dynamic> json) =
      _$EntityDataImpl.fromJson;

  @override
  String get id;
  @override
  String get fullName;
  @override
  String get firstName;
  @override
  String get lastName;
  @override
  String get email;
  @override
  DateTime? get dateOfBirth;
  @override
  String? get gender;
  @override
  String? get referralCode;
  @override
  @JsonKey(ignore: true)
  _$$EntityDataImplCopyWith<_$EntityDataImpl> get copyWith =>
      throw _privateConstructorUsedError;
}
