import 'dart:math';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

class Dashboard extends StatelessWidget {
  const Dashboard({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        width: 350,
        height: 250,
        padding: const EdgeInsets.all(20.0),
        margin: const EdgeInsets.symmetric(horizontal: 20.0, vertical: 50.0),
        alignment: Alignment.center,
        decoration: BoxDecoration(
            color: Colors.blueGrey,
            // borderRadius: BorderRadius.circular(10.1),
            border: Border.all(color: Colors.grey, width: 6.1,),
            shape: BoxShape.circle,
            image: DecorationImage(image: AssetImage("images/image1.png"), scale: 1.5,),
            boxShadow: [
              BoxShadow(
                color: Colors.blueGrey.shade100,
                blurRadius: 10.0,
                spreadRadius: 10.0,
              ),
            ],
        ),
      ),
    );
  }
}
