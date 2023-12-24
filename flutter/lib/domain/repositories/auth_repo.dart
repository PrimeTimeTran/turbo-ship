import 'dart:async';

import 'package:turboship/all.dart';

abstract interface class AuthRepository {
  Future<void> forgotPassword(String email);

  Future<ServerConfig> getServerConfig();

  Future<void> logout();
  Future<void> resendForgotPasswordOtp(String email);
  Future<void> resendSignUpOtp(String email);

  Future<void> setNewPassword({
    required String currentPassword,
    required String newPassword,
  });
  Future<void> signIn({
    required String email,
    required String password,
  });
  Future<void> signUp({
    required String fullName,
    required String email,
    required String password,
    String? referralCode,
  });

  Future<void> verifyForgotPassword({
    required String email,
    required String newPassword,
    required String otp,
  });

  Future<void> verifySignUp(String otp);
}
