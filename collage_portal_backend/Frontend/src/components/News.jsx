// import React, { useState, useEffect } from 'react';

// const NewsCard = ({ newsItem }) => {
//   return (
//     <div className="card">
//       <h5 className="card-title">{newsItem.title}</h5>
//       <p className="card-text">{newsItem.description}</p>
//       <a href={newsItem.url} target="_blank" rel="noopener noreferrer">Read More</a>
//     </div>
//   );
// };

// const NewsSection = () => {
//   const [newsData, setNewsData] = useState([]);

//   useEffect(() => {
//     fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY')
//       .then(response => response.json())
//       .then(data => setNewsData(data.articles));
//   }, []);

//   return (
//     <div>
//       {newsData.map((newsItem, index) => <NewsCard key={index} newsItem={newsItem} />)}
//     </div>
//   );
// };

// export default  NewsSection;


// import React, { useState, useEffect } from 'react';

// const NewsCard = ({ newsItem }) => {
//   return (
//     <div className="card">
//       {newsItem.urlToImage && <img src={newsItem.urlToImage} alt={newsItem.title} />}
//       <div className="card-body">
//         <h5 className="card-title">{newsItem.title}</h5>
//         <p className="card-text">{newsItem.description}</p>
//         <a href={newsItem.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read More</a>
//       </div>
//     </div>
//   );
// };

// const NewsSection = () => {
//   const [newsData, setNewsData] = useState([]);

//   useEffect(() => {
//     fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY')
//       .then(response => response.json())
//       .then(data => setNewsData(data.articles));
//   }, []);

//   return (
//     <div>
//       {newsData.map((newsItem, index) => <NewsCard key={index} newsItem={newsItem} />)}
//     </div>
//   );
// };

// export default NewsSection;
