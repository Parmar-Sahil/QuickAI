import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const CreationItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className="bg-white rounded-xl px-6 sm:px-10 py-4 shadow-sm hover:bg-gray-50 transition cursor-pointer"
    >
      {/* Top section (title, date, tag) */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
        <div className="w-full sm:w-auto">
          <h2 className="font-medium text-gray-800 text-sm sm:text-base truncate">
            {item.prompt}
          </h2>
          <p className="text-sm text-gray-500">
            {item.type} - {new Date(item.created_at).toLocaleDateString()}
          </p>
        </div>

        <span className="text-xs capitalize px-3 py-1 rounded-full border border-blue-500 text-blue-500 self-start sm:self-auto">
          {item.type}
        </span>
      </div>

      {/* Expanded content */}
      {expanded && (
        <div className="mt-4">
          {item.type === 'image' ? (
            <img
              src={item.content}
              alt="AI generated"
              className="w-full max-w-md rounded"
            />
          ) : (
            <div className="reset-tw prose prose-sm max-w-none text-slate-700">
              <ReactMarkdown>{item.content}</ReactMarkdown>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CreationItem;
