import {
    FormControl,
    TextField,
    Grid,
} from '@mui/material';

const FieldGenerator = ({fields, formData, fieldErrors, onFormChange}) => {
    return (
        <Grid container spacing={2} justifyContent="center">
            {fields.map(field => ( 
                <Grid item xs={12}>
                    <FormControl sx={{ maxWidth: '223px' }}>
                        <TextField
                            id={field.id}
                            name={field.name}
                            value={formData[field.name]}
                            label={field.label}
                            error={fieldErrors[field.name]} 
                            helperText={fieldErrors[field.name] ? field.helperText : ""}
                            inputProps={field.inputProps}
                            onChange={(e) => {
                                onFormChange(field.name, e.target.value);
                            }}
                        />
                    </FormControl>
                </Grid>
            ))}
        </Grid>
    )
};

export default FieldGenerator;
