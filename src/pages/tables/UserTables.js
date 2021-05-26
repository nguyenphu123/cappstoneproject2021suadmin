import React from "react";
import { Grid, Button } from "@material-ui/core";
// import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";

// components
import PageTitle from "../../components/PageTitle";
// import Widget from "../../components/Widget";
// import Table from "../dashboard/components/Table/Table";

// data
// import mock from "../dashboard/mock";

const datatableData = [
  ["Joe James", "Admin", "Yonkers", "NY"],
  ["John Walsh", "Admin", "Hartford", "CT"],
  ["Bob Herm", "Admin", "Tampa", "FL"],
  ["James Houston", "Admin", "Dallas", "TX"],
  ["Prabhakar Linwood", "Admin", "Hartford", "CT"],
  ["Kaui Ignace", "Admin", "Yonkers", "NY"],
  ["Esperanza Susanne", "Admin", "Hartford", "CT"],
  ["Christian Birgitte", "Admin", "Tampa", "FL"],
  ["Meral Elias", "Admin", "Hartford", "CT"],
  ["Deep Pau", "Admin", "Yonkers", "NY"],
  ["Sebastiana Hani", "Admin", "Dallas", "TX"],
  ["Marciano Oihana", "Admin", "Yonkers", "NY"],
  ["Brigid Ankur", "Admin", "Dallas", "TX"],
  ["Anna Siranush", "Admin", "Yonkers", "NY"],
  ["Avram Sylva", "Admin", "Hartford", "CT"],
  ["Serafima Babatunde", "Admin", "Tampa", "FL"],
  ["Gaston Festus", "Admin", "Tampa", "FL"],
];

// const useStyles = makeStyles(theme => ({
//   tableOverflow: {
//     overflow: 'auto'
//   }
// }))

export default function UserTables () {
  // const classes = useStyles();
  const onView = () => {
    console.log("ok");
  };
  return (
    <>
      <PageTitle title='Tables' />
      <Button variant='contained' color='primary'>
        Add user
      </Button>

      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title='User List'
            data={datatableData}
            columns={["Name", "Role", "City", "State"]}
            options={{
              filterType: "checkbox",
              onRowClick: onView,
              setRowProps: row => {
                if (row[0] === "New") {
                  return {
                    style: { background: "snow" },
                  };
                }
              }
            }}
          />
        </Grid>
        {/* <Grid item xs={12}>
          <Widget title="Material-UI Table" upperTitle noBodyPadding bodyClass={classes.tableOverflow}>
            <Table data={mock.table} />
          </Widget>
        </Grid> */}
      </Grid>
    </>
  );
}
