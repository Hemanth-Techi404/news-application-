import React from 'react';
import { ExternalLink, Calendar, Globe } from 'lucide-react';

const ArticleCard = ({ article }) => {
  const formattedDate = new Date(article.pubDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
  
  const truncateText = (text, maxLength) => {
    if (!text) return '';
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
  };

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
      {article.image_url && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={article.image_url} 
            alt={article.title} 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://images.pexels.com/photos/3771055/pexels-photo-3771055.jpeg';
            }}
          />
        </div>
      )}
      
      <div className="p-5">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <div className="flex items-center mr-4">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center">
            <Globe className="h-4 w-4 mr-1" />
            <span>{article.source_id}</span>
          </div>
        </div>
        
        <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">{article.title}</h2>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {truncateText(article.description || article.content, 150)}
        </p>
        
        <a 
          href={article.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
        >
          Read more
          <ExternalLink className="ml-1 h-4 w-4" />
        </a>
      </div>
    </article>
  );
};

export default ArticleCard;