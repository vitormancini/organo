import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.css';

import Header from './Header';
import Form from './Form';
import TeamArea from './TeamArea';

function App() {

  const [squads, setSquads] = useState([
    {
      id: uuidv4(),
      name: 'Programação',
      color: '#57C278',
    },
    {
      id: uuidv4(),
      name: 'Front End',
      color: '#82CFFA',
    },
    {
      id: uuidv4(),
      name: 'Data Science',
      color: '#A6D157',
    },
    {
      id: uuidv4(),
      name: 'DevOps',
      color: '#E06B69',
    },
    {
      id: uuidv4(),
      name: 'UX e Design',
      color: '#DB6EBF',
    },
    {
      id: uuidv4(),
      name: 'Mobile',
      color: '#FFBA05',
    },
    {
      id: uuidv4(),
      name: 'Inovação e Gestão',
      color: '#FF8A29',
    },
  ]);

  const[name, setName] = useState('');
  const[role, setRole] = useState('');
  const[image, setImage] = useState('');
  const[squad, setSquad] = useState('');

  const[employees, setEmployees] = useState([]);

  function handleFormSubmit(name, role, image, squad) {
    let employee = { id: uuidv4(), name, role, image, squad, favorite: false };
    setEmployees([...employees, employee]);
  }

  function squadRegister(name, color) {
    let squad = { id: uuidv4(), name, color };
    setSquads([...squads,squad]);
  }

  function handleFavorite(id) {
    setEmployees(employees.map(employee => {
      if (employee.id === id) {
        employee.favorite = !employee.favorite;
      }
      return employee;
    }))
  }

  function changeTeamColor(color, id) {
    setSquads(squads.map(squad => {
      if (squad.id === id) {
        squad.color = color;
      }
      return squad;
    }));
  }

  function deleteEmployee(id) {
    setEmployees(employees.filter(employee => employee.id !== id));
  }

  return (
    <div className="App">
      <Header />
      <Form squads={squads} handleFormSubmit={handleFormSubmit} squadRegister={squadRegister} />
      <span className='myOrg'>Minha organização</span>

      <br />
      <br />

      {
        squads.map(squad => {
          return(
            <TeamArea 
              key={squad.name}
              squad={squad}
              changeTeamColor={changeTeamColor}
              deleteEmployee={deleteEmployee}
              handleFavorite={handleFavorite}
              employees={employees.filter(employee => employee.squad === squad.name)}
            />
          )
        })
      }
    </div>
  );
}

export default App;
