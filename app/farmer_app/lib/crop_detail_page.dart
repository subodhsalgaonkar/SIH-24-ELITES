import 'package:flutter/material.dart';

class CropDetailPage extends StatelessWidget {
  final String id;

  CropDetailPage({required this.id});

  @override
  Widget build(BuildContext context) {
    // Replace this with actual data fetching logic based on the id
    final Map<String, dynamic> crop = _getCropDetails(id);

    return Scaffold(
      appBar: AppBar(
        title: Text(crop['name']),
        backgroundColor: Colors.green,
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16.0),
        child: Card(
          elevation: 4,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(12.0),
          ),
          child: Padding(
            padding: const EdgeInsets.all(16.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  crop['name'],
                  style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold),
                ),
                SizedBox(height: 8),
                Text(
                  'Farmer: ${crop['farmer']}',
                  style: TextStyle(fontSize: 16, color: Colors.grey[700]),
                ),
                Text(
                  'Quantity: ${crop['quantity']}',
                  style: TextStyle(fontSize: 16, color: Colors.grey[700]),
                ),
                Text(
                  'Location: ${crop['location']}',
                  style: TextStyle(fontSize: 16, color: Colors.grey[700]),
                ),
                SizedBox(height: 8),
                Row(
                  children: [
                    Icon(Icons.star, color: Colors.yellow, size: 20),
                    SizedBox(width: 4),
                    Text(
                      '${crop['rating']}',
                      style: TextStyle(fontSize: 16, color: Colors.grey[700]),
                    ),
                  ],
                ),
                SizedBox(height: 16),
                Text(
                  crop['description'],
                  style: TextStyle(fontSize: 16, height: 1.5),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  // Dummy method to simulate data fetching
  Map<String, dynamic> _getCropDetails(String id) {
    // Replace this with actual logic to fetch crop details based on the id
    return {
      'name': 'Tomatoes',
      'farmer': 'John Doe',
      'quantity': '500 kg',
      'location': 'California',
      'rating': 4.5,
      'description': 'Fresh and organic tomatoes.',
    };
  }
}
