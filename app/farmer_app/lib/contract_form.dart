import 'package:flutter/material.dart';

class ContractForm extends StatefulWidget {
  @override
  _ContractFormState createState() => _ContractFormState();
}

class _ContractFormState extends State<ContractForm> {
  final _formKey = GlobalKey<FormState>();
  final Map<String, String> formData = {
    'date': '',
    'farmerName': '',
    'farmerAddress': '',
    'buyerName': '',
    'buyerAddress': '',
    'product': '',
    'qualityStandards': '',
    'price': '',
    'deliveryLocation': '',
    'deliveryDates': '',
    'paymentSchedule': '',
    'paymentDays': '',
  };

  void _handleSubmit() {
    if (_formKey.currentState!.validate()) {
      _formKey.currentState!.save();
      print(formData);
      // Submit formData to backend
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Create Contract'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Form(
          key: _formKey,
          child: Column(
            children: [
              _buildTextField('Date', 'date', (value) => formData['date'] = value!),
              _buildTextField('Farmer\'s Name', 'farmerName', (value) => formData['farmerName'] = value!),
              _buildTextField('Farmer\'s Address', 'farmerAddress', (value) => formData['farmerAddress'] = value!),
              _buildTextField('Buyer\'s Name', 'buyerName', (value) => formData['buyerName'] = value!),
              _buildTextField('Buyer\'s Address', 'buyerAddress', (value) => formData['buyerAddress'] = value!),
              _buildTextField('Product', 'product', (value) => formData['product'] = value!),
              _buildTextField('Quality Standards', 'qualityStandards', (value) => formData['qualityStandards'] = value!),
              _buildTextField('Price per Unit', 'price', (value) => formData['price'] = value!),
              _buildTextField('Delivery Location', 'deliveryLocation', (value) => formData['deliveryLocation'] = value!),
              _buildTextField('Delivery Dates', 'deliveryDates', (value) => formData['deliveryDates'] = value!),
              _buildTextField('Payment Schedule', 'paymentSchedule', (value) => formData['paymentSchedule'] = value!),
              _buildTextField('Payment Days', 'paymentDays', (value) => formData['paymentDays'] = value!),
              const SizedBox(height: 20),
              ElevatedButton(
                onPressed: _handleSubmit,
                child: const Text('Submit'),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildTextField(String label, String field, FormFieldSetter<String> onSaved) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8.0),
      child: TextFormField(
        decoration: InputDecoration(
          labelText: label,
          border: OutlineInputBorder(),
        ),
        validator: (value) {
          if (value == null || value.isEmpty) {
            return 'Please enter $label';
          }
          return null;
        },
        onSaved: onSaved,
      ),
    );
  }
}
