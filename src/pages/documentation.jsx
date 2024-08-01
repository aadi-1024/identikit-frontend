import { useState, useEffect } from 'react';
import   Axios  from 'axios';
import { useParams } from 'react-router-dom';
import Markdown from 'react-markdown';
import './analysis.css';

const Documentation = () => {
    const [Result, setResult] = useState('');
    const { id }  = useParams();
    useEffect(() => {
      const fetchResult = async () => {
        try {
          const response = await Axios.post(`http://127.0.0.1:8080/snippets/docs/${id}`);
          setResult(response.data.data);
          
         
        } catch (err) {
          console.log('Error fetching snippets: ' + (err.response?.data?.data || err.message));
         
        }
      };
      fetchResult();
  }, [id]);
  return (
    <div class="main-div">
      <h1>Documentation Result</h1>
      <Markdown>{Result}</Markdown>
    </div>
  )
}

export default Documentation
