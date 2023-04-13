import 'package:flutter/material.dart';

class Buttons extends StatelessWidget {
  const Buttons({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: ElevatedButton(
          onPressed: () {},
          style: ElevatedButton.styleFrom(
            padding: EdgeInsets.all(20.0),
            fixedSize: Size(300, 80),
            textStyle: TextStyle(fontSize: 25.0, fontWeight: FontWeight.bold),
            primary: Colors.yellow,
            onPrimary: Colors.black87,
            elevation: 10,
            shadowColor: Colors.black38,
            side: const BorderSide(color: Colors.black54, width: 1.0),
            // shape: RoundedRectangleBorder(borderRadius: BorderRadius.all(Radius.circular(40))),
            shape: StadiumBorder(),
          ),
          // label: Text("Elevated Button"),
          // icon: Icon(Icons.add_shopping_cart_outlined),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: const [
              Text("Elevated Button "),
              Icon(Icons.add_shopping_cart_outlined)
            ],
          ),
        ),
      ),
    );
  }
}
