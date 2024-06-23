import { useSwiper} from "swiper/react"
import { Box } from "@mui/material";
import prev from "../../../assets/prev.png"
import next from "../../../assets/next.png"


function SlidePrevButton() {
  const swiper = useSwiper()

  return (
    <Box
    component='img'
    src={prev}
    onClick={()=> swiper.slidePrev()}
    width={45}
    height={45}
    position='absolute'
    left={0}
    top={0}
    sx={{cursor: 'pointer'}}
    zIndex={999}
    bgcolor='#fff'
    >

    </Box>
  )
}

function SlideNextButton() {
  const swiper = useSwiper()
  return (
    <Box
    component='img'
    src={next}
    onClick={()=> swiper.slideNext()}
    width={45}
    height={45}
    position='absolute'
    right={0}
    top={0}
    sx={{cursor: 'pointer'}}
    zIndex={999}
    bgcolor='#fff'
    >

    </Box>
  )
}

export { SlidePrevButton, SlideNextButton}