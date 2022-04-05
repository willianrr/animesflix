import styles from './styles/skeleton.module.scss';

const SkeletonElement = ({ type }) => {
    return (
        <div className={`${styles.skeleton} ${styles[type]}`}></div>
    )
}
export default SkeletonElement;