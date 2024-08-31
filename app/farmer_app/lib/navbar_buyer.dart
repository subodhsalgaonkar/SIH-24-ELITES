import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart'; // Import GoRouter

class NavbarBuyer extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.green,
      padding: EdgeInsets.all(16),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text(
            "Farmer Connect",
            style: TextStyle(
                fontSize: 24, fontWeight: FontWeight.bold, color: Colors.white),
          ),
          Row(
            children: [
              ElevatedButton(
                onPressed: () {
                  GoRouter.of(context)
                      .go('/buyer'); // Use GoRouter for navigation
                },
                style: ElevatedButton.styleFrom(backgroundColor: Colors.orange),
                child: Text("Dashboard"),
              ),
              SizedBox(width: 10),
              ElevatedButton(
                onPressed: () {
                  GoRouter.of(context)
                      .go('/marketplace'); // Use GoRouter for navigation
                },
                style: ElevatedButton.styleFrom(backgroundColor: Colors.blue),
                child: Text("MarketPlace"),
              ),
              SizedBox(width: 10),
              ElevatedButton(
                onPressed: () {
                  GoRouter.of(context).go(
                      '/buyerprofilebuyerpov'); // Use GoRouter for navigation
                },
                style: ElevatedButton.styleFrom(backgroundColor: Colors.blue),
                child: Text("Profile"),
              ),
              SizedBox(width: 10),
              ElevatedButton(
                onPressed: () {
                  GoRouter.of(context)
                      .go('/notifications'); // Use GoRouter for navigation
                },
                style: ElevatedButton.styleFrom(backgroundColor: Colors.yellow),
                child: Text("Notifications"),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
