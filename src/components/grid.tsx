import { Grid } from "@chakra-ui/react"


export default function Grids(){
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap="6">
      <div>20</div>
      kaizen
      <div>20</div>
      <div>20</div>
    </Grid>
  )
}
// Compare this snippet from src/components/decorative-box.tsx:
// import { Box } from "@chakra-ui/react"       