import React from "react";

const ServiceCard = ({ image, name, description }) => {
    console.log(name, description)
    return (
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
            <div className="flex justify-center">
                <img
                    src={`/storage/${image}`}
                    alt={name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                />
            </div>

            <h3 className="text-xl font-semibold text-center text-brown mb-2">
                {name}
            </h3>

            <p className="text-center text-sm sm:text-base text-gray-600">
                {description}
            </p>
        </div>
    );
};

export default ServiceCard;
