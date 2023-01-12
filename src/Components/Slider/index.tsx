// /* eslint-disable */
// import React, { createRef, useCallback, useEffect, useState } from 'react'

// import Slider from 'react-slick'
// import { settings, settings1, settings2 } from './utils'
// import { VideoTypes } from '../../../Types'
// import { Forward } from '@mui/icons-material'
// import Grid from '@mui/material/Grid'

// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
// import { Box, Theme } from '@mui/material'

// type SliderFotosProps = {
//   dadosVideos: VideoTypes[]
// }

// type SamplePrevArrowProps = {
//   onClick?: () => void
//   className?: string
//   style?: React.CSSProperties | undefined
// }

// const SliderFotos = ({ dadosVideos }: SliderFotosProps) => {
//   const sliderRef = createRef()

//   return (
//     <Grid
//       container
//       spacing={2}
//       sx={{
//         padding: (theme: Theme) => theme.spacing(0, 6),
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         gap: 20,
//       }}
//     >
//       <Grid item xs={12}>
//         <Slider
//           centerPadding="100px"
//           slidesToShow={3}
//           slidesToScroll={1}
//           autoplay={true}
//           autoplaySpeed={3000}
//           lazyLoad="ondemand"
//           infinite={true}
//           dots
//           arrows
//           accessibility
//           adaptiveHeight
//         >
//           {dadosVideos.map((item) => {
//             return (
//               <img
//                 src={item.srcTmbSigned}
//                 alt={item.label}
//                 style={{
//                   borderRadius: '3px',
//                   boxShadow: '-2px 3px 6px 0px #C1D7FF',
//                   width: '80%',
//                   height: '200px',
//                   objectFit: 'cover',
//                   gap: 10,
//                 }}
//               />
//             )
//           })}
//         </Slider>
//       </Grid>
//     </Grid>
//   )
// }

// export default SliderFotos
import React from "react";

const Slider = () => {
  return <div>Slider</div>;
};

export default Slider;
