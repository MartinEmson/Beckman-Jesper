import answers from '../answers';
import { useParams, useNavigate } from 'react-router-dom';

const Answer = () => {
  const { index } = useParams();
  const navigate = useNavigate();
  const answer = answers[index - 1];

  if (!answer) {
    navigate('/404');
    return null;
  }

  const handleExit = () => {
    navigate(-1);
  }

  return (
    <div id="content" className='bg-white text-white w-full min-h-full flex relative'>
      <div className='flex-col mx-auto w-5/6 min-h-screen text-center mt-10'>
        <h1 className='text-4xl'>{answer.title}</h1>
        {/* <p>{answer.content}</p> */}
        
        <div className='grid grid-cols-3 gap-6 mt-10'>
  {answer.images.map((image, i) => {
    // Generate random row and column span
    const randomRowSpan = Math.floor(Math.random() * 2) + 1;
    const randomColSpan = Math.floor(Math.random() * 2) + 1;

    return (
      <img 
        key={`${image}-${i}`} 
        src={image} 
        alt="" 
        className='bg-black w-full h-auto'
        style={{
          maxHeight: '600px',
          maxWidth: '600px',
          gridColumn: `span ${randomColSpan}`,
          gridRow: `span ${randomRowSpan}`
        }}
      />
    );
  })}
</div>
        <div className='flex h-32'>
          <button onClick={handleExit} className='p-5 flex mx-auto items-center justify-center'>Exit</button>
        </div>
      </div>
    </div>
  );
}

export default Answer