import styled from 'styled-components/native'

export const Wrapper = styled.View`
  flex-direction: row;
`

interface IInput {
  theme: any
}

export const Input = styled.TextInput.attrs(({ theme }: IInput) => ({
  placeholderTextColor: theme.colors.placeholder[theme.mode],
}))`
  color: ${({ theme }: any) => theme.colors.text[theme.mode]};
  flex-grow: 1;
`

export const ButtonWrapper = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`
