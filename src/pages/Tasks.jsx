import React, {useEffect, useCallback} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {fetchTasks, createColumn} from "../store/tasks.slice.js";
import Column from "../components/Column/index.jsx";
import './tasks.css'

const Tasks = () => {
  const dispatch = useDispatch()
  const columns = useSelector((state) => state.tasks.tasks)

  const addColumnHandler = useCallback(async () => {
    await dispatch(createColumn({title: 'Новая колонка', description: 'Новая колонка'}))
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchTasks())
  }, [dispatch])

  return (
      <div className='flex gap-x-2 overflow-y-scroll'>
        {columns?.map(column => <Column key={column.id} column={column}/>)}
        <Column>
          <div className='plus' onClick={addColumnHandler}/>
        </Column>
      </div>
  )
}

export default Tasks