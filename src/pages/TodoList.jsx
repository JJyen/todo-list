import axios from 'axios';
import { useState, useRef,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Todos } from "../components/Todos"
import styled from 'styled-components';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const TodoList = () => {
    const [todos,setTodos]=useState([]);
    const [todo,setTodo]=useState("");
    const nextId=useRef(0);

    const onInsert = (text) => {

        const addTodo = {
            id: nextId.current,
            text,
            done: false,
        };

        setTodos([...todos, addTodo]);
        nextId.current += 1;

        putServer(addTodo);
    }

    const onClick = () => {
        onInsert(todo);
        setTodo('');
    }

    const putServer = async (todo) => {
        const Id=todo.id;
        try {
            const res = await axios.put(`https://todo3-2ab08-default-rtdb.firebaseio.com/todos/${Id}.json`, todo);
            console.log(res.data);

        } catch (error) {
            console.error('Axios Error:', error);
        }
    };

    const fetchTodos = async () => {
        try {
            const res = await axios.get('https://todo3-2ab08-default-rtdb.firebaseio.com/todos.json');
            const todosData = res.data;
            
            if (todosData) {
                const todosArray = Object.keys(todosData).map((key) => ({
                    id: key,
                    ...todosData[key],
                }));
                setTodos(todosArray);
                console.log(todosArray)
            } 
        } catch (error) {
            console.error('Axios Error:', error);
        }
    };
    
    
    useEffect(() => {
        fetchTodos();
    }, []);


    return(
        <>
        <TodoListContainer>
            <LinkHome to='/'><ArrowBackIcon/></LinkHome>
            <p>LIST</p>
            <form style={{ display: 'flex', alignContent: 'center' }}>
                <input type="text" value={todo} placeholder='할 일 입력하기' className='input-todo' onChange={e=>setTodo(e.target.value)}/>
                <input type="button" value={"+"} className='add-todo' onClick={onClick}/>
            </form>
            <Todos todos={todos}/>
            </TodoListContainer>
        </>
    )
} 

const TodoListContainer = styled.div`
width: 500px;
height: 700px;
margin: auto;
margin-top: 100px;
display: flex;
flex-direction: column;
align-items: center;
border: 2px solid #B4B4B4;

    p {
        font-size: 50px;
        font-weight: 600;
        margin: 20px 0px;
        color: #929294;
    }

    .input-todo {
        background-color:#e9ecef;
        border-width: 0 0 2px;
        border-color: #B4B4B4;
        width: 406px;
        height: 50px;
        font-size: 20px;
        padding-left: 20px;

        &:focus {outline: none;}
    }

    .add-todo {
        width: 70px;
        background-color:#e9ecef;
        border-width: 0 0 2px;
        border-color: #FFF;
        font-size: 40px;
        color: #B4B4B4;

        &:focus {outline: none;}
    }

`

const LinkHome = styled(Link)`
color: #929294;
font-size: large;
margin-right: 470px;
margin-top: 5px;
`



