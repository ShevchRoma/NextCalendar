'use client'
import React from 'react'
import styles from './header.module.css'
import AddEvent from '../AddEvent/AddEvent'
import { useSelector } from 'react-redux'


const Header = () => {
    const events = useSelector(state => state.events)
    console.log(events)

    const exportData = (data, fileName, type) => {

        const blob = new Blob([data], { type });
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url;
        a.download = fileName;
        a.click()
        window.URL.revokeObjectURL(url)
    }
    const onExportData = () => {
        exportData(events.events, "data.json", 'application/json')
    }

    return (
        <div className={styles.header}>
            <div className={styles.column}>
                <h1>Calendar</h1>
            </div>
            <div className={styles.column}>
                <AddEvent />
            </div>
            <div className={styles.column}>
                <div onClick={onExportData} className={styles.export}>
                    Export
                </div>
            </div>
        </div>
    )
}

export default Header