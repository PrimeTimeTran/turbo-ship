extension StringExt on String {
  String supplant(Map<String, String> supplants) {
    return replaceAllMapped(RegExp(r'\{\w+\}'), (match) {
      final placeholder = match.group(0) ?? '';
      if (supplants.containsKey(placeholder)) {
        return supplants[placeholder]!;
      }

      return placeholder;
    });
  }
}
