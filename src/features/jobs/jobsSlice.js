import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {id: 1, techStack: 'phython developer', class: 'phython'},
    {id: 2, techStack: 'data scientist', class: 'data'},
    {id: 3, techStack: 'shopify developer', class: 'shopify'},
    {id: 4, techStack: 'shopify developer', class: 'shopify'},
    {id: 5, techStack: 'front end developer', class: 'frontEnd'},
    {id: 6, techStack: 'phython developer', class: 'phython'},
    {id: 7, techStack: 'MERN stack developer', class: 'mern'},
    {id: 8, techStack: 'shopify developer', class: 'shopify'},
    {id: 9, techStack: 'full stack developer', class: 'full'},
    {id: 10, techStack: 'full stack developer', class: 'full'},
    {id: 11, techStack: 'phython developer', class: 'phython'},
    {id: 12, techStack: 'Explore More', class: 'more'}
]

const jobsSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {}
})

export const allJobs = (state) => state.jobs

export default jobsSlice.reducer

