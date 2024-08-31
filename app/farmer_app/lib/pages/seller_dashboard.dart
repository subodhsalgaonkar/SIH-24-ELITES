// lib/seller_dashboard.dart
import 'package:farmer_app/dashboard.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class SellerDashboard extends StatelessWidget {
  final List<Map<String, dynamic>> sellerContracts = [
    {
      'id': 1,
      'title': 'Wheat Sale',
      'description': 'Selling 100 tons of wheat.',
      'status': 'active'
    },
    {
      'id': 2,
      'title': 'Rice Sale',
      'description': 'Selling 50 tons of rice.',
      'status': 'past'
    },
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Seller Dashboard'),
        leading: IconButton(
          icon: Icon(Icons.arrow_back),
          onPressed: () {
            // Check if the navigator can pop, if not go to a default route
            if (Navigator.of(context).canPop()) {
              context.pop(); // Using context.pop() for GoRouter
            } else {
              GoRouter.of(context).go('/'); // Default route if unable to pop
            }
          },
        ),
      ),
      body: Dashboard(contracts: sellerContracts),
    );
  }
}
