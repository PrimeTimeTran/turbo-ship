import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:turboship/all.dart';

var go = [
  'ab1349b7c1af3dff0da520f3',
  '65e8ad0f6dcb5abacec36eb0',
  '52ced2b2dceccfaf2a2f4c1a',
  'da53b7e9f5ee2966efefe08a',
  'ed1812cedc481a62dabd23fe',
];

var me =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTgzOTIwNTYxZjBlNjM3MjMwZWRmMzYiLCJpYXQiOjE3MDM0MTMyMzksImV4cCI6MjAxODc3MzIzOX0.5yHSjRxVoc0B3ob-A01J4G40Kq9p6LZGXZ7FfaJXwYc";

class EntityScreen extends StatefulWidget {
  final String? chatId;
  final Map<String, dynamic> entityJson;
  const EntityScreen({super.key, required this.entityJson, this.chatId});

  @override
  State<EntityScreen> createState() => _EntityScreenState();
}

class _EntityScreenState extends State<EntityScreen>
    with WidgetsBindingObserver {
  late Entity entity;
  late TextEditingController _messageController;

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          buildMessages(),
          TextField(
            controller: _messageController,
            decoration: InputDecoration(
              hintText: 'Enter a message...',
              contentPadding: const EdgeInsets.all(20.0),
              suffixIcon: IconButton(
                icon: const Icon(Icons.send),
                onPressed: () {
                  if (_messageController.text.isNotEmpty) {
                    _sendMessage(_messageController.text);
                  }
                },
              ),
            ),
          ),
        ],
      ),
    );
  }

  StreamBuilder<QuerySnapshot<Object?>> buildMessages() {
    Query messagesQuery = FirebaseFirestore.instance
        .collection('messages')
        .where('chatId', isEqualTo: go[(int.parse(widget.chatId!) % 4)])
        .orderBy('createdAt', descending: false);

    return StreamBuilder<QuerySnapshot>(
      stream: messagesQuery.snapshots(),
      builder: (BuildContext context, AsyncSnapshot<QuerySnapshot> snapshot) {
        if (snapshot.hasError) {
          return Text('Error: ${snapshot.error}');
        }
        if (snapshot.connectionState == ConnectionState.waiting) {
          return const CircularProgressIndicator();
        }
        if (snapshot.data == null || snapshot.data!.docs.isEmpty) {
          return const Text('No messages');
        }
        return _buildMessage(snapshot);
      },
    );
  }

  @override
  void dispose() {
    _messageController.dispose();
    super.dispose();
  }

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
    entity = Entity.fromJson(widget.entityJson);
    _messageController = TextEditingController();
  }

  _buildMessage(AsyncSnapshot<QuerySnapshot<Object?>> snapshot) {
    return SizedBox(
      child: Column(
        children: snapshot.data!.docs.map((DocumentSnapshot doc) {
          Map<String, dynamic> data = doc.data() as Map<String, dynamic>;
          var isLeft = data['body'].contains('Albus');
          return SizedBox(
            width: double.infinity,
            child: Padding(
              padding:
                  const EdgeInsets.symmetric(horizontal: 4.0, vertical: 12),
              child: Column(
                children: [
                  if (isLeft)
                    Row(
                      mainAxisAlignment:
                          isLeft ? TFlex.mainStart : TFlex.mainEnd,
                      children: [
                        const Avatar(imageUrl: 'imageUrl', size: 32),
                        AppSpacing.gapW4,
                        Text(
                          data['body'] ?? '',
                        )
                      ],
                    ),
                  if (!isLeft)
                    Row(
                      mainAxisAlignment:
                          isLeft ? TFlex.mainStart : TFlex.mainEnd,
                      children: [
                        Text(
                          data['body'] ?? '',
                        ),
                        AppSpacing.gapW4,
                        const Avatar(imageUrl: 'imageUrl', size: 32),
                      ],
                    ),
                ],
              ),
            ),
          );
        }).toList(),
      ),
    );
  }

  void _sendMessage(String message) {
    FirebaseFirestore.instance.collection('messages').add({
      'body': message,
      'chatId': go[int.parse(widget.chatId!) % 4],
      'createdAt': FieldValue.serverTimestamp(),
      'user': {
        'id': entity.id,
        'fullName': '${entity.firstName} ${entity.lastName}'
      }
    });
    _messageController.clear();
  }
}
