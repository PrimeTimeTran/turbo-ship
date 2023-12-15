import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:go_router/go_router.dart';
import 'package:turboship/all.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> with WidgetsBindingObserver {
  @override
  Widget build(BuildContext context) {
    return CommonScaffold(
      appBar: CommonAppBar(
        title: 'Home',
        onLeadingPressed: _handleOnLeadingPressed,
      ),
      body: SizedBox(
        width: double.infinity,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            BlocProvider(
              create: (_) => getIt.get<EntityBloc>(),
              child: BlocBuilder<EntityBloc, EntityState>(
                buildWhen: (prev, cur) =>
                    prev.entities?.length != cur.entities?.length,
                builder: (context, state) {
                  return Expanded(
                    child: ListView.builder(
                      itemCount: state.entities?.length ?? 0,
                      itemBuilder: (context, idx) {
                        LogUtil.i(
                            name: 'Widget: Home Screen ',
                            state.entities?.length);
                        final entity = state.entities?[idx];
                        return entity != null
                            ? itemBuilder(entity)
                            : Container();
                      },
                    ),
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
    getIt.get<AppBloc>().add(const GetEntities());
  }

  Widget itemBuilder(Entity item) {
    return ListTile(
      onTap: () => context.push(
        AppPages.entity.path,
        extra: {'entity': item.toJson()},
      ),
      leading: Avatar(
        imageUrl: item.avatarUrl,
      ),
      title: Text('${item.firstName} ${item.lastName}'),
      subtitle: Text(item.jobTitle ?? ''),
      trailing: const Icon(Icons.more_vert),
      isThreeLine: true,
    );
  }

  void _handleOnLeadingPressed() {
    context.pop();
  }
}
