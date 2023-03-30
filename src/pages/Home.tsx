import React, { useState, useEffect } from 'react';
import Category from '../components/Category/Category';
import styles from './Home.module.scss';

const Home = () => {
  const categ = [
    {
      categorytitle: "Category#1",
      section:[{
        sectiontitle: "Frictionless Omnichannel Loyalty",
        sectiondetail: "Seamlessly recognize and reward customers across all sales channels - without a separate loyalty integration. Everything you need from a loyalty platform, and it's free.",
        item: [{
          title: "Omnichannel",
          detail: "It's super easy for customers to enroll, earn, and redeem both in-store and online. Eliminate friction and maximize engagement."
        },
        {
          title: "Credit Cards",
          detail: "Customers can participate in your loyalty program by simply paying with a credit card at the POS. That's it, regardless of whether they're swiping, inserting, tapping, or using Apple Pay or Google Pay."
        },
        {
          title: "Status Tiers",
          detail: "Establish status tiers with both custom benefits and automated rewards. Engage your customers by displaying their current status front and center on their account pages and throughout the ordering experience."
        }]
      },
      {
        sectiontitle: "Dietary Preferences + Allergen Filter",
        sectiondetail: "Tag menu items with allergens so they can be displayed on your menu, and use our allergen filter to allow your customers to highlight items containing certain allergens as they order.",
        item: [{
          title: "Example #1",
          detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          title: "Example #2",
          detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }]
      }]
    },
    {
      categorytitle: "Category#2",
      section:[{
        sectiontitle: "Flexible Service Charges",
        sectiondetail: "Add one or more service charges to your checkout page, such as delivery fees or administrative fees. Service charges can vary by restaurant.",
        item: [{
          title: "Example #1",
          detail: "It's super easy for customers to enroll, earn, and redeem both in-store and online. Eliminate friction and maximize engagement."
        },
        {
          title: "Example #2",
          detail: "Customers can participate in your loyalty program by simply paying with a credit card at the POS. That's it, regardless of whether they're swiping, inserting, tapping, or using Apple Pay or Google Pay."
        },
        {
          title: "Example #3",
          detail: "Establish status tiers with both custom benefits and automated rewards. Engage your customers by displaying their current status front and center on their account pages and throughout the ordering experience."
        }]
      }]
    }
  ];

  // const [sticky, setSticky] = useState(true);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 256);
    });
  }, []);

    return (
      <div className='container'>
        <h1 className={styles.pageTitle}>Mobile App</h1>
        <span className={styles.subTitle}>Technical Features</span>

        <p className={styles.pageText}>Features that just work for the Mobile App. Everywhere.
          And it's all included at no additional cost.</p>

        <div className={styles.barWrap}>
          <div className={`${styles.categoryBar}  ${scroll? styles.sticky : ''}`}>
            <div className={styles.categories}>
              <a href="#Category#1" className={styles.category} role="button"> Category#1</a>
              <a href="#Category#2" className={styles.category} role="button">Category #2</a>
              <a href="#" className={styles.category} role="button">Category #3</a>
              <a href="#" className={styles.category} role="button">Category #4</a>
              <a href="#" className={styles.category} role="button">Category #5</a>
            </div>

            <button className={styles.overview}>
              See Overview
              <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
                <path d="M17.5718 6.57177C17.8876 6.25599 17.8876 5.74401 17.5718 5.42823L12.4258 0.282282C12.11 -0.0334987 11.5981 -0.0334987 11.2823 0.282282C10.9665 0.598063 10.9665 1.11004 11.2823 1.42583L15.8565 6L11.2823 10.5742C10.9665 10.89 10.9665 11.4019 11.2823 11.7177C11.5981 12.0335 12.11 12.0335 12.4258 11.7177L17.5718 6.57177ZM-7.06907e-08 6.80861L17 6.80861L17 5.19139L7.06907e-08 5.19139L-7.06907e-08 6.80861Z" fill="#FDFAF6" />
              </svg>
            </button>
          </div>
        </div>
          {categ.map((cat: any, i: number) => (
            <Category
              key={i}
              CategoryId={cat.categorytitle}
              section={cat.section}
              scroll={scroll}
            />
          ))}
      </div>
    );
  }

export default Home;