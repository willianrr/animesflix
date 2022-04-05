import React, { useRef } from 'react';
import splashImage from '../../../public/image/logo.png';
import styles from './styles/splash-screen.module.scss';
import { useSpring, animated } from 'react-spring';

const splashScreen = () => {
    const animation = useSpring({
        loop: true,
        from: {
            opacity: 0, transform: 'scale(0.5)'
        },
        to: [
            { opacity: 1, transform: 'scale(1.2)' },
            { opacity: 0, transform: 'scale(0.5)' }
        ],

    })
    return (
        <div className={styles.splashWrapper}>
            <animated.img className={styles.imageSplashScreen} src={splashImage} style={animation} alt="Splash Screen Image" />
        </div>
    )
}

export default splashScreen;