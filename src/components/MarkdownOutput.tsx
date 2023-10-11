
import styled from 'styled-components';
import Markdown from 'react-markdown';

const OutputContainer = styled.div`
  padding:10px
`
interface MarkdownOutputProps {
    markdown: string;
}
const MarkdownOutput = (props:MarkdownOutputProps) => {
  return (
    <OutputContainer><Markdown>{props.markdown}</Markdown></OutputContainer>
  )
}

export default MarkdownOutput