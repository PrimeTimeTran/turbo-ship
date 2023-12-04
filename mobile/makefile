gen_code:
	# generate the generated code
	dart run build_runner build --delete-conflicting-outputs

gen_locale:
	# generate the locale
	flutter gen-l10n

gen_splash:
	# generate splash screen
	dart run flutter_native_splash:create --path=./yaml/splash.yaml

gen_icon_launcher:
	# generate app launcher icon
	dart run flutter_launcher_icons -f ./yaml/icon_launcher.yaml

preview_fix:
	# preview proposed changes
	dart fix --dry-run

fix_lints:
	dart fix --apply

format_code:
	dart format -l 120 ./lib
	# dart format $(find ./lib -name "*.dart" -not -wholename "./generated/*" -not -name "*.*freezed.dart" -not -name "*.*g.dart") -l 120
	
build_android_prod:
	# build android aaabundle
	flutter build appbundle --flavor prod --dart-define FLAVOR=prod

