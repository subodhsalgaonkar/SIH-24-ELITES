import 'package:flutter/material.dart';

class BuyerProfile extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.lime[100],
      body: Center(
        child: Container(
          width: double.infinity,
          margin: EdgeInsets.all(16.0),
          padding: EdgeInsets.all(16.0),
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(8.0),
            boxShadow: [
              BoxShadow(
                color: Colors.black26,
                blurRadius: 10.0,
              ),
            ],
          ),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Stack(
                children: [
                  Container(
                    color: Colors.green[500],
                    height: 200,
                  ),
                  Positioned(
                    left: 32,
                    top: 100,
                    child: CircleAvatar(
                      radius: 60,
                      backgroundImage: AssetImage('assets/images/BuyerProfile.jpg'),
                      backgroundColor: Colors.white,
                    ),
                  ),
                ],
              ),
              SizedBox(height: 60),
              Text(
                'John Doe',
                style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
              ),
              Text('Business Type: Wholesaler'),
              Text('Company: Green Grow Ltd.'),
              Text('Location: Springfield, IL'),
              Text('Contact Number: +123 456 7890'),
              Text('Email: john.doe@greengrow.com'),
              Text('Website: www.greengrow.com'),
              Text('Business Registration Number: BRN123456'),
              Text(
                'Verified Status: Verified',
                style: TextStyle(
                  backgroundColor: Colors.green[200],
                  color: Colors.green[800],
                ),
              ),
              SizedBox(height: 16.0),
              Text(
                'Description',
                style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
              ),
              Text(
                'Green Grow Ltd. is a leading wholesaler specializing in organic vegetables. We are committed to providing high-quality produce to our clients and maintaining sustainable practices.',
                textAlign: TextAlign.center,
              ),
              SizedBox(height: 16.0),
              Text(
                'Preferred Products',
                style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Column(
                    children: [
                      Text('Tomatoes'),
                      CircleAvatar(
                        radius: 30,
                        backgroundImage: AssetImage('assets/images/Tomato.jpg'),
                      ),
                    ],
                  ),
                  SizedBox(width: 16.0),
                  Column(
                    children: [
                      Text('Cucumbers'),
                      CircleAvatar(
                        radius: 30,
                        backgroundImage: AssetImage('assets/images/Cucumber.jpg'),
                      ),
                    ],
                  ),
                  SizedBox(width: 16.0),
                  Column(
                    children: [
                      Text('Leafy Greens'),
                      CircleAvatar(
                        radius: 30,
                        backgroundImage: AssetImage('assets/images/leafygreens.jpg'),
                      ),
                    ],
                  ),
                ],
              ),
              SizedBox(height: 16.0),
              Text(
                'Payment Terms',
                style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
              ),
              Text(
                'Payment terms are net 30 days from the date of invoice. We accept payments via bank transfer and major credit cards.',
                textAlign: TextAlign.center,
              ),
              SizedBox(height: 16.0),
              Text(
                'Contract History',
                style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
              ),
              Text(
                'Summary of previous contracts or transactions is available upon request.',
                textAlign: TextAlign.center,
              ),
              SizedBox(height: 16.0),
              Text(
                'Ratings and Reviews',
                style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: List.generate(5, (index) {
                  return Icon(
                    index < 4 ? Icons.star : Icons.star_border,
                    color: Colors.yellow[600],
                  );
                }),
              ),
              Text('(4.0/5 based on 120 reviews)'),
            ],
          ),
        ),
      ),
    );
  }
}
