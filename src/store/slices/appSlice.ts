import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type AppState = {
	status: string;
};

const initialState: AppState = {
	status: 'ready',
};

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setStatus: (state, action: PayloadAction<string>) => {
			state.status = action.payload;
			
		},
	},

     deleteTask: (state, action) => {
      state.list = state.list.filter(
        task => task.id !== action.payload
      );
    },
});





export const { setStatus } = appSlice.actions;
export default appSlice.reducer;
