import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart'; // Import GoRouter

class BusinessSignup extends StatefulWidget {
  @override
  _BusinessSignupState createState() => _BusinessSignupState();
}

class _BusinessSignupState extends State<BusinessSignup> {
  int _page = 0;

  final Map<String, String> _businessDetails = {
    'businessName': '',
    'ownerName': '',
    'email': '',
    'phoneNumber': '',
    'businessAddress': '',
    'businessType': '',
    'description': '',
  };

  void _nextPage() {
    if (_page < 2) {
      setState(() {
        _page += 1;
      });
    }
  }

  void _previousPage() {
    if (_page > 0) {
      setState(() {
        _page -= 1;
      });
    }
  }

  void _onChanged(String name, String value) {
    setState(() {
      _businessDetails[name] = value;
    });
  }

  void _onSubmit() {
    // Use GoRouter to navigate
    GoRouter.of(context).go('/buyerpov');
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey[100],
      body: Center(
        child: Container(
          padding: EdgeInsets.all(16.0),
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(8.0),
            boxShadow: [
              BoxShadow(
                color: Colors.black26,
                blurRadius: 10.0,
              ),
            ],
          ),
          width: 400.0,
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: <Widget>[
              if (_page == 0) ...[
                Text(
                  'Business Details',
                  style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                ),
                TextField(
                  decoration: InputDecoration(labelText: 'Business Name'),
                  onChanged: (value) => _onChanged('businessName', value),
                ),
                TextField(
                  decoration: InputDecoration(labelText: 'Owner Name'),
                  onChanged: (value) => _onChanged('ownerName', value),
                ),
                TextField(
                  decoration: InputDecoration(labelText: 'Email'),
                  onChanged: (value) => _onChanged('email', value),
                ),
                TextField(
                  decoration: InputDecoration(labelText: 'Phone Number'),
                  onChanged: (value) => _onChanged('phoneNumber', value),
                ),
              ],
              if (_page == 1) ...[
                Text(
                  'Business Address',
                  style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                ),
                TextField(
                  decoration: InputDecoration(labelText: 'Business Address'),
                  onChanged: (value) => _onChanged('businessAddress', value),
                ),
                TextField(
                  decoration: InputDecoration(labelText: 'Business Type'),
                  onChanged: (value) => _onChanged('businessType', value),
                ),
                TextField(
                  decoration: InputDecoration(labelText: 'Description'),
                  onChanged: (value) => _onChanged('description', value),
                ),
              ],
              if (_page == 2) ...[
                Text(
                  'Review & Submit',
                  style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                ),
                Text('Business Name: ${_businessDetails['businessName']}'),
                Text('Owner Name: ${_businessDetails['ownerName']}'),
                Text('Email: ${_businessDetails['email']}'),
                Text('Phone Number: ${_businessDetails['phoneNumber']}'),
                Text(
                    'Business Address: ${_businessDetails['businessAddress']}'),
                Text('Business Type: ${_businessDetails['businessType']}'),
                Text('Description: ${_businessDetails['description']}'),
              ],
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: <Widget>[
                  if (_page > 0)
                    ElevatedButton(
                      onPressed: _previousPage,
                      child: Text('Previous'),
                      style: ElevatedButton.styleFrom(
                        foregroundColor: Colors.black,
                        backgroundColor: Colors.grey[300],
                      ),
                    ),
                  if (_page < 2)
                    ElevatedButton(
                      onPressed: _nextPage,
                      child: Text('Next'),
                      style: ElevatedButton.styleFrom(
                        backgroundColor: Colors.blue,
                      ),
                    ),
                  if (_page == 2)
                    ElevatedButton(
                      onPressed: _onSubmit,
                      child: Text('Submit'),
                      style: ElevatedButton.styleFrom(
                        backgroundColor: Colors.green,
                      ),
                    ),
                ],
              )
            ],
          ),
        ),
      ),
    );
  }
}
