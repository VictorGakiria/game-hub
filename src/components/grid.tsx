import { Grid, Spacer } from "@chakra-ui/react"
import { color } from "framer-motion"


export default function Grids(){
  const breakpoints = {
  }
  return (
    <>
      <div style={{ border: '1px solid black', backgroundColor:'purple',
         height:'100vh' , width:'200px', float:'left'}}
         >side</div>


<h6> Tabs</h6>

      <Grid templateColumns="repeat(3, 5fr)" gap="2" color={"orange"}
     bg={{ base: "white", md: "gray.100", lg: "blue.100" ,}} height="100vh" >
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
       