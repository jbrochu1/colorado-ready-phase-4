import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import CommentForm from "./CommentForm";
import ContentList from "./ContentList"

function PlaceDetails({ updateUser, currentUser, handleNewContent }) {
    const [place, setPlace] = useState(null)
    const [placeContents, setPlaceContents] = useState([])
    const { id } = useParams()

    function handleDeleteContent(id) {
        const updatedContent = placeContents.filter((content) => content.id !== id);
        setPlaceContents(updatedContent)
    }

    // const handleNewContent = (newContent) => {
    //     setPlaceContents((placeContents) => [...placeContents, newContent])
    // }

    const handleEditContent = (updatedContent) => {
        setPlaceContents(placeContents => placeContents.map(oldContent => {
            if (oldContent.id === updatedContent.id) {
                return updatedContent;
            } else {
                return oldContent;
            }
        }))
    }

    useEffect(() => {
        fetch(`/api/places/${id}`)
            .then((r) => r.json())
            .then((place) => {
                setPlace(place);
                setPlaceContents(place.contents);
            });
    }, [id]);

    if (!place) return <h1>"Oops! There's nothing here ¯\_(ツ)_/¯"</h1>;

    const { name, address, category, image, hours, elevation, kid_friendly, contents } = place

    return (
        <>
            <div>
                <img src={image} alt="loading..." />
                <h2>Name: {name}</h2>
                <p>Category: {category}</p>
                <p>Address: {address}</p>
                <p>Hours: {hours}</p>
                <p>Elevation: {elevation}'</p>
                {kid_friendly ? <p>Kids ok!</p> : <p>Adults only</p>}
            </div>
            <CommentForm
                place={place}
                updateUser={updateUser}
                currentUser={currentUser}
                onNewContent={handleNewContent}
            />
            {contents.length > 0
                ? <ContentList
                    place={place}
                    contents={contents}
                    onDeleteContent={handleDeleteContent}
                    onEditContent={handleEditContent}
                />
                : <h1>Nothing here, add some content!</h1>}
        </>
    )
}

export default PlaceDetails