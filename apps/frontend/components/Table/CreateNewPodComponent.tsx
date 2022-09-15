import * as React from 'react';
import Button from '@mui/material/Button';
import dayjs, { Dayjs } from 'dayjs';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Theme, useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(5),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 10;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 100,
    },
  },
};

const fischerDivisions = [
    'Northern Kentucky',
    'Cincinnati',
    'Atlanta',
    'Dayton',
    'St. Louis',
    'Columbus',
    'Indianapolis',
    'Louisville',
];

const vendorCategories = [
    '684 Mailboxes',
    '257 Moulded millwork delivery',
    '299 Shutter delivery',
    '300 Metal canopy',
    '301 Window',
    '316 Exterior doors',
    '317 Interior doors',
    '113 Doorknobs',
    '878 Lumber',
];

const activities = [
    '- Not Selected -',
    '30226 ****Vinyl CLAD WOOD WINDOW M ********',
];


function getStyles(name: string, personName: string, theme: Theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
}

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);
  const [division, setDivision] = React.useState<string>('');
  const [vendorCategory, setVendorCategpry] = React.useState<string>('');
  const [activity, setActivity] = React.useState<string>('');
  const theme = useTheme();
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs(),
  );

  const handleDateChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  const handleDivisionChange = (event: SelectChangeEvent<typeof division>) => {
    const {
      target: { value },
    } = event;
    setDivision(value);
  };

  const handleVendorCategoryChange = (event: SelectChangeEvent<typeof vendorCategory>) => {
    const {
      target: { value },
    } = event;
    setVendorCategpry(value);
  };

  const handleActivityChange = (event: SelectChangeEvent<typeof activity>) => {
    const {
      target: { value },
    } = event;
    setActivity(value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleCancel = () => {
    setDivision('')
    setVendorCategpry('')
    setActivity('')
    setOpen(false);
  };


  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Create Pod
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Create New Record
        </BootstrapDialogTitle>
        <DialogContent dividers>
           <Grid
           container
           spacing={2}
           sx={{
             paddingTop: theme.spacing(0),
           }}
           >
                <Grid>
                    <TextField id="outlined-basic" label="Trade Partner" variant="outlined" sx={{ m: 1, width: 500 }}></TextField>
                </Grid>
                <Grid>
                    {/* Select 1 */}
                    <FormControl sx={{ m: 1, width: 500 }}>
                        <InputLabel id="input-division-label">Division</InputLabel>
                        <Select
                        labelId="division-label"
                        id="division-select"
                        value={division}
                        onChange={handleDivisionChange}
                        input={<OutlinedInput label="Division" />}
                        MenuProps={MenuProps}
                        >
                        {fischerDivisions.map((select) => (
                            <MenuItem
                            key={select}
                            value={select}
                            style={getStyles(select, division, theme)}
                            >
                            {select}
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid>
                    {/* Select 2 */}
                    <FormControl sx={{ m: 1, width: 500 }}>
                        <InputLabel id="input-category-label">Vendor Category</InputLabel>
                        <Select
                        labelId="category-label"
                        id="category-select"
                        value={vendorCategory}
                        onChange={handleVendorCategoryChange}
                        input={<OutlinedInput label="Vendor Category" />}
                        MenuProps={MenuProps}
                        >
                        {vendorCategories.map((select) => (
                            <MenuItem
                            key={select}
                            value={select}
                            style={getStyles(select, vendorCategory, theme)}
                            >
                            {select}
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid>
                    {/* Select 3 */}
                    <FormControl sx={{ m: 1, width: 500 }}>
                        <InputLabel id="input-activity-label">Activity</InputLabel>
                        <Select
                        labelId="activity-label"
                        id="activity-select"
                        value={activity}
                        onChange={handleActivityChange}
                        input={<OutlinedInput label="activity" />}
                        MenuProps={MenuProps}
                        >
                        {activities.map((select) => (
                            <MenuItem
                            key={select}
                            value={select}
                            style={getStyles(select, activity, theme)}
                            >
                            {select}
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={4}><TextField id="outlined-basic" label="Pod A" variant="outlined" sx={{ m: 1, width: 125 }}></TextField></Grid>
                <Grid item xs={12} sm={4}><TextField id="outlined-basic" label="Pod B" variant="outlined" sx={{ m: 1, width: 125 }}></TextField></Grid>
                <Grid item xs={12} sm={4}><TextField id="outlined-basic" label="Pod C" variant="outlined" sx={{ m: 1, width: 125 }}></TextField></Grid>
                <Grid item xs={12} sm={4}><TextField id="outlined-basic" label="Pod D" variant="outlined" sx={{ m: 1, width: 125 }}></TextField></Grid>
                <Grid item xs={12} sm={4}><TextField id="outlined-basic" label="Pod E" variant="outlined" sx={{ m: 1, width: 125 }}></TextField></Grid>
                <Grid item xs={12} sm={4}><TextField id="outlined-basic" label="Pod T" variant="outlined" sx={{ m: 1, width: 125 }}></TextField></Grid>
                <Grid item xs={12} sm={4}><TextField id="outlined-basic" label="Weekly Total" variant="outlined" sx={{ m: 1, width: 150 }}></TextField></Grid>
                <Grid item xs={12} sm={8}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                    label="Effective Date"
                    inputFormat="MM/DD/YYYY"
                    value={value}
                    onChange={handleDateChange}
                    renderInput={(params) => <TextField {...params} sx={{m:1}} />}
                    />
                    </LocalizationProvider>
                </Grid>
           </Grid>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCancel}>
            Cancel
          </Button>
          <Button autoFocus onClick={handleClose}>
            Save
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
