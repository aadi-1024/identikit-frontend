import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './snippet.css';
import { Link } from 'react-router-dom';



const Snippets = () => {
  
  return (
    <div className='parent'>
    <h1 style={{color:'white', margin:'2rem'}} >Get Started !</h1>
    <div className='cards-container'>

      <Card className='card-item'>
        <Card.Img variant="top" src="/img2.jpeg"style={{width:'18rem' ,height:'10rem' ,margin:'1rem', borderRadius: '10px' }} />
        <Card.Body className='d-flex flex-column align-items-flex-start justify-content-center '>
          <Card.Title className='text'>Get Snippets</Card.Title>
          <Card.Text >
            Get all the snippets you created and use it.
          </Card.Text>
          <Link to={`/snippets/get-snippets`}>
                            <Button className='btnsnippets' style={{backgroundColor:' rgb(121, 53, 230)' , border:'none'}}>Get</Button>
             </Link>
         
        </Card.Body>
      </Card>

      <Card className='card-item'>
        <Card.Img variant="top"  src="/img2.jpeg"style={{width:'18rem' ,height:'10rem',margin:'1rem', borderRadius: '10px'}}  />
        <Card.Body className='d-flex flex-column align-items-flex-start justify-content-center '>
          <Card.Title className='text'>Create Snippets</Card.Title>
          <Card.Text >
            Create a new snippet and save it for future use.
          </Card.Text>
          <Link to={`/snippets/create-snippets`}>
         <Button className='btnsnippets' style={{backgroundColor:' rgb(121, 53, 230)', border:'none'}}>Create</Button>
             </Link>
         
        </Card.Body>
      </Card>

     
    </div>
    </div>
  );
}


export default Snippets;
