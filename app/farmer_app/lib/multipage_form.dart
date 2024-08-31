import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';

class MultiPageForm extends StatefulWidget {
  @override
  _MultiPageFormState createState() => _MultiPageFormState();
}

class _MultiPageFormState extends State<MultiPageForm> {
  int page = 0;
  Map<String, dynamic> formData = {
    'userType': '',
    'name': '',
    'email': '',
    'mobile': '',
    'birthday': '',
    'address': '',
    'crops': '',
    'farmDetails': '',
    'farmImage': null,
  };

  final ImagePicker picker = ImagePicker(); // Initialize the picker

  void handleNext() {
    if (page == 0 && formData['userType'] == 'Farmer') {
      setState(() {
        page = 1;
      });
    } else if (page == 0 && formData['userType'] == 'BusinessOwner') {
      // Navigate to Business signup page
      Navigator.pushNamed(context, '/business-signup');
    } else if (page < 3) {
      setState(() {
        page += 1;
      });
    } else if (page == 3) {
      handleSubmit();
    }
  }

  void handlePrev() {
    if (page > 0) {
      setState(() {
        page -= 1;
      });
    }
  }

  void handleChange(String field, dynamic value) {
    setState(() {
      formData[field] = value;
    });
  }

  void handleFileChange(XFile? file) {
    setState(() {
      formData['farmImage'] = file;
    });
  }

  void handleSubmit() {
    print('Form data submitted: $formData');
    Navigator.pushNamed(context, '/'); // Redirect after submission
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Padding(
          padding: EdgeInsets.all(16.0),
          child: Container(
            width: MediaQuery.of(context).size.width * 0.8,
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(12),
              boxShadow: [
                BoxShadow(
                  color: Colors.black12,
                  blurRadius: 10,
                  spreadRadius: 5,
                )
              ],
            ),
            padding: EdgeInsets.all(24.0),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                if (page == 0) ...[
                  Text(
                    "Select Your Role",
                    style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
                  ),
                  SizedBox(height: 20),
                  ElevatedButton(
                    onPressed: () {
                      handleChange('userType', 'Farmer');
                      handleNext();
                    },
                    child: Text("Farmer"),
                    style:
                        ElevatedButton.styleFrom(backgroundColor: Colors.blue),
                  ),
                  ElevatedButton(
                    onPressed: () {
                      handleChange('userType', 'BusinessOwner');
                      handleNext();
                    },
                    child: Text("Business Owner"),
                    style:
                        ElevatedButton.styleFrom(backgroundColor: Colors.blue),
                  ),
                ],
                if (page == 1) ...[
                  Text(
                    "Farmer Details",
                    style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
                  ),
                  SizedBox(height: 20),
                  TextField(
                    onChanged: (value) => handleChange('name', value),
                    decoration: InputDecoration(labelText: 'Name'),
                  ),
                  TextField(
                    onChanged: (value) => handleChange('email', value),
                    decoration: InputDecoration(labelText: 'Email'),
                  ),
                  TextField(
                    onChanged: (value) => handleChange('mobile', value),
                    decoration: InputDecoration(labelText: 'Mobile Number'),
                  ),
                  TextField(
                    onChanged: (value) => handleChange('birthday', value),
                    decoration: InputDecoration(labelText: 'Birthday'),
                    keyboardType: TextInputType.datetime,
                  ),
                ],
                if (page == 2) ...[
                  Text(
                    "Farm Details",
                    style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
                  ),
                  SizedBox(height: 20),
                  TextField(
                    onChanged: (value) => handleChange('address', value),
                    decoration: InputDecoration(labelText: 'Farm Address'),
                  ),
                  TextField(
                    onChanged: (value) => handleChange('crops', value),
                    decoration: InputDecoration(labelText: 'Crops Grown'),
                  ),
                  TextField(
                    onChanged: (value) => handleChange('farmDetails', value),
                    decoration: InputDecoration(labelText: 'Farm Details'),
                  ),
                ],
                if (page == 3) ...[
                  Text(
                    "Upload Farm Image",
                    style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
                  ),
                  SizedBox(height: 20),
                  ElevatedButton(
                    onPressed: () async {
                      final XFile? image =
                          await picker.pickImage(source: ImageSource.gallery);
                      handleFileChange(image);
                    },
                    child: Text("Select Image"),
                    style:
                        ElevatedButton.styleFrom(backgroundColor: Colors.blue),
                  ),
                  if (formData['farmImage'] != null)
                    Text("Image selected: ${formData['farmImage'].name}"),
                ],
                SizedBox(height: 20),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    if (page > 0)
                      ElevatedButton(
                        onPressed: handlePrev,
                        child: Text("Previous"),
                        style: ElevatedButton.styleFrom(
                            backgroundColor: Colors.grey),
                      ),
                    ElevatedButton(
                      onPressed: handleNext,
                      child: Text(page == 3 ? "Submit" : "Next"),
                      style: ElevatedButton.styleFrom(
                          backgroundColor: Colors.blue),
                    ),
                  ],
                )
              ],
            ),
          ),
        ),
      ),
    );
  }
}
