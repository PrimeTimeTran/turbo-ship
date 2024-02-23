import 'dart:async';
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:turboship/all.dart';
import 'package:turboship/presentation/features/feed/post/post.dart';

class FeedScreen extends StatefulWidget {
  final String tab;
  const FeedScreen({super.key, required this.tab});

  @override
  State<FeedScreen> createState() => _FeedScreenState();
}

class _FeedScreenState extends State<FeedScreen> with WidgetsBindingObserver {
  final ScrollController _scrollController = ScrollController();
  List<Map<String, dynamic>> posts = [];
  List<GlobalKey<State>> postKeys = [];

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      controller: _scrollController,
      child: Column(
        children: [
          ListView.builder(
            itemCount: posts.length,
            shrinkWrap: true,
            physics: const NeverScrollableScrollPhysics(),
            itemBuilder: (context, idx) {
              var key = postKeys.length > idx ? postKeys[idx] : GlobalKey();
              if (postKeys.length <= idx) postKeys.add(key);
              return Post(
                key: key,
                post: posts[idx],
              );
            },
          ),
        ],
      ),
    );
  }

  @override
  void dispose() {
    _scrollController.removeListener(_onScroll);
    _scrollController.dispose();
    super.dispose();
  }

  Future<void> fetchData() async {
    var jsonData = await readJson('assets/data/posts.json');
    Map<String, dynamic> jsonMap = jsonDecode(jsonData);

    List<Map<String, dynamic>> fetchedPosts = await parseJson(jsonMap);
    setState(() {
      posts = fetchedPosts;
    });
    _scrollController.addListener(_onScroll);
  }

  @override
  void initState() {
    super.initState();
    fetchData();
    WidgetsBinding.instance.addObserver(this);
  }

  Map<String, dynamic> mapJson(Map<String, dynamic> jsonMap) {
    Map<String, dynamic> resultMap = {};
    jsonMap.forEach((key, value) {
      if (value is Map<String, dynamic>) {
        resultMap[key] = mapJson(value);
      } else if (value is List<dynamic>) {
        resultMap[key] = value.map((element) {
          if (element is Map<String, dynamic>) {
            return mapJson(element);
          } else {
            return element;
          }
        }).toList();
      } else {
        resultMap[key] = value;
      }
    });
    return resultMap;
  }

  List<Map<String, dynamic>> parseData(List<dynamic> dataList) {
    return dataList.map<Map<String, dynamic>>((item) {
      if (item is Map<String, dynamic>) {
        return mapJson(item);
      } else {
        return {};
      }
    }).toList();
  }

  Future<List<Map<String, dynamic>>> parseJson(
      Map<String, dynamic> jsonMap) async {
    if (jsonMap.containsKey('data')) {
      final data = jsonMap['data'];
      if (data is List<dynamic>) {
        return parseData(data);
      }
    }
    return [];
  }

  RenderBox? _getPostRenderBox(int index) {
    if (index >= 0 && index < postKeys.length) {
      final key = postKeys[index];
      final contextObject = key.currentContext;
      if (contextObject != null) {
        return contextObject.findRenderObject() as RenderBox?;
      }
    }
    return null;
  }

  void _onScroll() {
    for (int i = 0; i < posts.length; i++) {
      RenderBox? renderBox = _getPostRenderBox(i);
      if (renderBox != null) {
        double top = renderBox.localToGlobal(Offset.zero).dy;
        double bottom = top + renderBox.size.height;

        if (top < MediaQuery.of(context).size.height && bottom > 0) {
          // Post widget at index i is currently visible on the screen
          // You can trigger your function here.
          print("Post $i is visible");
        }
      }
    }
  }
}
