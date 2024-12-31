"use client";

import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 p-4 bg-gray-100">
      <h2 className="text-lg font-bold">Help Topics</h2>
      <ul className="space-y-2">
        <li className="cursor-pointer">Payment Options</li>
        <li className="cursor-pointer">Shipping Information</li>
        <li className="cursor-pointer">Returns & Exchanges</li>
        <li className="cursor-pointer">Account Management</li>
      </ul>
    </div>
  );
};

export default Sidebar;
