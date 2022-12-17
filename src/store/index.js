import { configureStore } from '@reduxjs/toolkit';
import account from './AccountSlice';
export default configureStore ({
    reducer:{
        account
    }
})