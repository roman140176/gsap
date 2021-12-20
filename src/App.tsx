import React from 'react';
import {Carousel, Image} from "./components/Carousel/Carousel";
import styles from './App.module.scss';
function App() {
    const imagesArray:Array<Image> = [
        {id:'1',url:'https://dummyimage.com/534x301/000/fff'},
        {id:'2',url:'https://dummyimage.com/534x301/000/fff'},
        {id:'3',url:'https://dummyimage.com/534x301/000/fff'},
        {id:'4',url:'https://dummyimage.com/534x301/000/fff'},
        {id:'5',url:'https://dummyimage.com/534x301/000/fff'},
        {id:'6',url:'https://dummyimage.com/534x301/000/fff'},
        {id:'7',url:'https://dummyimage.com/534x301/000/fff'},
        {id:'8',url:'https://dummyimage.com/534x301/000/fff'},
        {id:'9',url:'https://dummyimage.com/534x301/000/fff'},
    ];


  return (
    <div className="App">
      <div className={styles.container}>
             <Carousel
                 imagesFirst={imagesArray}
                 imagesSecond={imagesArray}
                 imagesThird={imagesArray}
                 imagesFourth={imagesArray}
             />

      </div>
    </div>
  );
}

export default App;
