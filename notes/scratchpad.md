I have this API endpoint which succeeds with a 200 but fails later from parsing errors.
I dont know the solution so please advice. The _client depeendency required a decoder function which parses the json.

"
  @override;
  
  Future<List<EntityData>> getEntities() {
    return _client.get(
      '/wizards',
      decoder: (json) {
        return EntityData.listFromJson(json as List<dynamic>);
      },
    ).then((response) {
      LogUtil.i(name: 'getEntities', response);
      return <EntityData>[];
    }).catchError((error) {
      LogUtil.d(name: 'Error: EntityDataSourceImpl', 'getEntities $error');
      return <EntityData>[];
    });
  }
"

Here's the function which will eventually call that function, decoder, EntityData.listFromJson();
"
import 'package:injectable/injectable.dart';
import 'package:turboship/all.dart';

import '../base/base_success_response_mapper.dart';

@injectable
class DataJsonObjectResponseMapper<T>
    extends BaseSuccessResponseMapper<T, DataResponse<T>> {
  @override
  DataResponse<T> mapToDataModel(response, Decoder<T>? decoder) {
    LogUtil.i(name: 'mapToDataModel', 'response');

    return decoder != null && response is Map<String, dynamic>
        ? DataResponse.fromJson(response, (json) => decoder(json))
        : throw ApiException(
            kind: ApiExceptionKind.invalidSuccessResponseMapperType,
            rootException: '$response is not a JSONDataObject',
          );
  }
}
"

This is  the error
[log] 00:32:48.800: 📝 Invalid entity data structure: {_id: 65790afc0aae87188189c3bb, firstName: Tom, lastName: Riddle, email: Ariel_Becker@yahoo.com, gender: m, city: West Kayceeport, country: Belgium, jobTitle: Corporate Brand Facilitator, industry: Coordinator, house: slytherin, patronus: none, dob: 1955-11-21T01:28:31.683Z, avatarUrl: https://randomuser.me/api/portraits/men/68.jpg, fanScore: 3.49, languages: [PHP, Python, C#, Java, COBOL, C], bookAppearances: [2, 6], topSpells: [charms, hexes, counters], potions: 1, charms: 5, dada: 4, apparition: true, __v: 0, amount: null, balance: null}