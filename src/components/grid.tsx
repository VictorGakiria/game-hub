import { Grid } from "@chakra-ui/react"


export default function Grids(){
  return (
    <Grid templateColumns="repeat(4, 5fr)" gap="2" color={"orange"}
     bg={"white"} p={50} >
      <div style={{ border: '1px solid black', backgroundColor:'darkred' }}>20</div>
      <div style={{ border: '1px solid black', backgroundColor:'darkgreen' }}>20</div>
      <div style={{ border: '1px solid black' ,backgroundColor:'darkorange' }} >20</div>
      <div style={{ border: '1px solid black' , backgroundColor:'darkgrey'}}>20</div>
      <div style={{ border: '1px solid black', backgroundColor:'darkblue' }}>20</div>
      <div style={{ border: '1px solid black', backgroundColor:'brown' }} >20</div>
      <div style={{ border: '1px solid black', backgroundColor:'black'}}>20</div>
      <div style={{ border: '1px solid black', backgroundColor:'green' }} >20</div>
      <div style={{ border: '1px solid black', backgroundColor:'red' }}>20</div>
        </Grid>
  )
}
       