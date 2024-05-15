function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}


const answers = [
    { title: 'FORENZIKA', content: 'This is the content for answer 1.', images: [
      'src/assets/Stills/FORENZIKA/for1.png',
      'src/assets/Stills/FORENZIKA/for2.png',
      'src/assets/Stills/FORENZIKA/for3.png',
      'src/assets/Stills/FORENZIKA/for4.png',
      'src/assets/Stills/FORENZIKA/for5.png',

      
    ],  },
    { title: "CAT'S EYE", content: 'This is the content for answer 2.', images: [
      'src/assets/Stills/CATS/cats1.png',
      'src/assets/Stills/CATS/cats2.png',
      'src/assets/Stills/CATS/cats3.png',
      'src/assets/Stills/CATS/cats4.png',
      'src/assets/Stills/CATS/cats5.png',
      'src/assets/Stills/CATS/cats6.png',
      
    ],  },
    { title: 'SHU', content: 'This is the content for answer 3.', images: [
      'src/assets/Stills/SHU/shu1.png',
      'src/assets/Stills/SHU/shu2.png',
      'src/assets/Stills/SHU/shu3.png',
      'src/assets/Stills/SHU/shu4.png',
      'src/assets/Stills/SHU/shu5.png',
      'src/assets/Stills/SHU/shu6.png',
      
    ], },
    { title: 'SYNTHESTHESIA', content: 'This is the content for answer 4.', images:[
      'src/assets/Stills/SYNTH/syn1.png',
      'src/assets/Stills/SYNTH/syn2.png',
      'src/assets/Stills/SYNTH/syn3.png',
      'src/assets/Stills/SYNTH/syn4.png',
      'src/assets/Stills/SYNTH/syn5.png',

    ], },
  ];

  answers.forEach(answer => shuffleArray(answer.images));

  
  export default answers;