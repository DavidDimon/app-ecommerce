import normalize from './normalize'

export const parseStyleValue = (value: number | string) =>
  typeof value === 'string' ? value : `${normalize(value)}px`
