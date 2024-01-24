'use client'
import React from 'react'
import style from './add.module.css'
import EventForm from '../EventForm/EventForm'



const AddEvent = () => {
    const [open, setOpen] = React.useState(false)

    const toggleOpenForm = () => {
        setOpen(!open)
    }
    return (
        <div>
            {!open ? <div onClick={toggleOpenForm} className={style.addButton}>
                Add Event
            </div> :
                <EventForm toggleOpenForm={toggleOpenForm} />}
        </div>
    )
}

export default AddEvent;