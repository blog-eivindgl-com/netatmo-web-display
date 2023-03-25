import styles from '@/styles/TemperatureWidget.module.css'

export default function TemperatureWidget({widgets}) {
    let tempInt = "0"
    let tempDec = "0°C"
    widgets.forEach(w => {
        tempInt = w.value.substr(0, w.value.indexOf("."))
        tempDec = w.value.substr(w.value.indexOf("."))
    })

    return (
        <div>
            <span className={styles.tempInt}>{tempInt}</span>
            <span className={styles.tempDec}>{tempDec}</span>
        </div>
    );
}