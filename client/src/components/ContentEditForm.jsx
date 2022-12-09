import React, { useState } from "react";

function ContentEditForm({ onEditContent, contentID }) {
    const [rating, setRating] = useState('')
    const [comment, setComment] = useState('')

    // SENDS PATCH REQUEST TO EDIT CONTENT
    const handleEdit = () => {
        e.preventDefault()
        fetch(`/api/contents/${contentID}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                rating: rating, 
                comment: comment
            }),
        })
        .then((r)=>r.json())
        .then((updatedContent) => {
            onEditContent(updatedContent);
        })
    }

    return (
        <div>
            <label>Edit</label>
            <form onSubmit={handleEdit}>
                <div>
                    <label>New Comment</label>
                    <input
                        type="text"
                        id="comments"
                        name="comments"
                        onChange={(e) => {
                            setComment(e.target.value);
                        }}
                        value={comment}
                    />
                    <label>New Rating</label>
                    <input
                        placeholder="ex: 1, 3, 5"
                        type="number"
                        min="1"
                        max="5"
                        id="rating"
                        name="rating"
                        onChange={(e) => {
                            setRating(e.target.value);
                        }}
                        value={rating}
                    />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default ContentEditForm;