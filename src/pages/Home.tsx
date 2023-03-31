import React, { useState, useEffect, useRef } from 'react';
import Category from '../components/Category/Category';
import styles from './Home.module.scss';
import { category_data } from '../data/constants';
import { ICategoryState } from '../interface/interface.category';
import { Link } from 'react-router-dom';
import { ArrowRight } from '../assets/svgs/svgs';

type Refs = Record<string, any>;
const Home = () => {
  const refs = useRef<Refs>({});
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 248);
      console.log(window.scrollY);
    });
  }, []);

  const scrollDown = (id: any) => {
    const currentRef = refs.current[id];
    if (currentRef) {
      window.scrollTo({
        top: currentRef.offsetTop,
        behavior: 'smooth',
      });
    }
  };
  const handleMapChildRef = (id: string) => (ref: any) => {
    refs.current[id] = ref ?? null;
  };
  return (
    <div className='container'>
      <h1 className={styles.pageTitle}>Mobile App</h1>
      <span className={styles.subTitle}>Technical Features</span>

      <p className={styles.pageText}>Features that just work for the Mobile App. Everywhere.
        And it's all included at no additional cost.</p>

      <div className={styles.barWrap}>
        <div className={`${styles.categoryBar}  ${scroll ? styles.sticky : ''}`}>
          <div className={styles.categories}>
            <div
              className={styles.category}
              role="button"
              onClick={() => scrollDown("Category#1")}
            >
              Category#1
            </div>
            <div
              className={styles.category}
              role="button"
              onClick={() => scrollDown("Category#2")}
            >
              Category #2
            </div>
            <div
              className={styles.category}
              role="button"
            >
              Category#3
            </div>
            <div
              className={styles.category}
              role="button"
            >
              Category #4
            </div>
            <div
              className={styles.category}
              role="button"
            >
              Category#5
            </div>
          </div>
          <Link to="https://www.opentender.io/">
            <button className={styles.overview}>
              <span className={styles.overviewText}>See Overview</span>
              <ArrowRight width="17px" height="16px" />
            </button>
          </Link>
        </div>
      </div>
      {category_data.map((category: ICategoryState, i: number) => (
        <Category
          key={i}
          categoryTitle={category.categorytitle}
          ref={handleMapChildRef(category.categorytitle)}
          section={category.section}
          scroll={scroll}
        />
      ))}
    </div>
  );
}

export default Home;