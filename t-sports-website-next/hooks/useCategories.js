import { useState } from 'react';

const useCategories = (initialContent, initialCategory = 'All') => {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [filteredContent, setFilteredContent] = useState(initialContent);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredContent(initialContent);
    } else {
      setFilteredContent(initialContent.filter(content => content.category === category));
    }
  };

  return {
    selectedCategory,
    filteredContent,
    handleCategoryChange,
  };
};

export default useCategories;