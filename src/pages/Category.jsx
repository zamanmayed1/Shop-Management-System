import React, { useEffect, useState } from 'react';
import CategoryCard from '../components/cards/CategoryCard';
import Spinner from '../components/Spinner';
import { useGetCategoryQuery } from '../redux/features/api/apiSlice';

const Categories = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCategories, setFilteredCategories] = useState([]);
const {isLoading, data,isSuccess} = useGetCategoryQuery()


  useEffect(() => {
    // Use the filter method to filter categories when data changes
    const filtered = data?.filter((category) =>
      category.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCategories(filtered);
  }, [data, searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 bg-blue-50/40 p-2 rounded-md">
        <h1 className="text-2xl font-semibold">All Categories</h1>
        <div className="flex justify-between mt-2">
          <p className="text-gray-600">
            Total Categories: {filteredCategories?.length}
          </p>
          {/* Step 4: Use the searchQuery state */}
          <input
            type="text"
            placeholder="Search Categories"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {isLoading ? ( // Render the spinner when loading is true
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {filteredCategories?.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Categories;
