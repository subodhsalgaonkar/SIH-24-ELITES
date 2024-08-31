import 'package:flutter/material.dart';
import 'farmer_signup.dart';
import 'bussiness_signup.dart';

class RoleSelection extends StatefulWidget {
  @override
  _RoleSelectionState createState() => _RoleSelectionState();
}

class _RoleSelectionState extends State<RoleSelection> {
  String role = '';

  void handleRoleSelect(String selectedRole) {
    setState(() {
      role = selectedRole;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: role.isEmpty
            ? Container(
                padding: EdgeInsets.all(16),
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(8),
                  boxShadow: [
                    BoxShadow(
                      color: Colors.black26,
                      blurRadius: 10,
                      offset: Offset(0, 5),
                    ),
                  ],
                ),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Text(
                      'Select Your Role',
                      style:
                          TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
                    ),
                    SizedBox(height: 20),
                    ElevatedButton(
                      onPressed: () => handleRoleSelect('farmer'),
                      style: ElevatedButton.styleFrom(
                          backgroundColor: Colors.blue),
                      child: Text('I am a Farmer'),
                    ),
                    SizedBox(height: 10),
                    ElevatedButton(
                      onPressed: () => handleRoleSelect('business'),
                      style: ElevatedButton.styleFrom(
                          backgroundColor: Colors.green),
                      child: Text('I am a Business Owner'),
                    ),
                  ],
                ),
              )
            : (role == 'farmer' ? FarmerSignup() : BusinessSignup()),
      ),
    );
  }
}
