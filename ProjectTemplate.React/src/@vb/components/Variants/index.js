import React, { useState, useEffect, useRef } from 'react'
import { Modal, Button, Popconfirm, message, Radio } from 'antd'
import { connect } from 'react-redux'
import Draggable from 'react-draggable'
import configFull from '@scripts/config-full.json'
import configSeed from '@scripts/config-seed.json'
import themes from './configs.json'
import style from './style.module.scss'

const mapStateToProps = ({ settings }) => ({
  isPreselectedOpen: settings.isPreselectedOpen,
  preselectedVariant: settings.preselectedVariant,
  version: settings.version,
  theme: settings.theme,
})

const Variants = ({ dispatch, isPreselectedOpen, preselectedVariant, version, theme }) => {
  const [disabled, setDisabled] = useState(true)
  const [bounds, setBounds] = useState({ left: 0, top: 0, bottom: 0, right: 0 })
  const [variant, setVariant] = useState(null)

  useEffect(() => {
    document.body.style.overflowY = 'auto'
    document.body.style.width = '100%'
  }, [isPreselectedOpen])

  const isFirstRun = useRef(true)
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false
      return
    }
    applyVariant(preselectedVariant)
    // eslint-disable-next-line
  }, [preselectedVariant])

  const draggleRef = useRef()
  const onStart = (event, uiData) => {
    const { clientWidth, clientHeight } = window?.document?.documentElement
    const targetRect = draggleRef?.current?.getBoundingClientRect()
    setBounds({
      left: -targetRect?.left + uiData?.x,
      right: clientWidth - (targetRect?.right - uiData?.x),
      top: -targetRect?.top + uiData?.y,
      bottom: clientHeight - (targetRect?.bottom - uiData?.y),
    })
  }

  const closeModal = () => {
    dispatch({
      type: 'settings/CHANGE_SETTING',
      payload: {
        setting: 'isPreselectedOpen',
        value: false,
      },
    })
  }

  const applyVariant = (key) => {
    setVariant(key)
    const payload = JSON.parse(JSON.stringify(themes[key]))
    if (theme === 'dark') {
      payload.menuColor = 'dark'
    }
    dispatch({
      type: 'settings/CHANGE_SETTING_BULK',
      payload,
    })
  }

  const changeSetting = (setting, value) => {
    dispatch({
      type: 'settings/CHANGE_SETTING',
      payload: {
        setting,
        value,
      },
    })
  }

  const importDemoContent = (data) => {
    if (data.settings) {
      dispatch({
        type: 'settings/CHANGE_SETTING_BULK',
        payload: data.settings,
      })
    }
    if (data.config) {
      dispatch({
        type: 'menuRoutes/CHANGE_SETTING',
        payload: {
          setting: 'config',
          value: data.config,
        },
      })
      dispatch({
        type: 'menu/SET_STATE',
        payload: {
          menuData: data.config,
        },
      })
    }
    if (data.content) {
      dispatch({
        type: 'menuRoutes/CHANGE_SETTING',
        payload: {
          setting: 'content',
          value: data.content,
        },
      })
    }
    message.success('Changes are successfully applied')
  }

  return (
    <Modal
      title={
        <div
          style={{
            width: '100%',
            cursor: 'move',
          }}
          onMouseOver={() => {
            if (disabled) {
              setDisabled(false)
            }
          }}
          onMouseOut={() => {
            setDisabled(true)
          }}
          // eslint-disable-next-line
          onFocus={() => {}}
          // eslint-disable-next-line
          onBlur={() => {}}
        >
          You can drag me!
        </div>
      }
      visible={isPreselectedOpen}
      onCancel={closeModal}
      footer={null}
      maskClosable={false}
      mask={false}
      wrapClassName={style.wrapper}
      modalRender={(modal) => (
        <Draggable
          disabled={disabled}
          bounds={bounds}
          onStart={(event, uiData) => onStart(event, uiData)}
        >
          <div ref={draggleRef}>{modal}</div>
        </Draggable>
      )}
    >
      <div>
        <h6 className="mb-3">
          <strong>Pre-Configured Layouts</strong>
        </h6>
        {Object.keys(themes).map((key) => {
          return (
            <Button
              size="large"
              key={key}
              className={style.button}
              type={key === variant ? 'primary' : 'default'}
              onClick={() => applyVariant(key)}
            >
              {key}
            </Button>
          )
        })}
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="mt-4">
            <h6 className="mb-3">
              <strong>Visual Builder Style</strong>
            </h6>
            <Radio.Group
              onChange={(e) => {
                const { value } = e.target
                changeSetting('version', value)
              }}
              optionType="button"
              defaultValue={version}
            >
              <Radio.Button value="fluent">Fluent</Radio.Button>
              <Radio.Button value="clean">Clean</Radio.Button>
              <Radio.Button value="air">Air</Radio.Button>
            </Radio.Group>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="mt-4">
            <h6 className="mb-3">
              <strong>Theme</strong>
            </h6>
            <Radio.Group
              onChange={(e) => {
                const { value } = e.target
                changeSetting('theme', value)
              }}
              optionType="button"
              defaultValue={theme}
            >
              <Radio.Button value="default">Light</Radio.Button>
              <Radio.Button value="dark">Dark</Radio.Button>
            </Radio.Group>
          </div>
        </div>
      </div>
      {process.env.REACT_APP_VB && (
        <div className="mt-4 pt-2">
          <h6 className="mb-3">
            <strong>Load Content</strong>
          </h6>
          <Popconfirm
            placement="top"
            title={
              <div>
                This will replace application content
                <br />
                with the full preview values.
              </div>
            }
            onConfirm={() => importDemoContent(configFull)}
            okText="Yes"
            cancelText="No"
          >
            <Button className="mr-2">
              <i className="fe fe-upload mr-2" style={{ position: 'relative', top: '1px' }} /> Demo
              Content
            </Button>
          </Popconfirm>
          <Popconfirm
            placement="top"
            title={
              <div>
                This will reset application content
                <br />
                to the default values.
              </div>
            }
            onConfirm={() => importDemoContent(configSeed)}
            okText="Yes"
            cancelText="No"
          >
            <Button>
              <i className="fe fe-refresh-cw mr-2" style={{ position: 'relative', top: '1px' }} />{' '}
              Reset Content
            </Button>
          </Popconfirm>
        </div>
      )}
    </Modal>
  )
}

export default connect(mapStateToProps)(Variants)
