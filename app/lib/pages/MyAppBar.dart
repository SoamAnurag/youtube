import 'package:flutter/material.dart';

class MyAppBar extends StatelessWidget {
  const MyAppBar({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // extendBodyBehindAppBar: true,
      appBar: AppBar(
        backgroundColor: Colors.purple,
        leading: IconButton(icon: Icon(Icons.menu), onPressed: (){},),
        title: Text("Home"),
        actions: [
          IconButton(icon: Icon(Icons.search), onPressed: (){},),
          IconButton(icon: Icon(Icons.shopping_cart), onPressed: (){},),
          IconButton(icon: Icon(Icons.menu_book), onPressed: (){},),
        ],
        // flexibleSpace: Image(
        //   image: NetworkImage("https://images.pexels.com/photos/12160606/pexels-photo-12160606.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"),
        //   fit: BoxFit.fitWidth,
        // ),

      ),
      body: Container(
        child: Column(
          children: [
            Row(
              children: [
                Expanded(child: Image.network("https://images.pexels.com/photos/12160606/pexels-photo-12160606.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load")),
                Expanded(flex: 2, child: Image.network("https://images.pexels.com/photos/12160606/pexels-photo-12160606.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load")),
                Expanded(flex: 4,child: Image.network("https://images.pexels.com/photos/12160606/pexels-photo-12160606.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load")),
              ],
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Icon(Icons.star),
                Icon(Icons.star),
                Icon(Icons.star),
                Icon(Icons.star_border),
                Icon(Icons.star_border),
              ],
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                Column(
                  children: const [
                    Icon(Icons.phone, size: 33.0,),
                    Text("Phone")
                  ],
                ),
                Column(
                  children: const [
                    Icon(Icons.alarm, size: 33.0,),
                    Text("Alarm")
                  ],
                ),
                Column(
                  children: const [
                    Icon(Icons.light, size: 33.0,),
                    Text("Light")
                  ],
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}