import React,{useState} from "react";
import {useDispatch} from 'react-redux'
import {addTodoAction} from "./store/schedule.action"
import uuid from 'uuid/v4'
import { MDBBtn } from "mdbreact";

const TodoInput = () => {
    const [todo, setTodo] = useState("")
    const dispatch = useDispatch()
    const addTodo = todo => dispatch(addTodoAction(todo))

    const handleChange = e => {
        e.preventDefault()
        setTodo(e.target.value)
    }
    const submitForm = e => {
        e.preventDefault()
        const newTodo = {
            todoId: uuid(),
            name: todo,
            complete: false
        }
        addTodo(newTodo)
        setTodo("")
    }

    return <>
            <form onSubmit={submitForm} method="POST">
                <div className="row mt-3">
                    <div className="form-group col-sm-8">
                        <input
                            type="text"
                            placeholder="Add a todo"
                            name="todo"
                            className="form-control"
                            value={todo}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-sm-4">
                        <MDBBtn gradient="peach" type="submit" className="btn btn-primary btn-md">
                            Add Todo
                        </MDBBtn>
                    </div>
                </div>
            </form>
        </>
}
export default TodoInput