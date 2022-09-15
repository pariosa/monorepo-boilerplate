import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import FilterListIcon from '@mui/icons-material/FilterList';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Theme, useTheme } from '@mui/material/styles';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(5),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
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

const pods = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'T',
];


function getStyles(name: string, personName: string[], theme: Theme) {
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
  const [division, setDivision] = React.useState<string[]>([]);
  const [vendorCategory, setVendorCategpry] = React.useState<string[]>([]);
  const [pod, setPod] = React.useState<string[]>([]);
  const theme = useTheme();

  const handleDivisionChange = (event: SelectChangeEvent<typeof division>) => {
    const {
      target: { value },
    } = event;
    setDivision(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleVendorCategoryChange = (event: SelectChangeEvent<typeof vendorCategory>) => {
    const {
      target: { value },
    } = event;
    setVendorCategpry(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handlePodChange = (event: SelectChangeEvent<typeof pod>) => {
    const {
      target: { value },
    } = event;
    setPod(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        <FilterListIcon/>
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Filter
        </BootstrapDialogTitle>
        <DialogContent dividers>
            {/* Select 1 */}
            <FormControl sx={{ m: 1, width: 400 }}>
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
            {/* Select 2 */}
            <FormControl sx={{ m: 1, width: 400 }}>
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
            {/* Select 3 */}
            <FormControl sx={{ m: 1, width: 100 }}>
                <InputLabel id="input-pod-label">Pod</InputLabel>
                <Select
                labelId="pod-label"
                id="pod-select"
                value={pod}
                onChange={handlePodChange}
                input={<OutlinedInput label="Pod" />}
                MenuProps={MenuProps}
                >
                {pods.map((select) => (
                    <MenuItem
                    key={select}
                    value={select}
                    style={getStyles(select, pod, theme)}
                    >
                    {select}
                    </MenuItem>
                ))}
                </Select>
            </FormControl>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button autoFocus onClick={handleClose}>
            Filter
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
