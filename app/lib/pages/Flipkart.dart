import 'package:flutter/material.dart';
import 'package:carousel_slider/carousel_slider.dart';

class Flipkart extends StatefulWidget {
  const Flipkart({Key? key}) : super(key: key);
  @override
  FlipkartState createState() => FlipkartState();
}

class FlipkartState extends State<Flipkart> {

   int _selectedItemIndex = 0;
   int _currentIndex = 0;
   final List<String> imageUrls = [
     "images/slider_image1.jpeg",
     "images/slider2.jpg",
     "images/slider3.jpg",
     "images/slider4.jpg",
   ];
   final List<Map<String, dynamic>> _menuItems = [
    {
      "title": "Home",
      "icon": Icons.home,
      "onTap": () {},
    },
    {
      "title": "My Account",
      "icon": Icons.person,
      "onTap": () {},
    },
    {
      "title": "Orders",
      "icon": Icons.shopping_bag,
      "onTap": () {},
    },
    {
      "title": "Wishlist",
      "icon": Icons.favorite,
      "onTap": () {},
    },
    {
      "title": "Notifications",
      "icon": Icons.notifications,
      "onTap": () {},
    },
    {
      "title": "Settings",
      "icon": Icons.settings,
      "onTap": () {},
    },
    {
      "title": "Logout",
      "icon": Icons.power_settings_new,
      "onTap": () {},
    },
  ];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      drawer: Drawer(
        child: Column(
          children: <Widget>[
            UserAccountsDrawerHeader(
              decoration: BoxDecoration(
                color: Colors.blue,
              ),
              accountName: Text(
                "John Doe",
                style: TextStyle(
                  color: Colors.black,
                  fontWeight: FontWeight.bold,
                ),
              ),
              accountEmail: Text(
                "johndoe@gmail.com",
                style: TextStyle(
                  color: Colors.black,
                ),
              ),
              currentAccountPicture: CircleAvatar(
                backgroundColor: Colors.white,
                child: Icon(
                  Icons.person,
                  color: Colors.black,
                ),
              ),
            ),
            Expanded(
              child: ListView.builder(
                itemCount: _menuItems.length,
                itemBuilder: (BuildContext context, int index) {
                  return ListTile(
                    leading: Icon(
                      _menuItems[index]['icon'],
                      color: _selectedItemIndex == index
                          ? Colors.orange
                          : Colors.black,
                    ),
                    title: Text(
                      _menuItems[index]['title'],
                      style: TextStyle(
                        color: _selectedItemIndex == index
                            ? Colors.orange
                            : Colors.black,
                      ),
                    ),
                    selected: _selectedItemIndex == index,
                    onTap: () {
                      setState(() {
                        _selectedItemIndex = index;
                        Navigator.pop(context);
                        _menuItems[index]['onTap']();
                      });
                    },
                  );
                },
              ),
            ),
            Divider(),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: TextField(
                decoration: InputDecoration(
                  fillColor: Colors.grey[200],
                  filled: true,
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(20),
                    borderSide: BorderSide.none,
                  ),
                  hintText: "Search for products, brands and more",
                  prefixIcon: Icon(
                    Icons.search,
                    color: Colors.grey,
                  ),
                  suffixIcon: Icon(
                    Icons.mic,
                    color: Colors.grey,
                  ),
                  contentPadding: EdgeInsets.symmetric(vertical: 10),
                ),
              ),
            ),
          ],
        ),
      ),
      appBar: AppBar(
        title: Expanded(child: Image.asset("images/Flipkart_logo.png", scale: 3,)),
      ),
      body: Column(
        children: [
          CarouselSlider.builder(
            itemCount: imageUrls.length,
            options: CarouselOptions(
              height: 230,
              viewportFraction: 1,
              onPageChanged: (index, _) {
                setState(() {
                  _currentIndex = index;
                });
              },
            ),
            itemBuilder: (BuildContext context, int index, _) {
              return Container(
                child: Image.asset(
                  imageUrls[index],
                  fit: BoxFit.cover,
                ),
              );
            },
          ),
          Positioned(
            bottom: 20,
            left: 0,
            right: 0,
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: imageUrls.map((imageUrl) {
                int index = imageUrls.indexOf(imageUrl);
                return Container(
                  width: 8,
                  height: 8,
                  margin: EdgeInsets.symmetric(horizontal: 4),
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    color: _currentIndex == index
                        ? Colors.white
                        : Colors.grey,
                  ),
                );
              }).toList(),
            ),
          ),
          Positioned(
            top: 20,
            left: 0,
            right: 0,
            child: IconButton(
              icon: Icon(
                Icons.arrow_back_ios,
                color: Colors.white,
              ),
              onPressed: () {
                if (_currentIndex > 0) {
                  setState(() {
                    _currentIndex--;
                  });
                }
              },
            ),
          ),
          Positioned(
            top: 20,
            right: 0,
            child: IconButton(
              icon: Icon(
                Icons.arrow_forward_ios,
                color: Colors.white,
              ),
              onPressed: () {
                if (_currentIndex < imageUrls.length - 1) {
                  setState(() {
                    _currentIndex++;
                  });
                }
              },
            ),
          ),
        ],
      ),
    );
  }
}


