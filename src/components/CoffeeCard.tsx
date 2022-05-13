import React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface ICoffeeCard {
  blendName: string;
  origin: string;
  notes : string;
}

export function CoffeeCard({ blendName, origin, notes } : ICoffeeCard) {
  return (
    <Card>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {`Название: ${blendName}`}
        </Typography>
        <Typography variant="h5" component="div">
          Происхождение:
          <br />
          {origin}
        </Typography>
        <Typography variant="body2">
          {`Теги: ${notes}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button>
          Показать
        </Button>
      </CardActions>
    </Card>
  );
}
