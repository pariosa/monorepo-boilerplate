import { alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import { Icon, TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import DialogComponent from '../Dialog/DialogComponent';
import CreateNewPodComponent from './CreateNewPodComponent';

//table extension component
interface EnhancedTableToolbarProps {
    numSelected: number;
}

const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
  const { numSelected } = props;
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
        bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
    { numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
    ) : (
      <Typography
        sx={{ flex: '1 1 100%' }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        <CreateNewPodComponent/>
        </Typography>
    )}
    <TextField
      id="standard-search"
      label="Search"
      type="search"
      variant="outlined"
      style={{
        backgroundColor: "white",
        borderRadius: '5px',
        margin: '8px'
      }}
      InputProps={{
        startAdornment: (
            <SearchIcon/>
        ),
      }}
    />
    {numSelected && numSelected > 0 ? (
      <Tooltip title="Delete">
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    ) : (
      <Tooltip title="Filter list">
        <>
          <DialogComponent/>
        </>
      </Tooltip>
    )}
    </Toolbar>
  );
};
export default EnhancedTableToolbar;