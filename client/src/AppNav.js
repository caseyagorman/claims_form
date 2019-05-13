import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import COH from "./static/coh-logo-big.png" 
import {Link} from "react-router-dom"
// import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  }
};

function AppNav(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: "rgb(47, 38, 124)"}}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <img style={{height: 70, display: "inline-block", marginRight: 20, marginLeft: "-10%"}} src={COH}></img>

        <a style= {{color: "white"}}href="https://www.cohsf.org/">Coalition on Homelessness</a> 
          </IconButton>
          <Typography variant="h6" color="inherit" style={{marginRight: 10}}>
             <Link to={"/entries"} style= {{color: "white"}}>Items</Link>
          </Typography>
          <Typography variant="h6" color="inherit">
             <Link to= {"/"} style= {{color: "white"}} href="//">Form</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}


export default withStyles(styles)(AppNav);

// / import React from "react";
// import COH from "./static/coh-logo-big.png" 
// import {
//   Navbar,
//   NavItem,
//   Nav
// } from "react-bootstrap";
// import AppBar from '@material-ui/core/AppBar';
// const AppNav = props => {
//   return (
//     <AppBar/>
//     // <Navbar style={{ border: 1, backgroundColor: "rgb(47, 38, 124)", color: "white", height: 92 }} collapseOnSelect id="navbar">
//     //   <Navbar.Header>
//     //     <Navbar.Brand style={{color: "white"}}>
//     //     <img style={{height: 70, display: "inline-block", marginRight: 20, marginLeft: "-10%"}} src={COH}></img>
//     //       <a style={{color: "white"}} href="https://www.cohsf.org/" id="Brand">
//     //         Coalition On Homelessness
//     //       </a>
//     //     </Navbar.Brand>
//     //     <Nav.Link href="/items">Home</Nav.Link>
//     //     <Nav style={{color: "white"}}>
//     //       <NavItem style={{color: "white"}}  href="//">
//     //         Form
//     //       </NavItem>
//     //       <NavItem style={{color: "white"}} href="/items">
//     //         Items
//     //       </NavItem>
//     //     </Nav>
//     //     <Navbar.Toggle />
//     //   </Navbar.Header>
//     //   <Navbar.Collapse>
//     //     <Nav>
//     //     </Nav>
//     //   </Navbar.Collapse>
//     // </Navbar>
//   );
// };

// export default AppNav;
