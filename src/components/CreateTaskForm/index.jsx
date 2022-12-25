import React, {useEffect, useState} from 'react';
import {Button, Form, Dropdown} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {fetchColumns, createTask} from "../../store/tasks.slice.js";

const CreateTaskForm = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.auth)
  const columns = useSelector(state => state.tasks.columns)

  useEffect(() => {
      dispatch(fetchColumns())
  }, [])

  useEffect(() => {
    if (user) {
      setTaskData({...taskData, user_id: 1})
    }
  }, [user])

  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    column_id: null,
  })

  const createTaskHandler = async () => {
    console.log(taskData)
    await dispatch(createTask(taskData))
  }

  return (
      <Form className='submit__form'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Название таски</Form.Label>
          <Form.Control
              placeholder="Enter title"
              onChange={event => setTaskData({...taskData, title: event.target.value})}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Описание таски</Form.Label>
          <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={event => setTaskData({...taskData, description: event.target.value})}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Выберите столбец</Form.Label>
          <Dropdown className='bg-success w-100 border'>
            <Dropdown.Toggle variant="success" className='w-100' id="dropdown-basic">
              {columns?.find(column => column.id === taskData.column_id)?.title || 'Выберите столбик'}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <>
                {columns?.map(column =>
                    <Dropdown.Item onClick={event => setTaskData({...taskData, column_id: +event.target.id})} key={column.id} id={column.id}>
                      {column.title}
                    </Dropdown.Item>
                )}
              </>
            </Dropdown.Menu>
          </Dropdown>
        </Form.Group>

        <Button
            className='bg-success'
            variant="success"
            onClick={createTaskHandler}
        >
          Создать
        </Button>
      </Form>
  );
};

export default CreateTaskForm;