import { useState } from 'react';

import './form.css';

function Form(props) {

    const[name, setName] = useState('');
    const[role, setRole] = useState('');
    const[image, setImage] = useState('');
    const[squad, setSquad] = useState(props.squads[0].name);

    const[squadName, setSquadName] = useState('');
    const[squadColor, setSquadColor] = useState('#000');

    function formSubmit(event) {
        event.preventDefault();
        props.handleFormSubmit(name, role, image, squad);
        setName('');
        setRole('');
        setImage('');
        setSquad(props.squads[0].name);
    }

    function handleNameChange(event) {
        setName(event.target.value)
    }

    function handleRoleChange(event) {
        setRole(event.target.value)
    }

    function handleImageChange(event) {
        setImage(event.target.value)
    }

    function handleSquadChange(event) {
        setSquad(event.target.value)
    }

    function squadRegister(event) {
        event.preventDefault();
        props.squadRegister(squadName, squadColor);
        setSquadName('');
        setSquadColor('#000');
    }

    return(
        <>
            <form className='employeeRegisterForm' onSubmit={formSubmit}>
                <h1 className='formTitle'>Preencha os dados do colaborador.</h1>
                <label htmlFor='nameInput'>Nome</label>
                <input 
                    type='text' 
                    className='nameInput' 
                    id='nameInput' 
                    value={name}
                    onChange={handleNameChange}
                    required/>
                <label htmlFor='roleInput'>Cargo</label>
                <input 
                    type='text' 
                    className='roleInput' 
                    id='roleInput' 
                    value={role}
                    onChange={handleRoleChange}
                    required/>
                <label htmlFor='imageInput'>Imagem</label>
                <input 
                    type='text' 
                    className='imageInput' 
                    id='imageInput' 
                    value={image}
                    onChange={handleImageChange}
                    required/>
                <label htmlFor='squadSelect'>Time</label>
                <select 
                    className='squadSelect' 
                    id='squadSelect'
                    onChange={handleSquadChange} 
                    value={squad}
                    required>
                    {
                        props.squads.map(squad => {
                            return(
                                <option key={squad.name} value={squad.name}>{squad.name}</option>
                            )
                        })
                    }
                </select>
                <input type='submit' className='sendFormButton' value='Criar Card'/>          
            </form>
            <form className='squadRegisterForm' onSubmit={squadRegister}>
                <h1 className='formTitle'>Cadastre um novo time.</h1>
                <label htmlFor='squadName'>Nome</label>
                <input 
                    type='text'
                    id='squadName'
                    className='squadName'
                    onChange={event => setSquadName(event.target.value)}   
                    value={squadName} 
                    required
                />
                <label htmlFor='squadColor'>Cor</label>
                <input 
                    type='color'
                    id='squadColor'
                    className='squadColor'
                    onChange={event => setSquadColor(event.target.value)}   
                    value={squadColor} 
                    required
                />
                <input type='submit' className='sendFormButton' value='Cadastrar'/> 
            </form>
        </>
    );
}

export default Form;