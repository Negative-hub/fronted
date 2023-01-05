import React, {useEffect, useCallback, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {fetchTasks, createColumn, fetchTasksByUser} from "../store/tasks.slice.js";
import Column from "../components/Column/index.jsx";
import './tasks.css'

const Tasks = () => {
  const dispatch = useDispatch()
  const columns = useSelector((state) => state.tasks.tasks)
  const user = useSelector((state) => state.auth.user)
  const [query, setQuery] = useState('')

  const addColumnHandler = useCallback(async () => {
    await dispatch(createColumn({title: 'Новая колонка', description: 'Новая колонка'}))
  }, [dispatch])

  useEffect(() => {
    if (user) {
      if (user.is_moderator) {
        dispatch(fetchTasks({query: query.trim() ? query : undefined}))
      } else {
        dispatch(fetchTasksByUser({user: user, query: query.trim() ? query : undefined}))
      }
    }
  }, [dispatch, query, user])

  return (
      <>
        <input type="text" value={query} onChange={e => setQuery(e.target.value)} className='input__query'/>

        <div className='flex gap-x-2 overflow-y-scroll'>
          {columns?.map(column => <Column key={column.id} column={column}/>)}
          {
              user?.is_moderator &&
              <Column>
                <div className='plus' onClick={addColumnHandler}/>
              </Column>
          }
        </div>
      </>

  )
}

export default Tasks