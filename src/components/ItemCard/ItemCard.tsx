import React from 'react';
import Image from '../../assets/images/mobile-mockup.png';
import styles from './ItemCard.module.scss';
interface Props {
  title?: string;
  detail?: string;
  checklist?:string[];
}
const ItemCard = ({title, detail, checklist}: Props) => {
  return (
    <div className={styles.ItemWrap}>
        <img src={Image} className={styles.ItemImg} alt="Image" />
        <h4 className={styles.ItemTitle}>{title}</h4>
        <p className={styles.ItemText}>{detail}</p>
        {!checklist? '' :
        <ul className={styles.ItemList}>

          {checklist.map((list: any, i: number) => (
            <li
              className={styles.ItemListItems}
              key={i}
              >
                {list}
              </li>
          ))}
          {/* <li className={styles.ItemListItems}>Design by Configuration</li>
          <li className={styles.ItemListItems}>Built with React Native</li>
          <li className={styles.ItemListItems}>Design by Configuration</li>
          <li className={styles.ItemListItems}>Built with React Native</li> */}
        </ul>
        }
        {/* checklist code */}
    </div>
  )
}

export default ItemCard