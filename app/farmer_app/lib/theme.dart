import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(
        primarySwatch: Colors.blue,
        brightness: Brightness.dark,
        textTheme: TextTheme(
          bodyMedium: TextStyle(
            color: Colors.white.withOpacity(0.87),
            fontFamily: 'Inter',
            fontWeight: FontWeight.w400,
            height: 1.5,
          ),
        ),
        buttonTheme: ButtonThemeData(
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(8),
          ),
          buttonColor: Color(0xFF1A1A1A),
          textTheme: ButtonTextTheme.primary,
        ),
      ),
      home: HomeScreen(),
    );
  }
}

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              'Hello, World!',
              style: TextStyle(fontSize: 32, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {},
              style: ElevatedButton.styleFrom(
                padding: EdgeInsets.symmetric(vertical: 12, horizontal: 24),
                backgroundColor:
                    Theme.of(context).buttonTheme.colorScheme?.primary ??
                        Colors.blue, // Default to Colors.blue if null
              ),
              child: Text('Click Me'),
            )
          ],
        ),
      ),
    );
  }
}
