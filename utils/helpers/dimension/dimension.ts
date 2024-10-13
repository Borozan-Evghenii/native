import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const wp = (value: number) => (width * value) / 100;
export const hp = (value: number) => (height * value) / 100;
