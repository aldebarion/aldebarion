import React from 'react'

import basicTheme from 'themes/basic'
import ThemeProvider from 'components/ThemeProvider'
import Dialog from 'components/Dialog'
import Body from 'components/Body'
import Form from 'components/Form'
import Button from 'components/Button'
import Input from 'components/Input'

import globalStyle from '__stories__/global.style'
import { useBinaryState } from 'behaviors'

import style from './style'

export default {
  component: Dialog,
  title: 'Components/Dialog/BasicTheme',
}

export const ConfirmationPopup = () => {
  const [isVisible, show, hide] = useBinaryState()
  return (
    <ThemeProvider theme={basicTheme}>
      <Body className={globalStyle.body}>
        <Button onClick={show} primary>
          Open confirmation Dialog
        </Button>
        <Dialog isVisible={isVisible} onClose={hide} className={style.Dialog}>
          Do you really want to delete selected file?
          <div className={style.actions}>
            <div className={style.left}>
              <Button onClick={hide}>Cancel</Button>
            </div>

            <Button danger onClick={hide}>
              Save
            </Button>
          </div>
        </Dialog>
      </Body>
    </ThemeProvider>
  )
}

export const FormPopup = () => {
  const [isVisible, show, hide] = useBinaryState()
  return (
    <ThemeProvider theme={basicTheme}>
      <Body className={globalStyle.body}>
        <Button onClick={show} primary>
          Open form Dialog
        </Button>
        <Dialog
          isVisible={isVisible}
          onClose={hide}
          className={style.FormDialog}
        >
          <Form huge>
            <Form.Item required>
              <Input placeholder="Choose a Name" />
            </Form.Item>
            <Form.Item className={style.actions}>
              <Button onClick={hide} className={style.left}>
                Cancel
              </Button>

              <Form.Submit onClick={hide} secondary className={style.right}>
                Save
              </Form.Submit>
            </Form.Item>
          </Form>
        </Dialog>
      </Body>
    </ThemeProvider>
  )
}
