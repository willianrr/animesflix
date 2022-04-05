import SkeletonElement from '../skeletonElement';
import styles from './skeleton-anime-list.module.scss';

const SkeletonAnimeListItem = () => {
    return (
        <div className={styles.wrapperList}>
            <SkeletonElement type="thumbnail"/>
            <SkeletonElement type="span"/>
       </div>
    )
}
export default SkeletonAnimeListItem;