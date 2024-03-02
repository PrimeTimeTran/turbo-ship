# Setup Flutter


## Steps
- Initialize a new Flutter project:
  `flutter create turboship_demo`

- Copy & paste over src Flutter files.
- Install dependencies
  `flutter pub get`

- Setup iOS dependencies(may need to run these). [Learn more](https://github.com/invertase/flutterfire_cli/issues/127):
  - `cd ios`
  - `sudo gem install xcodeproj`
  - `sudo gem install cocoapods && pod install`
  - `cd ..`

- May need to run this. [Learn more](https://github.com/invertase/flutterfire_cli/issues/30)
  - `dart pub global activate flutterfire_cli 0.3.0-dev.18 --overwrite`

- Configure FlutterFire using [CLI](https://firebase.flutter.dev/docs/cli/)
  `flutterfire configure`

- Run project
  `flutter run`

