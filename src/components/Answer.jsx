import React from 'react'
import { useParams } from 'react-router-dom';
import answers from '../answers';

const Answer = () => {
    
      
      const { index } = useParams();
      const answer = answers[index - 1];
    
      return (
        <div id="content" className='bg-black text-white w-full h-screen flex'>
        <div className='flex-col m-auto text-center'>
          <h1>{answer.title}</h1>
          <p>{answer.content}</p>
        </div>
        </div>
      );
    }

export default Answer