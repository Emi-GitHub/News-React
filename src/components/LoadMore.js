import React from 'react';
import NewsCard from './NewsCard';
import '../styles/MyStyle.css';

function LoadMore(props) {
    const news = props.news.map((item, i=0)=> {
        i=i+1;
        if(i>16) return (<NewsCard key={item.url} item={item} pic={item.urlToImage} />)
        return true;
    }); 
    return (
        <div>
            {props.topHeadlines ? <h2 className="HeaderTop">Top headlines</h2> : null}
            {news}
        </div>
    )
}

export default LoadMore;