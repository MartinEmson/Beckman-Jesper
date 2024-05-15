function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}


const answers = [
    { title: 'FORENZIKA', content: 'This is the content for answer 1.', images: [
      './assets/Stills/FORENZIKA/for1.png',
      './assets/Stills/FORENZIKA/for2.png',
      './assets/Stills/FORENZIKA/for3.png',
      './assets/Stills/FORENZIKA/for4.png',
      './assets/Stills/FORENZIKA/for5.png',

      
    ],  },
    { title: "CAT'S EYE", content: 'This is the content for answer 2.', images: [
      './assets/Stills/CATS/cats1.png',
      './assets/Stills/CATS/cats2.png',
      './assets/Stills/CATS/cats3.png',
      './assets/Stills/CATS/cats4.png',
      './assets/Stills/CATS/cats5.png',
      './assets/Stills/CATS/cats6.png',
      
    ],  },
    { title: 'SHU', content: 'This is the content for answer 3.', images: [
      './assets/Stills/SHU/shu1.png',
      './assets/Stills/SHU/shu2.png',
      './assets/Stills/SHU/shu3.png',
      './assets/Stills/SHU/shu4.png',
      './assets/Stills/SHU/shu5.png',
      './assets/Stills/SHU/shu6.png',
      
    ], },
    { title: 'SYNTHESTHESIA', content: 'This is the content for answer 4.', images:[
      './assets/Stills/SYNTH/syn1.png',
      './assets/Stills/SYNTH/syn2.png',
      './assets/Stills/SYNTH/syn3.png',
      './assets/Stills/SYNTH/syn4.png',
      './assets/Stills/SYNTH/syn5.png',

    ], },
  ];

  answers.forEach(answer => shuffleArray(answer.images));

  
  export default answers;