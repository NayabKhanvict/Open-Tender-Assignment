import React from 'react'
import ItemCard from '../ItemCard/ItemCard'
import styles from './SectionMenu.module.scss';
import { ICardItem } from '../../interface/interface.category';
interface  Props {
  item?: ICardItem[];
  sectiontitle?: string;
  sectiondetail?: string;
}
const SecionMenu = ({item, sectiontitle, sectiondetail}: Props) => {

  return (
    <div className={styles.SectWrap} >
      <div className={styles.SectDetail}>
        <h3 className={styles.SectTitle}>{sectiontitle}</h3>
        <p className={styles.SectText}>{sectiondetail}</p>
      </div>
      <div className={styles.SectItems}>
      {item?.map((card: any, i: number) => (
            <ItemCard
              key={i}
              title={card.title}
              detail={card.detail}
            />
        ))}
      </div>
    </div>
  )
}

export default SecionMenu