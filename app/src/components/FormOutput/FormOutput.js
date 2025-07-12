import { styled } from '@mui/material/styles';

const FormOutput = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    maxWidth: 600,
    margin: '20px auto',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(2),
    },
}));

export default FormOutput;
