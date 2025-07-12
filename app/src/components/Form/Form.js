import { styled } from '@mui/material/styles';

const Form = styled('form')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    maxWidth: 600,
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(2),
    },
}));

export default Form; 
