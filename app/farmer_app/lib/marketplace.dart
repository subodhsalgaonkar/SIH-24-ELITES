import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class Marketplace extends StatefulWidget {
  @override
  _MarketplaceState createState() => _MarketplaceState();
}

class _MarketplaceState extends State<Marketplace> {
  String searchRating = '';
  String searchLocation = '';
  String searchQuantity = '';
  String searchCrop = '';

  final List<Map<String, dynamic>> crops = [
    {
      'id': 1,
      'image':
          'https://propagationplace.co.uk/pp/wp-content/uploads/Tomato-Alicante-1-1000x1000.jpg',
      'name': 'Tomatoes',
      'farmer': 'Rajesh Kumar',
      'quantity': '120 kg',
      'location': 'Mumbai',
      'rating': 4.5
    },
    {
      'id': 2,
      'image':
          'https://cdn.britannica.com/36/167236-050-BF90337E/Ears-corn.jpg',
      'name': 'Corn',
      'farmer': 'Anil Verma',
      'quantity': '90 kg',
      'location': 'Delhi',
      'rating': 4.8
    },
    {
      'id': 3,
      'image':
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6v6-5oWwpOH3jeOliF9RJObbpb9OAYn8IZw&s',
      'name': 'Potato',
      'farmer': 'Vikram Singh',
      'quantity': '140 kg',
      'location': 'Bangalore',
      'rating': 4.5
    },
    {
      'id': 4,
      'image':
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgoBketPWvPJhC7u2Vsk2EPd4XzBJiEYSSzw&s',
      'name': 'Sweet Potato',
      'farmer': 'Suresh Patil',
      'quantity': '75 kg',
      'location': 'Chennai',
      'rating': 4.5
    },
    {
      'id': 5,
      'image':
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXKj0lXIdADuOjFH69vu1ETxVVDc6iEZUcvg&s',
      'name': 'Capsicum',
      'farmer': 'Manoj Gupta',
      'quantity': '65 kg',
      'location': 'Kolkata',
      'rating': 4.5
    },
    {
      'id': 6,
      'image':
          'https://kyssafarms.com/cdn/shop/products/lady-finger.jpg?v=1600955405',
      'name': 'Lady Fingers',
      'farmer': 'Arun Sharma',
      'quantity': '30 kg',
      'location': 'Mumbai',
      'rating': 4.5
    },
    {
      'id': 7,
      'image':
          'https://149880802.v2.pressablecdn.com/wp-content/uploads/53155733592_ce292a7118_c1.jpg',
      'name': 'Spinach',
      'farmer': 'Ravi Mehta',
      'quantity': '50 kg',
      'location': 'Delhi',
      'rating': 4.5
    },
    {
      'id': 8,
      'image':
          'https://domf5oio6qrcr.cloudfront.net/medialibrary/5390/h1218g16207258089583.jpg',
      'name': 'Broccoli',
      'farmer': 'Nitin Yadav',
      'quantity': '40 kg',
      'location': 'Bangalore',
      'rating': 4.5
    },
    {
      'id': 9,
      'image':
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQltKav52elm05u-AJbm4fw4jyJNtCBaWrxuA&s',
      'name': 'Cabbage',
      'farmer': 'Ajay Reddy',
      'quantity': '115 kg',
      'location': 'Chennai',
      'rating': 4.5
    }
  ];

  List<Map<String, dynamic>> get filteredCrops {
    return crops.where((crop) {
      final meetsRating = searchRating.isEmpty ||
          (double.tryParse(searchRating) ?? 0) <= (crop['rating'] ?? 0);
      final meetsLocation = searchLocation.isEmpty ||
              crop['location']?.contains(searchLocation) ??
          false;
      final meetsQuantity = searchQuantity.isEmpty ||
          (int.tryParse(searchQuantity) ?? 0) <=
              (int.tryParse(crop['quantity']?.split(' ')[0] ?? '0') ?? 0);
      final meetsCrop =
          searchCrop.isEmpty || crop['name']?.contains(searchCrop) ?? false;
      return meetsRating && meetsLocation && meetsQuantity && meetsCrop;
    }).toList();
  }

  void _showFilterOptions() {
    showModalBottomSheet(
      context: context,
      builder: (BuildContext context) {
        return Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text('Filter by',
                  style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
              SizedBox(height: 16),
              Text('Rating'),
              DropdownButton<String>(
                value: searchRating.isEmpty ? null : searchRating,
                items: [
                  DropdownMenuItem(child: Text('All Ratings'), value: ''),
                  DropdownMenuItem(child: Text('4.5+'), value: '4.5'),
                  DropdownMenuItem(child: Text('4+'), value: '4'),
                  DropdownMenuItem(child: Text('3+'), value: '3'),
                ],
                onChanged: (value) => setState(() {
                  searchRating = value ?? '';
                }),
              ),
              SizedBox(height: 16),
              Text('Location'),
              TextField(
                decoration: InputDecoration(
                  hintText: 'Search by location',
                ),
                onChanged: (value) => setState(() {
                  searchLocation = value;
                }),
              ),
              SizedBox(height: 16),
              Text('Quantity'),
              TextField(
                decoration: InputDecoration(
                  hintText: 'Min quantity',
                ),
                keyboardType: TextInputType.number,
                onChanged: (value) => setState(() {
                  searchQuantity = value;
                }),
              ),
              SizedBox(height: 16),
              Text('Crop'),
              TextField(
                decoration: InputDecoration(
                  hintText: 'Search by crop',
                ),
                onChanged: (value) => setState(() {
                  searchCrop = value;
                }),
              ),
              SizedBox(height: 16),
              ElevatedButton(
                onPressed: () {
                  Navigator.pop(context);
                },
                child: Text('Apply Filters'),
              ),
            ],
          ),
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Marketplace'),
        actions: [
          IconButton(
            icon: Icon(Icons.filter_list),
            onPressed: _showFilterOptions,
          ),
        ],
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: GridView.builder(
          gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: 2,
            childAspectRatio: 1 / 1.2, // Adjust aspect ratio to fit images well
            crossAxisSpacing: 16,
            mainAxisSpacing: 16,
          ),
          itemCount: filteredCrops.length,
          itemBuilder: (context, index) {
            final crop = filteredCrops[index];
            return GestureDetector(
              onTap: () {
                GoRouter.of(context).go('/crop/${crop['id']}');
              },
              child: Card(
                elevation: 4,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Expanded(
                      child: Image.network(
                        crop['image'],
                        fit: BoxFit.cover,
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(crop['name'],
                              style: TextStyle(
                                  fontSize: 18, fontWeight: FontWeight.bold)),
                          SizedBox(height: 8),
                          Text('Farmer: ${crop['farmer']}'),
                          Text('Rating: ${crop['rating']} ⭐',
                              style: TextStyle(color: Colors.yellow[700])),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            );
          },
        ),
      ),
    );
  }
}
