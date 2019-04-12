import { useState, useEffect } from 'react';
import axios from 'axios';

import { TOKEN } from '../../config/config';

const useGetResource = (resourceType) => {
  const [resource, setResource] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:8080/${resourceType}`, { headers: {
      'Authorization': `Bearer ${TOKEN}`
    }})
    .then((response) => {
      setResource(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, [resourceType])

  return resource;
}

export default useGetResource;