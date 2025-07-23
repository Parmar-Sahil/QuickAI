import React, { useState } from 'react';
import { FileText, Sparkles, UploadCloud } from 'lucide-react';

const ReviewResume = () => {
  const [file, setFile] = useState(null);

  const handleUpload = (e) => {
    const selected = e.target.files[0];
    if (
      selected &&
      selected.type === 'application/pdf' &&
      selected.size <= 5 * 1024 * 1024
    ) {
      setFile(selected);
    } else {
      alert('Please upload a valid PDF file (max 5MB).');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert('Please upload your resume to review.');
      return;
    }

    // TODO: Call resume analysis API or logic here
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Left Column - Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-sm rounded-xl p-6 space-y-6"
      >
        <div className="flex items-center gap-3">
          <Sparkles className="text-green-600" />
          <h3 className="text-xl font-semibold text-gray-800">
            Resume Reviewer
          </h3>
        </div>

        <div className="text-sm text-gray-600">
          <p className="mb-2">
            Upload a <strong>PDF</strong> file of your resume (max 5MB).
          </p>
        </div>

        {/* Upload Field */}
        <label
          htmlFor="fileUpload"
          className="cursor-pointer border-2 border-dashed border-green-300 bg-green-50 hover:bg-green-100 transition rounded-md p-6 text-center flex flex-col items-center gap-2"
        >
          <UploadCloud className="w-8 h-8 text-green-600" />
          <span className="text-sm text-gray-700">
            Click to upload or drag & drop your resume
          </span>
          {file && (
            <p className="text-sm text-green-600 font-medium mt-2">
              Selected: {file.name}
            </p>
          )}
          <input
            id="fileUpload"
            type="file"
            accept="application/pdf"
            onChange={handleUpload}
            className="hidden"
          />
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2 rounded-md hover:opacity-90 transition"
        >
          <FileText className="w-4 h-4" />
          Review Resume
        </button>
      </form>

      {/* Right Column - Output or Placeholder */}
      <div className="bg-white shadow-sm rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <FileText className="text-green-600" />
          <h1 className="text-lg font-semibold text-gray-800">
            Resume Analysis
          </h1>
        </div>

        {!file ? (
          <div className="bg-gray-50 border border-dashed border-gray-300 p-6 rounded-md text-center text-sm text-gray-500">
            Upload your resume to receive instant feedback and tips to improve your chances of getting hired.
          </div>
        ) : (
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              <strong>{file.name}</strong> is ready for review. (Integration pending)
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewResume;
