import 'package:flutter/material.dart';

class Notifications extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // Sample notifications data
    final List<Map<String, String>> notifications = [
      {
        'id': '1',
        'title': 'Contract Expiry Reminder',
        'message': 'Your contract with Green Valley Farm is expiring soon. Please review the terms and extend it if needed.',
        'date': '2024-08-30',
      },
      {
        'id': '2',
        'title': 'New Message',
        'message': 'You have received a new message from Rajesh Kumar regarding the recent order.',
        'date': '2024-08-29',
      },
      {
        'id': '3',
        'title': 'Order Update',
        'message': 'Your order #12345 has been shipped and will arrive by tomorrow.',
        'date': '2024-08-28',
      },
    ];

    return Scaffold(
      backgroundColor: Colors.lime[100],
      body: Center(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 16.0),
          child: Container(
            constraints: BoxConstraints(maxWidth: 1000),
            decoration: BoxDecoration(
              color: Colors.white,
              boxShadow: [BoxShadow(blurRadius: 10, color: Colors.black12)],
              borderRadius: BorderRadius.circular(8.0),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                // Header Section
                Container(
                  color: Colors.green[500],
                  padding: const EdgeInsets.all(16.0),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      SizedBox(height: 48), // Spacer for the absent image
                      Text(
                        'Notifications',
                        style: TextStyle(
                          fontSize: 24,
                          fontWeight: FontWeight.bold,
                          color: Colors.white,
                        ),
                      ),
                      SizedBox(height: 8),
                      Text(
                        'Stay updated with the latest notifications',
                        style: TextStyle(
                          fontSize: 18,
                          color: Colors.green[100],
                        ),
                      ),
                    ],
                  ),
                ),

                // Notifications List
                Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: notifications.isEmpty
                      ? Center(
                          child: Text(
                            'No notifications available',
                            style: TextStyle(
                              fontSize: 16,
                              color: Colors.grey[600],
                            ),
                          ),
                        )
                      : ListView.builder(
                          shrinkWrap: true,
                          physics: NeverScrollableScrollPhysics(),
                          itemCount: notifications.length,
                          itemBuilder: (context, index) {
                            final notification = notifications[index];
                            return Container(
                              margin: EdgeInsets.only(bottom: 8.0),
                              padding: EdgeInsets.all(12.0),
                              decoration: BoxDecoration(
                                color: Colors.grey[50],
                                border: Border.all(color: Colors.grey[200]!),
                                borderRadius: BorderRadius.circular(8.0),
                              ),
                              child: Row(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  // Placeholder for the absent image
                                  SizedBox(
                                    width: 48,
                                    height: 48,
                                    child: CircleAvatar(
                                      backgroundColor: Colors.grey[300],
                                    ),
                                  ),
                                  SizedBox(width: 16),
                                  Expanded(
                                    child: Column(
                                      crossAxisAlignment: CrossAxisAlignment.start,
                                      children: [
                                        Text(
                                          notification['title']!,
                                          style: TextStyle(
                                            fontSize: 18,
                                            fontWeight: FontWeight.bold,
                                            color: Colors.grey[800],
                                          ),
                                        ),
                                        SizedBox(height: 4),
                                        Text(
                                          notification['message']!,
                                          style: TextStyle(
                                            fontSize: 16,
                                            color: Colors.grey[600],
                                          ),
                                        ),
                                        SizedBox(height: 8),
                                        Text(
                                          notification['date']!,
                                          style: TextStyle(
                                            fontSize: 14,
                                            color: Colors.grey[500],
                                          ),
                                        ),
                                      ],
                                    ),
                                  ),
                                ],
                              ),
                            );
                          },
                        ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
