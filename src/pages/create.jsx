import { useState } from 'react';
import Axios from 'axios';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import './create.css';
// import './CreateSnippetForm.css';

const CreateSnippetForm = () => {
    const [name, setName] = useState('');
    const [language, setLanguage] = useState('');
    const [prefix, setPrefix] = useState('');
    const [body, setBody] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
  

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
      

        try {
            const response = await Axios.post('http://127.0.0.1:8080/snippets', {
                name,
                language,
                prefix:[prefix],
                body: [body],
                title,
                description
            });

            if (response.status === 201) {
               
                setName('');
                setLanguage('');
                setPrefix('');
                setBody('');
                setTitle('');
                setDescription('');
                console.log('Success');
               
            }
        } catch (err) {
            console.log('Error creating snippet: ' + err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='create-snippet-form'>
        <h2>Create a New Snippet</h2>
        <Form onSubmit={handleSubmit}>
            <FloatingLabel controlId="floatingName" label="Name" className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Enter snippet name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </FloatingLabel>

            <FloatingLabel controlId="floatingLanguage" label="Language" className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Enter snippet language"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    required
                />
            </FloatingLabel>

            <FloatingLabel controlId="floatingPrefix" label="Prefix" className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Enter snippet prefix"
                    value={prefix}
                    onChange={(e) => setPrefix(e.target.value)}
                    required
                />
            </FloatingLabel>

            <FloatingLabel controlId="floatingBody" label="Body" className="mb-3">
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter snippet body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                />
            </FloatingLabel>

            <FloatingLabel controlId="floatingTitle" label="Title" className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Enter snippet title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </FloatingLabel>

            <FloatingLabel controlId="floatingDescription" label="Description">
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter snippet description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </FloatingLabel>

                <Button variant="primary" type="submit" className="mt-3" disabled={loading}>
                    {loading ? 'Creating...' : 'Create Snippet'}
                </Button>
            </Form>

           
        </div>
    );
}

export default CreateSnippetForm;
