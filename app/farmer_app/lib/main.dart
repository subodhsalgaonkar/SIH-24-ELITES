import 'package:farmer_app/bussiness_signup.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'buyer_profile.dart';
import 'buyerpov.dart';
import 'farmerpov.dart';
import 'marketplace.dart';
import 'pages/seller_dashboard.dart';
import 'product_detail_page.dart';
import 'farmer_profile_page.dart';
import 'navbar_farmer_wrapper.dart';
import 'navbar_buyer_wrapper.dart';
import 'dashboard.dart';
import 'contract_details.dart';
import 'contract_form.dart';
import 'role_selection.dart';
import 'farmer_signup.dart';
import 'notifications.dart';
import 'notificationsf.dart';


void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  final GoRouter _router = GoRouter(
    routes: [
      // Routes that use NavbarBuyerWrapper
      GoRoute(
        path: '/marketplace',
        builder: (context, state) => NavbarBuyerWrapper(
          child: Marketplace(),
        ),
      ),
      GoRoute(
        path: '/buyerprofilebuyerpov',
        builder: (context, state) => NavbarBuyerWrapper(
          child: BuyerProfileBuyerPov(),
        ),
      ),
      GoRoute(
        path: '/crop/:id',
        builder: (context, state) => NavbarBuyerWrapper(
          child: ProductDetailPage(id: state.pathParameters['id']!),
        ),
      ),
      GoRoute(
        path: '/farmer/:farmerName',
        builder: (context, state) => NavbarBuyerWrapper(
          child: FarmerProfilePage(
              farmerName: state.pathParameters['farmerName']!),
        ),
      ),
      GoRoute(
        path: '/notifications',
        builder: (context, state) => NavbarBuyerWrapper(
          child: Notifications(),
        ),
      ),
      GoRoute(
        path: '/buyerpov', // Route to BuyerPOV
        builder: (context, state) => NavbarBuyerWrapper(
          child: BuyerProfileBuyerPov(),
        ),
      ),

      // Routes that use NavbarFarmerWrapper
      GoRoute(
        path: '/',
        builder: (context, state) => NavbarFarmerWrapper(
          child: RoleSelection(),
        ),
      ),
      GoRoute(
        path: '/farmer-signup',
        builder: (context, state) => NavbarFarmerWrapper(
          child: FarmerSignup(),
        ),
      ),
      GoRoute(
        path: '/business-signup',
        builder: (context, state) => NavbarFarmerWrapper(
          child: BusinessSignup(),
        ),
      ),
      GoRoute(
        path: '/seller-dashboard',
        builder: (context, state) => NavbarFarmerWrapper(
          child: SellerDashboard(),
        ),
      ),
      GoRoute(
        path: '/create-contract',
        builder: (context, state) => NavbarFarmerWrapper(
          child: ContractForm(),
        ),
      ),
      GoRoute(
        path: '/contract/:id',
        builder: (context, state) => NavbarFarmerWrapper(
          child: ContractDetails(id: state.pathParameters['id']!, contract: {}),
        ),
      ),
      GoRoute(
        path: '/farmersppfarmerpov',
        builder: (context, state) => NavbarFarmerWrapper(
          child: FarmersPPFarmerPOV(),
        ),
      ),
      GoRoute(
        path: '/notificationsf',
        builder: (context, state) => NavbarFarmerWrapper(
          child: NotificationsF(),
        ),
      ),
      // Add any other routes if needed
    ],
  );

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      debugShowCheckedModeBanner: false,
      routerConfig: _router,
      title: 'Farmer Connect',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        pageTransitionsTheme: PageTransitionsTheme(
          builders: {
            TargetPlatform.iOS:
                CupertinoPageTransitionsBuilder(), 
          },
        ),
      ),
    );
  }
}
