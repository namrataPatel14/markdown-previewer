import styled from "styled-components"

const InputContainer = styled.div`
 padding:20px
`
const StyledTextArea = styled.textarea`
 padding:20px
`

interface MarkdownInputProps{
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
const MarkdownInput = (props: MarkdownInputProps) => {
  return (
    <InputContainer>
       <StyledTextArea value={props.value} onChange={props.onChange}></StyledTextArea>
    </InputContainer>
  )
}

export default MarkdownInput