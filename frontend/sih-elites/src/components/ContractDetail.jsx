import React, { useEffect, useState } from 'react';
import { gapi } from 'gapi-script';

const ContractDetails = () => {
  const [contractData, setContractData] = useState({});

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        apiKey: 'YOUR_API_KEY',
        clientId: 'YOUR_CLIENT_ID',
        discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
        scope: "https://www.googleapis.com/auth/spreadsheets.readonly",
      }).then(() => {
        return gapi.client.sheets.spreadsheets.values.get({
          spreadsheetId: 'YOUR_SPREADSHEET_ID',
          range: 'Sheet1!A2:Z',
        });
      }).then((response) => {
        const data = response.result.values[0];
        setContractData({
          date: data[0],
          farmerName: data[1],
          farmerAddress: data[2],
          businessName: data[3],
          businessAddress: data[4],
          product: data[5],
          qualityStandards: data[6],
          price: data[7],
          deliveryLocation: data[8],
          deliveryDates: data[9],
          paymentSchedule: data[10],
          paymentTerms: data[11],
          // Obligations and other sections will be defined within the component itself
        });
      });
    };
    gapi.load('client:auth2', initClient);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 m-4 max-w-3xl w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Contract Agreement</h1>
        <p className="text-gray-700 mb-4">This Contract is made on <span className="text-blue-600 font-semibold">{contractData.date}</span></p>
        <p className="text-gray-700 mb-4"><strong>BETWEEN:</strong></p>
        <p className="text-gray-700 mb-4">[Farmer's Name] <span className="text-blue-600 font-semibold">{contractData.farmerName}</span></p>
        <p className="text-gray-700 mb-4">Address: <span className="text-blue-600 font-semibold">{contractData.farmerAddress}</span></p>
        <p className="text-gray-700 mb-4">(Hereinafter referred to as "Farmer")</p>
        <p className="text-gray-700 mb-4"><strong>AND</strong></p>
        <p className="text-gray-700 mb-4">[Business Name] <span className="text-blue-600 font-semibold">{contractData.businessName}</span></p>
        <p className="text-gray-700 mb-4">Address: <span className="text-blue-600 font-semibold">{contractData.businessAddress}</span></p>
        <p className="text-gray-700 mb-4">(Hereinafter referred to as "Buyer")</p>
        <hr className="my-4" />
        
        {/* 1. PRODUCT SPECIFICATIONS */}
        <p className="text-gray-700 mb-4"><strong>1. PRODUCT SPECIFICATIONS</strong></p>
        <p className="text-gray-700 mb-4">The Farmer agrees to produce and sell the following products to the Buyer:</p>
        <p className="text-gray-700 mb-4">Product: <span className="text-blue-600 font-semibold">{contractData.product}</span></p>
        <p className="text-gray-700 mb-4">Quality Standards: <span className="text-blue-600 font-semibold">{contractData.qualityStandards}</span></p>
        <hr className="my-4" />

        {/* 2. PRICING STRUCTURE */}
        <p className="text-gray-700 mb-4"><strong>2. PRICING STRUCTURE</strong></p>
        <p className="text-gray-700 mb-4">The Buyer agrees to purchase the products at a fixed price of <span className="text-blue-600 font-semibold">{contractData.price}</span> per unit for the duration of this contract. This price will be reviewed and adjusted at the beginning of each season based on market conditions and inflation.</p>
        <hr className="my-4" />

        {/* 3. DELIVERY TERMS */}
        <p className="text-gray-700 mb-4"><strong>3. DELIVERY TERMS</strong></p>
        <p className="text-gray-700 mb-4">The Farmer shall deliver the products to <span className="text-blue-600 font-semibold">{contractData.deliveryLocation}</span> on or before <span className="text-blue-600 font-semibold">{contractData.deliveryDates}</span>. The Buyer is responsible for collecting the products from the Farmer's location if agreed upon.</p>
        <hr className="my-4" />

        {/* 4. PAYMENT TERMS */}
        <p className="text-gray-700 mb-4"><strong>4. PAYMENT TERMS</strong></p>
        <p className="text-gray-700 mb-4">Payments will be made as follows: <span className="text-blue-600 font-semibold">{contractData.paymentSchedule}</span>. All payments will be made in cash or bank transfer within <span className="text-blue-600 font-semibold">{contractData.paymentTerms}</span> days of delivery.</p>
        <hr className="my-4" />

        {/* 5. OBLIGATIONS OF THE FARMER */}
        <p className="text-gray-700 mb-4"><strong>5. OBLIGATIONS OF THE FARMER</strong></p>
        <p className="text-gray-700 mb-4">The Farmer agrees to adhere to best agricultural practices, including the use of environmentally sustainable methods, regular maintenance of crops, and compliance with local agricultural regulations. The Farmer will provide the Buyer with regular updates on crop status and any issues that may arise.</p>
        <hr className="my-4" />

        {/* 6. OBLIGATIONS OF THE BUYER */}
        <p className="text-gray-700 mb-4"><strong>6. OBLIGATIONS OF THE BUYER</strong></p>
        <p className="text-gray-700 mb-4">The Buyer agrees to make timely payments as outlined in Section 4.</p>
        <hr className="my-4" />

        {/* 7. RISK MANAGEMENT */}
        <p className="text-gray-700 mb-4"><strong>7. RISK MANAGEMENT</strong></p>
        <p className="text-gray-700 mb-4">Both parties acknowledge the inherent risks in agricultural production. The Buyer agrees to assist the Farmer in obtaining crop insurance to mitigate potential losses due to natural disasters, market fluctuations, or other unforeseen events.</p>
        <hr className="my-4" />

        {/* 8. ACT OF GOD CLAUSE */}
        <p className="text-gray-700 mb-4"><strong>8. ACT OF GOD CLAUSE</strong></p>
        <p className="text-gray-700 mb-4">Neither party shall be held liable for any failure to perform their obligations under this contract if such failure is due to an Act of God, including but not limited to natural disasters such as floods, droughts, earthquakes, or other unforeseen events that are beyond the reasonable control of the affected party.</p>
        <hr className="my-4" />

        {/* 9. DURATION OF CONTRACT */}
        <p className="text-gray-700 mb-4"><strong>9. DURATION OF CONTRACT</strong></p>
        <p className="text-gray-700 mb-4">This contract shall commence on <span className="text-blue-600 font-semibold">{contractData.date}</span> and shall remain in effect until [End Date].</p>
        <hr className="my-4" />

        {/* 10. TERMINATION */}
        <p className="text-gray-700 mb-4"><strong>10. TERMINATION</strong></p>
        <p className="text-gray-700 mb-4">Either party may terminate this contract by providing 30 days written notice to the other party. Grounds for termination may include failure to meet obligations, substantial changes in market conditions, or other reasonable grounds as agreed by both parties.</p>
        <hr className="my-4" />

        {/* 11. DISPUTE RESOLUTION */}
        <p className="text-gray-700 mb-4"><strong>11. DISPUTE RESOLUTION</strong></p>
        <p className="text-gray-700 mb-4">In the event of a dispute arising from this contract, the parties agree to resolve the matter through arbitration in accordance with the Indian Arbitration and Conciliation Act, 1996, before seeking legal recourse.</p>
        <hr className="my-4" />

        {/* 12. GOVERNING LAW */}
        <p className="text-gray-700 mb-4"><strong>12. GOVERNING LAW</strong></p>
        <p className="text-gray-700 mb-4">This contract shall be governed by and construed in accordance with the laws of India.</p>
        <hr className="my-4" />
        
        {/* Signatures */}
        <p className="text-gray-700 mb-4"><strong>IN WITNESS WHEREOF</strong></p>
        <p className="text-gray-700 mb-4">The parties hereto have executed this Contract as of the day and year first above written.</p>
        <p className="text-gray-700 mb-4">[Farmer's Signature] __________________________________________</p>
        <p className="text-gray-700 mb-4">[Business Representative's Signature] ___________________________</p>
        <p className="text-gray-700 mb-4">Date: <span className="text-blue-600 font-semibold">{contractData.date}</span></p>
      </div>
    </div>
  );
};

export default ContractDetails;
