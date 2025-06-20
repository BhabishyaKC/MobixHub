'use client'
import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle, HelpCircle, Link } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ml-10">
          {/* About Us Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">About Us</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              We are dedicated to providing exceptional services and building lasting relationships with our customers. 
              Our commitment to quality and innovation drives everything we do.
            </p>
            <div className="flex space-x-4 mt-4">
              <div className="flex space-x-4 mt-4">
        
              </div>

            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Email</p>
                  <a href="mailto:info@mobixhub.com" className="text-white hover:text-blue-400 transition-colors">
                    info@mobixhub.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Phone</p>
                  <a href="tel:+977-9709094344" className="text-white hover:text-blue-400 transition-colors">
                    +977-9709094344
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Address</p>
                  <p className="text-white">Newroad<br />Kathmandu,Nepal</p>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Support Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Customer Support</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-green-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Support Hours</p>
                  <p className="text-white">Sun-Fri: 10AM-8PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Live Chat</p>
                  <a href="#" className="text-white hover:text-green-400 transition-colors">
                    Start Chat
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <HelpCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Help Center</p>
                  <a href="#" className="text-white hover:text-green-400 transition-colors">
                    Visit FAQ
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Home
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm">
               Contact
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm">
                About Us
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm">
               Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t-2 border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Mobix Hub. All rights reserved.
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
