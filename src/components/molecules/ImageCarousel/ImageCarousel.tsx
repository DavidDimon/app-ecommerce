import React from 'react'
import { Dimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel'

import { Wrapper, Image } from './styles'

interface IImageCarousel {
  images: Array<any>
}

const CarouselItem = ({ image }: { image: any }) => <Image source={image} />

const ImageCarousel = ({ images }: IImageCarousel) => (
  <Wrapper>
    <Carousel
      data={images}
      sliderWidth={Dimensions.get('window').width}
      itemWidth={Dimensions.get('window').width - 50}
      renderItem={({ item, index }: { item: any; index: number }) => (
        <CarouselItem key={`carousel_image_${index}`} image={item} />
      )}
    />
  </Wrapper>
)

export default ImageCarousel
