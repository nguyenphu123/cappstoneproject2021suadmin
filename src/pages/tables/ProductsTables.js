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
  ["Joe James", "Shirt", "X", "NY"],
  ["John Walsh", "Shirt", "XL", "CT"],
  ["Bob Herm", "Shirt", "X", "FL"],
  ["James Houston", "Shirt", "M", "TX"],
  ["Prabhakar Linwood", "Shirt", "S", "CT"],
  ["Kaui Ignace", "Shirt", "XL", "NY"],
  ["Esperanza Susanne", "Shirt", "X", "CT"],
  ["Christian Birgitte", "Shirt", "X", "FL"],
  ["Meral Elias", "Shirt", "X", "CT"],
  ["Deep Pau", "Shirt", "XL", "NY"],
  ["Sebastiana Hani", "Shirt", "M", "TX"],
  ["Marciano Oihana", "Shirt", "S", "NY"],
  ["Brigid Ankur", "Shirt", "S", "TX"],
  ["Anna Siranush", "Shirt", "M", "NY"],
  ["Avram Sylva", "Shirt", "X", "CT"],
  ["Serafima Babatunde", "Shirt", "XL", "FL"],
  ["Gaston Festus", "Shirt", "XL", "FL"],
];

// const useStyles = makeStyles(theme => ({
//   tableOverflow: {
//     overflow: 'auto'
//   }
// }))

export default function ProductsTables () {
  // const classes = useStyles();
  const onView = () => {
    console.log("ok");
  };
  return (
    <>
      <PageTitle title='Tables' />
      <Button variant='contained' color='primary'>
        Add Products
      </Button>

      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title='Product List'
            data={datatableData}
            columns={["Name", "Type", "Size", "Image"]}
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
