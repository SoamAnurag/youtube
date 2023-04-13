import 'package:flutter/material.dart';

class List_View extends StatelessWidget {
  const List_View({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        child: ListView(
          // padding: EdgeInsets.symmetric(horizontal: 10.0),
          children: [
              ListTile(
                leading: CircleAvatar(child: Icon(Icons.alarm_on_sharp, size: 35.0,), backgroundColor: Colors.transparent,foregroundColor: Colors.black54),
                title: Text("Sales"),
                subtitle: Text("Sales of the Week"),
                trailing: Text("3500"),
                onTap: (){},
                tileColor: Colors.black12,
              ),
              ListTile(
                leading: CircleAvatar(child: Icon(Icons.supervised_user_circle, size: 35.0,), backgroundColor: Colors.transparent,foregroundColor: Colors.black54),
                title: Text("Coustomer"),
                subtitle: Text("Total coustomer Visited"),
                trailing: Text("450"),
                onTap: (){},
              ),
              ListTile(
                leading: CircleAvatar(child: Icon(Icons.currency_rupee, size: 35.0,), backgroundColor: Colors.transparent,foregroundColor: Colors.black54),
                title: Text("Profit"),
                subtitle: Text("Total profit form Sales"),
                trailing: Text("8500"),
                onTap: (){},
                shape: OutlineInputBorder(borderRadius: BorderRadius.all(Radius.circular(5.0))),
              ),

          ],
        ),
      )
    );
  }
}
