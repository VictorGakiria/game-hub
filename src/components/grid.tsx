import { Grid, Spacer, Box } from "@chakra-ui/react"
import { color } from "framer-motion"
import { FaCarSide } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import { FaCarAlt } from "react-icons/fa";
import { FaRegFaceGrinStars } from "react-icons/fa6";
import { FaGrinStars } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStarOfLife } from "react-icons/fa";
import { FaStarAndCrescent } from "react-icons/fa";
import { FaStarOfDavid } from "react-icons/fa";
import { FaRegFaceLaughWink } from "react-icons/fa6";
import { FaRegFaceGrinTongueSquint } from "react-icons/fa6";







export default function Grids(){
  return (
    <>
      <div style={{ border: '1px solid black', backgroundColor:'black',
         height:'100vh' , width:'200px', float:'left'}}
         >
          <Box as="ul" listStyleType ='none' paddingInline={'20px'} 
          paddingBlock={'20px'} style={{ gap: '10px' }}>
         <li style={{ marginBottom: '30px', display: 'flex', alignItems:'center' }}><FaRegFaceLaughWink style={{ marginRight: '10px' }} />BUDGET CARS </li>
         <li style={{ marginBottom: '30px', display: 'flex', alignItems:'center' }}><FaRegFaceGrinTongueSquint style={{ marginRight: '10px' }} />CLASS CARS </li>
         <li style={{ marginBottom: '30px', display: 'flex', alignItems: 'center' }}><FaGrinStars style={{ marginRight: '10px' }} /> SUV'S</li>
         </Box>
         </div>


<h6 style={{ padding: '20px', textAlign:'center', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <FaCarSide style={{ marginRight: '10px' }} /> K  A  IZ  E  N   MOTORS
</h6>

<Grid templateColumns="repeat(3, 5fr)" gap="2" color={"orange"}
 bg={{ base: "white", md: "gray.100", lg: "blue.100" ,}} height="100vh" width="auto" >
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
      );
    }
