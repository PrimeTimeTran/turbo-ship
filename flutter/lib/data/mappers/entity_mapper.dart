import 'package:injectable/injectable.dart';
import 'package:turboship/all.dart';
import 'package:turboship/data/models/entity_data.dart';

@injectable
class EntityMapper extends BaseDataMapper<EntityData, Entity>
    with DataMapperMixin {
  @override
  EntityData mapToData(Entity entity) {
    return EntityData(
      id: entity.id?.trim() ?? '',
      email: entity.email ?? '',
      firstName: entity.firstName ?? '',
    );
  }

  List<Entity> mapToEntities(List<EntityData> dataList) {
    return dataList.map((data) {
      return Entity(
        id: data.id ?? '',
        email: data.email ?? '',
        firstName: data.firstName ?? '',
      );
    }).toList();
  }

  @override
  Entity mapToEntity(EntityData data) {
    return Entity(
      id: data.id ?? '',
      email: data.email ?? '',
      firstName: data.firstName ?? '',
    );
  }
}
