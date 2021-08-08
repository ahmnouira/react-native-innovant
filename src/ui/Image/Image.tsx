import React, { memo } from 'react'
import FastImage, { FastImageProps } from 'react-native-fast-image'

export type ImageProps = FastImageProps

export const Image = memo((props: ImageProps) => {
  return <FastImage resizeMode={FastImage.resizeMode.contain} {...props} />
})
