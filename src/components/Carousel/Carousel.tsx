import React, {FC, useEffect} from 'react';

import styles from './Carousel.module.scss'
export type Image = {
    id:string;
    url:string
}
interface CarouselProps {
    imagesFirst: Image[];
    imagesSecond: Image[];
    imagesThird: Image[];
    imagesFourth: Image[];
    scrollSection:string;

};
export const Carousel:FC<CarouselProps> = ({imagesFirst,imagesSecond,imagesThird,imagesFourth,scrollSection}) => {

return (
        <>
            <div className={scrollSection}>
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
            <div className={scrollSection}>
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
            <div className={scrollSection}>
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
            <div className={scrollSection}>
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
         </>
    );
};

