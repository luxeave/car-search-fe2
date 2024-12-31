import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchCriteria {
  model: string;
  minLength: string;
  maxLength: string;
  minWeight: string;
  maxWeight: string;
  minVelocity: string;
  maxVelocity: string;
  color: string;
}

interface SearchFormProps {
  onSearch: (criteria: SearchCriteria) => void;
}

export function SearchForm({ onSearch }: SearchFormProps) {
  const [criteria, setCriteria] = useState<SearchCriteria>({
    model: '',
    minLength: '',
    maxLength: '',
    minWeight: '',
    maxWeight: '',
    minVelocity: '',
    maxVelocity: '',
    color: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCriteria(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(criteria);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="space-y-2">
          <label htmlFor="model" className="block text-sm font-medium text-gray-700">
            Model
          </label>
          <input
            type="text"
            id="model"
            name="model"
            value={criteria.model}
            onChange={handleChange}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="minLength" className="block text-sm font-medium text-gray-700">
            Min Length (cm)
          </label>
          <input
            type="number"
            id="minLength"
            name="minLength"
            value={criteria.minLength}
            onChange={handleChange}
            min="0"
            max="1000"
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="maxLength" className="block text-sm font-medium text-gray-700">
            Max Length (cm)
          </label>
          <input
            type="number"
            id="maxLength"
            name="maxLength"
            value={criteria.maxLength}
            onChange={handleChange}
            min="0"
            max="1000"
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="minWeight" className="block text-sm font-medium text-gray-700">
            Min Weight (kg)
          </label>
          <input
            type="number"
            id="minWeight"
            name="minWeight"
            value={criteria.minWeight}
            onChange={handleChange}
            min="0"
            max="10000"
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="maxWeight" className="block text-sm font-medium text-gray-700">
            Max Weight (kg)
          </label>
          <input
            type="number"
            id="maxWeight"
            name="maxWeight"
            value={criteria.maxWeight}
            onChange={handleChange}
            min="0"
            max="10000"
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="minVelocity" className="block text-sm font-medium text-gray-700">
            Min Velocity (km/h)
          </label>
          <input
            type="number"
            id="minVelocity"
            name="minVelocity"
            value={criteria.minVelocity}
            onChange={handleChange}
            min="0"
            max="500"
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="maxVelocity" className="block text-sm font-medium text-gray-700">
            Max Velocity (km/h)
          </label>
          <input
            type="number"
            id="maxVelocity"
            name="maxVelocity"
            value={criteria.maxVelocity}
            onChange={handleChange}
            min="0"
            max="500"
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="color" className="block text-sm font-medium text-gray-700">
            Color
          </label>
          <input
            type="text"
            id="color"
            name="color"
            value={criteria.color}
            onChange={handleChange}
            pattern="^[a-zA-Z]+$"
            title="Color must contain only letters"
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Search className="h-4 w-4 mr-2" />
          Search
        </button>
      </div>
    </form>
  );
}