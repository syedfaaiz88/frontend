import React from 'react';

const InputField = ({ label, error, Icon, type = 'text', options = [], ...props }) => {
    return (
        <div className="mb-4">
            <label htmlFor={props.name} className="block text-gray-900 font-semibold mb-2">
                {label}
            </label>
            <div className={`flex items-center border ${error ? 'border-red-500' : 'border-gray-300'} focus-within:border-black`}>
                {Icon && (
                    <div className="px-3 text-gray-500">
                        {Icon}
                    </div>
                )}
                {type === 'textarea' ? (
                    <textarea
                        id={props.name}
                        rows={1}
                        className="w-full px-1 py-2 border-0 focus:ring-0 focus:outline-none"
                        {...props}
                    />
                ) : type === 'select' ? (
                    <select
                        id={props.name}
                        className="w-full px-1 py-2 border-0 focus:ring-0 focus:outline-none"
                        {...props}
                    >
                        <option value="" disabled>Select {label}</option>
                        {options.map((option, index) => (
                            <option key={index} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                ) : (
                    <input
                        id={props.name}
                        type={type}
                        className="w-full px-1 py-2 border-0 focus:ring-0 focus:outline-none"
                        {...props}
                    />
                )}
            </div>
            {error && (
                <p className="text-red-500 text-sm mt-2">
                    {error}
                </p>
            )}
        </div>
    );
};

export default InputField;
