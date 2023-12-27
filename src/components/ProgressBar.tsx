import styled from 'styled-components';

interface ProgressBarProps {
  width: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ width }) => {
  return (
    <ProgressBarBackground>
      <ProgressBarInside width={width} />
    </ProgressBarBackground>
  );
}

export default ProgressBar;

const ProgressBarBackground = styled.div`
  width: 100%;
  height: 20px;
  background-color: #dedede;
  border-radius: 8px;
`

interface WidthInterface {
  width: number,
}

const ProgressBarInside = styled.div<WidthInterface>`
  width: ${(props) => props.width}%;
  height: 100%;
  background-color: #FFC436;
  border-radius: 8px;
`;