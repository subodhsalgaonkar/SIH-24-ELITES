import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class ProductDetailPage extends StatefulWidget {
  final String id; // Expecting the ID from the route parameter

  ProductDetailPage({required this.id});

  @override
  _ProductDetailPageState createState() => _ProductDetailPageState();
}

class _ProductDetailPageState extends State<ProductDetailPage> {
  bool _isModalOpen = false;

  final List<Map<String, dynamic>> crops = [
    {
      'id': 1,
      'image':
          'https://propagationplace.co.uk/pp/wp-content/uploads/Tomato-Alicante-1-1000x1000.jpg',
      'name': 'Tomatoes',
      'farmer': 'Rajesh Kumar',
      'quantity': '120 kg',
      'location': 'Mumbai',
      'rating': 4.5,
    },
    {
      'id': 2,
      'image':
          'https://cdn.britannica.com/36/167236-050-BF90337E/Ears-corn.jpg',
      'name': 'Corn',
      'farmer': 'Anil Verma',
      'quantity': '90 kg',
      'location': 'Delhi',
      'rating': 4.8,
    },
    // Other crops...
  ];

  Map<String, dynamic>? _selectedCrop;

  @override
  void initState() {
    super.initState();
    final int id = int.tryParse(widget.id) ?? -1; // Parse ID from the widget
    _selectedCrop = crops.firstWhere((crop) => crop['id'] == id,
        orElse: () => {
              'id': -1,
              'name': 'Default Crop',
              'image': '',
              'farmer': '',
              'quantity': '',
              'location': '',
              'rating': 0.0,
            } // Provide a default crop map
        );
  }

  void _handleStartNegotiation() {
    setState(() {
      _isModalOpen = true;
    });
  }

  void _handleCloseModal() {
    setState(() {
      _isModalOpen = false;
    });
  }

  void _handleModalSubmit() {
    // Handle form submission (e.g., send a message to the server)
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text('Negotiation request sent!')),
    );
    _handleCloseModal();
  }

  @override
  Widget build(BuildContext context) {
    if (_selectedCrop == null || _selectedCrop!['id'] == -1) {
      return Scaffold(
        appBar: AppBar(title: Text('Product Not Found')),
        body: Center(child: Text('Crop not found!')),
      );
    }

    final crop = _selectedCrop!;
    final otherProducts = crops
        .where((c) => c['farmer'] == crop['farmer'] && c['id'] != crop['id'])
        .toList();

    return Scaffold(
      backgroundColor: Color(0xFFE6E7DC),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Product Container
            Card(
              elevation: 4,
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(12.0),
              ),
              child: Padding(
                padding: const EdgeInsets.all(16.0),
                child: Row(
                  children: [
                    // Product Image
                    Container(
                      margin: EdgeInsets.only(right: 16.0),
                      child: ClipOval(
                        child: Image.network(
                          crop['image'],
                          width: 120,
                          height: 120,
                          fit: BoxFit.cover,
                        ),
                      ),
                    ),
                    // Product Details
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            crop['name'],
                            style: TextStyle(
                                fontSize: 24, fontWeight: FontWeight.bold),
                          ),
                          SizedBox(height: 8),
                          Text(
                            'Item Description',
                            style: TextStyle(
                                fontSize: 18, fontWeight: FontWeight.bold),
                          ),
                          SizedBox(height: 8),
                          Text(
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec dui vitae arcu pharetra dignissim.',
                            style: TextStyle(fontSize: 16),
                          ),
                          SizedBox(height: 8),
                          Text(
                            'Producer: ${crop['farmer']}',
                            style: TextStyle(
                                fontSize: 16, fontWeight: FontWeight.bold),
                          ),
                          Text(
                            'Location: ${crop['location']}',
                            style: TextStyle(fontSize: 16),
                          ),
                          Text(
                            'Max Qty: ${crop['quantity']}',
                            style: TextStyle(fontSize: 16),
                          ),
                          Text(
                            'Farmer Rating: ${crop['rating']} ⭐',
                            style: TextStyle(fontSize: 16),
                          ),
                        ],
                      ),
                    ),
                    // Start Negotiation Button
                    SizedBox(width: 16),
                    ElevatedButton(
                      onPressed: _handleStartNegotiation,
                      child: Text('Start Negotiation'),
                      style: ElevatedButton.styleFrom(
                        foregroundColor: Colors.white,
                        backgroundColor: Colors.orange[500],
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(8.0),
                        ),
                        padding:
                            EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                      ),
                    ),
                  ],
                ),
              ),
            ),
            SizedBox(height: 16),
            // Explore Other Products Section
            Card(
              elevation: 4,
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(12.0),
              ),
              child: Padding(
                padding: const EdgeInsets.all(16.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'Explore Other Products from Producer:',
                      style:
                          TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                    ),
                    SizedBox(height: 8),
                    Wrap(
                      spacing: 8,
                      runSpacing: 8,
                      children: otherProducts.map((product) {
                        return GestureDetector(
                          onTap: () {
                            Navigator.pushNamed(
                                context, '/crop/${product['id']}');
                          },
                          child: ClipOval(
                            child: Image.network(
                              product['image'],
                              width: 60,
                              height: 60,
                              fit: BoxFit.cover,
                            ),
                          ),
                        );
                      }).toList(),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
      floatingActionButton: _isModalOpen
          ? null
          : FloatingActionButton(
              onPressed: _handleStartNegotiation,
              child: Icon(Icons.chat),
              backgroundColor: Colors.orange[500],
            ),
    );
  }

  Widget _buildModal(BuildContext context) {
    return Positioned.fill(
      child: Align(
        alignment: Alignment.center,
        child: Container(
          color: Colors.black54,
          child: Center(
            child: Container(
              padding: const EdgeInsets.all(16.0),
              margin: const EdgeInsets.symmetric(horizontal: 32.0),
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(8.0),
                boxShadow: [BoxShadow(blurRadius: 10, color: Colors.black26)],
              ),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Text(
                    'Start Negotiation',
                    style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
                  ),
                  SizedBox(height: 16),
                  TextFormField(
                    decoration: InputDecoration(
                      labelText: 'Message',
                      border: OutlineInputBorder(),
                      contentPadding: EdgeInsets.all(8.0),
                    ),
                    maxLines: 4,
                  ),
                  SizedBox(height: 16),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.end,
                    children: [
                      TextButton(
                        onPressed: _handleCloseModal,
                        child: Text('Cancel'),
                        style: TextButton.styleFrom(
                            foregroundColor: Colors.grey[500]),
                      ),
                      SizedBox(width: 8),
                      ElevatedButton(
                        onPressed: _handleModalSubmit,
                        child: Text('Submit'),
                        style: ElevatedButton.styleFrom(
                          foregroundColor: Colors.white,
                          backgroundColor: Colors.orange[500],
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
