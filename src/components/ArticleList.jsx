import React from 'react';
import ArticleCard from './ArticleCard';
import LoadingState from './LoadingState';
import ErrorState from './ErrorState';

const ArticleList = ({
  articles,
  loading,
  error,
  onLoadMore,
  hasMoreArticles,
  loadingMore
}) => {
  if (loading && articles.length === 0) {
    return <LoadingState />;
  }

  if (error && articles.length === 0) {
    return <ErrorState message={error.message} />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <ArticleCard key={`${article.title}-${index}`} article={article} />
        ))}
      </div>

      {articles.length > 0 && (
        <div className="mt-10 text-center">
          {hasMoreArticles ? (
            <button
              onClick={onLoadMore}
              disabled={loadingMore}
              className="px-6 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loadingMore ? 'Loading...' : 'Load More Articles'}
            </button>
          ) : (
            <p className="text-gray-500">No more articles to load</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ArticleList;