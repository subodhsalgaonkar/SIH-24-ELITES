// lib/dashboard.dart
import 'package:flutter/material.dart';

class Dashboard extends StatefulWidget {
  final List<Map<String, dynamic>> contracts;

  Dashboard({required this.contracts});

  @override
  _DashboardState createState() => _DashboardState();
}

class _DashboardState extends State<Dashboard> {
  String filter = 'all';

  @override
  Widget build(BuildContext context) {
    final filteredContracts = widget.contracts.where((contract) {
      if (filter == 'all') return true;
      return contract['status'] == filter;
    }).toList();

    return Scaffold(
      appBar: AppBar(
        title: Text('Your Contracts'),
        actions: [
          DropdownButton<String>(
            value: filter,
            onChanged: (value) {
              setState(() {
                filter = value ?? 'all';
              });
            },
            items: [
              DropdownMenuItem(value: 'all', child: Text('All Contracts')),
              DropdownMenuItem(
                  value: 'active', child: Text('Active Contracts')),
              DropdownMenuItem(value: 'past', child: Text('Past Contracts')),
            ],
          ),
        ],
      ),
      body: GridView.builder(
        padding: const EdgeInsets.all(16.0),
        gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: 1,
          childAspectRatio: 3 / 2,
          crossAxisSpacing: 16,
          mainAxisSpacing: 16,
        ),
        itemCount: filteredContracts.length,
        itemBuilder: (context, index) {
          final contract = filteredContracts[index];
          return ContractCard(contract: contract);
        },
      ),
    );
  }
}

class ContractCard extends StatelessWidget {
  final Map<String, dynamic> contract;

  ContractCard({required this.contract});

  @override
  Widget build(BuildContext context) {
    return Card(
      child: ListTile(
        title: Text(contract['title']),
        subtitle: Text(contract['description']),
      ),
    );
  }
}
