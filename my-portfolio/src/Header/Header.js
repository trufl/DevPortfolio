import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Header = () => {

    return (
        <AppBar className='bg-transparent' position="sticky">
            <Toolbar className='bg-transparent'>
                <Box component="div" className='flex flex-auto justify-between'>
                    <Typography variant="h1" sx={{ color: 'white' }}>
                        Tristan Saragosa
                    </Typography>
                </Box>
                <Box component="div" className='flex justify-between'>
                    <Button variant="outlined" className='text-gradient-royal border-gradient-royal'>
                        About
                    </Button>
                    <Button variant="outlined" sx={{ borderColor: 'gradient-royal', color: 'white' }}>
                        Projects
                    </Button>
                    <Button variant="outlined" sx={{ borderColor: 'gradient-royal', color: 'white' }}>
                        Contact
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>

                
    );
};

export default Header;
