import { Box, Typography } from "@mui/material";
import { useStore } from "../store/useStore";

import Home from "./pages/home";
import About from "./pages/about";
import Experience from "./pages/experience";
import Projects from "./pages/projects";
import Misc from "./pages/misc";

export default function Body() {
    const {state} = useStore();

    const pages = {
        0: <Home />,
        1: <About />,
        2: <Experience />,
        3: <Projects />,
        4: <Misc />,
    }

    const currentPageComponent = pages[state.page] || (
        <Typography variant="h3">
            Page Not Found
        </Typography>
    );

    return (
        <Box className="body" >
            {currentPageComponent}
        </Box>
    );
}