import 'package:flutter/material.dart';

class FarmersPPFarmerPOV extends StatefulWidget {
  @override
  _FarmersPPFarmerPOVState createState() => _FarmersPPFarmerPOVState();
}

class _FarmersPPFarmerPOVState extends State<FarmersPPFarmerPOV> {
  bool isEditingPersonalInfo = false;
  bool isEditingCropInfo = false;

  Map<String, String> formData = {
    'name': 'John Doe',
    'contact': '+1234567890',
    'email': 'john.doe@example.com',
    'experience': '10 years',
    'personalInfo':
        'John Doe is an experienced farmer with over 10 years of experience in organic farming.',
    'farm': 'Green Valley Farm',
    'crops': 'Wheat, Corn, Tomatoes',
    'methods': 'Organic, Hydroponic',
  };

  void handleEditClick(String section) {
    setState(() {
      if (section == 'personalInfo') {
        isEditingPersonalInfo = true;
      } else if (section == 'cropInfo') {
        isEditingCropInfo = true;
      }
    });
  }

  void handleUpdateClick(String section) {
    setState(() {
      if (section == 'personalInfo') {
        isEditingPersonalInfo = false;
      } else if (section == 'cropInfo') {
        isEditingCropInfo = false;
      }
    });
  }

  void handleChange(String field, String value) {
    setState(() {
      formData[field] = value;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.lime[100],
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Card(
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(15.0),
            ),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                // Header Section
                Stack(
                  children: [
                    Container(
                      color: Colors.green,
                      padding: EdgeInsets.all(32.0),
                      child: Column(
                        children: [
                          CircleAvatar(
                            radius: 48,
                            backgroundImage: AssetImage('assets/wheatImg.jpeg'),
                          ),
                          SizedBox(height: 16),
                          isEditingPersonalInfo
                              ? TextFormField(
                                  initialValue: formData['name'],
                                  onChanged: (value) =>
                                      handleChange('name', value),
                                  decoration: InputDecoration(
                                    fillColor: Colors.grey[200],
                                    filled: true,
                                  ),
                                )
                              : Text(
                                  formData['name']!,
                                  style: TextStyle(
                                    fontSize: 24,
                                    fontWeight: FontWeight.bold,
                                    color: Colors.white,
                                  ),
                                ),
                          if (!isEditingPersonalInfo)
                            IconButton(
                              icon: Icon(Icons.edit, color: Colors.white),
                              onPressed: () => handleEditClick('personalInfo'),
                            ),
                        ],
                      ),
                    ),
                  ],
                ),
                // Personal Info Section
                Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'Personal Info',
                        style: TextStyle(
                            fontSize: 20, fontWeight: FontWeight.bold),
                      ),
                      isEditingPersonalInfo
                          ? TextFormField(
                              initialValue: formData['personalInfo'],
                              onChanged: (value) =>
                                  handleChange('personalInfo', value),
                              decoration: InputDecoration(
                                fillColor: Colors.grey[200],
                                filled: true,
                              ),
                              maxLines: 3,
                            )
                          : Text(formData['personalInfo']!),
                    ],
                  ),
                ),
                // Crop Info Section
                Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'Crop Info',
                        style: TextStyle(
                            fontSize: 20, fontWeight: FontWeight.bold),
                      ),
                      isEditingCropInfo
                          ? Column(
                              children: [
                                TextFormField(
                                  initialValue: formData['farm'],
                                  onChanged: (value) =>
                                      handleChange('farm', value),
                                  decoration: InputDecoration(
                                    fillColor: Colors.grey[200],
                                    filled: true,
                                  ),
                                ),
                                TextFormField(
                                  initialValue: formData['crops'],
                                  onChanged: (value) =>
                                      handleChange('crops', value),
                                  decoration: InputDecoration(
                                    fillColor: Colors.grey[200],
                                    filled: true,
                                  ),
                                ),
                                TextFormField(
                                  initialValue: formData['methods'],
                                  onChanged: (value) =>
                                      handleChange('methods', value),
                                  decoration: InputDecoration(
                                    fillColor: Colors.grey[200],
                                    filled: true,
                                  ),
                                ),
                                ElevatedButton(
                                  onPressed: () =>
                                      handleUpdateClick('cropInfo'),
                                  child: Text('Update'),
                                ),
                              ],
                            )
                          : Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text('Farm: ${formData['farm']}'),
                                Text('Crops Grown: ${formData['crops']}'),
                                Text('Farming Methods: ${formData['methods']}'),
                              ],
                            ),
                    ],
                  ),
                ),
                // Rating/Reviews Section
                Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'Rating/Reviews',
                        style: TextStyle(
                            fontSize: 20, fontWeight: FontWeight.bold),
                      ),
                      Text('Rating: 4.5/5'),
                      Text('Reviews:'),
                      Text('- Excellent produce quality! - Alice'),
                      Text('- Very professional and timely delivery. - Bob'),
                    ],
                  ),
                ),
                // Documents Section
                Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'Documents',
                        style: TextStyle(
                            fontSize: 20, fontWeight: FontWeight.bold),
                      ),
                      Text(
                          'Verifiable document for organic farming certification available upon request.'),
                      ElevatedButton(
                        onPressed: () {},
                        child: Text('Add Document'),
                      ),
                    ],
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
