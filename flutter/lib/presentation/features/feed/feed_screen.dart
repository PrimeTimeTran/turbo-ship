import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:turboship/config/theme/themes.dart';
import 'package:turboship/core/configs/di/di.dart';
import 'package:turboship/presentation/common_blocs/app/app_bloc.dart';
import 'package:turboship/presentation/common_widgets/all.dart';

class FeedScreen extends StatefulWidget {
  const FeedScreen({super.key});

  @override
  State<FeedScreen> createState() => _FeedScreenState();
}

class _FeedScreenState extends State<FeedScreen> with WidgetsBindingObserver {
  @override
  Widget build(BuildContext context) {
    return const CommonScaffold(
      bottomNavigationBar: BottomTabs(),
      body: SizedBox(
        width: double.infinity,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('FeedScreen'),
          ],
        ),
      ),
    );
  }

  buildThemeDark() {
    return BlocBuilder<AppBloc, AppState>(
      builder: (c, state) {
        final palette = state.palette;
        return Theme(
          data: themeMap[palette]!['dark']!,
          child: Builder(
            builder: (BuildContext context) {
              return Container(
                width: double.infinity,
                color: C(context, 'background'),
                padding: const EdgeInsets.all(8),
                child: const Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'Alpha',
                      style:
                          TextStyle(fontSize: 30, fontWeight: FontWeight.bold),
                    ),
                    Text(
                      'Bravo',
                      style:
                          TextStyle(fontSize: 30, fontWeight: FontWeight.bold),
                    ),
                    Text(
                      'Charlie',
                      style:
                          TextStyle(fontSize: 30, fontWeight: FontWeight.bold),
                    ),
                  ],
                ),
              );
            },
          ),
        );
      },
    );
  }

  buildThemeLight() {
    final palette = getIt.get<AppBloc>().state.palette;
    return Builder(
      builder: (BuildContext context) {
        return Theme(
          data: lightBlue,
          child: Builder(
            builder: (BuildContext context) {
              return Container(
                width: double.infinity,
                color: C(context, 'background'),
                padding: const EdgeInsets.all(8),
                child: const Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'Alpha',
                      style:
                          TextStyle(fontSize: 30, fontWeight: FontWeight.bold),
                    ),
                    Text(
                      'Bravo',
                      style:
                          TextStyle(fontSize: 30, fontWeight: FontWeight.bold),
                    ),
                    Text(
                      'Charlie',
                      style:
                          TextStyle(fontSize: 30, fontWeight: FontWeight.bold),
                    ),
                  ],
                ),
              );
            },
          ),
        );
      },
    );
  }

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
  }
}
