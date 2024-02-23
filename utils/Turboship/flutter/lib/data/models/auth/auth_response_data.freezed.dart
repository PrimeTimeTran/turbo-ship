// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'auth_response_data.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

AuthResponseData _$AuthResponseDataFromJson(Map<String, dynamic> json) {
  return _AuthResponseData.fromJson(json);
}

/// @nodoc
mixin _$AuthResponseData {
  String get token => throw _privateConstructorUsedError;
  Map<String, dynamic> get user => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $AuthResponseDataCopyWith<AuthResponseData> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $AuthResponseDataCopyWith<$Res> {
  factory $AuthResponseDataCopyWith(
          AuthResponseData value, $Res Function(AuthResponseData) then) =
      _$AuthResponseDataCopyWithImpl<$Res, AuthResponseData>;
  @useResult
  $Res call({String token, Map<String, dynamic> user});
}

/// @nodoc
class _$AuthResponseDataCopyWithImpl<$Res, $Val extends AuthResponseData>
    implements $AuthResponseDataCopyWith<$Res> {
  _$AuthResponseDataCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? token = null,
    Object? user = null,
  }) {
    return _then(_value.copyWith(
      token: null == token
          ? _value.token
          : token // ignore: cast_nullable_to_non_nullable
              as String,
      user: null == user
          ? _value.user
          : user // ignore: cast_nullable_to_non_nullable
              as Map<String, dynamic>,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$AuthResponseDataImplCopyWith<$Res>
    implements $AuthResponseDataCopyWith<$Res> {
  factory _$$AuthResponseDataImplCopyWith(_$AuthResponseDataImpl value,
          $Res Function(_$AuthResponseDataImpl) then) =
      __$$AuthResponseDataImplCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call({String token, Map<String, dynamic> user});
}

/// @nodoc
class __$$AuthResponseDataImplCopyWithImpl<$Res>
    extends _$AuthResponseDataCopyWithImpl<$Res, _$AuthResponseDataImpl>
    implements _$$AuthResponseDataImplCopyWith<$Res> {
  __$$AuthResponseDataImplCopyWithImpl(_$AuthResponseDataImpl _value,
      $Res Function(_$AuthResponseDataImpl) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? token = null,
    Object? user = null,
  }) {
    return _then(_$AuthResponseDataImpl(
      token: null == token
          ? _value.token
          : token // ignore: cast_nullable_to_non_nullable
              as String,
      user: null == user
          ? _value._user
          : user // ignore: cast_nullable_to_non_nullable
              as Map<String, dynamic>,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$AuthResponseDataImpl implements _AuthResponseData {
  const _$AuthResponseDataImpl(
      {required this.token, required final Map<String, dynamic> user})
      : _user = user;

  factory _$AuthResponseDataImpl.fromJson(Map<String, dynamic> json) =>
      _$$AuthResponseDataImplFromJson(json);

  @override
  final String token;
  final Map<String, dynamic> _user;
  @override
  Map<String, dynamic> get user {
    if (_user is EqualUnmodifiableMapView) return _user;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableMapView(_user);
  }

  @override
  String toString() {
    return 'AuthResponseData(token: $token, user: $user)';
  }

  @override
  bool operator ==(Object other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$AuthResponseDataImpl &&
            (identical(other.token, token) || other.token == token) &&
            const DeepCollectionEquality().equals(other._user, _user));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(
      runtimeType, token, const DeepCollectionEquality().hash(_user));

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$AuthResponseDataImplCopyWith<_$AuthResponseDataImpl> get copyWith =>
      __$$AuthResponseDataImplCopyWithImpl<_$AuthResponseDataImpl>(
          this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$AuthResponseDataImplToJson(
      this,
    );
  }
}

abstract class _AuthResponseData implements AuthResponseData {
  const factory _AuthResponseData(
      {required final String token,
      required final Map<String, dynamic> user}) = _$AuthResponseDataImpl;

  factory _AuthResponseData.fromJson(Map<String, dynamic> json) =
      _$AuthResponseDataImpl.fromJson;

  @override
  String get token;
  @override
  Map<String, dynamic> get user;
  @override
  @JsonKey(ignore: true)
  _$$AuthResponseDataImplCopyWith<_$AuthResponseDataImpl> get copyWith =>
      throw _privateConstructorUsedError;
}
