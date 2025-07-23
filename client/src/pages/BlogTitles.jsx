import { Hash, Sparkle, Sparkles } from 'lucide-react';
import React, { useState } from 'react';

const BlogTitles = () => {
  const categories = [
    "General","Technology", "Business", "Lifestyle", "Education", "Health", "Travel", "Food", "Finance"
  ];

  const [category, setCategory] = useState(categories[0]);
  const [input, setInput] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // Logic to generate blog titles
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Left Column - Form */}
      <form
        onSubmit={onSubmitHandler}
        className="bg-white shadow-sm rounded-xl p-6 space-y-6"
      >
        <div className="flex items-center gap-3">
          <Sparkles className="text-purple-600" />
          <h3 className="text-xl font-semibold text-gray-800">
            AI Blog Titles Generator
          </h3>
        </div>

        {/* Topic Input */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Blog Topic
          </label>
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="E.g., Remote Work Productivity Tips"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Category Chips */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Category
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.map((item, index) => (
              <button
                type="button"
                onClick={() => setCategory(item)}
                key={index}
                className={`px-4 py-2 rounded-full border text-sm transition-all ${
                  category === item
                    ? 'bg-purple-50 text-purple-700 border-purple-500'
                    : 'bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-md hover:opacity-90 transition"
        >
          <Hash className="w-4 h-4" />
          Generate Titles
        </button>
      </form>

      {/* Right Column - Output */}
      <div className="bg-white shadow-sm rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <Hash className="text-purple-600" />
          <h1 className="text-lg font-semibold text-gray-800">
            Generated Blog Titles
          </h1>
        </div>

        {/* Placeholder Message */}
        <div className="bg-gray-50 border border-dashed border-gray-300 p-6 rounded-md text-center text-sm text-gray-500">
          <p>
            Enter a blog topic and click <strong>“Generate Blog Titles”</strong> to begin.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogTitles;
