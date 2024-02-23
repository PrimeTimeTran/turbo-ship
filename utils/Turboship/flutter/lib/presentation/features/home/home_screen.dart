import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:go_router/go_router.dart';
import 'package:turboship/all.dart';

const meUser = {
  "id": "6583920561f0e637230edf36",
  "email": "loi@gmail.com",
  "urlAvatar": "",
  // "status": [],
  // "roles": [
  //   {"\$oid": "658393703ccb6a70519bfbd8"}
  // ],
  // "isVerified": false,
  // "banks": [],
  // "branches": [],
  // "accounts": [],
  // "transactions": [],
  // "bio": "Making solutions with architect",
  // "dob": "07/22/1987",
  // "firstName": "Loi",
  // "lastName": "Tran",
  // "sex": "male",
  // "jobArea": "startup",
  // "jobDescriptor": "ceo, cto, cbo, coo, cmo",
  // "jobTitle": "Chief of....",
  // "jobType": "stuff",
  // "phone": "8506089245",
  // "zodiacSign": "cancer"
};

class HomeScreen extends StatefulWidget {
  final String tab;
  const HomeScreen({super.key, required this.tab});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> with WidgetsBindingObserver {
  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: double.infinity,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: false
            ? [getChats()]
            : [
                // getChats(),
                BlocProvider(
                  create: (_) => getIt.get<EntityBloc>(),
                  child: BlocBuilder<EntityBloc, EntityState>(
                    buildWhen: (prev, cur) =>
                        prev.entities?.length != cur.entities?.length,
                    builder: (context, state) {
                      if (state.entities != null && state.entities!.isEmpty) {
                        return const Text('Error');
                      }
                      return Expanded(
                        child: ListView.builder(
                          itemCount: state.entities?.length ?? 0,
                          itemBuilder: (context, idx) {
                            LogUtil.i(
                                name: 'Widget: Home Screen ',
                                state.entities?.length);
                            final entity = state.entities?[idx];
                            return entity != null
                                ? itemBuilder(entity, idx)
                                : Container();
                          },
                        ),
                      );
                    },
                  ),
                ),
              ],
      ),
    );
  }

  getChats() {
    Query chatsQuery = FirebaseFirestore.instance.collection('chats');
    return StreamBuilder<QuerySnapshot>(
      stream: chatsQuery.snapshots(),
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
        return _buildChat(snapshot);
      },
    );
  }

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
    getIt.get<AppBloc>().add(const GetEntities());
  }

  Widget itemBuilder(Entity item, idx) {
    return ListTile(
      onTap: () {
        AppRouter.navMap[widget.tab] = true;
        context.push(
          AppPages.tabAStacked.path,
          extra: {'entity': item.toJson(), 'chatId': idx.toString()},
        );
      },
      leading: Avatar(
        imageUrl: item.avatarUrl,
      ),
      isThreeLine: true,
      subtitle: Text(item.jobTitle ?? ''),
      trailing: const Icon(Icons.more_vert),
      title: Text('${item.firstName} ${item.lastName}'),
    );
  }

  _buildChat(snapshot) {
    return ListTile(
      onTap: () {
        AppRouter.navMap[widget.tab] = true;
        context.push(
          AppPages.tabAStacked.path,
        );
      },
      // leading: Avatar(
      //   imageUrl: snapshot['user']?.avatarUrl,
      // ),
      // title: Text('${item.firstName} ${item.lastName}'),
      // subtitle: Text(item.jobTitle ?? ''),
      title: const Text('Titles'),
      subtitle: const Text('sub title'),
      trailing: const Icon(Icons.more_vert),
      isThreeLine: true,
    );
  }
}
