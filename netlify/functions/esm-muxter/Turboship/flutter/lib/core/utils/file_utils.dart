import 'dart:convert';

import 'package:flutter/services.dart';

class FileUtils {
  FileUtils._();

  static Future<dynamic> loadJson(String path) async {
    String data = await rootBundle.loadString(path);

    return jsonDecode(data);
  }
}
