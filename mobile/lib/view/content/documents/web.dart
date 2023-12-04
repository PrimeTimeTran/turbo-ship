import 'dart:convert';
// ignore: avoid_web_libraries_in_flutter
import 'dart:html';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:turboship/all.dart';

void download(
  List<int> bytes, {
  String downloadName = '',
}) {
  final base64 = base64Encode(bytes);
  final anchor =
      AnchorElement(href: 'data:application/octet-stream;base64,$base64')
        ..target = 'blank';
  anchor.download = downloadName;
  document.body?.append(anchor);
  anchor.click();
  anchor.remove();
  return;
}

void downloadAsset(
  String assetPath, {
  String downloadName = '',
}) async {
  final ByteData data = await rootBundle.load(assetPath);
  final Uint8List bytes = data.buffer.asUint8List();

  final base64 = base64Encode(bytes);
  final anchor =
      AnchorElement(href: 'data:application/octet-stream;base64,$base64')
        ..target = 'blank';
  anchor.download = downloadName;
  document.body?.append(anchor);
  anchor.click();
  anchor.remove();
}

class DocumentsContent extends StatefulWidget {
  const DocumentsContent({super.key});

  @override
  State<DocumentsContent> createState() => _DocumentsContentState();
}

class Legal extends StatefulWidget {
  const Legal({super.key});

  @override
  State<Legal> createState() => _LegalState();
}

class Shared extends StatefulWidget {
  const Shared({super.key});

  @override
  State<Shared> createState() => _SharedState();
}

class Statements extends StatefulWidget {
  const Statements({super.key});

  @override
  State<Statements> createState() => _StatementsState();
}

class Taxes extends StatefulWidget {
  const Taxes({super.key});

  @override
  State<Taxes> createState() => _TaxesState();
}

class TransConfirmations extends StatefulWidget {
  const TransConfirmations({super.key});

  @override
  State<TransConfirmations> createState() => _TransConfirmationsState();
}

class Uploads extends StatefulWidget {
  const Uploads({super.key});

  @override
  State<Uploads> createState() => _UploadsState();
}

class _DocumentsContentState extends State<DocumentsContent> {
  @override
  Widget build(BuildContext context) {
    return _buildTabContainer(context);
  }

  TransConfirmations buildSingleChildScrollView(
    BuildContext context,
    child,
  ) {
    return const TransConfirmations();
  }

  Widget _buildTabContainer(BuildContext c) {
    getTextSize() {
      if (isS(c)) {
        return 14.0;
      } else if (isM(c)) {
        return 13.0;
      } else {
        return 12.0;
      }
    }

    final t = context.t;

    return DefaultTabController(
      length: 6,
      child: Column(
        children: [
          TabBar(
            physics: const NeverScrollableScrollPhysics(),
            isScrollable: isS(context),
            labelStyle: TextStyle(
              fontSize: getTextSize(),
              fontWeight: FontWeight.w600,
            ),
            tabs: [
              Tab(text: t!.statements),
              Tab(text: t.trade_confirmations),
              Tab(text: t.taxes),
              Tab(text: t.uploads),
              Tab(text: t.shared),
              Tab(text: t.legal),
            ],
          ),
          const Expanded(
            child: TabBarView(
              physics: NeverScrollableScrollPhysics(),
              children: [
                Statements(),
                TransConfirmations(),
                Taxes(),
                Uploads(),
                Shared(),
                Legal()
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _LegalState extends State<Legal> {
  @override
  Widget build(BuildContext context) {
    // final t = context.t;
    return Column(
      children: [
        texted(context, 'dSmall', 'Legal', weight: 'bold'),
      ],
    );
  }
}

class _SharedState extends State<Shared> {
  @override
  Widget build(BuildContext context) {
    // final t = context.t;
    return Column(
      children: [
        texted(context, 'dSmall', 'Shared', weight: 'bold'),
      ],
    );
  }
}

class _StatementsState extends State<Statements> {
  @override
  Widget build(BuildContext context) {
    final items = [
      {"id": "1235467", "date": "2023-08-29"},
      {"id": "7651333", "date": "2023-06-15"},
      {"id": "0238483", "date": "2023-04-1"},
      {"id": "3948585", "date": "2023-03-29"},
    ];

    return Padding(
      padding: const EdgeInsets.all(50),
      child: Center(
        child: ListView.builder(
          itemCount: items.length,
          itemBuilder: (context, index) {
            final item = items[index];
            final date = item["date"];
            final title = 'Statement - $date';
            return GestureDetector(
              onTap: () {
                download(
                  'Test statement - $title - $date'.codeUnits,
                  downloadName: '$title - $date',
                );
              },
              child: ListTile(
                title: texted(context, 'hSmall', title),
                subtitle: Text('$date - Individual'),
              ),
            );
          },
        ),
      ),
    );
  }
}

class _TaxesState extends State<Taxes> {
  @override
  Widget build(BuildContext context) {
    // final t = context.t;
    return Column(
      children: [
        texted(context, 'dSmall', 'Taxes', weight: 'bold'),
      ],
    );
  }
}

class _TransConfirmationsState extends State<TransConfirmations> {
  @override
  Widget build(BuildContext context) {
    final items = [
      {"id": "1235467", "date": "2023-08-29"},
      {"id": "7651333", "date": "2023-06-15"},
      {"id": "0238483", "date": "2023-04-1"},
      {"id": "3948585", "date": "2023-03-29"},
    ];

    return Padding(
      padding: const EdgeInsets.all(50),
      child: Center(
        child: ListView.builder(
          itemCount: items.length,
          itemBuilder: (context, index) {
            final item = items[index];
            final title = 'Trade Confirmation - ${item["id"]}';
            final date = item["date"];
            return GestureDetector(
              onTap: () {
                downloadAsset(
                  'assets/sample.pdf',
                  downloadName: '$title - $date.pdf',
                );
              },
              child: ListTile(
                title: texted(context, 'hSmall', title),
                subtitle: Text('$date - Individual'),
              ),
            );
          },
        ),
      ),
    );
  }
}

class _UploadsState extends State<Uploads> {
  @override
  Widget build(BuildContext context) {
    // final t = context.t;
    return Column(
      children: [
        texted(context, 'dSmall', 'Uploads', weight: 'bold'),
      ],
    );
  }
}
