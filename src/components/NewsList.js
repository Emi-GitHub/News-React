import React from 'react';
import NewsCard from './NewsCard';
import '../styles/MyStyle.css';

function NewsList(props) {
    const news = props.news.map((item, i=0)=> {
        i=i+1;
        if(i<=20) return (<NewsCard key={item.url} item={item} pic={item.urlToImage} />)
        return true;
    }); 
    return (
        <div className="cards-wrapper">
            {news}
        </div>
    )
}

export default NewsList;