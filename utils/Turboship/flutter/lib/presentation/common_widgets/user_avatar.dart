import 'package:flutter/material.dart';

import '../resource/all.dart';
import 'network_image.dart';

class UserAvatar extends StatelessWidget {
  final String url;

  final double size;
  const UserAvatar({
    required this.url,
    super.key,
    this.size = TSizes.s40,
  });

  @override
  Widget build(BuildContext context) {
    return CircleAvatar(
      radius: size / 2,
      backgroundImage: AppCachedNetworkImageProvider(url),
    );
  }
}
