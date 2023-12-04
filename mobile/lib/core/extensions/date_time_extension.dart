import 'package:intl/intl.dart';
import 'package:turboship/all.dart';

extension DateTimeExt on DateTime {
  String formatDefault() {
    // month day, year
    return DateFormat.yMMMMd(currencyFormat.locale).format(this);
  }

  String formatOnlyDayAndMonth() {
    final monthName = DateFormat.MMM().format(this);

    return '$day $monthName';
  }

  DateTime ignoreTime() {
    return DateTime(year, month, day);
  }

  String toRelativeString(context) {
    final now = DateTime.now();
    final difference = now.difference(this);

    if (difference.inDays > 0) {
      return '$difference days ago';
    } else if (difference.inHours > 0) {
      return '$difference hours ago';
    } else if (difference.inMinutes > 0) {
      return '$difference minutes ago';
    } else {
      return 'Just now';
    }
  }
}
