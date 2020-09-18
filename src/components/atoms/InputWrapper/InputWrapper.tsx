import React from 'react'
import { View } from 'react-native'
import * as Ramda from 'ramda'

import { Content, Label, Wrapper, LabelWrapper } from './styles'

interface IInputWrapper {
  children: any
  label: string
  isSelected: boolean
  error?: string
  disabled?: boolean
  noMargin?: boolean
  height?: number
  onSelect?(): void
  rightLabelChildren?: any
}

const contentProps = ['error', 'isSelected', 'disabled', 'height']

const InputWrapper = ({
  children,
  noMargin,
  label,
  ...props
}: IInputWrapper) => (
  <Wrapper noMargin={noMargin}>
    {(label || props.error) && (
      <LabelWrapper>
        <Label error={props.error}>{props.error || label}</Label>
        {props.rightLabelChildren || <View />}
      </LabelWrapper>
    )}
    <Content
      {...Ramda.pick(contentProps, props)}
      onPress={props.onSelect || undefined}
    >
      {children}
    </Content>
  </Wrapper>
)

export default InputWrapper