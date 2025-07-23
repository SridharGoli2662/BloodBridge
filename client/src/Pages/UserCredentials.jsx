import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

export default function UserCredentials() {
  return (
    <>
      <Navbar />
      <div className="bg-[#FDDAD4] min-h-screen flex items-center justify-center p-8 mt-3">
        <div className="max-w-4xl w-full">
          {/* Header Section */}
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold text-red-800 mb-4">
              BloodBridge
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Connecting donors with those in need
            </p>
          </div>

          {/* Action Buttons - moved here */}
          <div className="text-center space-x-4 mb-12">
            <Link
              to="/login"
              className="bg-[#EC2420] text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold text-lg shadow-md hover:shadow-lg"
            >
              Login to Donate
            </Link>
            <Link
              to="/signup"
              className="bg-[#EC2420] text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold text-lg shadow-md hover:shadow-lg"
            >
              Sign Up Now
            </Link>
          </div>

          {/* Blood Donation Information */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-red-800 mb-6 text-center">
              Why Blood Donation Matters
            </h2>
            {/* ... existing code ... */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3">
                  📊 Impact Statistics
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• One donation can save up to 3 lives</li>
                  <li>• Every 2 seconds, someone needs blood</li>
                  <li>• Only 3% of eligible people donate blood</li>
                  <li>• Blood cannot be manufactured - only donated</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3">
                  💪 Health Benefits
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Reduces risk of heart disease</li>
                  <li>• Burns calories (650 per donation)</li>
                  <li>• Free health screening included</li>
                  <li>• Stimulates blood cell production</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-red-800 mb-3">
                🎯 Who Can Donate?
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-red-700">Requirements:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Age 16-65 years old</li>
                    <li>• Weight at least 110 lbs</li>
                    <li>• In good general health</li>
                    <li>• No recent tattoos/piercings</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-700">What to Bring:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Valid photo ID</li>
                    <li>• List of medications</li>
                    <li>• Eat a good meal beforehand</li>
                    <li>• Stay hydrated</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-red-800 mb-4">
                Ready to Make a Difference?
              </h3>
              <p className="text-gray-600 mb-6">
                Join thousands of donors who are saving lives every day. Your
                donation could be the difference between life and death for
                someone in need.
              </p>
            </div>
          </div>

          {/* Footer Info */}
          <div className="text-center mt-8 text-gray-600">
            <p className="text-sm">
              Have questions? Contact us at support@bloodbridge.com
            </p>
            <p className="text-xs mt-2">
              24/7 Emergency Hotline: 1-800-BLOOD-HELP
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
