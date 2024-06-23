import {createSlice} from '@reduxjs/toolkit'

const initialState = [
    {id: 1, topic: 'Find Dev and IT professionals to scale your business.', skills: '989 Skills', sub: '45 Sub-categories', profile: '1011 profiles' },
    {id: 2, topic: 'Explore Creative individuals with a keen eye for detail.', skills: '989 Skills', sub: '45 Sub-categories', profile: '1011 profiles' }
]

const itDetailsSlice = createSlice({
    name: 'its',
    initialState,
    reducers: {}
})

export const allIts = (state) => state.its

export default itDetailsSlice.reducer
