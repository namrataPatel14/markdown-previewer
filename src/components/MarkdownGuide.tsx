import styled from 'styled-components';

const GuideContainer = styled.div`
  margin:30px;
  
`
const Code = styled.code`
  padding:10px;
`

const MarkdownGuide = () => {
  return (
    <GuideContainer>
        MarkdownGuide
        <ul>
          <li>
            <Code># Heading 1</Code>
          </li>
          <li>
            <Code>## Heading 2</Code>
          </li>
          <li>
            <Code>*Italic*</Code>
          </li>
          <li>
            <Code>**Bold**</Code>
          </li>
        </ul>
    </GuideContainer>
  )
}

export default MarkdownGuide