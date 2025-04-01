import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { websiteService } from '@/services/websiteService';
import type { WebsiteSettings } from '@/types/website';

interface WebsiteState {
  settings: WebsiteSettings | null;
  loading: boolean;
  error: string | null;
}

const initialState: WebsiteState = {
  settings: null,
  loading: false,
  error: null,
};

export const fetchSettings = createAsyncThunk(
  'website/fetchSettings',
  async () => {
    const settings = await websiteService.getSettings();
    return settings;
  }
);

export const updateSettings = createAsyncThunk(
  'website/updateSettings',
  async (settings: Partial<WebsiteSettings>) => {
    await websiteService.updateSettings(settings);
    return settings;
  }
);

const websiteSlice = createSlice({
  name: 'website',
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSettings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSettings.fulfilled, (state, action) => {
        state.loading = false;
        state.settings = action.payload;
      })
      .addCase(fetchSettings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch settings';
      })
      .addCase(updateSettings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateSettings.fulfilled, (state, action) => {
        state.loading = false;
        if (state.settings) {
          state.settings = { ...state.settings, ...action.payload };
        }
      })
      .addCase(updateSettings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to update settings';
      });
  },
});

export const { resetError } = websiteSlice.actions;
export default websiteSlice.reducer; 