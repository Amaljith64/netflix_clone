import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='title' >Movie Name</h1>
            <div className='banner_button'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>


            </div>
            <h1 className='description' >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quo totam fuga quia nulla voluptas doloribus sed animi, distinctio vitae similique, aperiam quos laboriosam possimus consequatur et voluptatem cumque eum.
            </h1>


        </div>
        <div className="fade_bottom"></div>

    </div>
  )
}

export default Banner