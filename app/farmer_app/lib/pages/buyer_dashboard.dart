// lib/src/pages/buyer_dashboard.dart
import 'package:flutter/material.dart';
import '/dashboard.dart';

class BuyerDashboard extends StatelessWidget {
  final List<Map<String, dynamic>> buyerContracts = [
    {
      'id': 1,
      'title': 'Wheat Purchase',
      'description': 'Buying 100 tons of wheat.',
      'status': 'active'
    },
    {
      'id': 2,
      'title': 'Corn Purchase',
      'description': 'Buying 200 tons of corn.',
      'status': 'past'
    },
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Buyer Dashboard'),
      ),
      body: Dashboard(contracts: buyerContracts),
    );
  }
}
