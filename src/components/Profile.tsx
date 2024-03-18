import { useContext } from 'react';
import styles from '../styles/components/Profile.module.css';
import { ChallengesContext } from '@/contexts/ChallengesContext';

export function Profile(){
    const {level} = useContext(ChallengesContext);
    return(
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/85636495?s=400&u=a098fe15f7932cf97026bca40c9827d95e84eb6c&v=4" alt="Gustavo Henrique" />
            <div>
                <strong>Gustavo Pirani</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}