import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const baseWidth = 375
const baseHeight = 667

const scaleWidth = width / baseWidth
const scaleHeight = height / baseHeight
const scale = Math.min(scaleWidth, scaleHeight)

export default (size: number): number => Math.ceil(size * scale)
