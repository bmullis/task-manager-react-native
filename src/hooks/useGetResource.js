import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetResource = (resourceType) => {
  const [resource, setResource] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:8080/${resourceType}`, { headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Yzk4ZTRhNGNmMzgxZTM3NDE4MDFkZWIiLCJpYXQiOjE1NTQ5MDQyODV9.Ncs8biguiSYWnwE6oVe6uDrhMSbVXamct2al5CTGD6M' 
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