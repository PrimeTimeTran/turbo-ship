import 'package:flutter/material.dart';
import 'package:turboship/all.dart';

class ActivityContent extends StatefulWidget {
  const ActivityContent({super.key});

  @override
  State<ActivityContent> createState() => _ActivityContentState();
}

class _ActivityContentState extends State<ActivityContent> {
  Map<String, String> selectionMap = {};

  @override
  Widget build(BuildContext context) {
    final t = context.t;
    selectionMap = {
      "account": t!.all_accounts,
      "time": t.all_time,
      "type": t.all_types,
    };
    final List<String> list = <String>[t.all_accounts, t.individual];
    final List<String> list2 = <String>[t.all_time, t.ytd, 'Q3 2023'];
    final List<String> list3 = <String>[
      t.all_types,
      t.account,
      t.roll_over,
      t.deposits_investments,
      t.interest_dividends,
      t.promotions_earned,
      t.rebalances,
      t.withdrawals
    ];
    return Center(
      child: Column(
        children: [
          texted(context, 'hLarge', context.t!.activity),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              _buildSelection('account', list),
              const SizedBox(width: 30),
              _buildSelection('time', list2),
              const SizedBox(width: 30),
              _buildSelection('type', list3),
            ],
          )
        ],
      ),
    );
  }

  DropdownButton _buildSelection(type, data) {
    final val = selectionMap[type];
    return DropdownButton<String>(
      value: val,
      elevation: 16,
      icon: const Icon(Icons.keyboard_arrow_down),
      padding: const EdgeInsets.symmetric(vertical: 5, horizontal: 20),
      underline: Container(
        height: 2,
      ),
      onChanged: (String? value) {
        setState(() {
          selectionMap[type] = value ?? '';
        });
      },
      items: data.map<DropdownMenuItem<String>>((String value) {
        return DropdownMenuItem<String>(
          value: value,
          child: Text(value),
        );
      }).toList(),
    );
  }
}
