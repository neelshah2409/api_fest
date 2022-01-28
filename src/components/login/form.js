import React from 'react';
import { useState } from 'react/cjs/react.development';
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Login from './login'
import SignUp from './signup'

const Form = () => {
    const paperStyle={width:1000,margin:"20px auto"}
    const [value, setValues] = useState(0);
    const handleChanges = (event, newValue) => {
        setValues(newValue);
    }
    function TabPanel (props) {
        const {children, value, index, ...other} = props;
        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }
    return (<div>
        <Paper style = {paperStyle}>
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChanges}
                aria-label="disabled tabs example"
            >
                <Tab label="Login" />
                <Tab label="SignUp" />

            </Tabs>
            <TabPanel value={value} index={0}>
                <Login handleChanges={handleChanges}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <SignUp handleChanges={handleChanges}/>
            </TabPanel>
        </Paper>
    </div>);
};

export default Form;
