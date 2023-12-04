import 'package:intl/intl.dart';

import '../constants/all.dart';

extension DateTimeExtensions on DateTime {
  bool get isToday => isSameDay(DateTime.now());
  bool get isPast => isBefore(DateTime.now());
  bool get isYesterday => isSameDay(DateTime.now().subtract(const Duration(days: 1)));
  bool get isLastWeek => isAfter(DateTime.now().subtract(const Duration(days: 7)));

  String toStringWithFormat(String format) {
    return DateFormat(format).format(this);
  }

  String toStringWithDefaultFormat() {
    return toStringWithFormat(DateTimeFormatConstants.defaultFormat);
  }

  /// Format: HH:mm • dd/MM/yyyy
  /// Example: 12:00 • 01/01/2021
  String toStringWithTimeAndDateFormat() {
    return toStringWithFormat('HH:mm • dd/MM/yyyy');
  }

  DateTime get lastDateOfMonth {
    return DateTime(year, month + 1, 0);
  }

  bool isSameDay(DateTime dateTime) {
    return year == dateTime.year && month == dateTime.month && day == dateTime.day;
  }

  DateTime utcDateOnly() {
    return DateTime.utc(year, month, day);
  }
}
