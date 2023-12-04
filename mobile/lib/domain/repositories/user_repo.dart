import '../entities/all.dart';

abstract interface class UserRepository {
  Future<User> getCurrentUser({bool forceRefreshToken = false});

  Future<User> updateUser(User user);
}
