import 'dart:async';

import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:hydrated_bloc/hydrated_bloc.dart';
import 'package:injectable/injectable.dart';
import 'package:turboship/all.dart';

part 'entity_bloc.freezed.dart';
part 'entity_bloc.g.dart';
part 'entity_event.dart';
part 'entity_state.dart';

@lazySingleton
class EntityBloc extends Bloc<EntityEvent, EntityState> {
  EntityBloc() : super(const EntityState()) {
    on<FetchedEntitiesEvent>(_onFetchedEntities);
  }

  FutureOr<void> _onFetchedEntities(
      FetchedEntitiesEvent event, Emitter<EntityState> emit) {
    LogUtil.i(name: 'EntityBloc', 'entities $event');
    emit(state.copyWith(entities: event.entities));
  }
}
