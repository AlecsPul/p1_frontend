import { Box, Text, Card, Heading} from "@chakra-ui/react";
import "./HomePage.css";
import Profile from "../../components/Profile/Profile";

export default function HomePage(){
    return(
        
        <Box className="home-wrapper">
            <Heading size={"lg"}>
                <Text color={"black"}>Welcome!</Text>
            </Heading>
            <Card.Root flexDirection="row" overflow="hidden" maxW="xl" rounded= "md">
                <Profile />
                <Box>
                    <Card.Body>
                        <Card.Title mb="2">Alejandro Poole Becerra</Card.Title>
                        <Card.Description>
                            Description.
                        </Card.Description>
                    </Card.Body>
                </Box>
            </Card.Root>
        </Box>
        

    );
}