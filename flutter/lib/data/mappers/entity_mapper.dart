import 'package:injectable/injectable.dart';
import 'package:turboship/all.dart';
import 'package:turboship/data/models/entity_data.dart';

import 'base/base_data_mapper.dart';

@injectable
class EntityMapper extends BaseDataMapper<EntityData, Entity>
    with DataMapperMixin {
  @override
  EntityData mapToData(Entity entity) {
    return EntityData(
      id: entity.id.trim(),
      email: entity.email,
      firstName: entity.firstName,
      lastName: entity.lastName,
      fullName: entity.fullName,
    );
  }

  List<Entity> mapToEntities(List<EntityData> dataList) {
    return dataList.map((data) {
      return Entity(
        id: data.id.trim(),
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        fullName: data.fullName,
      );
    }).toList();
  }

  @override
  Entity mapToEntity(EntityData data) {
    return Entity(
      id: data.id.trim(),
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      fullName: data.fullName,
    );
  }
}
