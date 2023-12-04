import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:logger/logger.dart';

class LogConfig {
  const LogConfig._();

  static const enableGeneralLog = kDebugMode;
  static const isPrettyJson = kDebugMode;
  static const isColorLog = true;
}

class LogUtils {
  LogUtils._();

  static Logger getLogger(String className) {
    return Logger(
      // printer: PrettyPrinter(
      //   colors: true,
      //   printEmojis: true,
      //   printTime: false,
      // ),
      printer: _LogPrinter(className),
      filter: _LogFilter(),
    );
  }

  static String prettyJson(Map<String, dynamic> json) {
    if (!LogConfig.isPrettyJson) {
      return json.toString();
    }

    final indent = '  ' * 2;
    final encoder = JsonEncoder.withIndent(indent);

    return encoder.convert(json);
  }
}

class _LogPrinter extends PrettyPrinter {
  _LogPrinter(this.className);

  final String className;
  final _prettyPrinter = PrettyPrinter();

  @override
  List<String> log(LogEvent event) {
    final color = LogConfig.isColorLog && _prettyPrinter.levelColors != null
        ? _prettyPrinter.levelColors![event.level]
        : const AnsiColor.none();
    final emoji = _prettyPrinter.levelEmojis?[event.level];
    final time = getTime(event.time);

    final msg = '($time) $emoji [$className] ${event.message}';

    String? stackTraceStr;
    if (event.stackTrace != null) {
      stackTraceStr = formatStackTrace(event.stackTrace, errorMethodCount);
    }

    return [
      color!(msg),
      if (event.error != null) color(event.error.toString()),
      if (stackTraceStr != null)
        stackTraceStr.split('\n').map(color).join('\n'),
    ];
  }

  @override
  String getTime(DateTime? time) {
    String threeDigits(int n) {
      if (n >= 100) {
        return '$n';
      }
      if (n >= 10) {
        return '0$n';
      }

      return '00$n';
    }

    String twoDigits(int n) {
      if (n >= 10) {
        return '$n';
      }

      return '0$n';
    }

    final finalTime = time ?? DateTime.now();
    final hr = twoDigits(finalTime.hour);
    final min = twoDigits(finalTime.minute);
    final sec = twoDigits(finalTime.second);
    final ms = threeDigits(finalTime.millisecond);

    return '$hr:$min:$sec$ms';
  }
}

class _LogFilter extends LogFilter {
  @override
  bool shouldLog(LogEvent event) {
    return LogConfig.enableGeneralLog;
  }
}
