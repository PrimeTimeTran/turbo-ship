import '../all.dart';

abstract interface class SavingRepository {
  Future<List<SavingPlan>> getAllPlans();
  Future<List<SavingAccount>> getAllAccounts();

  Future<bool> checkSignedContract();
  Future<String> getPreviewContract({required String fullName, required String idNumber});
  Future<void> signContract({required String planId});

  Future<List<Transaction>> getInterestTransactions();
}
