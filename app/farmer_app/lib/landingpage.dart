import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class LandingPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey[100],
      body: Stack(
        children: [
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: Column(
              children: [
                Align(
                  alignment: Alignment.topRight,
                  child: ElevatedButton(
                    onPressed: () {
                      Navigator.pushNamed(context, '/buyerprofile');
                    },
                    style: ElevatedButton.styleFrom(
                      foregroundColor: Colors.white, backgroundColor: Colors.blue[500],
                      padding: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
                    ),
                    child: Text('Buyer Profile'),
                  ),
                ),
                Spacer(),
                Text(
                  'Hi, this is the Landing Page! Welcome to our website Farmer\'s Market!',
                  textAlign: TextAlign.center,
                ),
                Spacer(),
                ElevatedButton(
                  onPressed: () {
                    Navigator.pushNamed(context, '/create-contract');
                  },
                  style: ElevatedButton.styleFrom(
                    foregroundColor: Colors.white, backgroundColor: Colors.green[500],
                    padding: EdgeInsets.symmetric(horizontal: 24, vertical: 12),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
                  ),
                  child: Text('Create Contract'),
                ),
                SizedBox(height: 16),
                ElevatedButton(
                  onPressed: () {
                    Navigator.pushNamed(context, '/marketplace');
                  },
                  style: ElevatedButton.styleFrom(
                    foregroundColor: Colors.white, backgroundColor: Colors.yellow[500],
                    padding: EdgeInsets.symmetric(horizontal: 24, vertical: 12),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
                  ),
                  child: Text('Go to Marketplace'),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
