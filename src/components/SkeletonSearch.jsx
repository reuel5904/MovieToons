import React from 'react'

export default function SkeletonSearch({ index }) {
    return (
        <>
            <div className="skeleton" key={index}>
                <div className="skeleton__body">
                    <p className="skeleton__body--skeleton"></p>
                </div>
            </div>
        </>
    )
}
