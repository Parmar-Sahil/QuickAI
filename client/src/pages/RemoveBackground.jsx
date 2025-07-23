import React, { useState } from 'react';
import { UploadCloud, Image, Sparkle, Eraser, Sparkles } from 'lucide-react';

const RemoveBackground = () => {
  const [file, setFile] = useState(null);

  const handleUpload = (e) => {
    const selected = e.target.files[0];
    if (
      selected &&
      ['image/png', 'image/jpeg'].includes(selected.type) &&
      selected.size <= 5 * 1024 * 1024
    ) {
      setFile(selected);
    } else {
      alert('Please upload a PNG or JPEG image (max 5MB).');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert('Please select a valid image.');
      return;
    }

    // Call your image background removal API here
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Left Column - Upload Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-sm rounded-xl p-6 space-y-6"
      >
        <div className="flex items-center gap-3">
          <Sparkles className="text-orange-600" />
          <h3 className="text-xl font-semibold text-gray-800">
            Remove Background
          </h3>
        </div>

        <div className="text-sm text-gray-600">
          <p className="mb-2">
            Upload a <strong>PNG</strong> or <strong>JPEG</strong> image (max 5MB).
          </p>
        </div>

        {/* Upload Field */}
        <label
          htmlFor="fileUpload"
          className="cursor-pointer border-2 border-dashed border-orange-300 bg-orange-50 hover:bg-orange-100 transition rounded-md p-6 text-center flex flex-col items-center gap-2"
        >
          <UploadCloud className="w-8 h-8 text-orange-500" />
          <span className="text-sm text-gray-700">
            Click to upload or drag & drop your image
          </span>
          {file && (
            <p className="text-sm text-green-600 font-medium mt-2">
              Selected: {file.name}
            </p>
          )}
          <input
            id="fileUpload"
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleUpload}
            className="hidden"
          />
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-6 py-2 rounded-md hover:opacity-90 transition"
        >
          <Eraser className="w-4 h-4" />
          Remove Background
        </button>
      </form>

      {/* Right Column - Preview or Placeholder */}
      <div className="bg-white shadow-sm rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <Eraser className="text-orange-600" />
          <h1 className="text-lg font-semibold text-gray-800">
            Output Preview
          </h1>
        </div>

        {!file ? (
          <div className="bg-gray-50 border border-dashed border-gray-300 p-6 rounded-md text-center text-sm text-gray-500">
            Upload an image to see the preview and remove the background.
          </div>
        ) : (
          <div className="mt-4 text-center">
            <img
              src={URL.createObjectURL(file)}
              alt="Uploaded"
              className="max-w-full max-h-[400px] mx-auto rounded-md shadow"
            />
            <p className="mt-2 text-sm text-gray-500">Preview (original image)</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RemoveBackground;
