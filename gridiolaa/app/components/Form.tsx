import React from 'react';

interface FormTypes {
    name: string;
    message1: string;
    isLoading: boolean;
    onsubmit: (event: React.FormEvent) => void;
    nameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    messageChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Form = ({name, message1, onsubmit, nameChange, messageChange, isLoading}: FormTypes) => {
    return (
        <div className="flex justify-center items-center bg-gray-200">
            <div className="w-1/2 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                   💡 Share Your Advice to Improve Our Website
                </h2>
                <form className="flex flex-col" onSubmit={onsubmit}>
                    <label className="font-semibold text-gray-800 mb-2">Name</label>
                    <input 
                    placeholder='Optional'
                        type="text" 
                        className="w-full h-10 px-3 mb-4 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 transition-all" 
                        onChange={nameChange} 
                        value={name} 
                    />

                    <label className="font-semibold text-gray-800 mb-2">Message*</label>
                    <textarea 
                        className="w-full px-4 py-3 mb-4 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 resize-y transition-all" 
                        rows={5} 
                        onChange={messageChange} 
                        value={message1} 
                        required 
                    />

                    <button 
                        type="submit"
                        className="bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-transform transform hover:-translate-y-1"
                    >
                        {isLoading ? 'Loading...' : 'Submit'}
                    </button>
                </form>
            </div>
        </div>
    );
};
