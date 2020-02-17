import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import styles from './ModalDev.module.css'

const ModalDev = ({devInfo, devsLength, triger}) => (
<Modal trigger={triger} >
<Modal.Header>{`Mateus is one of ${devsLength} devs here.`} <a href="/">Check the others!</a></Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src={devInfo.avatar} />
      <Modal.Description>
<Header>{devInfo.name} </Header>
        <p>
        {`Do you wanna see ${devInfo.name} GitHub page?`}
        </p>
        <p><a href='/'>CLICK HERE</a></p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default ModalDev