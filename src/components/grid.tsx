import { Grid } from "@chakra-ui/react"


export default function Grids(){
  return (
    <Grid templateColumns="repeat(4, 5fr)" gap="2" color={"orange"}
     bg={"white"} p={50} borderRight={'1px'}>
      <div style={{ border: '1px solid black' }}>20</div>
      <div style={{ border: '1px solid black' }} >20</div>
      <div style={{ border: '1px solid black' }}>20</div>
        </Grid>
  )
}
       