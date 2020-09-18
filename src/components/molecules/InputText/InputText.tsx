import React from 'react'
import { View, TextInputProps } from 'react-native'
import { ThemeContext } from 'styled-components'
// @ts-ignore
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { InputWrapper } from '@components/atoms'
import { Wrapper, Input, ButtonWrapper } from './styles'

interface IInputText {
  value: any
  label: string
  placeholder?: string
  onChange(text: string): void
  isPassword?: boolean
  onFocus?: Function
  onBlur?: Function
  error?: string
  noMargin?: boolean
  rightLabelChildren?: any
  keyboardType?: TextInputProps['keyboardType']
}

const InputText = ({
  value,
  label,
  placeholder,
  onChange,
  isPassword,
  onBlur,
  onFocus,
  error,
  noMargin,
  rightLabelChildren,
  keyboardType,
}: IInputText) => {
  const inputRef = React.useRef(null)
  const theme = React.useContext(ThemeContext)
  const [secure, setSecure] = React.useState<boolean>(true)
  const [isSelected, setIsSelected] = React.useState<boolean>(false)

  const handleOnFocus = () => {
    if (onFocus) onFocus()
    // @ts-ignore
    if (!!inputRef?.current?.focus) inputRef?.current?.focus()
    setIsSelected(true)
  }

  const handleOnBlur = () => {
    if (onBlur) onBlur()
    setIsSelected(false)
  }

  return (
    <InputWrapper
      isSelected={isSelected}
      label={label}
      error={error}
      noMargin={noMargin}
      onSelect={handleOnFocus}
      rightLabelChildren={rightLabelChildren}
    >
      <Wrapper>
        <Input
          keyboardType={keyboardType}
          ref={inputRef}
          value={value}
          placeholder={placeholder}
          onChangeText={(text: string) => onChange(text)}
          secureTextEntry={isPassword && secure}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        {isPassword ? (
          <ButtonWrapper onPress={() => setSecure(!secure)}>
            <Icon
              name={secure ? 'eye-outline' : 'eye-off-outline'}
              size={20}
              color={theme.colors.text[theme.mode]}
            />
          </ButtonWrapper>
        ) : (
          <View />
        )}
      </Wrapper>
    </InputWrapper>
  )
}

export default InputText