import 'package:flutter/material.dart';

class List_Builder extends StatelessWidget {
  const List_Builder({Key? key}) : super(key: key);

  List<String> get products => const["Bed", "Sofa", "Chair"];
  List<String> get productDetails => const["King Size Bed", "King Size Sofa", "King Size Chair"];
  List<int> get price => const[14500, 8000, 4599];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.purple,
        // leading: IconButton(icon: Icon(Icons.menu), onPressed: (){},),
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
      drawer: Drawer(
        child: ListView(
          children: [
            DrawerHeader(
              padding: EdgeInsets.all(0),
              child: Container(
                color: Colors.purple,
                child: Column(
                  children: [
                    Text("Hi ")
                  ],
                ),
              ),
            ),
            ListTile(leading: Icon(Icons.home),title: Text("Home"), onTap: (){},),
            ListTile(leading: Icon(Icons.shopping_cart),title: Text("Shop"), onTap: (){},),
            ListTile(leading: Icon(Icons.favorite),title: Text("Favorites"), onTap: (){},),
          ],
        ),
      ),
      body: ListView.builder(
        itemCount: products.length,
        itemBuilder: (context, index) {
          return ListTile(
            leading: CircleAvatar(child: Text(products[index][0]),),
            title: Text(products[index]),
            subtitle: Text(productDetails[index]),
            trailing: Text('${price[index]}'),
          );
        },
      ),
    );
  }
}
