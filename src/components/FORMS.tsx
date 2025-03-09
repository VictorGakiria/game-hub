/*import React, { useState } from 'react';

const Form: React.FC = () => {
    const [description, setDescription] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Description:', description);
    };

    return (
        <div style={{ backgroundColor: 'white', color: 'black', minHeight: '100vh', padding: '20px' }}>
            <form onSubmit={handleSubmit} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px' }}>
                <div>
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        style={{ width: '450px', backgroundColor: 'white', border: '1px solid black' }}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;

*/