import axios, { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser } from '../../model/IUser';

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(userSlice.actions.userFetching());
//         const response = await axios.get<IUser[]>(`https://jsonplaceholder.typicode.com/users/j`);
//         dispatch(userSlice.actions.userFetchingSuccess(response.data));
//     } catch (err) {
//
//         if (err instanceof Error) {
//             dispatch(userSlice.actions.userFetchingError(err.message));
//         } else {
//             console.log('Unexpected error', err);
//             dispatch(userSlice.actions.userFetchingError('Unexpected error ' + err));
//         }
//     }
//
// };

export const fetchUsers = createAsyncThunk(
  'user/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      return response.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        return thunkAPI.rejectWithValue(err.message);
      }
    }
  },
);
