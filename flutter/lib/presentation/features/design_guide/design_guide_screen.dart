import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:turboship/all.dart';

import 'all.dart';

final GlobalKey<ScaffoldState> scaffoldKey = GlobalKey<ScaffoldState>();

bool isDarkMode(BuildContext context) {
  final theme = Theme.of(context).brightness;
  return theme == Brightness.dark;
}

class DesignGuideScreen extends StatefulWidget {
  const DesignGuideScreen({super.key});

  @override
  State<DesignGuideScreen> createState() => DesignGuideScreenState();
}

class DesignGuideScreenState extends State<DesignGuideScreen>
    with SingleTickerProviderStateMixin {
  int _selectedIndex = 0;
  List selectedContacts = [];
  late final TabController _controller;
  Calendar calendarView = Calendar.day;
  late bool isDark = isDarkMode(context);
  Set<Sizes> selection = <Sizes>{Sizes.large, Sizes.extraLarge};

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: _selectedIndex % 2 == 0 ? darkTheme : lightTheme,
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        key: scaffoldKey,
        body: DefaultTabController(
          length: 2,
          child: Column(
            children: [
              TabBar(
                controller: _controller,
                tabs: const [
                  Tab(text: 'Dark'),
                  Tab(text: 'Light'),
                ],
              ),
              Expanded(
                child:
                    TabBarView(children: [buildThemeDark(), buildThemeLight()]),
              ),
            ],
          ),
        ),
      ),
    );
  }

  buildColor(color) {
    return Column(
      children: [
        Text(
          color,
          // style: styleWithColor(
          //   type: T(context, 'titleLarge'),
          //   color: C(context, color),
          // ),
        ),
        const SizedBox(height: 5),
      ],
    );
  }

  buildColors() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        buildColor('primary'),
        buildColor('onPrimary'),
        buildColor('secondary'),
        buildColor('tertiary'),
        buildColor('error'),
        buildColor('onError'),
        buildColor('outline'),
        buildColor('shadow'),
        buildColor('inverseSurface'),
        buildColor('onInverseSurface'),
        buildColor('inversePrimary'),
        const SizedBox(height: 50),
      ],
    );
  }

  buildIcon(icon) {
    return Row(
      children: [
        Icon(
          icon,
          size: 30,
        ),
        const SizedBox(width: 10),
      ],
    );
  }

  buildIcons() {
    return Column(
      children: [
        Row(
          children: [
            buildIcon(FontAwesomeIcons.instagram),
            buildIcon(FontAwesomeIcons.facebook),
            buildIcon(FontAwesomeIcons.whatsapp),
            buildIcon(FontAwesomeIcons.linkedin),
            buildIcon(FontAwesomeIcons.tiktok),
            buildIcon(FontAwesomeIcons.twitter),
            buildIcon(FontAwesomeIcons.github),
            buildIcon(FontAwesomeIcons.stackOverflow),
            buildIcon(FontAwesomeIcons.microsoft),
            buildIcon(FontAwesomeIcons.google),
          ],
        ),
        const SizedBox(height: 50),
      ],
    );
  }

  buildText(text, size) {
    return Column(
      children: [
        Text(
          text,
          // style: T(context, size),
        ),
        const SizedBox(height: 5),
      ],
    );
  }

  buildTexts(context) {
    return Container(
      // color: C(context, 'background'),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          buildText('Body Small', 'bodySmall'),
          buildText('Body Medium', 'bodyMedium'),
          buildText('Body Large', 'bodyLarge'),
          buildText('Label Small', 'labelSmall'),
          buildText('Label Medium', 'labelMedium'),
          buildText('Label Large', 'labelLarge'),
          buildText('Title Small', 'titleSmall'),
          buildText('Title Medium', 'titleMedium'),
          buildText('Title Large', 'titleLarge'),
          buildText('Headline Small', 'headlineSmall'),
          buildText('Headline Medium', 'headlineMedium'),
          buildText('Headline Large', 'headlineLarge'),
          const SizedBox(height: 50),
        ],
      ),
    );
  }

  buildThemeDark() {
    return Theme(
      data: lightTheme,
      child: Builder(
        builder: (BuildContext context) {
          return Container(
            // color: C(context, 'background'),
            padding: const EdgeInsets.all(8),
            child: ListView(
              children: [
                buildTexts(context),
                buildColors(),
                buildIcons(),
                ElevatedButton(
                  onPressed: () {},
                  child: const Text(
                    'ElevatedButton ListView',
                  ),
                ),
                const SizedBox(height: 5),
                TextButton(
                  onPressed: () {},
                  child: const Text(
                    'TextButton ListView',
                  ),
                ),
                const SizedBox(height: 5),
                OutlinedButton(
                  onPressed: () {},
                  child: const Text(
                    'OutlinedButton ListView',
                  ),
                ),
                const SizedBox(height: 50),
                const CustomButtons(),
                const Cards(),
                const CustomTable(),
                const CustomForm(),
              ],
            ),
          );
        },
      ),
    );
  }

  buildThemeLight() {
    return Theme(
      data: lightTheme,
      child: Builder(
        builder: (BuildContext context) {
          return Container(
            // color: C(context, 'background'),
            padding: const EdgeInsets.all(8),
            child: ListView(
              children: [
                buildTexts(context),
                buildColors(),
                buildIcons(),
                ElevatedButton(
                  onPressed: () {},
                  child: const Text(
                    'ElevatedButton ListView',
                  ),
                ),
                const SizedBox(height: 5),
                TextButton(
                  onPressed: () {},
                  child: const Text(
                    'TextButton ListView',
                  ),
                ),
                const SizedBox(height: 5),
                OutlinedButton(
                  onPressed: () {},
                  child: const Text(
                    'OutlinedButton ListView',
                  ),
                ),
                const SizedBox(height: 50),
                const CustomButtons(),
                const Cards(),
                const CustomTable(),
                const CustomForm(),
              ],
            ),
          );
        },
      ),
    );
  }

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    // Create TabController for getting the index of current tab
    _controller = TabController(length: 2, vsync: this);

    _controller.addListener(() {
      setState(() {
        _selectedIndex = _controller.index;
      });
    });
  }
}
