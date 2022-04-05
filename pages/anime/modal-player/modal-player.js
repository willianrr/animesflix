import { React } from 'react';
import styles from '../../../styles/ModalPlayer.module.scss';

const ModalPlayer = props => {
  console.log(props.link);
  return (
    <div className={styles.wrapperModalPlayer}>
      <div className={styles.modalPlayer}>
      <div className={styles.hidebtn}></div>
        <iframe
          src={`${props.link}`}
          width="100%"
          height="100%"
          allowFullScreen
          allow="autoplay"
          scrolling="no"
        >
        </iframe> 
      </div>
    </div>
  )
  function extractUrlID(url) {
    var expression = new RegExp(/[-\w]{25,}/);
    return expression.exec(url).toString();
  }
}

export default ModalPlayer;