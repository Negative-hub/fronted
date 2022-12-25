import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../api/axios.js";

const initialState = {
  user: null,
  isLoading: false,
  error: null
}

export const login = createAsyncThunk('auth/login', async (userData, {rejectWithValue}) => {
  try {
    const {data} = await axios.post('/api/auth/login', userData)

    return data
  } catch (e) {
    console.log(e)
    return rejectWithValue(e?.response?.data)
  }
})

export const registration = createAsyncThunk('auth/reg', async (userData, {rejectWithValue}) => {
  try {
    const {data} = await axios.post('/api/users', userData)

    return data
  } catch (e) {
    return rejectWithValue(e?.response?.data)
  }
})

export const logout = createAsyncThunk('auth/logout', async (userData, {rejectWithValue}) => {
  try {
    const {data} = await axios.get('/api/auth/logout')

    return data
  } catch (e) {
    return rejectWithValue(e?.response?.data)
  }
})

const auth = createSlice({
  name: 'auth',
  initialState,

  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false
      console.log(action.payload, '124124')

      state.user = action.payload
    })
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false
      console.log(action.payload)
      state.error = action.payload
    })

    builder.addCase(registration.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(registration.fulfilled, (state, action) => {
      state.isLoading = false
      state.user = action.payload
      state.error = null
    })
    builder.addCase(registration.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })


    builder.addCase(logout.fulfilled, (state) => {
      state.user = null
      state.error = null
    })
    builder.addCase(logout.rejected, (state, payload) => {
      state.error = payload
    })
  }
})

export default auth.reducer