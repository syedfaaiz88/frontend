import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Button = ({ children, Icon, isLoading = false, ...props }) => {
    return (
        <button
            className={`w-full border border-gray-700 font-semibold py-2
               transition duration-300 flex items-center justify-center
                ${isLoading ? 'cursor-not-allowed opacity-75' : ''}`}
            disabled={isLoading}
            {...props}
        >
            {isLoading ? (
                <AiOutlineLoading3Quarters className="animate-spin mr-2 text-2xl" />
            ) : (
                <span className="flex items-center">
                    <span className="text-base">{children}</span>
                    {Icon && (
                        <Icon
                            className="text-base mr-2"
                        />
                    )}
                </span>
            )}
        </button>
    );
};

export default Button;
