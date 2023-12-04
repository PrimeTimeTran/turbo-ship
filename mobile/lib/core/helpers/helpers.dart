import 'package:flutter/material.dart';

prompt(context, text) {
  ScaffoldMessenger.of(context).showSnackBar(
    SnackBar(
      showCloseIcon: true,
      duration: const Duration(seconds: 3),
      content: Text(text),
    ),
  );
}

promptWithUndo(
  context,
  text,
  undo,
) {
  ScaffoldMessenger.of(context).showSnackBar(
    SnackBar(
      content: Text(text),
      showCloseIcon: true,
      duration: const Duration(seconds: 3),
      action: SnackBarAction(
        label: 'Undo',
        onPressed: () {
          undo();
        },
      ),
    ),
  );
}
