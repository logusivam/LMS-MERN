import React from 'react'
import './PhotoGallery.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function PhotoGallery() {
    return (
        <div className='photogallery-container'>
            <h1 className='photogallery-title'>Photo Gallery</h1>
            <div className="photogallery-images">
                <img src="https://images.pexels.com/photos/3755755/pexels-photo-3755755.jpeg?auto=compress&cs=tinysrgb&w=400" alt=''/>
                <img src="https://images.pexels.com/photos/3768998/pexels-photo-3768998.jpeg?auto=compress&cs=tinysrgb&w=400" alt=''/>
                <img src="https://images.pexels.com/photos/1271985/pexels-photo-1271985.jpeg?auto=compress&cs=tinysrgb&w=400" alt=''/>
                <img src="https://images.pexels.com/photos/5998044/pexels-photo-5998044.jpeg?auto=compress&cs=tinysrgb&w=400" alt=''/>
                <img src="https://images.pexels.com/photos/3768136/pexels-photo-3768136.jpeg?auto=compress&cs=tinysrgb&w=400" alt=''/>
                <img src="https://images.pexels.com/photos/3021351/pexels-photo-3021351.jpeg?auto=compress&cs=tinysrgb&w=400" alt=''/>
                <img src="https://images.pexels.com/photos/5490377/pexels-photo-5490377.jpeg?auto=compress&cs=tinysrgb&w=400" alt=''/>
                <img src="https://images.pexels.com/photos/3021329/pexels-photo-3021329.jpeg?auto=compress&cs=tinysrgb&w=400" alt=''/>
                <img src="https://images.pexels.com/photos/3021325/pexels-photo-3021325.jpeg?auto=compress&cs=tinysrgb&w=400" alt=''/>
                <img src="https://images.pexels.com/photos/3021352/pexels-photo-3021352.jpeg?auto=compress&cs=tinysrgb&w=400" alt=''/>
            </div>
            <button>VIEW MORE<ArrowForwardIosIcon style={{fontSize:20}}/></button>
        </div>
    )
}

export default PhotoGallery