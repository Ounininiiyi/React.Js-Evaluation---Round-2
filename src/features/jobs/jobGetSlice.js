import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {id: 1, step: 'Step 1: ', activity: 'Resume Screening', details: ''},
    {id: 2, step: 'Step 2: ', activity: 'Video Interview', details: 'Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.'},
    {id: 3, step: 'Step 3: ', activity: 'Technical Evaluation', details: ''},
    {id: 4, step: 'Step 4: ', activity: 'Application Review', details: ''},
    {id: 5, step: 'Step 5: ', activity: 'Lets get to work', details: ''}
]

const jobGetSlice = createSlice({
    name: 'jobGets',
    initialState,
    reducers: {}
})

export const allJobGets = (state) => state.jobGets

export default jobGetSlice.reducer
