import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomePageContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  filter: brightness(0.6);
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  max-width: 800px;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const Button = styled(Link)`
  background-color: ${props => props.primary ? '#e74c3c' : 'transparent'};
  border: 2px solid ${props => props.primary ? '#e74c3c' : 'white'};
  color: white;
  padding: 12px 25px;
  font-size: 1.1rem;
  border-radius: 30px;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    background-color: ${props => props.primary ? '#c0392b' : 'rgba(255, 255, 255, 0.1)'};
  }
`;

const placeholderVideoUrl = '/videos/placeholder-background.mp4';

const HomePage = () => {
  // This would eventually be replaced with actual interview videos
  const [videoSource, setVideoSource] = useState(placeholderVideoUrl);

  // This would eventually cycle through multiple videos
  useEffect(() => {
    // For now we just use a placeholder video
    // Later you would implement a system to cycle through videos
  }, []);

  return (
    <HomePageContainer>
      <VideoBackground autoPlay loop muted playsInline>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
      
      <Content>
        <Title>World of People</Title>
        <Subtitle>
          Connecting humanity through personal stories from around the globe.
          Discover how similar we all are, despite our different backgrounds.
        </Subtitle>
        
        <ButtonContainer>
          <Button to="/videos" primary>
            Watch Stories
          </Button>
          <Button to="/participate">
            Share Your Story
          </Button>
          <Button to="/about">
            Learn More
          </Button>
        </ButtonContainer>
      </Content>
    </HomePageContainer>
  );
};

export default HomePage; 