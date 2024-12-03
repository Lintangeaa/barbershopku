import React from "react";
import { FaCut, FaPaintBrush, FaRegSmile, FaHeadset } from "react-icons/fa";

const ServiceCard = ({ icon, title, description }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
            <div className="flex justify-center">
                <div className="text-5xl text-center text-brown mb-4">
                    {icon}
                </div>
            </div>

            <h3 className="text-xl font-semibold text-center text-brown mb-2">
                {title}
            </h3>

            <p className="text-center text-sm sm:text-base text-gray-600">
                {description}
            </p>
        </div>
    );
};

export default ServiceCard;
