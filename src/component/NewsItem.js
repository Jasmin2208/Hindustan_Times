import React from 'react'

const NewsItem = (props) => {
    let { title, description, imgUrl, newsUrl, date, author, source } = props
    return (
        <div className='my-3'>
            <div className="card mx-4" style={{ width: "22rem", height: "34rem" }}><span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: "90%", zIndex: "1" }}>
                {source}
                <span className="visually-hidden">unread messages</span>
            </span>
                <img src={!imgUrl ? "https://images.odishatv.in/uploadimage/library/16_9/16_9_5/recent_photo_1681100040.webp" : imgUrl} className="card-img-top" alt="Img" style={{ height: "17rem" }} />
                <div className="card-body">
                    <h5 className="card-title">{title}... </h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-body-secondary">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target='_blank' rel="noreferrer" className="btn dtn-sm  btn-primary" style={{ position: " absolute", bottom: "5px", left: "5px" }}>Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem