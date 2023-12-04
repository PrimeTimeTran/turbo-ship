import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:turboship/all.dart';

class CustomDrawer extends StatefulWidget {
  const CustomDrawer({super.key});

  @override
  State<CustomDrawer> createState() => DrawerState();
}

class DrawerState extends State<CustomDrawer> {
  int taps = 0;
  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: SizedBox(
        height: 100,
        child: Column(
          children: [
            Expanded(
              child: ListView(
                children: [_buildTop(), _buildOptions(context), _buildBottom()],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Column _buildBottom() {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Divider(thickness: 0.5),
      ],
    );
  }

  _buildDrawerItem(text, icon, onTap) {
    return ListTile(
      title: Row(children: [
        Icon(
          icon,
          size: 24.0,
          color: C(context, 'primary'),
        ),
        const SizedBox(width: 10),
        Text(text, style: TextStyle(color: C(context, 'primary')))
      ]),
      onTap: onTap,
    );
  }

  Column _buildOptions(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        _buildDrawerItem('Home', Icons.home, () {
          context.go('/');
          Navigator.pop(context);
        }),
        _buildDrawerItem('Design Guide', Icons.candlestick_chart, () {
          context.go('/design-guide');
          Navigator.pop(context);
        }),
        _buildDrawerItem('Design Guide', Icons.candlestick_chart, () {
          context.go('/design-guide');
          Navigator.pop(context);
        }),
      ],
    );
  }

  _buildTop() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        _buildDrawerItem('Home', Icons.home, () {
          context.go('/');
          Navigator.pop(context);
        }),
      ],
    );
  }
}
