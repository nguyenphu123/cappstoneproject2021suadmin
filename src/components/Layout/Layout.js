import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import classnames from "classnames";
// import { Box, IconButton } from "@material-ui/core";
// import Icon from "@mdi/react";
import { Widget } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
//icons
// import {
//   mdiFacebook as FacebookIcon,
//   mdiTwitter as TwitterIcon,
//   mdiGithub as GithubIcon,
// } from "@mdi/js";

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";

// pages
import Dashboard from "../../pages/dashboard";
// import Typography from "../../pages/typography";
import Notifications from "../../pages/notifications";
// import Maps from "../../pages/maps";
import UserTables from "../../pages/tables/UserTables";
import ProductsTables from "../../pages/tables/ProductsTables";
import OrderTables from "../../pages/tables/OrderTables";
// import Icons from "../../pages/icons";
// import Charts from "../../pages/charts";

// context
import { useLayoutState } from "../../context/LayoutContext";

function Layout (props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
      <>
        <Header history={props.history} />
        <Sidebar />
        <Widget />

        <div
          className={classnames(classes.content, {
            [classes.contentShift]: layoutState.isSidebarOpened,
          })}
        >
          <div className={classes.fakeToolbar} />
          <Switch>
            <Route path='/app/dashboard' component={Dashboard} />
            <Route path='/app/UserTables' component={UserTables} />
            <Route path='/app/ProductsTables' component={ProductsTables} />;
            <Route path='/app/OrderTables' component={OrderTables} />;
            <Route path='/app/notifications' component={Notifications} />
          </Switch>
        </div>
      </>
    </div>
  );
}

export default withRouter(Layout);
