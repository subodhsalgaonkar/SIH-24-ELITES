import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart'; // Import GoRouter

class FarmerSignup extends StatefulWidget {
  @override
  _FarmerSignupState createState() => _FarmerSignupState();
}

class _FarmerSignupState extends State<FarmerSignup> {
  int page = 0;
  final Map<String, dynamic> farmerDetails = {
    'name': '',
    'email': '',
    'mobileNumber': '',
    'farmDescription': '',
    'birthday': '',
    'farmAddress': '',
    'cropsGrown': '',
    'farmImage': null,
  };

  void handleNext() {
    setState(() {
      page++;
    });
  }

  void handlePrevious() {
    setState(() {
      page--;
    });
  }

  void handleSubmit() {
    // Use GoRouter to navigate
    GoRouter.of(context).go('/farmersppfarmerpov');
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Farmer Signup'),
      ),
      body: SingleChildScrollView(
        // Add SingleChildScrollView here
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            if (page == 0) ...[
              Text('Farmer Details',
                  style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
              TextField(
                decoration: InputDecoration(labelText: 'Name'),
                onChanged: (value) => farmerDetails['name'] = value,
              ),
              TextField(
                decoration: InputDecoration(labelText: 'Email'),
                keyboardType: TextInputType.emailAddress,
                onChanged: (value) => farmerDetails['email'] = value,
              ),
              TextField(
                decoration: InputDecoration(labelText: 'Mobile Number'),
                keyboardType: TextInputType.phone,
                onChanged: (value) => farmerDetails['mobileNumber'] = value,
              ),
              TextField(
                decoration: InputDecoration(labelText: 'Farm Description'),
                onChanged: (value) => farmerDetails['farmDescription'] = value,
              ),
            ] else if (page == 1) ...[
              Text('Farm Details',
                  style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
              TextField(
                decoration: InputDecoration(labelText: 'Birthday'),
                keyboardType: TextInputType.datetime,
                onChanged: (value) => farmerDetails['birthday'] = value,
              ),
              TextField(
                decoration: InputDecoration(labelText: 'Farm Address'),
                onChanged: (value) => farmerDetails['farmAddress'] = value,
              ),
              TextField(
                decoration: InputDecoration(labelText: 'Crops Grown'),
                onChanged: (value) => farmerDetails['cropsGrown'] = value,
              ),
            ] else if (page == 2) ...[
              Text('Upload Farm Image',
                  style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
              TextButton(
                onPressed: () async {
                  // Implement image picker logic here
                },
                child: Text('Choose File'),
              ),
            ],
            SizedBox(height: 20), // Add spacing for better UI
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                if (page > 0)
                  ElevatedButton(
                    onPressed: handlePrevious,
                    child: Text('Previous'),
                    style: ElevatedButton.styleFrom(
                      foregroundColor: Colors.black,
                      backgroundColor: Colors.grey[300],
                    ),
                  ),
                if (page < 2)
                  ElevatedButton(
                    onPressed: handleNext,
                    child: Text('Next'),
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.blue,
                    ),
                  ),
                if (page == 2)
                  ElevatedButton(
                    onPressed: handleSubmit,
                    child: Text('Submit'),
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.green,
                    ),
                  ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
