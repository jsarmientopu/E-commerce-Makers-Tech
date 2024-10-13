import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 h-1/4">
      <div className="container mx-auto px-52 flex justify-between h-full">
        <div>
          <h4 className="font-bold text-purple-500">Our Store</h4>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-purple-500">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="/facebook" className="hover:text-gray-400">
              Facebook
            </a>
            <a href="/instagram" className="hover:text-gray-400">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
