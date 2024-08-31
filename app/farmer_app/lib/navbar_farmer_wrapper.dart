// lib/navbar_farmer_wrapper.dart
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class NavbarFarmerWrapper extends StatelessWidget {
  final Widget child;

  const NavbarFarmerWrapper({required this.child});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Farmer Connect'),
        backgroundColor: Colors.green,
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
        actions: [
          IconButton(
            icon: Icon(Icons.dashboard),
            onPressed: () => GoRouter.of(context).go('/seller-dashboard'),
          ),
          IconButton(
            icon: Icon(Icons.person),
            onPressed: () => GoRouter.of(context).go('/farmersppfarmerpov'),
          ),
          IconButton(
            icon: Icon(Icons.notifications),
            onPressed: () => GoRouter.of(context).go('/notificationsf'),
          ),
        ],
      ),
      body: child,
    );
  }
}
