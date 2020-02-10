import React from 'react';
import NewsCard from './NewsCard';
import '../styles/NewsList.css'
import '../styles/MyStyle.css';

function LoadMore(props) {
    const news = props.news.map((item, i)=> {
        if(i>=20) return (<NewsCard key={item.url} item={item} pic={item.urlToImage} />)
        return true;
    }); 
    return (
        <div className="cards-wrapper">
            {props.topHeadlines ? <h2 className="header-top">Top headlines</h2> : null}
            {news}
        </div>
    )
}

export default LoadMore;