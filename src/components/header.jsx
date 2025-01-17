import { Box, Tabs, Tab, AppBar, Toolbar } from "@mui/material";
import { useStore } from "../store/useStore";

export default function Header() {
    const {state, switchPage} = useStore();

    const handleChange = (event, newValue) => {
        switchPage(newValue);
    }

    return (
        <Box className="header">
            <AppBar position="sticky">
                <Toolbar>
                    <Tabs 
                        value={state.page} 
                        onChange={handleChange} 
                        centered
                    >
                        <Tab label="Home" />
                        <Tab label="About" />
                        <Tab label="Experience" />
                        <Tab label="Projects" />
                        <Tab label="Misc" />
                    </Tabs>
                </Toolbar>
            </AppBar>
        </Box>
    );
}