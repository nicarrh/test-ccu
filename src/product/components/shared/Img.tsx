import React from 'react';
import { Image, ImageSourcePropType, ImageStyle, StyleProp } from 'react-native';

type Props = {
  style: StyleProp<ImageStyle>;
  src: ImageSourcePropType;
  resizeMode: 'cover' | 'contain' | 'stretch' | 'repeat';
  [restProp: string]: any;
};

const Img = ({ style, src, resizeMode, ...rest }: Props) => {
  return <Image source={src} style={style} resizeMethod="auto" resizeMode={resizeMode} {...rest} />;
};

export default Img;
