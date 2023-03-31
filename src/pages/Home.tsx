import React, { useState, useEffect, useRef } from 'react';
import Category from '../components/Category/Category';
import styles from './Home.module.scss';
import { category_data } from '../data/constants';
import { ICategoryState } from '../interface/interface.category';
import { Link } from 'react-router-dom';
type Refs = Record<string, HTMLDivElement>;
const Home = () => {
  const refs = useRef<Refs>({});
  // const [scrollTo, setScrollTo] = useState("Category#1");
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 256);
    });
  }, []);

const scrollDown = (ref: any) => {
  window.scrollTo({
    top: ref.current.offsetTop,
    behavior: 'smooth',
  });
};
const handleMapChildRef = (id: string) => (ref: HTMLDivElement) => {
  refs.current[id] = ref ?? null;
};
console.log(refs.current);

    return (
      <div className='container'>
        <h1 className={styles.pageTitle}>Mobile App</h1>
        <span className={styles.subTitle}>Technical Features</span>

        <p className={styles.pageText}>Features that just work for the Mobile App. Everywhere.
          And it's all included at no additional cost.</p>

        <div className={styles.barWrap}>
          <div className={`${styles.categoryBar}  ${scroll? styles.sticky : ''}`}>
            <div className={styles.categories}>
              <div
                className={styles.category}
                role="button"
                // onClick={() => scrollDown(refs.current["Category#1"])}
              >
                  Category#1
                </div>
              <div
                className={styles.category}
                role="button"
                // onClick={() => scrollDown(refs.current["Category#2"])}
              >
                Category #2
              </div>
              <a href="#" className={styles.category} role="button">Category #3</a>
              <a href="#" className={styles.category} role="button">Category #4</a>
              <a href="#" className={styles.category} role="button">Category #5</a>
            </div>
            <Link to="https://www.opentender.io/">
            <button className={styles.overview}>
              See Overview
              <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
                <path d="M17.5718 6.57177C17.8876 6.25599 17.8876 5.74401 17.5718 5.42823L12.4258 0.282282C12.11 -0.0334987 11.5981 -0.0334987 11.2823 0.282282C10.9665 0.598063 10.9665 1.11004 11.2823 1.42583L15.8565 6L11.2823 10.5742C10.9665 10.89 10.9665 11.4019 11.2823 11.7177C11.5981 12.0335 12.11 12.0335 12.4258 11.7177L17.5718 6.57177ZM-7.06907e-08 6.80861L17 6.80861L17 5.19139L7.06907e-08 5.19139L-7.06907e-08 6.80861Z" fill="#FDFAF6" />
              </svg>
            </button>
            </Link>
          </div>
        </div>
          {category_data.map((category: ICategoryState, i: number) => (
            <Category
              key={i}
              CategoryTitle={category.categorytitle}
              ref={handleMapChildRef(category.categorytitle)}
              section={category.section}
              scroll={scroll}
            />
          ))}
      </div>
    );
  }

export default Home;