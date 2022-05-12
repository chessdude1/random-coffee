import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

export function Header() {
  return (
    <AppBar
      sx={{ marginBottom: '20px' }}
      position="static"
    >
      <div className="container">
        <Typography variant="h3" sx={{ p: 2 }}>
          Наш суперкофе
        </Typography>
      </div>
    </AppBar>
  );
}
