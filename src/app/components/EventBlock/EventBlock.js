'use client'
import React from 'react'
import classes from './event.module.css';
import { useDispatch } from 'react-redux'
import { deleteEvent } from '@/redux/features/event-slice';
import axios from 'axios';
import { useRouter } from 'next/navigation'



const EventBlock = ({ title, height, id }) => {
    const dispatch = useDispatch()

    const router = useRouter()
    
    async function delEvent(id) {
        const res = await axios.delete(`http://localhost:3000/api/del?id=${id}`);
        if (res.status === 200) {
            router.refresh()
        }
    }

    function truncate(str, maxlength) {
        return (str.length > maxlength) ?
            str.slice(0, maxlength - 1) + '…' : str;
    }

    const removeEvent = () => {
        dispatch(deleteEvent(title))
        delEvent(id)
    }
    return (
        <div className={classes.event} style={{ height: `${height}` * 1.58 + 'px' }}>
            <p>{truncate(title, 12)}</p>
            <span onClick={removeEvent}>&times;</span>
        </div>
    )
}

export default EventBlock