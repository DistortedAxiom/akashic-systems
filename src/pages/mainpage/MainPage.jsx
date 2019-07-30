import React from 'react';
import SideBar from './main_components/sidebar';
import './MainPage.css';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import Plotly from './main_components/plotly';
import Plotly2 from './main_components/plotly2';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { PassThrough } from 'stream';

export default class MainPage extends React.Component {

    constructor(props) {
        super(props);
        this.setHome = this.setHome.bind(this);
        this.setDemographic = this.setDemographic.bind(this);
        this.state = {
            component_state: "home"
        }
    }

    setHome() {
        this.setState({component_state: "home"});
    }

    setDemographic() {
        this.setState({component_state: "demographic"});
    }

    render() {
        const current_component = this.state.component_state;
        let page_component;

        switch(current_component) {
            case ("demographic"):
                page_component = <Plotly2 />
                break;
            default:
                page_component = <Plotly />
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
        <NavItem eventKey="home" onClick={this.setHome}>
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em',}} />
            </NavIcon>
            <NavText>
                Home
            </NavText>
        </NavItem>
        <NavItem eventKey="plot2" onClick={this.setDemographic}>
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em',}} />
            </NavIcon>
            <NavText>
                Demographics
            </NavText>
        </NavItem>
        
    </SideNav.Nav>
</SideNav>
      <div className="plot-div">
      {page_component}
      </div>
    </div>
    );
    }
}