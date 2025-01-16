import {useState} from "react";
import { Box, Tabs, Tab } from "@mui/material";

export default function Header() {
    const [tabValue, setTabValue] = useState(0);

    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    }

    return (
        <Box>
            <Tabs 
                value={tabValue} 
                onChange={handleChange} 
                centered
            >
                <Tab label="Home" />
                <Tab label="About" />
                <Tab label="Experience" />
                <Tab label="Projects" />
                <Tab label="Misc" />
            </Tabs>
        </Box>
    );
}