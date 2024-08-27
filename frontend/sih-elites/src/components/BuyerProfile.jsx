import React from "react";
import bg from "../Images/BuyerProfile.jpg";
import tomato from "../Images/Tomato.jpg";
import cucumber from "../Images/Cucumber.jpg";
import leafygreens from "../Images/leafygreens.jpg";
const BuyerProfile = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative bg-blue-500 p-8">
          <div className="absolute left-14 top-1/2 transform -translate-y-1/2">
            <img
              src={bg}
              alt="Profile"
              className="w-48 h-48 rounded-full border-4 border-white"
            />
          </div>

          <div className="text-center mt-24">
            <h1 className="text-3xl font-extrabold text-white">John Doe</h1>
            <p className="text-lg text-blue-200">Business Type: Wholesaler</p>
            <p className="text-lg text-blue-200">Company: Green Grow Ltd.</p>
            <p className="text-lg text-blue-200">Location: Springfield, IL</p>
            <p className="text-lg text-blue-200">
              Contact Number: +123 456 7890
            </p>
            <p className="text-lg text-blue-200">
              Email: john.doe@greengrow.com
            </p>
            <p className="text-lg text-blue-200">
              Website:{" "}
              <a href="https://www.greengrow.com" className="underline">
                www.greengrow.com
              </a>
            </p>
            <p className="text-lg text-blue-200">
              Business Registration Number: BRN123456
            </p>
            <p className="text-lg text-blue-200">
              Verified Status:{" "}
              <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full">
                Verified
              </span>
            </p>
          </div>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Description</h2>
          <p className="text-gray-600 leading-relaxed">
            Green Grow Ltd. is a leading wholesaler specializing in organic
            vegetables. We are committed to providing high-quality produce to
            our clients and maintaining sustainable practices.
          </p>
        </div>
        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Preferred Products
          </h2>
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-gray-600 mb-2">Tomatoes</p>
              <img
                src={tomato}
                alt="Tomatoes"
                className="w-24 h-24 rounded-full mx-auto border-2 border-gray-300"
              />
            </div>
            <div>
              <p className="text-gray-600 mb-2">Cucumbers</p>
              <img
                src={cucumber}
                alt="Cucumbers"
                className="w-24 h-24 rounded-full mx-auto border-2 border-gray-300"
              />
            </div>
            <div>
              <p className="text-gray-600 mb-2">Leafy Greens</p>
              <img
                src={leafygreens}
                alt="Leafy Greens"
                className="w-24 h-24 rounded-full mx-auto border-2 border-gray-300"
              />
            </div>
          </div>
        </div>

        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Payment Terms
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Payment terms are net 30 days from the date of invoice. We accept
            payments via bank transfer and major credit cards.
          </p>
        </div>
        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Contract History
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Summary of previous contracts or transactions is available upon
            request.
          </p>
        </div>
        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Ratings and Reviews
          </h2>
          <div className="flex items-center mb-2">
            <div className="flex text-yellow-500">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill={star <= 4 ? "currentColor" : "none"}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M11.049 2.927C11.326 2.36 11.936 2 12.5 2s1.174.36 1.451.927l2.1 4.23a1 1 0 00.757.541l4.67.68c.974.141 1.36 1.322.655 2.007l-3.38 3.287a1 1 0 00-.287.887l.797 4.65c.165.964-.847 1.721-1.699 1.567l-4.17-1.9a1 1 0 00-.933 0l-4.17 1.9c-.852.154-1.865-.603-1.699-1.567l.797-4.65a1 1 0 00-.287-.887L2.29 10.673c-.705-.685-.319-1.866.655-2.007l4.67-.68a1 1 0 00.757-.541l2.1-4.23z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-600 ml-2">
              (4.0/5 based on 120 reviews)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerProfile;
