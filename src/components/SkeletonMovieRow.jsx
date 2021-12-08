import React from 'react'

export default function SkeletonMovieRow({ index }) {
    return (
        <>
            <div className="skeleton" key={index}>
                <div className="skeleton__movieRow">
                    <p className="skeleton__movieRow--skeleton"></p>
                </div>
            </div>
        </>
    )
}
