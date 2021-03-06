import React from 'react';
import styled, { keyframes } from 'styled-components';
import SChatIllu from '../../../assets/images/projects/sappchatIllu.png';
import SChatFlow from '../../../assets/images/projects/sappchatFlow.png';
import Typography from '../../../assets/images/projects/typography.png';
import { CustomLink } from '../../../styles/globalStyles';

export const Sappchat = () => {
  const COLORS = [
    { id: 0, color: '#ffffff' },
    { id: 1, color: '#146ED4' },
    { id: 2, color: '#749FD0' },
    { id: 3, color: '#817C7C' },
    { id: 4, color: '#000' },
  ];

  return (
    <Wrapper>
      <h3 style={{ fontWeight: 700, fontSize: '32px' }}>"S-CHAT" PROJECT</h3>

      <Brief>
        <Title>UX/UI</Title>
        <span>
          The S-Chat app had been published since 2021. My task now is creating a new version of
          this app’s UX/UI design which will be launched in June, 2022
        </span>
      </Brief>

      <Project>
        <Left>
          <Brief className="indented">
            <Title>Project Overview</Title>
            <span style={{ fontStyle: 'normal' }}>
              S-chat is one of the first Decentralized Messaging Apps meets Decentralized Banking
              powered by Blockchain and Artificial Intelligence Technology.
            </span>
          </Brief>
          <br />

          <Brief className="indented">
            <Title>Scope of work</Title>
            <span style={{ fontStyle: 'normal' }}>
              Since this app had been launched in 2021 which had UI identification already, I focus
              on designing new configuration version. Till now, I’ve finished “Log in” and
              “Settings” screen
            </span>
          </Brief>

          <Brief className="indented check-link">
            <CustomLink
              style={{ textDecoration: 'underline' }}
              href="https://www.figma.com/file/k1SQUmcwbYH8mj1g4gL4Uq/S-chat-Setting?node-id=0%3A1"
              target="_blank"
              rel="noopen noreferrer"
            >
              CHECK THE DESIGN HERE!
            </CustomLink>
          </Brief>
        </Left>

        <Right>
          <img id="illu" src={SChatIllu} alt="illu" />
        </Right>
      </Project>

      <Brief className="indented user-flow" style={{ width: 'unset' }}>
        <Title>USER FLOW</Title>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img style={{ margin: '1rem 0' }} src={SChatFlow} alt="s-chat-flow" />
        </div>
      </Brief>

      <Other>
        <Left>
          <Brief className="indented">
            <Title>MOODBOARD</Title>
            <span style={{ fontStyle: 'normal' }}>
              Because this app will be used for chatting function the most so I decided to choose
              light and peaceful color which will make users have comfortable feeling when using it.
              Avoiding hot color is important criteria also.
            </span>
          </Brief>
        </Left>
        <Right>
          <Brief>
            <Title>VISUAL IDENTIFICATION</Title>
            <Colors>
              {COLORS.map((i) => (
                <Color key={i.id}>
                  <div style={{ backgroundColor: i.color }}></div>
                  {i.color}
                </Color>
              ))}
            </Colors>
          </Brief>
          <Brief style={{ marginTop: '2rem' }}>
            <Title>TYPOGRAPHY</Title>
            <img src={Typography} alt="typo" styled={{ width: '100%' }} />
          </Brief>
        </Right>
      </Other>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: 'Krub';

  .indented {
    margin-left: 2rem;

    @media (max-width: 768px) {
      width: 100%;
      margin: 0;
    }
  }

  .check-link {
    margin: 2rem;

    @media (max-width: 768px) {
      margin: 0;
    }
  }

  @media (max-width: 1024px) {
    .user-flow {
      img {
        width: 100%;
      }
    }
  }

  h3 {
    @media (max-width: 425px) {
      font-size: 24px !important;
    }
  }
`;

const Brief = styled.div`
  margin-top: 0.5rem;
  //width: 700px;

  span {
    font-size: 20px;
    letter-spacing: 0.1px;
    font-style: italic;

    @media (max-width: 425px) {
      font-size: 16px;
    }
  }
`;

const Title = styled.p`
  margin: 0.5rem 0;
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;

  @media (max-width: 425px) {
    font-size: 20px;
  }
`;

const Project = styled.div`
  display: grid;
  grid-template-columns: 500px auto;
  align-items: center;
  gap: 10%;

  @media (max-width: 1024px) {
    grid-template-columns: auto;
    grid-template-rows: auto auto;
  }

  @media (max-width: 425px) {
    gap: 1rem;
  }
`;

const Left = styled.div``;

const MoveUpDown = keyframes`
    0%, 100% {
      bottom: 0px;
    }
    50% {
      bottom: 30px;
    }
    `;

const Right = styled.div`
  #illu {
    animation: ${MoveUpDown} 2.5s linear infinite;
    position: relative;
    bottom: 0px;

    @media (max-width: 425px) {
      animation: none;
      position: inherit;
      width: 100%;
    }
  }
`;

const Other = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  margin-top: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    gap: 1rem;
    justify-content: center;

    .indented {
      margin-left: 0;
    }
  }

  @media (max-width: 425px) {
    .indented {
      margin: 0 2rem;
      width: unset;
    }

    ${Right} ${Brief} {
      margin: 0 2rem;
    }
  }
`;

const Colors = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 72px);
  gap: 1rem;

  @media (max-width: 425px) {
    grid-template-columns: repeat(5, auto);
    gap: 0.5rem;
  }
`;

const Color = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    border-radius: 8px;
    width: 56px;
    height: 56px;
  }

  font-size: 20px;

  @media (max-width: 425px) {
    grid-template-columns: repeat(5, auto);
    gap: 0.5rem;
  }
`;
