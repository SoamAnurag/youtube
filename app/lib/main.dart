import 'package:app/pages/Buttons.dart';
import 'package:app/pages/Dashbord.dart';
import 'package:app/pages/List_Builder.dart';
import 'package:app/pages/List_View.dart';
import 'package:app/pages/MyAppBar.dart';
import 'package:app/pages/Flipkart.dart';
import 'package:flutter/material.dart';

void main() => runApp(MyApp());


class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    // return const Placeholder();
    return const MaterialApp(
      title: 'My Flutter App',
      themeMode: ThemeMode.system,
      home: Flipkart(),
    );
  }
}
