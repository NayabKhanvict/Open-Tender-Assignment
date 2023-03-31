import React, { forwardRef } from 'react'
import SectionMenu from '../SectionMenu/SecionMenu';
import styles from './Category.module.scss';
import { ICategorySection } from '../../interface/interface.category';
interface Props {
  ref?: any;
  section?: ICategorySection[];
  scroll?: boolean;
  categoryTitle?: string;

}
const Category = forwardRef<HTMLDivElement, Props>(
  ({ categoryTitle, section, scroll }, ref) => {
    return (
    <div id={categoryTitle} className={`${styles.CatgWrap} ${scroll? styles.sticky : ''}`} ref={ref}>
      <div className={styles.Catghead}>
        <h2 className={styles.CatgTitle}>{categoryTitle}</h2>
      </div>
        {section?.map((sec: ICategorySection, i: number) => (
          <SectionMenu key={i} item={sec.item} sectiontitle={sec.sectiontitle} sectiondetail={sec.sectiondetail} />
        ))}
    </div>
  )
  }
);

export default Category