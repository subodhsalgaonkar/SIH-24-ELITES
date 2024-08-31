// lib/src/pages/contract_details_page.dart
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
//import 'package:provider/provider.dart'; // Assuming you are using provider for state management
import '/contract_details.dart';

class ContractDetailsPage extends StatelessWidget {
  final List<Map<String, dynamic>> dummyContracts = [
    {
      'id': 1,
      'title': 'Wheat Purchase',
      'description': 'Buying 100 tons of wheat.',
      'status': 'active',
      'createdOn': '2024-08-01',
      'endingOn': '2024-09-01',
      'price': 'Rs 6000 per ton'
    },
    {
      'id': 2,
      'title': 'Corn Purchase',
      'description': 'Buying 200 tons of corn.',
      'status': 'past',
      'createdOn': '2024-07-01',
      'endingOn': '2024-07-31',
      'price': 'Rs 6000 per ton'
    },
    {
      'id': 3,
      'title': 'Wheat Sale',
      'description': 'Selling 100 tons of wheat.',
      'status': 'active',
      'createdOn': '2024-08-10',
      'endingOn': '2024-09-10',
      'price': 'Rs 6000 per ton'
    },
    {
      'id': 4,
      'title': 'Rice Sale',
      'description': 'Selling 50 tons of rice.',
      'status': 'past',
      'createdOn': '2024-06-01',
      'endingOn': '2024-06-30',
      'price': 'Rs 6000 per ton'
    },
  ];

  @override
  Widget build(BuildContext context) {
    final int id = ModalRoute.of(context)!.settings.arguments as int;
    final contract =
        dummyContracts.firstWhere((c) => c['id'] == id, orElse: () => {});

    return Scaffold(
      appBar: AppBar(
        title: Text('Contract Details'),
      ),
      body: ContractDetails(
        contract: contract,
        id: '',
      ),
    );
  }
}
