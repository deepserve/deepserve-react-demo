import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PredictionResult from './PredictionResult'

function App() {
  const [predictionText, setPredictionText] = useState(null);
  const [reviewText, setReviewText] = useState('');

  const onSubmit = () => {
      setPredictionText(reviewText)
  }

  return (
    <div className="flex justify-center py-20 w-full h-full min-h-screen bg-gray-800">
      <div className="w-full flex max-w-xl flex-col items-center">
        <img src={logo} className="h-12 w-12 mb-10" alt="logo" />
        <h1 className='font-bold text-3xl text-white mb-2'>
          Deepserve.ai React Demo
        </h1>
        <h3 className='font-light text-xl text-teal-300 mb-20'>
          IMDB Text Sentiment Classifier
        </h3>

        <p className='font-normal text-white text-center'>
          Is this review positive or negative?
        </p>
        <p className='font-normal text-white text-center'>
          Enter a sample review text and click 'Analyze'.
        </p>
        <div className="mt-2 mb-4 w-full relative rounded-md shadow-sm">
          <textarea id="email" onChange={e => setReviewText(e.currentTarget.value)} rows="4" value={reviewText} className="px-3 rounded-md py-4 form-input block w-full sm:text-sm sm:leading-5" placeholder="This was a great movie because..." />
        </div>
        <span className="inline-flex rounded-md shadow-sm">
          <button
            onClick={onSubmit}
            type="button"
            class={`bg-teal-600 cursor-pointer inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white hover:bg-teal-500 focus:outline-none focus:border-teal-700 focus:shadow-outline-teal active:bg-teal-700 transition ease-in-out duration-150`}>
            Analyze
          </button>
        </span>
        {predictionText && <PredictionResult predictionText={predictionText} />}
      </div>
    </div>
  );
}


// ${loading ? 'bg-teal-800 cursor-not-allowed' : '
export default App;
