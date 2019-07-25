import React from 'react';
import SideBar from './main_components/sidebar';
import './MainPage.css';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import Plotly from './main_components/plotly';
import Plotly2 from './main_components/plotly2';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

export default class MainPage extends React.Component {

    constructor(props) {
        super(props);
        this.handlePlotChange = this.handlePlotChange.bind(this);
        this.handlePlotReturn = this.handlePlotReturn.bind(this);
        this.state = {
            plot1: true
        }
    }

    handlePlotChange() {
        this.setState({plot1: false});
    }

    handlePlotReturn() {
        this.setState({plot1: true});
    }

    render() {
        const plot1 = this.state.plot1;
        let plot;

        if  (plot1) {
            plot = <Plotly />
        }

        else {
            plot = <Plotly2 />
        }

    return (
      <div className="container-fluid">
        <SideNav
    onSelect={(selected) => {
        // Add your code here
    }}
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home" onClick={this.handlePlotReturn}>
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em',}} />
            </NavIcon>
            <NavText>
                Plot 1
            </NavText>
        </NavItem>
        <NavItem eventKey="plot2" onClick={this.handlePlotChange}>
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em',}} />
            </NavIcon>
            <NavText>
                Plot 2
            </NavText>
        </NavItem>
        
    </SideNav.Nav>
</SideNav>
      <div className="plot-div">
      {plot}
      </div>
    </div>
    );
    }
}