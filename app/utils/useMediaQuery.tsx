import { useMediaQuery, Theme } from '@mui/material';

export const isMobile = (theme: Theme) => {
  return useMediaQuery(theme.breakpoints.down('sm'));
};