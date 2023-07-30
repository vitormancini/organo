import './teamArea.css'

import hexToRgba from 'hex-to-rgba';

import EmployeeCard from '../EmployeeCard';

function TeamArea(props) {

    function handleDeleteEmployee(id) {
        props.deleteEmployee(id);
    }

    function handleColorChange(color, squadName) {
        props.changeTeamColor(color, squadName);
    }

    function handleFavorite(id) {
        props.handleFavorite(id);
    }

    return(
        props.employees.length > 0 &&
        <section className='teamAreaContainer' style={{ backgroundColor: hexToRgba(props.squad.color, '0.6') }}>
            <input 
                type='color' 
                className='colorTeamInput'
                value={props.squad.primaryColor} 
                onChange={event => handleColorChange(event.target.value, props.squad.id)} />
            <span style={{ borderBottom: `2px solid ${props.squad.color}` }}>{props.squad.name}</span>
            <div className='employeesCard'>
                {
                    props.employees.map(employee => {
                        return(
                            <EmployeeCard 
                                employee={employee}   
                                key={employee.name} 
                                squad={props.squad} 
                                handleDeleteEmployee={handleDeleteEmployee} 
                                handleFavorite={handleFavorite} />
                        )
                    })
                }
            </div>
        </section>
    );
}

export default TeamArea;