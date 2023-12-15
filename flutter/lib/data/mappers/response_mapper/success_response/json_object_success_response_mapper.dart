import 'package:injectable/injectable.dart';
import 'package:turboship/core/utils/log_util.dart';

import '../../../../core/exceptions/api/api_exception.dart';
import '../base/base_success_response_mapper.dart';

@injectable
class JsonObjectSuccessResponseMapper<T>
    implements BaseSuccessResponseMapper<T, T> {
  @override
  T mapToDataModel(dynamic response, Decoder<T>? decoder) {
    LogUtil.i(
        name: 'json_object_success_response_mapper',
        'json_object_success_response_mapper');
    return decoder != null && response is Map<String, dynamic>
        ? decoder(response)
        : throw ApiException(
            kind: ApiExceptionKind.invalidSuccessResponseMapperType,
            rootException: '$response is not a JSONObject',
          );
  }
}
