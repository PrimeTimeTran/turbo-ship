import 'package:injectable/injectable.dart';

import '../../../../core/exceptions/all.dart';
import '../../../models/base/paged_list_model.dart';
import '../base/base_success_response_mapper.dart';

@injectable
class RecordsJsonArraySuccessResponseMapper<T> implements BaseSuccessResponseMapper<T, PagedListModel<T>> {
  @override
  PagedListModel<T> mapToDataModel(dynamic response, Decoder<T>? decoder) {
    return decoder != null && response is Map<String, dynamic>
        ? PagedListModel<T>.fromJson(response, (dynamic json) => decoder(json))
        : throw ApiException(
            kind: ApiExceptionKind.invalidSuccessResponseMapperType,
            rootException: '$response is not a JSONObject',
          );
  }
}
