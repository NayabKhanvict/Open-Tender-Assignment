import React from 'react';
import Image from '../../assets/images/mobile-mockup.png';
import styles from './ItemCard.module.scss';
interface Props {
  title?: string;
  detail?: string;
}
const ItemCard = ({title, detail}: Props) => {
  return (
    <div className={styles.ItemWrap}>
        <img src={Image} className={styles.ItemImg} alt="Image" />
        <h4 className={styles.ItemTitle}>{title}</h4>
        <p className={styles.ItemText}>{detail}</p>
    </div>
  )
}

export default ItemCard