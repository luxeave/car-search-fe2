export async function searchItems(criteria: Record<string, string>) {
  const searchParams = new URLSearchParams();
  
  // Map criteria to API parameters
  const criteriaMapping: Record<string, string> = {
    minLength: 'minLengthCm',
    maxLength: 'maxLengthCm',
    minWeight: 'minWeightKg',
    maxWeight: 'maxWeightKg',
    minVelocity: 'minMaxVelocityKmH',
    maxVelocity: 'maxMaxVelocityKmH',
    color: 'color',
  };

  // Add search criteria
  Object.entries(criteria).forEach(([key, value]) => {
    if (value && criteriaMapping[key]) {
      searchParams.append(criteriaMapping[key], value);
    }
  });

  // Add pagination parameters
  searchParams.append('page', '0');
  searchParams.append('size', '20');

  try {
    const response = await fetch(`/api/cars/search?${searchParams.toString()}`);
    if (!response.ok) {
      throw new Error('Search failed');
    }
    const data = await response.json();
    return data.content || [];
  } catch (error) {
    console.error('Search error:', error);
    throw error;
  }
}