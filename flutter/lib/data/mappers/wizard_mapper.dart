// import 'package:injectable/injectable.dart';
// import 'package:turboship/all.dart';

// import 'base/base_data_mapper.dart';

// @injectable
// class WizardMapper extends BaseDataMapper<WizardData, Wizard>
//     with DataMapperMixin {
//   @override
//   WizardData mapToData(User entity) {
//     return WizardData(
//       id: entity.id.trim(),
//       fullName: entity.fullName,
//       email: entity.email,
//       dateOfBirth: entity.dateOfBirth,
//     );
//   }

//   @override
//   User mapToEntity(WizardData data) {
//     return User(
//       id: data.id.trim(),
//       fullName: data.fullName,
//       email: data.email,
//       dateOfBirth: data.dateOfBirth,
//       referralCode: data.referralCode,
//     );
//   }
// }
