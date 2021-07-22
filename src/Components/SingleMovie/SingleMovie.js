import React, { Component } from 'react'
import { img_300, unavailable } from '../../Config'
import './SingleMovie.css'

export default class SingleMovie extends Component {


    // this.loadMore = this.loadMore.bind(this);



    render() {
        const { title, poster, id, date, media_type, vote_average } = this.props;

        return (
            <div className="media">

                <img src={poster ? `${img_300}/${poster}` :
                    unavailable} alt={title} />
                <b className="title">{title}</b>
                <span className="subTitle">
                    {media_type === "movie" ? "Movie" : "Series"}
                    <span className="subtitle">{date}</span>
                </span>

            </div>
        )
    }
}
