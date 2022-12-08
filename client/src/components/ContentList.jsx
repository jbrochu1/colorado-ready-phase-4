import ContentCard from './ContentCard'

function ContentList({ place, contents, onDeleteContent, onEditContent }) {

    // Theory to get user data:
    // create a fetch statement here to '/api/contents' with the related place_id
    // map through a specific content for each user and it's data...?

    const contentCard = contents.map(content => {
        return (
            <ContentCard
                key={content.id}
                content={content}
                onDeleteContent={onDeleteContent}
                onEditContent={onEditContent}
                place={place}
            />
        )
    })

    return (
        <div>
            <h2>Community Experiences</h2>
            <ul>
                <li>
                    {contentCard}
                </li>
            </ul>
        </div>
    )

}

export default ContentList