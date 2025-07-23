import React from "react";
import { Link } from "react-router-dom";
import Login from "../Pages/Login";

export default function About() {
  return (
    <section id="About" className="bg-white py-16 mt-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#EC2420] mb-6">
            About BloodBridge
          </h1>
          <p className="text-xl text-[#EC2420] max-w-3xl mx-auto leading-relaxed">
            Connecting donors with those in need. We're dedicated to building a
            stronger, healthier community through blood donation and emergency
            response services.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-[#FDDAD4] rounded-lg p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-[#EC2420] rounded-full flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-[#EC2420]">Our Mission</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To ensure a safe and reliable blood supply for all patients in
              need by connecting generous donors with healthcare facilities and
              emergency services. We strive to make blood donation accessible,
              convenient, and impactful for our community.
            </p>
          </div>

          <div className="bg-[#FDDAD4] rounded-lg p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-[#EC2420] rounded-full flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-[#EC2420]">Our Vision</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To create a world where no patient dies due to lack of blood
              availability. We envision a future where blood donation becomes a
              regular part of community health, with seamless coordination
              between donors, hospitals, and emergency services.
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-[#FDDAD4] rounded-lg p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-[#EC2420] text-center mb-12">
            Our Impact in Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#EC2420] mb-2">
                50,000+
              </div>
              <p className="text-gray-600">Lives Saved</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#EC2420] mb-2">
                25,000+
              </div>
              <p className="text-gray-600">Donors Registered</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#EC2420] mb-2">
                100+
              </div>
              <p className="text-gray-600">Partner Hospitals</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#EC2420] mb-2">
                24/7
              </div>
              <p className="text-gray-600">Emergency Support</p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#EC2420] text-center mb-12">
            Why Choose BloodBridge?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#EC2420] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#EC2420] mb-3">
                Quick Response
              </h3>
              <p className="text-[#EC2420] text-sm">
                Emergency blood requests are processed within minutes, ensuring
                timely delivery to hospitals and patients in critical need.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#EC2420] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#EC2420] mb-3">
                Safe & Secure
              </h3>
              <p className="text-[#EC2420] text-sm">
                All donations are thoroughly screened and tested following
                strict safety protocols to ensure the highest quality blood
                supply.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#EC2420] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#EC2420] mb-3">
                Community Driven
              </h3>
              <p className="text-[#EC2420] text-sm">
                Built by the community, for the community. We work closely with
                local organizations to create a sustainable blood donation
                ecosystem.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-[#FDDAD4] rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-[#EC2420] text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-[#EC2420] rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#EC2420] mb-1">
                Dr. Sarah Johnson
              </h3>
              <p className="text-gray-600 text-sm">Medical Director</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-[#EC2420] rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#EC2420] mb-1">
                Michael Chen
              </h3>
              <p className="text-gray-600 text-sm">Operations Manager</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-[#EC2420] rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#EC2420] mb-1">
                Emily Rodriguez
              </h3>
              <p className="text-gray-600 text-sm">Donor Coordinator</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-[#EC2420] rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#EC2420] mb-1">
                David Thompson
              </h3>
              <p className="text-gray-600 text-sm">Emergency Response</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-[#EC2420] mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-[#EC2420] mb-8 max-w-2xl mx-auto">
            Join thousands of donors who are saving lives every day. Your
            donation can make a real impact in someone's life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="bg-[#EC2420] text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold text-lg shadow-md hover:shadow-lg"
            >
              Become a Donar
            </Link>
            {/* <Link to={<Login></Login>}></Link> */}
            <button className="px-8 py-3 border-2 border-[#EC2420] text-[#EC2420] font-semibold rounded-lg hover:bg-[#EC2420] hover:text-white transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
