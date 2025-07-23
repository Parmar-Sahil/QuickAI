import { Image, Sparkle, Sparkles } from 'lucide-react';
import React, { useState } from 'react';

const GenerateImage = () => {
  const styles = ['Realistic', 'Ghibli', 'Illustration', 'Concept Art', '3D','Cartoon','Cyberpunk', 'Oil Painting','Futuristic'];

  const [selectedStyle, setSelectedStyle] = useState(styles[0]);
  const [prompt, setPrompt] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // Image generation logic goes here
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Left Column - Prompt Form */}
      <form
        onSubmit={onSubmitHandler}
        className="bg-white shadow-sm rounded-xl p-6 space-y-6"
      >
        <div className="flex items-center gap-3">
          <Sparkles className="text-green-600" />
          <h3 className="text-xl font-semibold text-gray-800">
            AI Image Generator
          </h3>
        </div>

        {/* Prompt Input */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Describe Your Image
          </label>
          <textarea
            type="text"
            placeholder="A cat wearing sunglasses, walking on Mars..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Style Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Style
          </label>
          <div className="flex flex-wrap gap-2">
            {styles.map((style, index) => (
              <button
                type="button"
                key={index}
                onClick={() => setSelectedStyle(style)}
                className={`px-4 py-2 rounded-full border text-sm transition-all ${
                  selectedStyle === style
                    ? 'bg-green-50 text-green-700 border-green-500'
                    : 'bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200'
                }`}
              >
                {style}
              </button>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-500 text-white px-6 py-2 rounded-md hover:opacity-90 transition"
        >
          <Image className="w-4 h-4" />
          Generate Image
        </button>
      </form>

      {/* Right Column - Output Preview */}
      <div className="bg-white shadow-sm rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <Image className="text-green-600" />
          <h1 className="text-lg font-semibold text-gray-800">
            Generated Image
          </h1>
        </div>

        {/* Placeholder Output */}
        <div className="bg-gray-50 border border-dashed border-gray-300 p-6 rounded-md text-center text-sm text-gray-500">
          <p>
            Enter a prompt and click <strong>“Generate Image”</strong> to preview AI-generated images.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GenerateImage;
