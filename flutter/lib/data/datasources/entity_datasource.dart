import 'package:injectable/injectable.dart';
import 'package:turboship/core/utils/all.dart';
import 'package:turboship/data/models/entity_data.dart';

import 'providers/api/clients/authenticated_rest_api_client.dart';

abstract interface class EntityDataSource {
  Future<List<EntityData>> getEntities();

  Future<EntityData> updateEntity(EntityData entityToUpdate);
}

@LazySingleton(as: EntityDataSource)
class EntityDataSourceImpl implements EntityDataSource {
  final AuthenticatedRestApiClient _client;

  EntityDataSourceImpl(this._client);

  @override
  Future<List<EntityData>> getEntities() {
    return _client
        .get(
      '/wizards',
      decoder: (json) => EntityData.fromJson(json as Map<String, dynamic>),
    )
        .then((response) {
      LogUtil.i(name: 'sososo', response);
      return response.data;
    });
  }

  @override
  Future<EntityData> updateEntity(EntityData entityToUpdate) {
    final body = {
      'full_name': entityToUpdate.fullName,
      'date_of_birth': entityToUpdate.dateOfBirth?.toIso8601String(),
      'gender': entityToUpdate.gender,
    };

    return _client
        .patch(
          '/user',
          body: body,
          decoder: (json) => EntityData.fromJson(json as Map<String, dynamic>),
        )
        .then((response) => response.data);
  }
}
