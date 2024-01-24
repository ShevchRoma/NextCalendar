"use client"
import React from 'react'
import classes from './event.module.css'
import { useDispatch } from 'react-redux'
import { addEvent } from '@/redux/features/event-slice'
import axios from 'axios'
import { useRouter } from 'next/navigation'



const EventForm = ({ toggleOpenForm }) => {
    const router = useRouter();

    const duration = ['15', '30', '45', '60', '90']

    const [newEvent, setNewEvent] = React.useState({
        start: "0",
        duration: "15",
        title: ""
    })
    const dispatch = useDispatch()

    const onChangeSelectHandler = (e) => {
        setNewEvent({ ...newEvent, start: e.target.value })
    }
    const onChangeInputHandler = (e) => {
        setNewEvent({ ...newEvent, title: e.target.value })
    }
    const onChangeSelectDuration = (e) => {
        setNewEvent({ ...newEvent, duration: e.target.value })
    }
    async function postData() {
        const res = await axios.post("http://localhost:3000/api/post", {
            "start": newEvent.start,
            "duration": newEvent.duration,
            "title": newEvent.title
        });
    }

    const onSubmitForm = (e) => {
        e.preventDefault()
        if (newEvent.title.trim() === '') {
            alert('Field - Title must be filled in')
            return
        }
        dispatch(addEvent(newEvent))
        postData()
        toggleOpenForm(false)
        router.refresh()
    }

    return (
        <form onSubmit={onSubmitForm} className={classes.form}>
            <select onChange={onChangeSelectHandler}>
                <option value={'0'}>8:00 a.m</option>
                <option value={'30'}>8:30 a.m</option>
                <option value={'60'}>9:00 a.m</option>
                <option value={'90'}>09:30 a.m</option>
                <option value={'120'}>10:00 a.m</option>
                <option value={'150'}>10:30 a.m</option>
                <option value={'180'}>11:00 a.m</option>
                <option value={'210'}>11:30 a.m</option>
                <option value={'240'}>12:00 a.m</option>
                <option value={'270'}>12:30 p.m</option>
                <option value={'300'}>01:00 p.m</option>
                <option value={'330'}>01:30 p.m</option>
                <option value={'360'}>02:00 p.m</option>
                <option value={'390'}>02:30 p.m</option>
                <option value={'420'}>03:00 p.m</option>
                <option value={'450'}>03:30 p.m</option>
                <option value={'480'}>04:00 p.m</option>
                <option value={'5100'}>04:30 p.m</option>
            </select>
            <select onChange={onChangeSelectDuration}>
                {duration.map(dur => <option key={dur}>{dur}</option>)}
            </select>
            <input name="title" type="text" placeholder="Enter event name" onChange={onChangeInputHandler} />
            <button>Add</button>
        </form>
    )
}

export default EventForm