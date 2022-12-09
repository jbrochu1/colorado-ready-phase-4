import ContentEditForm from "./ContentEditForm"

function ContentCard({ content, onDeleteContent, onEditContent, currentUser }) {
    const { comment, rating, user } = content

    // DELETES THE COMMENT
    const handleDelete = () => {
        fetch(`/api/contents/${content.id}`, {
            method: 'DELETE',
        })
        onDeleteContent()
        window.location.reload();
    }

    return (
        <div>
            <img src={user.avatar_img} width="250" alt="No Image Uploaded" className="mx-auto"/>
            <p>"{comment}" - {user.username}, {user.location}</p>
            <p>{rating} / 5</p>
            {(currentUser.id === user.id) ? (<><button onClick={handleDelete} className='p-3 shadow bg-indigo-600 hover:bg-indigo-500 focus:shadow-outline focus:outline-none text-white font-bold rounded'>Delete</button><ContentEditForm onEditContent={onEditContent} contentID={content.id} /></>) : null}
        </div>
    )
}

export default ContentCard