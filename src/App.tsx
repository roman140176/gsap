import React, {useEffect} from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
    const el = React.useRef<HTMLDivElement>(null);
    const q = gsap.utils.selector(el);
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        el.current!.querySelectorAll<HTMLElement>('.scrollSection').forEach((section, index) => {
            const w = section.querySelector<HTMLElement>('ul')!;
            const [x, xEnd] = (index % 2) ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
            gsap.fromTo(w, {  x  }, {
                x: xEnd,
                scrollTrigger: {
                    trigger: section!,
                    scrub: 0.5
                }
            });
        });
    }, []);

  return (
    <div className="App">
      <div className={styles.container}>
            <div className={styles.scrollWrap} ref={el}>
             <Carousel imagesFirst={imagesArray} imagesSecond={imagesArray} imagesThird={imagesArray} imagesFourth={imagesArray} scrollSection="scrollSection"/>
            </div>

      </div>
    </div>
  );
}

export default App;
