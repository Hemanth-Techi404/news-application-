import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import ArticleList from './components/ArticleList';
import { fetchNews } from './services/api';

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);
  const [nextPage, setNextPage] = useState(undefined);
  const [sortBy, setSortBy] = useState('latest');

  const fetchArticles = useCallback(async (page) => {
    try {
      const isInitialLoad = !page;
      if (isInitialLoad) {
        setLoading(true);
      } else {
        setLoadingMore(true);
      }

      const response = await fetchNews(page);
      
      if (isInitialLoad) {
        setArticles(response.results);
      } else {
        setArticles(prev => [...prev, ...response.results]);
      }
      
      setNextPage(response.nextPage);
      
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch news'));
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  }, []);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  const handleLoadMore = () => {
    if (nextPage) {
      fetchArticles(nextPage);
    }
  };

  const handleSortChange = (newSortBy) => {
    if (sortBy !== newSortBy) {
      setSortBy(newSortBy);
      
      const sortedArticles = [...articles];
      if (newSortBy === 'latest') {
        sortedArticles.sort((a, b) => 
          new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
        );
      } else {
        sortedArticles.sort((a, b) => {
          const aPriority = a.source_priority || 0;
          const bPriority = b.source_priority || 0;
          return bPriority - aPriority;
        });
      }
      
      setArticles(sortedArticles);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onSortChange={handleSortChange} sortBy={sortBy} />
      
      <main>
        <ArticleList 
          articles={articles}
          loading={loading}
          error={error}
          onLoadMore={handleLoadMore}
          hasMoreArticles={!!nextPage}
          loadingMore={loadingMore}
        />
      </main>
      
      <footer className="bg-blue-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Daily News | 
            Powered by <a 
              href="https://newsdata.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-200 transition-colors"
            >
              NewsData.io
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;