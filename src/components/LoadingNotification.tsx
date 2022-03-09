import styled from 'styled-components';

const Paragraph = styled.p`
  text-align: center;
  font-weight: 500;
`;

const LoadingNotification = () => {
  return <Paragraph>Please Wait ...</Paragraph>;
};

export default LoadingNotification;
