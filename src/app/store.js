import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from '../features/jobs/jobsSlice'
import itsReducer from '../features/it/itDetailsSlice'
import itPicturesReducer from '../features/it/itPicturesSlice';
import jobGetsReducer from '../features/jobs/jobGetSlice'
import startersReducer from '../features/jobs/startersSlice' 
import chooseJobsReducer from '../features/jobs/chooseJobsSlice'
import faqsReducer from '../features/about/faqsSlice'

export const store = configureStore({
    reducer: {
        jobs: jobsReducer,
        its: itsReducer,
        itPictures: itPicturesReducer,
        jobGets: jobGetsReducer,
        starters: startersReducer,
        chooseJobs: chooseJobsReducer,
        faqs: faqsReducer,
    }
})