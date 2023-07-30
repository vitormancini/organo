import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

import './employeeCard.css'

function EmployeeCard(props) {

    function handleDelete(id) {
        props.handleDeleteEmployee(id);
    }

    return(
        <div className='employeeCard'>
            <AiFillCloseCircle className='deleteButton' onClick={() => handleDelete(props.employee.id)} />
            <div className='topContainer' style={{ backgroundColor: `${props.squad.color}` }}></div>
            <img className='avatar' src={props.employee.image} alt='avatar'/>
            <h4 className='employeeName'>{props.employee.name}</h4>
            <h6 className='employeeRole'>{props.employee.role}</h6>
            <div className='favorite'>
                {
                    props.employee.favorite ? <AiFillHeart className='favIcon' onClick={() => props.handleFavorite(props.employee.id)}/> : <AiOutlineHeart className='favIcon' onClick={() => props.handleFavorite(props.employee.id)}/>
                }
            </div>
        </div>
    );
}

export default EmployeeCard;