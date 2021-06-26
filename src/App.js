import React from 'react';
import './App.css';
import {makeStyles} from "@material-ui/core/styles";
import Header from './components/Header/Header';
import MainContent from "./components/MainContent/MainContent";
import Content from "./components/Content";
import Footer from "./components/Footer";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    }
}));

function App() {
    const classes = useStyles();
    return (
        <div className='main'>
            <Header/>
            <MainContent/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default App;
