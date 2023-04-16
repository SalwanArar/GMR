import { Circle } from "@mui/icons-material";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import AboutUsTemplate from "./AboutUsTamplate";

function GoalsPage() {
    const primaries = [
        "We aim to be the leading company in the field of recycling using renewable energies.",
        "Working on developing a new approach in the world of recycling and achieving sustainability, We seek to consolidate good relations based on the trust that we hope to have.",
        "We are ready to earn this trust, convinced that we will succeed above all through our excellent work and excellent results.",
    ];
    return (
        
        <AboutUsTemplate title={"OUR GOALS"}>
            <List>
                {
                    primaries.map((primary)=>
                        <ListItem dense>
                            <ListItemIcon>
                                <Circle color="primary" fontSize="2rem"/>
                            </ListItemIcon>
                            <ListItemText primary={primary} />
                        </ListItem>
                    )
                }
            </List>
        </AboutUsTemplate>
    );
}

export default GoalsPage;