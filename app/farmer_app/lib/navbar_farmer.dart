import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart'; // Import GoRouter

class NavbarFarmer extends StatelessWidget {
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
                      .go('/seller'); // Use GoRouter for navigation
                },
                style: ElevatedButton.styleFrom(backgroundColor: Colors.orange),
                child: Text("Dashboard"),
              ),
              SizedBox(width: 10),
              ElevatedButton(
                onPressed: () {
                  GoRouter.of(context)
                      .go('/farmersPPfarmerpov'); // Use GoRouter for navigation
                },
                style: ElevatedButton.styleFrom(backgroundColor: Colors.blue),
                child: Text("Profile"),
              ),
              SizedBox(width: 10),
              ElevatedButton(
                onPressed: () {
                  GoRouter.of(context)
                      .go('/notificationsf'); // Use GoRouter for navigation
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
