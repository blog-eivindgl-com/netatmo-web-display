import styles from '@/styles/TemperatureWidget.module.css'

export default function TemperatureWidget() {
    return (
        <div>
            <span className={styles.tempInt}>23</span>
            <span className={styles.tempDec}>.4ºC</span>
        </div>
    );
}