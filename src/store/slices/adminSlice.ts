import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from '@/lib/firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

interface AdminState {
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  user: {
    email: string | null;
    role: string;
  } | null;
}

const initialState: AdminState = {
  isAuthenticated: false,
  loading: false,
  error: null,
  user: null,
};

export const loginAdmin = createAsyncThunk(
  'admin/login',
  async ({ email, password }: { email: string; password: string }) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return {
      email: userCredential.user.email,
      role: 'admin', // You can fetch this from custom claims if needed
    };
  }
);

export const logoutAdmin = createAsyncThunk(
  'admin/logout',
  async () => {
    await signOut(auth);
  }
);

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = null;
    },
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAdmin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Login failed';
      })
      .addCase(logoutAdmin.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.user = null;
      });
  },
});

export const { resetError, setAuthenticated } = adminSlice.actions;
export default adminSlice.reducer; 