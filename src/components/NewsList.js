import React from 'react';
import NewsCard from './NewsCard';
import '../styles/NewsList.css';

function NewsList(props) {
    const news = props.news.map((item, i)=> {
        if(i < 20) return (<NewsCard key={item.url} item={item} pic={item.urlToImage} />)
        return true;
    }); 
    return (
        <div className="cards-wrapper">
            {news}
        </div>
    )
}

export default NewsList;