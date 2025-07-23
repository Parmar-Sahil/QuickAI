import { Edit, Sparkle, Sparkles } from 'lucide-react';
import React, { useState } from 'react';
import axios from 'axios'
import toast from 'react-hot-toast';
import { useAuth } from '@clerk/clerk-react';
import Markdown from 'react-markdown';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL

const WriteArticle = () => {
  const articleLength = [
    { length: 800, text: 'Short (500-800 words)' },
    { length: 1200, text: 'Medium (800-1200 words)' },
    { length: 1600, text: 'Long (1200+ words)' },
  ];

  const [selectedLength, setSelectedLength] = useState(articleLength[0]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false)
  const [content, setContent] = useState('')
  const {getToken} = useAuth()
  

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const token = await getToken();
    console.log("🔐 JWT Token:", token); // Should NOT be undefined or null

    if (!token) {
      alert("You must be logged in to generate articles.");
      return;
    }
    
    try {
      setLoading(true)
      const prompt = `write an article about ${input} in ${selectedLength.text}`
      const {data} = await axios.post('/api/ai/generate-article', {prompt, length:selectedLength.text}, {headers: {Authorization: `Bearer ${token}`}})
      
      if(data.success){
        setContent(data.content)
      }else toast.error(data.message)

    
    } catch (error) {
      toast.error(error.message)
    }

    setLoading(false)
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Left Column - Form */}
      <form
        onSubmit={onSubmitHandler}
        className="bg-white shadow-sm rounded-xl p-6 space-y-6"
      >
        <div className="flex items-center gap-3">
          <Sparkles className="text-blue-600" />
          <h3 className="text-xl font-semibold text-gray-800">
            AI Article Writer
          </h3>
        </div>

        {/* Topic Input */}
        <div>
          <p className="text-sm font-medium text-gray-600 mb-2">Article Topic</p>
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="The future of Artificial Intelligence..."
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Article Length */}
        <div>
          <p className="text-sm font-medium text-gray-600 mb-2">Article Length</p>
          <div className="flex flex-wrap gap-2">
            {articleLength.map((item, index) => (
              <button
                type="button"
                onClick={() => setSelectedLength(item)}
                key={index}
                className={`px-4 py-2 rounded-full border text-sm transition-all ${
                  selectedLength.text === item.text
                    ? 'bg-blue-50 text-blue-700 border-blue-500'
                    : 'bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200'
                }`}
              >
                {item.text}
              </button>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button disabled={loading}
          type="submit"
          className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-blue-900 to-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
        {
          loading ? <span className='w-4 h-4 my-1 rounded-full border-2 border-t-transparent animate-spin'></span> :
          <Edit className="w-4 h-4" />
          
        }
        Generate Article
        </button>

      </form>

      {/* Right Column - Output */}
      <div className="bg-white shadow-sm rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <Edit className="text-blue-600" />
          <h1 className="text-lg font-semibold text-gray-800">
            Generated Articles
          </h1>
        </div>

        {/* Placeholder */}

        {!content ? (
          <div className="bg-gray-50 border border-dashed border-gray-300 p-6 rounded-md text-center text-sm text-gray-500">
          <p>
            Enter a topic and click <strong>“Generate Article”</strong> to get
            started.
          </p>
        </div>
        ) : (
          <div className='mt-3 h-full overflow-y-scroll text-sm text-slate-600'>
            <div>
              <Markdown>{content}</Markdown>
            </div>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default WriteArticle;
