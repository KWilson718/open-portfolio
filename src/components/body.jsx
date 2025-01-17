import { Box, Typography } from "@mui/material";
import { useStore } from "../store/useStore";

export default function Body() {
    const {state} = useStore();

    const pageTitles = {
        0: "Home",
        1: "About",
        2: "Experience",
        3: "Projects",
        4: "Misc",
    }

    const currentPage = pageTitles[state.page] || "Undefined Page";

    return (
        <Box className="body" >
            <h1>This is the Body</h1>
            <Typography variant="h4">Current Page: {currentPage}</Typography>
        </Box>
    );
}