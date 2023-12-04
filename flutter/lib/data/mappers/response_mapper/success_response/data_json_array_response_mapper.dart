import 'package:injectable/injectable.dart';

import '../../../../core/exceptions/all.dart';
import '../../../models/base/data_response.dart';
import '../base/base_success_response_mapper.dart';

@injectable
class DataJsonArrayResponseMapper<T> extends BaseSuccessResponseMapper<T, DataResponse<T>> {
  @override
  DataResponse<T> mapToDataModel(response, Decoder<T>? decoder) {
    return decoder != null &&
            response is Map<String, dynamic> &&
            response.containsKey('data') &&
            response['data'] is List
        ? DataResponse.fromJson(response, (json) => decoder(json as List<dynamic>))
        : throw ApiException(
            kind: ApiExceptionKind.invalidSuccessResponseMapperType,
            rootException: '$response is not a JSONDataArray',
          );
  }
}
