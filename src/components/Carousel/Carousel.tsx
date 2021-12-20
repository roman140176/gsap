import React, {FC, useEffect} from 'react';
import styles from './Carousel.module.scss'
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
export type Image = {
    id:string;
    url:string
}
interface CarouselProps {
    imagesFirst: Image[];
    imagesSecond: Image[];
    imagesThird: Image[];
    imagesFourth: Image[];
};
export const Carousel:FC<CarouselProps> = ({imagesFirst,imagesSecond,imagesThird,imagesFourth}) => {

    const sliderAttr = {'data-attr': 'slider'};
    const el = React.useRef<HTMLDivElement>(null);
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        el.current!.querySelectorAll<HTMLElement>('[data-attr="slider"]').forEach((section, index) => {
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
        <div className={styles.scrollWrap} ref={el}>
            <div {...sliderAttr}>
                <ul className={styles.scrollRow}>
                    {
                        imagesFirst.map(item =>
                        <li key={item.id} className={styles.scrollItem}>
                            <img src={item.url} alt={item.url}/>
                        </li>
                        )
                    }
                </ul>
            </div>
            <div {...sliderAttr}>
                <ul className={styles.scrollRow}>
                    {
                        imagesSecond.map(item =>
                            <li key={item.id} className={styles.scrollItem}>
                                <img src={item.url} alt={item.url}/>
                            </li>
                        )
                    }
                </ul>
            </div>
            <div {...sliderAttr}>
                <ul className={styles.scrollRow}>
                    {
                        imagesThird.map(item =>
                            <li key={item.id} className={styles.scrollItem}>
                                <img src={item.url} alt={item.url}/>
                            </li>
                        )
                    }
                </ul>
            </div>
            <div {...sliderAttr}>
                <ul className={styles.scrollRow}>
                    {
                        imagesFourth.map(item =>
                            <li key={item.id} className={styles.scrollItem}>
                                <img src={item.url} alt={item.url}/>
                            </li>
                        )
                    }
                </ul>
            </div>
         </div>
    );
};

