import {createSlice} from '@reduxjs/toolkit'

const initialState = [
    {
        id: 1, 
        platform: 'find work',
        categories: 'data Science',
        help: "FAQ's",
        get: 'instagram'
    },
    {
        id: 2, 
        platform: 'find talent',
        categories: 'IT & networking',
        help: 'contact us',
        get: 'linkedin'
    },   
    {
        id: 3,
        platform: 'categories',
        categories: 'web & mobile',
        help: '',
        get: 'twitter'
    },
    {
        id: 4,
        platform: 'about us'
    }
]

const faqsSlice = createSlice({
    name: 'faqs',
    initialState,
    reducers: {}
})

export const allFaqs = (state) => state.faqs

export default faqsSlice.reducer