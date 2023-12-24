import 'package:flutter/widgets.dart';

class TFlex {
  static const crossStart = CrossAxisAlignment.start;
  static const crossCenter = CrossAxisAlignment.center;
  static const crossEnd = CrossAxisAlignment.end;

  static const mainStart = MainAxisAlignment.start;
  static const mainCenter = MainAxisAlignment.center;
  static const mainEnd = MainAxisAlignment.end;
}

class TRadius {
  static const borderRadius4 = BorderRadius.all(Radius.circular(TSizes.s4));

  static const borderRadius6 = BorderRadius.all(Radius.circular(TSizes.s6));
  static const borderRadius8 = BorderRadius.all(Radius.circular(TSizes.s8));
  static const borderRadius12 = BorderRadius.all(Radius.circular(TSizes.s12));
  static const borderRadius16 = BorderRadius.all(Radius.circular(TSizes.s16));
  static const radius8 = Radius.circular(TSizes.s8);

  static const radius12 = Radius.circular(TSizes.s12);
  static const radius16 = Radius.circular(TSizes.s16);
  static const radius20 = Radius.circular(TSizes.s20);
  const TRadius._();
}

class TSizes {
  static const s2 = 2.0;
  static const s4 = 4.0;
  static const s6 = 6.0;
  static const s8 = 8.0;
  static const s10 = 10.0;
  static const s12 = 12.0;
  static const s16 = 16.0;
  static const s20 = 20.0;
  static const s24 = 24.0;
  static const s28 = 28.0;
  static const s32 = 32.0;
  static const s36 = 36.0;
  static const s40 = 40.0;
  static const s44 = 44.0;
  static const s48 = 48.0;
  static const s52 = 52.0;
  static const s56 = 56.0;
  static const s60 = 60.0;
  static const s64 = 64.0;
}

class TSpacing {
  static const emptyBox = SizedBox.shrink();
  static const gapW4 = SizedBox(width: TSizes.s4);

  static const gapW6 = SizedBox(width: TSizes.s6);
  static const gapW8 = SizedBox(width: TSizes.s8);
  static const gapW10 = SizedBox(width: TSizes.s10);
  static const gapW12 = SizedBox(width: TSizes.s12);
  static const gapW16 = SizedBox(width: TSizes.s16);
  static const gapW20 = SizedBox(width: TSizes.s20);
  static const gapW24 = SizedBox(width: TSizes.s24);
  static const gapW28 = SizedBox(width: TSizes.s28);
  static const gapW32 = SizedBox(width: TSizes.s32);
  static const gapW36 = SizedBox(width: TSizes.s36);
  static const gapW40 = SizedBox(width: TSizes.s40);
  static const gapW44 = SizedBox(width: TSizes.s44);
  static const gapW48 = SizedBox(width: TSizes.s48);
  static const gapW52 = SizedBox(width: TSizes.s52);
  static const gapW56 = SizedBox(width: TSizes.s56);
  static const gapW60 = SizedBox(width: TSizes.s60);
  static const gapW64 = SizedBox(width: TSizes.s64);
  static const gapH2 = SizedBox(height: TSizes.s2);

  static const gapH4 = SizedBox(height: TSizes.s4);
  static const gapH6 = SizedBox(height: TSizes.s6);
  static const gapH8 = SizedBox(height: TSizes.s8);
  static const gapH10 = SizedBox(height: TSizes.s10);
  static const gapH12 = SizedBox(height: TSizes.s12);
  static const gapH16 = SizedBox(height: TSizes.s16);
  static const gapH20 = SizedBox(height: TSizes.s20);
  static const gapH24 = SizedBox(height: TSizes.s24);
  static const gapH28 = SizedBox(height: TSizes.s28);
  static const gapH32 = SizedBox(height: TSizes.s32);
  static const gapH36 = SizedBox(height: TSizes.s36);
  static const gapH40 = SizedBox(height: TSizes.s40);
  static const gapH44 = SizedBox(height: TSizes.s44);
  static const gapH48 = SizedBox(height: TSizes.s48);
  static const gapH52 = SizedBox(height: TSizes.s52);
  static const gapH56 = SizedBox(height: TSizes.s56);
  static const gapH60 = SizedBox(height: TSizes.s60);
  static const gapH64 = SizedBox(height: TSizes.s64);
  static const edgeInsetsH4 = EdgeInsets.symmetric(horizontal: TSizes.s4);

  static const edgeInsetsH8 = EdgeInsets.symmetric(horizontal: TSizes.s8);
  static const edgeInsetsH12 = EdgeInsets.symmetric(horizontal: TSizes.s12);
  static const edgeInsetsH16 = EdgeInsets.symmetric(horizontal: TSizes.s16);
  static const edgeInsetsH20 = EdgeInsets.symmetric(horizontal: TSizes.s20);
  static const edgeInsetsH24 = EdgeInsets.symmetric(horizontal: TSizes.s24);
  static const edgeInsetsH28 = EdgeInsets.symmetric(horizontal: TSizes.s28);
  static const edgeInsetsH32 = EdgeInsets.symmetric(horizontal: TSizes.s32);
  static const edgeInsetsH36 = EdgeInsets.symmetric(horizontal: TSizes.s36);
  static const edgeInsetsH40 = EdgeInsets.symmetric(horizontal: TSizes.s40);
  static const edgeInsetsH44 = EdgeInsets.symmetric(horizontal: TSizes.s44);
  static const edgeInsetsH48 = EdgeInsets.symmetric(horizontal: TSizes.s48);
  static const edgeInsetsH52 = EdgeInsets.symmetric(horizontal: TSizes.s52);
  static const edgeInsetsH56 = EdgeInsets.symmetric(horizontal: TSizes.s56);
  static const edgeInsetsH60 = EdgeInsets.symmetric(horizontal: TSizes.s60);
  static const edgeInsetsH64 = EdgeInsets.symmetric(horizontal: TSizes.s64);
  static const edgeInsetsV4 = EdgeInsets.symmetric(vertical: TSizes.s4);

  static const edgeInsetsV8 = EdgeInsets.symmetric(vertical: TSizes.s8);
  static const edgeInsetsV12 = EdgeInsets.symmetric(vertical: TSizes.s12);
  static const edgeInsetsV16 = EdgeInsets.symmetric(vertical: TSizes.s16);
  static const edgeInsetsV20 = EdgeInsets.symmetric(vertical: TSizes.s20);
  static const edgeInsetsV24 = EdgeInsets.symmetric(vertical: TSizes.s24);
  static const edgeInsetsV28 = EdgeInsets.symmetric(vertical: TSizes.s28);
  static const edgeInsetsV32 = EdgeInsets.symmetric(vertical: TSizes.s32);
  static const edgeInsetsV36 = EdgeInsets.symmetric(vertical: TSizes.s36);
  static const edgeInsetsV40 = EdgeInsets.symmetric(vertical: TSizes.s40);
  static const edgeInsetsV44 = EdgeInsets.symmetric(vertical: TSizes.s44);
  static const edgeInsetsV48 = EdgeInsets.symmetric(vertical: TSizes.s48);
  static const edgeInsetsV52 = EdgeInsets.symmetric(vertical: TSizes.s52);
  static const edgeInsetsV56 = EdgeInsets.symmetric(vertical: TSizes.s56);
  static const edgeInsetsV60 = EdgeInsets.symmetric(vertical: TSizes.s60);
  static const edgeInsetsV64 = EdgeInsets.symmetric(vertical: TSizes.s64);
  static const edgeInsetsAll4 = EdgeInsets.all(TSizes.s4);

  static const edgeInsetsAll8 = EdgeInsets.all(TSizes.s8);
  static const edgeInsetsAll12 = EdgeInsets.all(TSizes.s12);
  static const edgeInsetsAll16 = EdgeInsets.all(TSizes.s16);
  static const edgeInsetsAll20 = EdgeInsets.all(TSizes.s20);
  static const edgeInsetsV4H8 =
      EdgeInsets.symmetric(vertical: TSizes.s4, horizontal: TSizes.s8);

  static const edgeInsetsV8H12 =
      EdgeInsets.symmetric(vertical: TSizes.s8, horizontal: TSizes.s12);
  static const edgeInsetsV8H16 =
      EdgeInsets.symmetric(vertical: TSizes.s8, horizontal: TSizes.s16);
  static const edgeInsetsV16H8 =
      EdgeInsets.symmetric(vertical: TSizes.s16, horizontal: TSizes.s8);
  static const edgeInsetsV12H16 =
      EdgeInsets.symmetric(vertical: TSizes.s12, horizontal: TSizes.s16);
  static const edgeInsetsV16H20 =
      EdgeInsets.symmetric(vertical: TSizes.s16, horizontal: TSizes.s20);
  static const edgeInsetsOnlyTop4 = EdgeInsets.only(top: TSizes.s4);

  static const edgeInsetsOnlyTop8 = EdgeInsets.only(top: TSizes.s8);
  static const edgeInsetsOnlyTop12 = EdgeInsets.only(top: TSizes.s12);
  static const edgeInsetsOnlyTop16 = EdgeInsets.only(top: TSizes.s16);
  static const edgeInsetsOnlyTop20 = EdgeInsets.only(top: TSizes.s20);
  static const edgeInsetsOnlyBottom4 = EdgeInsets.only(bottom: TSizes.s4);

  static const edgeInsetsOnlyBottom8 = EdgeInsets.only(bottom: TSizes.s8);
  static const edgeInsetsOnlyBottom12 = EdgeInsets.only(bottom: TSizes.s12);
  static const edgeInsetsOnlyBottom16 = EdgeInsets.only(bottom: TSizes.s16);
  static const edgeInsetsOnlyBottom20 = EdgeInsets.only(bottom: TSizes.s20);
  static const edgeInsetsOnlyLeft4 = EdgeInsets.only(left: TSizes.s4);

  static const edgeInsetsOnlyLeft8 = EdgeInsets.only(left: TSizes.s8);
  static const edgeInsetsOnlyLeft12 = EdgeInsets.only(left: TSizes.s12);
  static const edgeInsetsOnlyLeft16 = EdgeInsets.only(left: TSizes.s16);
  static const edgeInsetsOnlyLeft20 = EdgeInsets.only(left: TSizes.s20);
  static const edgeInsetsOnlyRight4 = EdgeInsets.only(right: TSizes.s4);

  static const edgeInsetsOnlyRight8 = EdgeInsets.only(right: TSizes.s8);
  static const edgeInsetsOnlyRight12 = EdgeInsets.only(right: TSizes.s12);
  static const edgeInsetsOnlyRight16 = EdgeInsets.only(right: TSizes.s16);
  static const edgeInsetsOnlyRight20 = EdgeInsets.only(right: TSizes.s20);
  const TSpacing._();

  static SizedBox bottomPaddingSizedBox(BuildContext context,
          {double additional = TSizes.s24}) =>
      SizedBox(height: bottomPaddingValue(context, additional: additional));

  static double bottomPaddingValue(BuildContext context,
      {double additional = TSizes.s24}) {
    final paddingBottom = MediaQuery.of(context).padding.bottom;

    return paddingBottom != 0 ? paddingBottom : additional;
  }
}
