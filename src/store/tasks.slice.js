import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from '../api/axios'

const initialState = {
  tasks: [],
  columns: [],
  error: null,
  isLoading: false
}

export const fetchTasks = createAsyncThunk(
    'tasks/fetchTasks',
    async (params, {rejectWithValue}) => {
      try {
        const {data} = await axios.get('/api/tasks', {params})

        return data
      } catch (e) {
        return rejectWithValue(e.response?.data)
      }
    })

export const fetchColumns = createAsyncThunk(
    'tasks/fetchColumns',
    async (params, {rejectWithValue}) => {
      try {
        const {data} = await axios.get('/api/columns', {params})

        return data
      } catch (e) {
        return rejectWithValue(e.response?.data)
      }
    }
)

export const createTask = createAsyncThunk(
    'tasks/createTask',
    async (payload, {rejectWithValue}) => {
      try {
        const {data} = await axios.post('/api/tasks', payload)

        return data
      } catch (e) {
        return rejectWithValue(e.response?.data)
      }
    })

const tasks = createSlice({
  name: 'tasks',
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchTasks.pending, state => {
      state.isLoading = true
    })
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.isLoading = false
      state.tasks = action.payload
    })
    builder.addCase(fetchTasks.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })

    builder.addCase(fetchColumns.pending, state => {
      state.isLoading = true
    })
    builder.addCase(fetchColumns.fulfilled, (state, action) => {
      state.isLoading = false
      state.columns = action.payload
    })
    builder.addCase(fetchColumns.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })

    builder.addCase(createTask.pending, state => {
      console.log('00000000')
      state.isLoading = true
    })
    builder.addCase(createTask.fulfilled, (state) => {
      console.log('0000000241')
      state.isLoading = false
    })
    builder.addCase(createTask.rejected, (state, action) => {
      console.log('9421491284911')
      state.isLoading = false
      state.error = action.payload
    })
  }
})

export default tasks.reducer