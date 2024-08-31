import 'package:flutter/material.dart';

class BuyerProfileBuyerPov extends StatefulWidget {
  @override
  _BuyerProfileBuyerPovState createState() => _BuyerProfileBuyerPovState();
}

class _BuyerProfileBuyerPovState extends State<BuyerProfileBuyerPov> {
  bool isEditing = false;
  Map<String, String> profileInfo = {
    'name': 'John Doe',
    'businessType': 'Wholesaler',
    'company': 'Green Grow Ltd.',
    'location': 'Springfield, IL',
    'contactNumber': '+123 456 7890',
    'email': 'john.doe@greengrow.com',
    'website': 'www.greengrow.com',
    'businessRegNumber': 'BRN123456',
    'verifiedStatus': 'Verified',
    'description':
        'Green Grow Ltd. is a leading wholesaler specializing in organic vegetables. We are committed to providing high-quality produce to our clients and maintaining sustainable practices.',
    'paymentTerms':
        'Payment terms are net 30 days from the date of invoice. We accept payments via bank transfer and major credit cards.',
  };

  List<String> preferredProducts = ['Tomatoes', 'Cucumbers', 'Leafy Greens'];

  void handleInputChange(String key, String value) {
    setState(() {
      profileInfo[key] = value;
    });
  }

  void toggleEdit() {
    setState(() {
      isEditing = !isEditing;
    });
  }

  void updateProfile() {
    // Handle update logic here
    setState(() {
      isEditing = false;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.lime[100],
      body: Center(
        child: SingleChildScrollView(
          // Add SingleChildScrollView here
          child: Container(
            width: double.infinity,
            margin: EdgeInsets.symmetric(horizontal: 16.0, vertical: 24.0),
            padding: EdgeInsets.all(16.0),
            decoration: BoxDecoration(
              color: Colors.white,
              boxShadow: [
                BoxShadow(
                  color: Colors.black26,
                  blurRadius: 8.0,
                ),
              ],
              borderRadius: BorderRadius.circular(8.0),
            ),
            child: Column(
              children: [
                Stack(
                  alignment: Alignment.center,
                  children: [
                    Container(
                      height: 150.0,
                      color: Colors.green,
                    ),
                    Positioned(
                      top: 75.0,
                      child: CircleAvatar(
                        radius: 48.0,
                        backgroundImage:
                            AssetImage('assets/images/BuyerProfile.jpg'),
                        backgroundColor: Colors.white,
                        foregroundImage:
                            AssetImage('assets/images/BuyerProfile.jpg'),
                      ),
                    ),
                  ],
                ),
                SizedBox(height: 60.0),
                if (isEditing)
                  TextField(
                    onChanged: (value) => handleInputChange('name', value),
                    decoration: InputDecoration(
                      hintText: profileInfo['name'],
                      border: InputBorder.none,
                    ),
                    style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
                  )
                else
                  Text(
                    profileInfo['name']!,
                    style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
                  ),
                SizedBox(height: 8.0),
                TextButton(
                  onPressed: toggleEdit,
                  child: Text(isEditing ? 'Save' : 'Edit'),
                ),
                SizedBox(height: 16.0),
                Text('Business Type: ${profileInfo['businessType']}'),
                Text('Company: ${profileInfo['company']}'),
                Text('Location: ${profileInfo['location']}'),
                Text('Contact Number: ${profileInfo['contactNumber']}'),
                Text('Email: ${profileInfo['email']}'),
                Text('Website: ${profileInfo['website']}'),
                Text(
                    'Business Registration Number: ${profileInfo['businessRegNumber']}'),
                Text('Verified Status: ${profileInfo['verifiedStatus']}'),
                SizedBox(height: 16.0),
                Text('Description',
                    style:
                        TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
                if (isEditing)
                  TextField(
                    maxLines: null,
                    onChanged: (value) =>
                        handleInputChange('description', value),
                    decoration: InputDecoration(
                      hintText: profileInfo['description'],
                      border: InputBorder.none,
                    ),
                  )
                else
                  Text(profileInfo['description']!),
                SizedBox(height: 16.0),
                Text('Preferred Products',
                    style:
                        TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
                Wrap(
                  alignment: WrapAlignment.center,
                  spacing: 8.0,
                  children: preferredProducts.map((product) {
                    return Column(
                      children: [
                        Text(product),
                        CircleAvatar(
                          radius: 30,
                          backgroundImage: AssetImage(
                            product == 'Tomatoes'
                                ? 'assets/images/Tomato.jpg'
                                : product == 'Cucumbers'
                                    ? 'assets/images/Cucumber.jpg'
                                    : 'assets/images/leafygreens.jpg',
                          ),
                        ),
                      ],
                    );
                  }).toList(),
                ),
                SizedBox(height: 16.0),
                Text('Payment Terms',
                    style:
                        TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
                if (isEditing)
                  TextField(
                    maxLines: null,
                    onChanged: (value) =>
                        handleInputChange('paymentTerms', value),
                    decoration: InputDecoration(
                      hintText: profileInfo['paymentTerms'],
                      border: InputBorder.none,
                    ),
                  )
                else
                  Text(profileInfo['paymentTerms']!),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
