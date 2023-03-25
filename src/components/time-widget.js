import styles from '@/styles/TimeWidget.module.css'
import { useEffect, useState } from 'react'

export default function TimeWidget() {
    const [time, setTime] = useState(Date())

    function tick() {
        this.setTime(Date())
    }

    useEffect(() => {
        const interval = setInterval(() => setTime(Date()), 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div>
            <span className={styles.timeComponent}>12:45</span><span className={styles.dateComponent}>WE 1/3</span>
        </div>
    );
}