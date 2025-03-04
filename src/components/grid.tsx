import { Grid, Spacer } from "@chakra-ui/react"


export default function Grids(){
  return (
    <>
      <div style={{ border: '1px solid black', backgroundColor:'purple',
         height:'100vh' , width:'200px', float:'left'}}>side</div>


<h6> Tabs</h6>

      <Grid templateColumns="repeat(3, 5fr)" gap="2" color={"orange"}
     bg={"white"} p={50} height={'100vh'} width={'auto'} >
      <div style={{ border: '1px solid black'}}>20</div>
      <div style={{ border: '1px solid black'}}>20</div>
      <div style={{ border: '1px solid black'  }} >20</div>
      <div style={{ border: '1px solid black' }}>20</div>
      <div style={{ border: '1px solid black' }}>20</div>
      <div style={{ border: '1px solid black'}} >20</div>
      <div style={{ border: '1px solid black'}}>20</div>
      <div style={{ border: '1px solid black'}} >20</div>
      <div style={{ border: '1px solid black'}}>20</div>
        </Grid>
    </>
  )
}
       