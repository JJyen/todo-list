import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';

export const TodoListItem = ({todo}) => {
    const Id=todo.id;
    const [done,setDone]=useState(todo.done);
    const [ee,setEe]=useState(true);

    const fetchDone = async () => {
        try {
            setDone(!done);
            const res = await axios.patch(`https://todo3-2ab08-default-rtdb.firebaseio.com//todos/${Id}.json`,{
                done: !done,
            } );
            console.log(res);

        } catch (error) {
            console.error('Axios Error:', error);
        }
    };

    const handleCheck = () => {
        setDone(!done);
        fetchDone();
    }

    const handleDelete = async () => {
        try {
            const res=await axios.delete(`https://todo3-2ab08-default-rtdb.firebaseio.com/todos/${Id}.json`);
            setEe(false);
            console.log(res)
        } catch (error) {
            console.error('Axios Error:', error);
        }
    }
    
    return(
         <>
         {ee && 
         <ListItemContainer>
            <input type="checkbox" className="check-btn" checked={done} onChange={handleCheck} onClick={handleCheck}/>
            <span>{todo.text}</span>
            <input type='button' value={"삭제"} className="delete-btn" onClick={handleDelete}/>
         </ListItemContainer>}
        </>
    )
}

const ListItemContainer = styled.div`
width: 500px;
height: 60px;
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 2px solid  #B4B4B4;

    .check-btn {
        margin-left: 20px;
    }

    span {
        font-size: 25px;
    }

    .delete-btn {
        background-color: #e9ecef;
        border: none;
        margin-right: 20px;
        font-size: 15px;
    }

`