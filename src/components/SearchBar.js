import { TextField, InputAdornment, } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export const SearchBar = () => {
    return (
        <div className="search_bar">
            <TextField
                className="search_bar_input"
                variant="outlined"
                placeholder="Найти..."
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    )
                }}>
                <SearchIcon />
            </TextField>
        </div>
    );

}