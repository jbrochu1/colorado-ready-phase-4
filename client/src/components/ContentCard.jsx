function ContentCard({ content, onDeleteContent, onEditContent, place }) {
    const { id, comment, rating, user } = content

    

    const handleDelete = () => {
        fetch(`/api/contents/${id}`, {
            method: 'DELETE',
        })
        .then(onDeleteContent)
    }

    return (
        <div>
            <img src={user.avatar_img} width="250" alt="https://pbs.twimg.com/profile_images/1237550450/mstom_400x400.jpg" />
            <p>"{comment}" - {user.username}, {user.state}</p>
            <p>{rating} / 5</p>
            <button onClick={handleDelete}>DELETE</button>
        </div>
    )

}

export default ContentCard