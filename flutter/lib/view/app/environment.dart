// ignore_for_file: non_constant_identifier_names

import 'dart:io';
import 'dart:ui';

import 'package:flutter/foundation.dart';
import 'package:turboship/all.dart';
import 'package:turboship/core/configs/di/di.dart';

var API_URL = "https://long-397215.appspot.com/api";
var DARK_MODE = window.platformBrightness == Brightness.dark;
var DEFAULT_LOCALE = 'vi_US';
var env = '';
var SYSTEM_LANG = 'vi';
var TENANT_ID = '64f8b45d93e2e85811609d7b';
var THEME = '';
var TOKEN = '';
var USER_ID = '';

class Env {
  setup() async {
    if (kDebugMode) {
      // Platform throws error on web
      if (!kIsWeb) {
        DEFAULT_LOCALE = Platform.localeName;
        SYSTEM_LANG = DEFAULT_LOCALE.split('_')[0];
      }
      // Android dev mode issue requesting to localhost
      if (!kIsWeb && Platform.isAndroid) {
        API_URL = 'http://10.0.2.2:8080/api';
      } else {
        // iOS hangs if using 10.0.2.2:8080
        API_URL = 'http://localhost:8080/api';
      }
      // For developing/debugging on physical device.
      // API_URL = 'http://192.168.0.22:8080/api';
    }

    // For staging server
    // API_URL = 'https://long-397215.appspot.com/api/';

    final prefs = getIt.get<AppPreferences>();

    // TOKEN = prefs.getToken() ?? TOKEN;
    // THEME = (await prefs.getTheme()) ?? THEME;
    // DARK_MODE = (await prefs.getDarkMode()) ?? DARK_MODE;
    // SYSTEM_LANG = (await prefs.getLanguage()) ?? SYSTEM_LANG;

    // // prefs.clearBudget();
    // Budget? budget = prefs.getBudget();
    // // print(jsonEncode(budget));

    // if (budget != null) {
    //   BUDGET = budget;
    //   budget.updateTotals();
    //   budget.overview.updateCategoryGoals();
    // } else {
    //   final json = await FileUtils.loadJson('assets/data/budget.json');
    //   final b = Budget.fromJson(json);
    // }
  }
}
