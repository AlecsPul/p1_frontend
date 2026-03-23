
import { Box, Container, Text, HStack, Button } from '@chakra-ui/react';
import './NavBar.css';

export default function NavBar(){
    const scrollToSection = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return(
            <Box className='box-container'> 
                <Container maxW= "container.x1" className='navbar-container'>
                        <HStack justify={'space-between'} w={'full'}>
                            
                            <HStack justify={'space-around'} flex={1} ml={5}>
                                <Button className='navbar-button' onClick={() => scrollToSection('home')}>
                                    Home
                                </Button>
                                <Button className='navbar-button' onClick={() => scrollToSection('about')}>
                                    About
                                </Button>
                                <Button className='navbar-button' onClick={() => scrollToSection('contact')}>
                                    Contact
                                </Button>
                            </HStack>
                        </HStack>
                </Container>
    
            </Box>

    );
}