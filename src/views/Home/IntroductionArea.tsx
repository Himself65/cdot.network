import React from 'react'
import {
  Text, Stack, PrimaryButton,
  mergeStyleSets, mergeStyles
} from 'office-ui-fabric-react'
import { introduction1, introduction2, introduction3 } from '~data/introductions'
import IntroduceCard from '~component/IntroduceCard'
import { Link } from 'react-router-dom'

const introductions = [introduction1, introduction2, introduction3]

const classNames = mergeStyleSets({
  root: {
    width: '100%',
    height: '1000px',
    padding: '20rem 0rem',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  banner: {
    background: 'no-repeat center center',
    backgroundColor: 'black',
    backgroundAttachment: 'scroll',
    backgroundSize: 'cover',
    backgroundImage: 'url(/assets/images/background/bg2.png)',
    selectors: {
      '@media(min-width: 1024px)': {
        backgroundImage: 'url(/assets/images/background/bg2@2x.png)'
      },
      '@media(max-width: 1024px)': {
        flexDirection: 'column'
      }
    }
  },
  textArea: {
    paddingLeft: '4rem',
    width: '400px',
    selectors: {
      '@media(max-width: 1024px)': {
        margin: 0,
        padding: '0 1rem',
        width: 'calc(100% - 1rem)'
      },
      '@media(min-width: 1024px)': {
        width: '500px'
      },
      '@media(min-width: 1366px)': {
        width: '700px'
      }
    }
  },
  introductionTitle: {
    fontSize: '50px',
    fontWeight: '400',
    selectors: {
      '@media(max-width: 1024px)': {
        fontSize: '35px'
      }
    }
  },
  introductionText: {
    fontSize: '24px',
    color: '#B3B3B3',
    fontWeight: '400',
    selectors: {
      '@media(max-width: 1024px)': {
        fontSize: '20px'
      }
    }
  }
})

const IntroductionArea: React.FC = () => {
  return (
    <div className={classNames.root}>
      <Stack
        className={mergeStyles(classNames.banner, 'cdot-stack')}
        horizontal
        verticalAlign='center'
        horizontalAlign='space-between'
      >
        <Stack.Item>
          <Stack
            className={classNames.textArea}
            tokens={{
              childrenGap: '1rem'
            }}
          >
            <Stack.Item>
              <Text className={classNames.introductionTitle}>
                A Closer Look at Cdot Network
              </Text>
            </Stack.Item>
            <Stack.Item>
              <Text className={classNames.introductionText}>
                Cdot addresses key barriers facing blockchain innovation:Trustless Interoperation, Secure Transaction,
                Sustainable Mechanism.
              </Text>
            </Stack.Item>
            <Stack.Item>
              <Link to='/contact'>
                <PrimaryButton styles={{
                  root: {
                    height: '53px',
                    width: '183px',
                    transition: 'ease-in-out 0.2s'
                  },
                  rootHovered: {
                    backgroundColor: '#fff',
                    transition: 'ease-in-out 0.2s'
                  },
                  label: {
                    color: '#030303',
                    fontWeight: '400'
                  }
                }}>
                Learn More
                </PrimaryButton>
              </Link>
            </Stack.Item>
          </Stack>
        </Stack.Item>
        <Stack.Item>
          <Stack
            styles={{
              root: {
                selectors: {
                  '@media(max-width: 1024px)': {
                    paddingRight: '0',
                    paddingTop: '1rem'
                  }
                }
              }
            }}
            tokens={{
              childrenGap: 25
            }}
          >
            {
              introductions.map(introduction => (
                <IntroduceCard key={introduction.title} {...introduction}/>
              ))
            }
          </Stack>
        </Stack.Item>
      </Stack>
    </div>
  )
}

export default IntroductionArea
