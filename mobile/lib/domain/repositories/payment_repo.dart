import '../entities/all.dart';

abstract interface class PaymentRepository {
  Future<Transaction> deposit({
    required String accountId,
    required double amount,
  });

  Future<Transaction> withdrawMoney({
    required String bankAccountId,
    required String accountId,
    required double amount,
  });

  Future<List<Bank>> getSupportedBanks();

  Future<List<BankAccount>> getBankAccounts();

  Future<BankAccount> addBankAccount({
    required String bankId,
    required String accountNumber,
    required String accountHolderName,
  });

  Future<void> deleteBankAccount({required String bankAccountId});

  Future<List<Transaction>> getTransactions();

  Future<Transaction> getTransactionDetail({required String transactionId});

  Future<Transaction> cancelTransaction(String transactionId);
}
