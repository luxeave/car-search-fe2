import { useState } from 'react';
import { SearchForm } from './components/SearchForm';
import { searchItems } from './utils/api';
import { AlertCircle } from 'lucide-react';

interface SearchCriteria {
  // Add properties for search criteria here
}

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState<any[]>([]);

  const handleSearch = async (criteria: SearchCriteria) => {
    setError('');
    setLoading(true);
    try {
      const data = await searchItems(criteria as unknown as Record<string, string>);
      setResults(data);
    } catch (err) {
      setError('Failed to fetch results. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Search Items</h1>
          <SearchForm onSearch={handleSearch} />
        </div>

        {loading && (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-8">
            <div className="flex">
              <AlertCircle className="h-5 w-5 text-red-400" />
              <p className="ml-3 text-red-700">{error}</p>
            </div>
          </div>
        )}

        {!loading && !error && results.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Model
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Length (cm)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Weight (kg)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Max Velocity (km/h)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Color
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {results.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.model}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.lengthCm}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.weightKg}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.maxVelocityKmH}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div className="flex items-center">
                        <span className="h-4 w-4 rounded-full mr-2" style={{ backgroundColor: item.color.toLowerCase() }}></span>
                        {item.color}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {!loading && !error && results.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No results found. Try adjusting your search criteria.
          </div>
        )}
      </div>
    </div>
  );
}

export default App;