import 'package:injectable/injectable.dart';

import '../../../../core/exceptions/all.dart';
import '../base/base_success_response_mapper.dart';

@injectable
class JsonArraySuccessResponseMapper<T> implements BaseSuccessResponseMapper<T, List<T>> {
  @override
  List<T> mapToDataModel(dynamic response, Decoder<T>? decoder) {
    return decoder != null && response is List
        ? response.map((dynamic jsonObject) => decoder(jsonObject)).toList(growable: false)
        : throw ApiException(
            kind: ApiExceptionKind.invalidSuccessResponseMapperType,
            rootException: '$response is not a JSONArray',
          );
  }
}
