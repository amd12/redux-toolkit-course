import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../model/IUser';
import { fetchUsers } from './ActionCreators';

interface UserState {
    user: IUser[] ;
    isLoading: boolean;
    error: string;
}

const initialState: UserState = {
  user: [],
  isLoading: false,
  error: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
      state.user = action.payload;
      state.isLoading = false;
      state.error = '';
    },
    [fetchUsers.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchUsers.rejected.type]: (state, action:PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export default userSlice.reducer;
