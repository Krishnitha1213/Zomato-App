import React from "react";
import Search from './Search';
import QuickSearch from './QuickSearch';
import Header from '../../Header'

const Home = () => {
    return(
        <React.Fragment>
            <Header/>
            <Search/>
            <QuickSearch/>
        </React.Fragment>
    )
}
export default Home;