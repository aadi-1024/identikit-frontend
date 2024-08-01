import { useState, useEffect } from 'react';
import   Axios  from 'axios';
import { useParams } from 'react-router-dom';
import Markdown from 'react-markdown';

const SecAnalysis = () => {
    const [analysisResult, setAnalysisResult] = useState('');
    const { id}  = useParams();
    useEffect(() => {
      const fetchResult = async () => {
        try {
          const response = await Axios.post(`http://127.0.0.1:8080/snippets/security/${id}`);
          setAnalysisResult(response.data.data);
          
         
        } catch (err) {
          console.log('Error fetching snippets: ' + (err.response?.data?.Message || err.message));
         
        }
      };
      fetchResult();
  }, [id]);
  return (
    <div>
     
      <h1>Analysis Result</h1>
      <Markdown>{analysisResult}</Markdown>
    </div>
  )
}

export default SecAnalysis
