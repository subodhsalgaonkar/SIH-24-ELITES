import 'package:flutter/material.dart';

class FarmerProfilePage extends StatelessWidget {
  final String farmerName;

  // Update the constructor to accept 'farmerName'
  FarmerProfilePage({required this.farmerName});

  @override
  Widget build(BuildContext context) {
    // Sample farmer data - replace with actual data fetching
    final Map<String, dynamic> farmer = {
      'name': Uri.decodeComponent(farmerName),
      'contact': '+1234567890',
      'email': 'john.doe@example.com',
      'experience': '10 years',
      'farmName': 'Green Valley Farm',
      'cropsGrown': 'Wheat, Corn, Tomatoes',
      'farmingMethods': 'Organic, Hydroponic',
      'rating': '4.5/5',
      'reviews': [
        'Excellent produce quality! - Alice',
        'Very professional and timely delivery. - Bob',
      ],
    };

    return Scaffold(
      backgroundColor: Colors.lime[100],
      body: Center(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 16.0),
          child: Container(
            constraints: BoxConstraints(maxWidth: 1000),
            decoration: BoxDecoration(
              color: Colors.white,
              boxShadow: [BoxShadow(blurRadius: 10, color: Colors.black12)],
              borderRadius: BorderRadius.circular(8.0),
            ),
            child: SingleChildScrollView(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  // Header Section
                  Container(
                    color: Colors.green[500],
                    padding: const EdgeInsets.all(16.0),
                    child: Stack(
                      alignment: Alignment.center,
                      children: [
                        Positioned(
                          left: 16,
                          child: CircleAvatar(
                            radius: 48,
                            backgroundImage:
                                AssetImage('assets/images/wheatImg.jpeg'),
                            backgroundColor: Colors.white,
                          ),
                        ),
                        Column(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            SizedBox(height: 64),
                            Text(
                              farmer['name'],
                              style: TextStyle(
                                fontSize: 24,
                                fontWeight: FontWeight.bold,
                                color: Colors.white,
                              ),
                            ),
                            SizedBox(height: 8),
                            Text(
                              'Contact: ${farmer['contact']}',
                              style: TextStyle(
                                fontSize: 18,
                                color: Colors.green[100],
                              ),
                            ),
                            // Email is commented out in original code
                            // Text(
                            //   'Email: ${farmer['email']}',
                            //   style: TextStyle(
                            //     fontSize: 18,
                            //     color: Colors.green[100],
                            //   ),
                            // ),
                            Text(
                              'Experience: ${farmer['experience']}',
                              style: TextStyle(
                                fontSize: 18,
                                color: Colors.green[100],
                              ),
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),

                  // Personal Info Section
                  Padding(
                    padding: const EdgeInsets.all(16.0),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          'Personal Info',
                          style: TextStyle(
                            fontSize: 20,
                            fontWeight: FontWeight.bold,
                            color: Colors.grey[800],
                          ),
                        ),
                        SizedBox(height: 8),
                        Text(
                          '${farmer['name']} is an experienced farmer with over ${farmer['experience']} in organic farming.',
                          style: TextStyle(
                            fontSize: 16,
                            color: Colors.grey[600],
                          ),
                        ),
                      ],
                    ),
                  ),

                  // Crop Info Section
                  Container(
                    color: Colors.grey[50],
                    padding: const EdgeInsets.all(16.0),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          'Crop Info',
                          style: TextStyle(
                            fontSize: 20,
                            fontWeight: FontWeight.bold,
                            color: Colors.grey[800],
                          ),
                        ),
                        SizedBox(height: 8),
                        Text(
                          'Farm: ${farmer['farmName']}',
                          style: TextStyle(
                            fontSize: 16,
                            color: Colors.grey[600],
                          ),
                        ),
                        Text(
                          'Crops Grown: ${farmer['cropsGrown']}',
                          style: TextStyle(
                            fontSize: 16,
                            color: Colors.grey[600],
                          ),
                        ),
                        Text(
                          'Farming Methods: ${farmer['farmingMethods']}',
                          style: TextStyle(
                            fontSize: 16,
                            color: Colors.grey[600],
                          ),
                        ),
                        SizedBox(height: 8),
                        Row(
                          children: [
                            Image.asset(
                              'assets/images/wheatImg.jpeg',
                              width: 96,
                              height: 96,
                              fit: BoxFit.cover,
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),

                  // Rating/Reviews Section
                  Container(
                    color: Colors.grey[50],
                    padding: const EdgeInsets.all(16.0),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          'Rating/Reviews',
                          style: TextStyle(
                            fontSize: 20,
                            fontWeight: FontWeight.bold,
                            color: Colors.grey[800],
                          ),
                        ),
                        SizedBox(height: 8),
                        Text(
                          'Rating: ${farmer['rating']}',
                          style: TextStyle(
                            fontSize: 16,
                            color: Colors.grey[600],
                          ),
                        ),
                        Text(
                          'Reviews:',
                          style: TextStyle(
                            fontSize: 16,
                            color: Colors.grey[600],
                          ),
                        ),
                        SizedBox(height: 8),
                        // Ensure that 'reviews' is a List before mapping
                        if (farmer['reviews'] is List<String>)
                          ...((farmer['reviews'] as List<String>)
                              .map<Widget>((review) {
                            return Padding(
                              padding: const EdgeInsets.only(left: 8.0),
                              child: Text(
                                review,
                                style: TextStyle(
                                  fontSize: 16,
                                  color: Colors.grey[600],
                                ),
                              ),
                            );
                          }).toList()),
                      ],
                    ),
                  ),

                  // Documents Section
                  Container(
                    color: Colors.grey[50],
                    padding: const EdgeInsets.all(16.0),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          'Documents',
                          style: TextStyle(
                            fontSize: 20,
                            fontWeight: FontWeight.bold,
                            color: Colors.grey[800],
                          ),
                        ),
                        SizedBox(height: 8),
                        Text(
                          'Verifiable document for organic farming certification available upon request.',
                          style: TextStyle(
                            fontSize: 16,
                            color: Colors.grey[600],
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
