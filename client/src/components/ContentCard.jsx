function ContentCard({ content, onDeleteContent, onEditContent }) {
    const { id, comment, rating, user_id } = content

    const handleDelete = () => {
        fetch(`/api/contents/${id}`, {
            method: 'DELETE',
        })
        onDeleteContent(id)
        window.location.reload();
    }

    return (
        <div>
            <img src={"https://pbs.twimg.com/profile_images/1237550450/mstom_400x400.jpg"} width="250" alt="https://pbs.twimg.com/profile_images/1237550450/mstom_400x400.jpg" />
            <p>"{comment}"</p>
            <p>{rating} / 5</p>
            <button onClick={handleDelete}>DELETE</button>
        </div>
    )

}

export default ContentCard