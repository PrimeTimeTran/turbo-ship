import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
// ignore: depend_on_referenced_packages
import 'package:provider/provider.dart';
import 'package:turboship/all.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final t = context.t;
    return SafeArea(
      child: Scaffold(
        body: Center(
          child: Padding(
            padding: const EdgeInsets.all(8),
            child: SingleChildScrollView(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.start,
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Column(
                        children: [
                          texted(context, 'hSmall', t!.isEnglish),
                          RequiredText(text: t.isHello),
                          OptionalText(t.isWorld),
                          texted(context, 'hSmall', t.english),
                          RequiredText(text: t.hello),
                          OptionalText(t.world),
                        ],
                      )
                    ],
                  ),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceAround,
                    children: [
                      Expanded(
                        child: Column(
                          children: [
                            texted(context, 'hSmall', t.isSpanish),
                            RequiredText(text: t.isHola),
                            OptionalText(t.isHola),
                            texted(context, 'hSmall', t.spanish),
                            RequiredText(text: t.hello),
                            OptionalText(t.world),
                          ],
                        ),
                      ),
                      Expanded(
                        child: Column(
                          children: [
                            texted(context, 'hSmall', t.isVietnamese),
                            RequiredText(text: t.isXinChao),
                            OptionalText(t.isTheGioi),
                            texted(context, 'hSmall', t.vietnamese),
                            RequiredText(text: t.hello),
                            OptionalText(t.world),
                          ],
                        ),
                      )
                    ],
                  ),
                  const SizedBox(height: 10),
                  BlocConsumer<AppBloc, AppState>(
                    listener: (context, state) {},
                    builder: (context, state) {
                      if (state is LanguageSelected) {
                        return _buildLangs(context, state.now.language);
                      }
                      return _buildLangs(context);
                    },
                  ),
                  const SizedBox(height: 10),
                  Consumer<ThemeModel>(
                    builder: (context, themeModel, _) {
                      return ElevatedButton(
                        onPressed: () {
                          themeModel.toggleTheme();
                        },
                        child: const Text('Toggle theme'),
                      );
                    },
                  ),
                  _buildThemes(context)
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }

  _buildLangs(context, [lang = 'en']) {
    return SegmentedButton<String>(
      segments: const <ButtonSegment<String>>[
        ButtonSegment(
          value: 'en',
          label: Text('English'),
          icon: Icon(Icons.calendar_view_day),
        ),
        ButtonSegment<String>(
          value: 'es',
          label: Text('Spanish'),
          icon: Icon(Icons.calendar_view_week),
        ),
        ButtonSegment<String>(
          value: 'vi',
          label: Text('Vietnamese'),
          icon: Icon(Icons.calendar_view_month),
        ),
      ],
      selected: {lang},
      onSelectionChanged: (newSelection) {
        BlocProvider.of<AppBloc>(context).changeLang(newSelection.join(", "));
      },
    );
  }

  _buildThemes(c) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Column(
        children: [
          const SizedBox(height: 10),
          texted(c, 'hSmall', 'Themes'),
          const SizedBox(height: 10),
          SegmentedButton<String>(
            segments: const <ButtonSegment<String>>[
              ButtonSegment<String>(
                value: 'green',
                label: Text(
                  'G',
                  style: TextStyle(color: Colors.green),
                ),
              ),
              ButtonSegment(
                value: 'red',
                label: Text(
                  'R',
                  style: TextStyle(color: Colors.red),
                ),
              ),
              ButtonSegment(
                value: 'blue',
                label: Text(
                  'B',
                  style: TextStyle(color: Colors.blue),
                ),
              ),
              ButtonSegment(
                value: 'purple',
                label: Text(
                  'P',
                  style: TextStyle(color: Colors.purple),
                ),
              ),
              ButtonSegment(
                value: 'gold',
                label: Text(
                  'G',
                  style: TextStyle(color: Colors.amber),
                ),
              ),
              ButtonSegment(
                value: 'orange',
                label: Text(
                  'O',
                  style: TextStyle(color: Colors.orange),
                ),
              ),
              ButtonSegment(
                value: 'pink',
                label: Text(
                  'P',
                  style: TextStyle(color: Colors.pink),
                ),
              ),
            ],
            selected: {BlocProvider.of<AppBloc>(c).language},
            onSelectionChanged: (newSelection) {
              BlocProvider.of<AppBloc>(c).changeTheme(newSelection.join(", "));
            },
          ),
        ],
      ),
    );
  }
}
