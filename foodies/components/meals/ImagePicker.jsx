'use client'

import { useRef, useState } from "react"
import classes from "./ImagePicker.module.css"
import Image from "next/image"
export default function ImagePicker({label, name}) {
    const imageInputRef = useRef()
    const [selectedImage, setSelectedImage] = useState();
    function handleClick() {
        imageInputRef.current.click()
    }
    function handleImageClick(event) {
        const file = event.target.files[0]

        if(!file) {
            setSelectedImage(null)
            return
        }
        const fileReader = new FileReader()
        fileReader.onload = () => {
            setSelectedImage(fileReader.result)
        }

        fileReader.readAsDataURL(file)
        
    }
    return(
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!selectedImage && <p>No image chosen</p>}
                    {selectedImage && 
                        <Image 
                            src={selectedImage} 
                            alt="Chosen image"
                            fill
                        />}

                </div>
                <input 
                ref={imageInputRef}
                className={classes.input}
                type="file"
                id={name}
                accept="image/pmg, image/jpeg"
                name={name}
                onChange={handleImageClick}
                required
                />
                <button className={classes.button} type="button" onClick={handleClick}>
                    Choose image
                </button>
            </div>
        </div>
    )
}