import React, { useState } from 'react'
import Tour from 'reactour'
import store from 'store'
import style from './style.module.scss'

const steps = [
  {
    selector: '.t-2',
    content:
      'First, determine what the layout of your application will look like. You can also specify a name for your application here',
  },
  {
    selector: '.t-3',
    content: 'Or select a pre-configured application layout',
  },
  {
    selector: '.t-4',
    content: 'Switch the dark / light theme',
  },
  {
    selector: '.t-5',
    content: 'Choose a primary color',
  },
  {
    selector: '.t-6',
    content: "Don't forget to read the detailed documentation for the deep dive",
  },
  {
    selector: '.t-7',
    content: 'Check out the Bookmarks component. Access frequently used pages with ease',
  },
  {
    selector: '.t-8',
    content: 'Check out our full-screen Search component. Nothing will be lost in the search!',
  },
  {
    selector: '.t-1',
    content: 'Visit our Home page to keep track of updates. Stay tuned! :)',
  },
]

const TutorialComponent = () => {
  // prevent in iframe live peview
  const isInIframe = () => {
    try {
      return window.self !== window.top
    } catch (e) {
      return false;
    }
  }

  // prevent in visual-builder
  const isVb = process.env.REACT_APP_VB

  // prevent if touched
  const hidden = store.get(`app.settings.tutorialTouched`) || isInIframe() || isVb
  const [isTourOpen, setIsTourOpen] = useState(!hidden)

  const closeTour = () => {
    store.set(`app.settings.tutorialTouched`, true)
    setIsTourOpen(false)
  }

  return (
    <Tour
      rounded={10}
      className={style.helper}
      maskClassName={style.mask}
      steps={steps}
      isOpen={isTourOpen}
      onRequestClose={() => closeTour()}
    />
  )
}

export default TutorialComponent
