import React from 'react'
import './ItemStatus.css'

const ItemStatus = ({setStatus}) => {
    return (
        <div className='statusBar'>
            <button className="waves-effect waves-light btn" onClick={() => setStatus('all')}>All</button>
            <button className="waves-effect waves-light btn" onClick={() => setStatus('inProgress')}>In progress</button>
            <button className="waves-effect waves-light btn" onClick={() => setStatus('important')}>Important</button>
            <button className="waves-effect waves-light btn" onClick={() => setStatus('done')}>Done</button>
        </div>
    )
}

export default ItemStatus