import React from 'react'
import SectionMenu from '../SectionMenu/SecionMenu';
import styles from './Category.module.scss';
import { ICategorySection } from '../../interface/interface.category';
interface Props {
  CategoryId?: string;
  section?: ICategorySection[];
  scroll?: boolean;

}
const Category = ({ CategoryId, section, scroll }: Props) => {
  return (
    <div className={`${styles.CatgWrap} ${scroll? styles.sticky : ''}`} id={CategoryId}>
      <div className={styles.Catghead}>
        <h2 className={styles.CatgTitle}>{CategoryId}</h2>
      </div>
        {section?.map((sec: ICategorySection, i: number) => (
          <SectionMenu item={sec.item} sectiontitle={sec.sectiontitle} sectiondetail={sec.sectiondetail} />
        ))}
    </div>
  )
}

export default Category