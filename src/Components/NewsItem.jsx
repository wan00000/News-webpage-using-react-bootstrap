import React from 'react';
import image from 'C:/Users/cyber/OneDrive - Universiti Putra Malaysia/Desktop/WHERE THINGS STARTED/news-mag/src/assets/news.png';

const NewsItem = ({ title, description, src, url }) => {
    return (
        <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px" }}>
            <img src={src ? src : image} style={{ height: "200px", width: "325px" }} className="card-img-top" alt="..." />
            <div className="card-body" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                <h5 className="card-title" style={{ color: "#fff" }}>{title.slice(0, 50)}</h5>
                <p className="card-text" style={{ color: "#fff" }}>{description ? description.slice(0, 90) : "News is the current event. It is information about something that just happened."}</p>
                <a href={url} className="btn btn-primary">Read More</a>
            </div>
        </div>
    )
}

export default NewsItem;
