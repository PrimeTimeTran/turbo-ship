import 'package:injectable/injectable.dart';
import 'package:turboship/all_two.dart';

class GetEntitiesUsecase extends BaseUsecaseParams {
  final bool forceRefreshToken;

  const GetEntitiesUsecase({this.forceRefreshToken = false});
}

@injectable
class GetEntitiesUseCase
    extends BaseFutureListUseCase<GetEntitiesUsecase, Entity> {
  final EntityRepository _repository;

  GetEntitiesUseCase(this._repository);

  @override
  Future<List<Entity>> buildUseCase(GetEntitiesUsecase params) async {
    return _repository.getEntities();
  }
}
