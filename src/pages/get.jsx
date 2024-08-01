import { useEffect,useState } from "react";
import Axios from "axios";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { Link } from "react-router-dom";
const Get = () => {
   
    const [snippets, setSnippets] = useState([]);
 
    useEffect(() => {
        const fetchSnippets = async () => {
          try {
            const response = await Axios.get('http://127.0.0.1:8080/snippets');
            setSnippets(response.data.data);
         
           
          } catch (err) {
            console.log('Error fetching snippets: ' + (err.response?.data?.Message || err.message));
           
          }
        };
        fetchSnippets();
    }, []);
    
  return (
    <Container className='d-flex flex-row justify-content-center align-items-center flex-wrap gap-3 ' >
         {snippets.length === 0 ? (
                <p>No snippets found</p>
            ) : (
                snippets.map(snippet => (
                       
                        <Row  key={snippet.id} className="mt-3 mx-1 h-max-content">
                          <Col style={{ borderRadius:'10px', backgroundColor:'beige'}}><h2>{snippet.name}</h2>
                          <p>{snippet.description}</p>
                           <p>{snippet.body}</p>
                          <p>{snippet.prefix}</p>
                        <Link to={`/snippets/generate-documentation/${snippet.id}`}>
                            <Button className="mx-1 " style={{backgroundColor:' rgb(121, 53, 230)', border:'none',height:'2.5rem'}}>Generate Documentation</Button>
                            <Link to={`/snippets/generate-security-analysis/${snippet.id}`}>
                            <Button className="mx-1 " style={{backgroundColor:' rgb(121, 53, 230)', border:'none',height:'2.5rem'}}>Generate Security Analysis</Button>
                         </Link>
                        </Link></Col>

                        </Row>
                    
                    // <div key={snippet.id}>
                    //     <h3>{snippet.name}</h3>
                    //     <p>{snippet.description}</p>
                    //     <p>{snippet.body}</p>
                    //     <p>{snippet.prefix}</p>
                    //     <Link to={`/snippets/generate-documentation/${snippet.id}`}>
                    //         <button>Generate Documentation</button>
                    //     </Link>
                    //     <Link to={`/snippets/generate-security-analysis/${snippet.id}`}>
                    //         <button>Generate Security Analysis</button>
                    //     </Link>
                    // </div>

                    
                ))
                
              
            )}
            
      
            </Container>
  )
}

export default Get
