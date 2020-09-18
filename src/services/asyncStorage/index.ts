import AsyncStorage from '@react-native-community/async-storage'

export const setItem = async (key: string, value: any) => {
  if (!!value) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      throw new Error(`[Error saving ${key}] : ${error}`)
    }
  }
}

export const getItem = async (key: string) => {
  if (!!key) {
    try {
      const result: any = await AsyncStorage.getItem(key)
      if (!result || !Object.keys(result).length) return null
      return JSON.parse(result)
    } catch (error) {
      throw new Error(`[Error getting ${key}] : ${error}`)
    }
  }
  return key
}

export const mergeItem = async (key: string, value: any) => {
  if (!!value) {
    try {
      await AsyncStorage.mergeItem(key, JSON.stringify(value))
      const result: any = await getItem(key)
      return result
    } catch (error) {
      throw new Error(`[Error updating ${key}] : ${error}`)
    }
  }
  return value
}

export const removeItem = async (key: string) => {
  if (!!key) {
    try {
      await AsyncStorage.removeItem(key)
    } catch (error) {
      throw new Error(`[Error removing ${key}] : ${error}`)
    }
  }
  return key
}

export const clearStorage = async () => {
  try {
    await AsyncStorage.clear()
  } catch (error) {
    throw new Error(`[Error when clear storage] : ${error}`)
  }
}
