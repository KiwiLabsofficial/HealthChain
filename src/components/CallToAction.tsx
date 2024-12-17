import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";

export function CallToAction() {
    const navigate = useNavigate();
  
    const handleLaunchClick = () => {
      navigate("/app"); // Navigate to /app
    };
  return (
    <section className="py-20 bg-gradient-to-r from-blue-950 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Ready to Take Control of Your Health Data?
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Join thousands of patients and healthcare providers already using our platform
        </p>
        <button  onClick={handleLaunchClick} className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
          Launch DApp
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
        </button>
      </div>
    </section>
  );
}