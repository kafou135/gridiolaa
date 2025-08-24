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
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4">
  <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
    {/* Heading */}
    <h2 className="text-3xl font-extrabold text-gray-900 mb-2 text-center">
      💡 Share Your Advice
    </h2>
    <p className="text-gray-600 mb-6 text-center text-sm">
      Help us make our website even better by leaving your feedback below.
    </p>

    {/* Form */}
    <form className="flex flex-col space-y-5" onSubmit={onsubmit}>
      {/* Name */}
      <div>
        <label className="block text-sm font-semibold text-gray-800 mb-1">Name</label>
        <input
          placeholder="Optional"
          type="text"
          className="w-full h-11 px-4 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 transition-all"
          onChange={nameChange}
          value={name}
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-semibold text-gray-800 mb-1">Message*</label>
        <textarea
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 resize-y transition-all"
          rows={5}
          onChange={messageChange}
          value={message1}
          required
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        className="w-full bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 text-white font-semibold py-3 rounded-xl shadow-md transition-transform transform hover:-translate-y-1 duration-200"
      >
        {isLoading ? "⏳ Sending..." : "🚀 Submit Feedback"}
      </button>
    </form>
  </div>
</div>

    );
};
