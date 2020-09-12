import React, { useState } from 'react';
import { usePrediction } from 'deepserve-react'
import { CodeBlock, monoBlue } from "react-code-blocks";
import ClipLoader from "react-spinners/ClipLoader";

function PredictionResult({ predictionText }) {
  const { loading, error, meta, prediction } = usePrediction('jeffrwell/image-project', { text: predictionText })

  if (loading) return  (
    <div className='w-full flex max-w-xl mt-20 justify-center'>
      <ClipLoader size={40} loading={loading} color={'#36D7B7'}/>
    </div>
  )

  if (!prediction) return null;

  return (
    <div className='w-full flex-col max-w-xl mt-10 justify-center'>

      <div>
        <p style={{fontSize: '6em', lineHeight: '1.3em'}} className='text-white text-center'>{prediction['top_prediction'] ? '😃' : '😕'}</p>
        <p className='text-teal-300 text-center mb-1'><code>'{prediction['top_prediction']}'</code></p>
        <p className='text-white text-center mb-12'><code>{(prediction['top_confidence'] * 100).toFixed(2)}% Confidence</code></p>
        { error ? (
          <>
            <h3 className='font-medium text-md text-red-300 mb-2 text-center'>
              Error
            </h3>
            <CodeBlock
                text={JSON.stringify(error, null, 4)}
                language='json'
                showLineNumbers={false}
                theme={monoBlue}
                customStyle={{fontSize: '12px'}}
                wrapLines
              />
            </>
        ) : (
          <>
            <h3 className='font-medium text-md text-teal-300 mb-2 text-center'>
              Prediction
            </h3>
            <CodeBlock
                text={JSON.stringify(prediction, null, 4)}
                language='json'
                showLineNumbers={false}
                theme={monoBlue}
                customStyle={{fontSize: '12px'}}
                wrapLines
              />
            </>
        )}

        <h3 className='font-medium text-md text-teal-300 mt-10 mb-2 text-center'>
          Metadata
        </h3>
        <CodeBlock
            text={JSON.stringify(meta, null, 4)}
            language='json'
            showLineNumbers={false}
            theme={monoBlue}
            customStyle={{fontSize: '12px'}}
            wrapLines
          />
      </div>
    </div>
  );
}

export default PredictionResult;
