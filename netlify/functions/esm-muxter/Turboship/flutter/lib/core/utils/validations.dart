bool isSecurePassword(String password) {
  if (password.length < 6) {
    return false;
  }
  final lowercaseRegex = RegExp(r'[a-z]');
  final uppercaseRegex = RegExp(r'[A-Z]');
  final digitRegex = RegExp(r'[0-9]');
  final specialCharRegex = RegExp(r'[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]');
  return lowercaseRegex.hasMatch(password) &&
      uppercaseRegex.hasMatch(password) &&
      digitRegex.hasMatch(password) &&
      specialCharRegex.hasMatch(password);
}

bool isValidEmail(String email) {
  final emailRegex = RegExp(
    r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$',
  );
  return emailRegex.hasMatch(email);
}

bool isMatchingPassword(String a, String b) {
  return a == b;
}
