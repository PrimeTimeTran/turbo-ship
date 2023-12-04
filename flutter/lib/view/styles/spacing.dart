import 'package:flutter/widgets.dart';

class Dimensions {
  static const d2 = 2.0;
  static const d4 = 4.0;
  static const d8 = 8.0;
  static const d12 = 12.0;
  static const d16 = 16.0;
  static const d20 = 20.0;
  static const d24 = 24.0;
  static const d28 = 28.0;
  static const d32 = 32.0;
  static const d36 = 36.0;
  static const d40 = 40.0;
  static const d44 = 44.0;
  static const d48 = 48.0;
  static const d52 = 52.0;
  static const d56 = 56.0;
  static const d60 = 60.0;
  static const d64 = 64.0;
}

// EdgeInsets
class AppSpacing {
  const AppSpacing._();

  static const emptyBox = SizedBox.shrink();

  static const gapW4 = SizedBox(width: Dimensions.d4);
  static const gapW8 = SizedBox(width: Dimensions.d8);
  static const gapW12 = SizedBox(width: Dimensions.d12);
  static const gapW16 = SizedBox(width: Dimensions.d16);
  static const gapW20 = SizedBox(width: Dimensions.d20);
  static const gapW24 = SizedBox(width: Dimensions.d24);
  static const gapW28 = SizedBox(width: Dimensions.d28);
  static const gapW32 = SizedBox(width: Dimensions.d32);
  static const gapW36 = SizedBox(width: Dimensions.d36);
  static const gapW40 = SizedBox(width: Dimensions.d40);
  static const gapW44 = SizedBox(width: Dimensions.d44);
  static const gapW48 = SizedBox(width: Dimensions.d48);
  static const gapW52 = SizedBox(width: Dimensions.d52);
  static const gapW56 = SizedBox(width: Dimensions.d56);
  static const gapW60 = SizedBox(width: Dimensions.d60);
  static const gapW64 = SizedBox(width: Dimensions.d64);

  static const gapH4 = SizedBox(height: Dimensions.d4);
  static const gapH8 = SizedBox(height: Dimensions.d8);
  static const gapH12 = SizedBox(height: Dimensions.d12);
  static const gapH16 = SizedBox(height: Dimensions.d16);
  static const gapH20 = SizedBox(height: Dimensions.d20);
  static const gapH24 = SizedBox(height: Dimensions.d24);
  static const gapH28 = SizedBox(height: Dimensions.d28);
  static const gapH32 = SizedBox(height: Dimensions.d32);
  static const gapH36 = SizedBox(height: Dimensions.d36);
  static const gapH40 = SizedBox(height: Dimensions.d40);
  static const gapH44 = SizedBox(height: Dimensions.d44);
  static const gapH48 = SizedBox(height: Dimensions.d48);
  static const gapH52 = SizedBox(height: Dimensions.d52);
  static const gapH56 = SizedBox(height: Dimensions.d56);
  static const gapH60 = SizedBox(height: Dimensions.d60);
  static const gapH64 = SizedBox(height: Dimensions.d64);

  static const edgeInsetsH4 = EdgeInsets.symmetric(horizontal: Dimensions.d4);
  static const edgeInsetsH8 = EdgeInsets.symmetric(horizontal: Dimensions.d8);
  static const edgeInsetsH12 = EdgeInsets.symmetric(horizontal: Dimensions.d12);
  static const edgeInsetsH16 = EdgeInsets.symmetric(horizontal: Dimensions.d16);
  static const edgeInsetsH20 = EdgeInsets.symmetric(horizontal: Dimensions.d20);
  static const edgeInsetsH24 = EdgeInsets.symmetric(horizontal: Dimensions.d24);
  static const edgeInsetsH28 = EdgeInsets.symmetric(horizontal: Dimensions.d28);
  static const edgeInsetsH32 = EdgeInsets.symmetric(horizontal: Dimensions.d32);
  static const edgeInsetsH36 = EdgeInsets.symmetric(horizontal: Dimensions.d36);
  static const edgeInsetsH40 = EdgeInsets.symmetric(horizontal: Dimensions.d40);
  static const edgeInsetsH44 = EdgeInsets.symmetric(horizontal: Dimensions.d44);
  static const edgeInsetsH48 = EdgeInsets.symmetric(horizontal: Dimensions.d48);
  static const edgeInsetsH52 = EdgeInsets.symmetric(horizontal: Dimensions.d52);
  static const edgeInsetsH56 = EdgeInsets.symmetric(horizontal: Dimensions.d56);
  static const edgeInsetsH60 = EdgeInsets.symmetric(horizontal: Dimensions.d60);
  static const edgeInsetsH64 = EdgeInsets.symmetric(horizontal: Dimensions.d64);

  static const edgeInsetsV4 = EdgeInsets.symmetric(vertical: Dimensions.d4);
  static const edgeInsetsV8 = EdgeInsets.symmetric(vertical: Dimensions.d8);
  static const edgeInsetsV12 = EdgeInsets.symmetric(vertical: Dimensions.d12);
  static const edgeInsetsV16 = EdgeInsets.symmetric(vertical: Dimensions.d16);
  static const edgeInsetsV20 = EdgeInsets.symmetric(vertical: Dimensions.d20);
  static const edgeInsetsV24 = EdgeInsets.symmetric(vertical: Dimensions.d24);
  static const edgeInsetsV28 = EdgeInsets.symmetric(vertical: Dimensions.d28);
  static const edgeInsetsV32 = EdgeInsets.symmetric(vertical: Dimensions.d32);
  static const edgeInsetsV36 = EdgeInsets.symmetric(vertical: Dimensions.d36);
  static const edgeInsetsV40 = EdgeInsets.symmetric(vertical: Dimensions.d40);
  static const edgeInsetsV44 = EdgeInsets.symmetric(vertical: Dimensions.d44);
  static const edgeInsetsV48 = EdgeInsets.symmetric(vertical: Dimensions.d48);
  static const edgeInsetsV52 = EdgeInsets.symmetric(vertical: Dimensions.d52);
  static const edgeInsetsV56 = EdgeInsets.symmetric(vertical: Dimensions.d56);
  static const edgeInsetsV60 = EdgeInsets.symmetric(vertical: Dimensions.d60);
  static const edgeInsetsV64 = EdgeInsets.symmetric(vertical: Dimensions.d64);

  static const edgeInsetsAll2 = EdgeInsets.all(Dimensions.d2);
  static const edgeInsetsAll4 = EdgeInsets.all(Dimensions.d4);
  static const edgeInsetsAll8 = EdgeInsets.all(Dimensions.d8);
  static const edgeInsetsAll12 = EdgeInsets.all(Dimensions.d12);
  static const edgeInsetsAll16 = EdgeInsets.all(Dimensions.d16);

  static const edgeInsetsV4H8 =
      EdgeInsets.symmetric(vertical: Dimensions.d4, horizontal: Dimensions.d8);
  static const edgeInsetsV8H12 =
      EdgeInsets.symmetric(vertical: Dimensions.d8, horizontal: Dimensions.d12);
  static const edgeInsetsV8H16 =
      EdgeInsets.symmetric(vertical: Dimensions.d8, horizontal: Dimensions.d16);
  static const edgeInsetsV12H16 = EdgeInsets.symmetric(
      vertical: Dimensions.d12, horizontal: Dimensions.d16);
  static const edgeInsetsV16H20 = EdgeInsets.symmetric(
      vertical: Dimensions.d16, horizontal: Dimensions.d20);

  static const edgeInsetsOnlyTop4 = EdgeInsets.only(top: Dimensions.d4);
  static const edgeInsetsOnlyTop8 = EdgeInsets.only(top: Dimensions.d8);
  static const edgeInsetsOnlyTop12 = EdgeInsets.only(top: Dimensions.d12);
  static const edgeInsetsOnlyTop16 = EdgeInsets.only(top: Dimensions.d16);
  static const edgeInsetsOnlyTop20 = EdgeInsets.only(top: Dimensions.d20);

  static const edgeInsetsOnlyBottom4 = EdgeInsets.only(bottom: Dimensions.d4);
  static const edgeInsetsOnlyBottom8 = EdgeInsets.only(bottom: Dimensions.d8);
  static const edgeInsetsOnlyBottom12 = EdgeInsets.only(bottom: Dimensions.d12);
  static const edgeInsetsOnlyBottom16 = EdgeInsets.only(bottom: Dimensions.d16);
  static const edgeInsetsOnlyBottom20 = EdgeInsets.only(bottom: Dimensions.d20);

  static const edgeInsetsOnlyLeft4 = EdgeInsets.only(left: Dimensions.d4);
  static const edgeInsetsOnlyLeft8 = EdgeInsets.only(left: Dimensions.d8);
  static const edgeInsetsOnlyLeft12 = EdgeInsets.only(left: Dimensions.d12);
  static const edgeInsetsOnlyLeft16 = EdgeInsets.only(left: Dimensions.d16);
  static const edgeInsetsOnlyLeft20 = EdgeInsets.only(left: Dimensions.d20);

  static const edgeInsetsOnlyRight4 = EdgeInsets.only(right: Dimensions.d4);
  static const edgeInsetsOnlyRight8 = EdgeInsets.only(right: Dimensions.d8);
  static const edgeInsetsOnlyRight12 = EdgeInsets.only(right: Dimensions.d12);
  static const edgeInsetsOnlyRight16 = EdgeInsets.only(right: Dimensions.d16);
  static const edgeInsetsOnlyRight20 = EdgeInsets.only(right: Dimensions.d20);

// BorderRadius
  static const borderRadius4 = BorderRadius.all(Radius.circular(Dimensions.d4));
  static const borderRadius8 = BorderRadius.all(Radius.circular(Dimensions.d8));
  static const borderRadius12 =
      BorderRadius.all(Radius.circular(Dimensions.d12));
  static const borderRadius16 =
      BorderRadius.all(Radius.circular(Dimensions.d16));
}

class AppRadius {
  const AppRadius._();

  static const r4 = Radius.circular(Dimensions.d4);
  static const r8 = Radius.circular(Dimensions.d8);
  static const r12 = Radius.circular(Dimensions.d12);
  static const r16 = Radius.circular(Dimensions.d16);
  static const r20 = Radius.circular(Dimensions.d20);
  static const r24 = Radius.circular(Dimensions.d24);

  static const br4 = BorderRadius.all(r4);
  static const br8 = BorderRadius.all(r8);
  static const br12 = BorderRadius.all(r12);
  static const br16 = BorderRadius.all(r16);
  static const br20 = BorderRadius.all(r20);
  static const br24 = BorderRadius.all(r24);
}
