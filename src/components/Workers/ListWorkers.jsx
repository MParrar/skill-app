import React from 'react'
import { Worker } from './Worker'
import { Workers } from '../../Database/Workers'
import './listWorkers.css'
export const ListWorkers = () => {
    return (
        <div className="container">
            <>
                {Workers.map(({ id, name, img }) => (
                    <Worker
                        key={id}
                        name={name}
                        img={img}
                        id={id}
                    />

                ))

                }

            </>
        </div >
    )
}
