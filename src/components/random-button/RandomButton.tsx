import ShuffleIcon from '@mui/icons-material/Shuffle';
import Button from '@mui/material/Button';

import { RandomButtonProps } from './RandomButtonProps';

export const RandomButton = ({ onClick }: RandomButtonProps) => {
  return (
    <Button variant="contained" startIcon={<ShuffleIcon />} onClick={onClick}>
      Random sonnet
    </Button>
  );
};
