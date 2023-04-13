import React from 'react'

export const Reviews = ({ data }) => {
  return (
    <>
        {data.map((item) => (
            <div>
                <h6>{item.name}</h6>
                <div>
                    <p>{item.date}</p>
                    <p>{item.comments}</p>
                </div>
            </div>
        ))}
    </>
  )
}
