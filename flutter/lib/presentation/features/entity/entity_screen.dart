import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:turboship/all.dart';

class EntityScreen extends StatefulWidget {
  final Map<String, dynamic> entityJson;
  const EntityScreen({super.key, required this.entityJson});

  @override
  State<EntityScreen> createState() => _EntityScreenState();
}

class _EntityScreenState extends State<EntityScreen>
    with WidgetsBindingObserver {
  late Entity entity;
  late TextEditingController _messageController;

  @override
  Widget build(BuildContext context) {
    CollectionReference messages =
        FirebaseFirestore.instance.collection('messages');

    return Center(
      child: Column(
        children: [
          TextField(
            controller: _messageController,
            decoration: InputDecoration(
              hintText: 'Enter a message...',
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
          StreamBuilder<QuerySnapshot>(
            stream: messages.orderBy('createdAt', descending: true).snapshots(),
            builder:
                (BuildContext context, AsyncSnapshot<QuerySnapshot> snapshot) {
              if (snapshot.hasError) {
                return Text('Error: ${snapshot.error}');
              }
              if (snapshot.connectionState == ConnectionState.waiting) {
                return const CircularProgressIndicator(); // Show a loader while fetching data
              }
              if (snapshot.data == null || snapshot.data!.docs.isEmpty) {
                return const Text('No messages');
              }
              return SizedBox(
                width: double.infinity,
                child: Column(
                  children: snapshot.data!.docs.map((DocumentSnapshot doc) {
                    Map<String, dynamic> data =
                        doc.data() as Map<String, dynamic>;
                    return Text(data['body'] ?? '');
                  }).toList(),
                ),
              );
            },
          ),
        ],
      ),
    );
  }

  @override
  void dispose() {
    _messageController
        .dispose(); // Dispose the controller when the widget is disposed
    super.dispose();
  }

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
    entity = Entity.fromJson(widget.entityJson);
    _messageController =
        TextEditingController(); // Initialize the text input controller
  }

  void _sendMessage(String message) {
    FirebaseFirestore.instance.collection('messages').add({
      'body': message,
      'createdAt': FieldValue.serverTimestamp(),
    });
    _messageController
        .clear(); // Clear the input field after sending the message
  }
}
