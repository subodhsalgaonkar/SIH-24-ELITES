import 'package:flutter/material.dart';

class ContractDetails extends StatelessWidget {
  final String id;

  ContractDetails({required this.id, required Map<String, dynamic> contract});

  @override
  Widget build(BuildContext context) {
    // Sample contract data based on the 'id' - replace with actual data fetching
    final Map<String, String> contractData = {
      'date': '2024-08-31',
      'farmerName': 'John Doe',
      'farmerAddress': '123 Farm Road, Springfield',
      'businessName': 'Fresh Produce Ltd.',
      'businessAddress': '456 Market Street, Metropolis',
      'product': 'Tomatoes',
      'qualityStandards': 'Grade A',
      'price': '\$5 per kg',
      'deliveryLocation': '789 Warehouse Ave, Metropolis',
      'deliveryDates': '2024-09-15',
      'paymentSchedule': 'Every 30 days',
      'paymentTerms': '15 days after delivery',
    };

    // Your existing code remains here
    return Scaffold(
      appBar: AppBar(
        title: const Text('Contract Agreement'),
      ),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const Center(
                child: Text(
                  'Contract Agreement',
                  style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
                ),
              ),
              const SizedBox(height: 20),
              Text('This Contract is made on ${contractData['date']}.'),
              const SizedBox(height: 10),
              const Text('BETWEEN:'),
              const SizedBox(height: 10),
              Text('[Farmer\'s Name]: ${contractData['farmerName']}'),
              Text('Address: ${contractData['farmerAddress']}'),
              const Text('(Hereinafter referred to as "Farmer")'),
              const SizedBox(height: 10),
              const Text('AND'),
              const SizedBox(height: 10),
              Text('[Business Name]: ${contractData['businessName']}'),
              Text('Address: ${contractData['businessAddress']}'),
              const Text('(Hereinafter referred to as "Buyer")'),
              const Divider(height: 20, thickness: 2),
              _buildSection('1. PRODUCT SPECIFICATIONS',
                  'The Farmer agrees to produce and sell the following products to the Buyer:\nProduct: ${contractData['product']}\nQuality Standards: ${contractData['qualityStandards']}'),
              _buildSection('2. PRICING STRUCTURE',
                  'The Buyer agrees to purchase the products at a fixed price of ${contractData['price']} per unit for the duration of this contract.'),
              _buildSection('3. DELIVERY TERMS',
                  'The Farmer shall deliver the products to ${contractData['deliveryLocation']} on or before ${contractData['deliveryDates']}.'),
              _buildSection('4. PAYMENT TERMS',
                  'Payments will be made as follows: ${contractData['paymentSchedule']}. All payments will be made within ${contractData['paymentTerms']} days of delivery.'),
              _buildSection('5. OBLIGATIONS OF THE FARMER',
                  'The Farmer agrees to adhere to best agricultural practices, including environmentally sustainable methods.'),
              _buildSection('6. OBLIGATIONS OF THE BUYER',
                  'The Buyer agrees to make timely payments as outlined in Section 4.'),
              _buildSection('7. RISK MANAGEMENT',
                  'Both parties acknowledge the inherent risks in agricultural production.'),
              _buildSection('8. ACT OF GOD CLAUSE',
                  'Neither party shall be held liable for failure to perform their obligations under this contract due to an Act of God.'),
              _buildSection('9. DURATION OF CONTRACT',
                  'This contract shall commence on ${contractData['date']} and shall remain in effect until the agreed end date.'),
              _buildSection('10. TERMINATION',
                  'Either party may terminate this contract by providing 30 days written notice to the other party.'),
              _buildSection('11. DISPUTE RESOLUTION',
                  'In the event of a dispute, the parties agree to resolve the matter through arbitration.'),
              _buildSection('12. GOVERNING LAW',
                  'This contract shall be governed by the laws of India.'),
              const SizedBox(height: 20),
              const Text('IN WITNESS WHEREOF'),
              const Text(
                  'The parties hereto have executed this Contract as of the day and year first above written.'),
              const SizedBox(height: 40),
              Text(
                  '[Farmer\'s Signature] __________________________________________'),
              Text(
                  '[Business Representative\'s Signature] ___________________________'),
              Text('Date: ${contractData['date']}'),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildSection(String title, String content) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(title, style: const TextStyle(fontWeight: FontWeight.bold)),
        const SizedBox(height: 10),
        Text(content),
        const Divider(height: 20, thickness: 2),
      ],
    );
  }
}
