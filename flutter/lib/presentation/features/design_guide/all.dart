export 'buttons.dart';
export 'cards.dart';
export 'design_guide_screen.dart';
export 'form.dart';
export 'table.dart';

class Contact {
  String firstName;
  String lastName;
  String emailAddress;
  bool selected;

  Contact({
    this.firstName = '',
    this.lastName = '',
    this.emailAddress = '',
    this.selected = false,
  });
}

enum Sizes { extraSmall, small, medium, large, extraLarge }
