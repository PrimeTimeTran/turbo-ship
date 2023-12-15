import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:turboship/all.dart';

part 'entity_data.freezed.dart';
part 'entity_data.g.dart';

@freezed
class EntityData with _$EntityData {
  const factory EntityData({
    String? id,
    String? firstName,
    String? email,
  }) = _EntityData;

  factory EntityData.fromJson(Map<String, dynamic> json) =>
      _$EntityDataFromJson(json);

  static List<EntityData> listFromJson(List<dynamic> json) {
    List<EntityData> resultList = [];

    for (var data in json) {
      if (data != null && data is Map<String, dynamic>) {
        LogUtil.d(name: 'data', data);
        final entityData = EntityData.fromJson(data);
        resultList.add(entityData);
      }
    }
    return resultList;
  }
}
