import React from "react";
import { Chip, Button, Grid } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import PageTitle from "../../components/PageTitle";

const data = [
  {
    id: 0,
    name: "Mark Otto",
    email: "ottoto@wxample.com",
    product: "ON the Road",
    price: "$25 224.2",
    date: "11 May 2017",
    city: "Otsego",
    status: "Sent",
  },
  {
    id: 1,
    name: "Jacob Thornton",
    email: "thornton@wxample.com",
    product: "HP Core i7",
    price: "$1 254.2",
    date: "4 Jun 2017",
    city: "Fivepointville",
    status: "Sent",
  },
  {
    id: 2,
    name: "Larry the Bird",
    email: "bird@wxample.com",
    product: "Air Pro",
    price: "$1 570.0",
    date: "27 Aug 2017",
    city: "Leadville North",
    status: "Pending",
  },
  {
    id: 3,
    name: "Joseph May",
    email: "josephmay@wxample.com",
    product: "Version Control",
    price: "$5 224.5",
    date: "19 Feb 2018",
    city: "Seaforth",
    status: "Declined",
  },
  {
    id: 4,
    name: "Peter Horadnia",
    email: "horadnia@wxample.com",
    product: "Let's Dance",
    price: "$43 594.7",
    date: "1 Mar 2018",
    city: "Hanoverton",
    status: "Sent",
  },
];

export default function OrderTables () {
  const columns = [
    { name: "name" },
    { name: "email" },
    { name: "product" },
    { name: "price" },
    { name: "date" },
    { name: "city" },
    {
      name: "status",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          console.log(value);
          if (value === "Sent") {
            return (
              <Chip
                label={value}
                color='primary'
                style={{ backgroundColor: "green" }}
              />
            );
          } else if (value === "Pending") {
            return (
              <Chip
                label={value}
                color='primary'
                style={{ backgroundColor: "orange" }}
              />
            );
          } else if (value === "Declined") {
            return (
              <Chip
                label={value}
                color='primary'
                style={{ backgroundColor: "red" }}
              />
            );
          } else {
          }
        },
      },
    },
    {
      name: "ACTION",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => (
          <Button variant='contained' color='primary'>
            UPDATE
          </Button>
        ),
      },
    },
  ];

  return (
    <>
      <PageTitle title='Tables' />

      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title='Order List'
            data={data}
            columns={columns}
            options={{
              setRowProps: row => {
                if (row[0] === "New") {
                  return {
                    style: { background: "snow" },
                  };
                }
              },
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
