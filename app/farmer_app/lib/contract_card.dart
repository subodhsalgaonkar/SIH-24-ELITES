import 'package:flutter/material.dart';

class ContractCard extends StatelessWidget {
  final Map<String, String> contract;

  ContractCard({required this.contract});

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 4.0,
      margin: EdgeInsets.symmetric(vertical: 8.0, horizontal: 16.0),
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(8.0),
      ),
      child: Padding(
        padding: EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              contract['title']!,
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 8.0),
            Text(
              contract['description']!,
              style: TextStyle(color: Colors.grey[600]),
            ),
            SizedBox(height: 8.0),
            Text(
              'Status: ${contract['status']}',
              style: TextStyle(color: Colors.black),
            ),
            SizedBox(height: 8.0),
            TextButton(
              onPressed: () {
                Navigator.pushNamed(context, '/contract/${contract['id']}');
              },
              child: Text('View Details', style: TextStyle(color: Colors.blue)),
            ),
          ],
        ),
      ),
    );
  }
}
