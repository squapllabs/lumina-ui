/* eslint-disable prettier/prettier */
import React from 'react'
import Button from './Button'
import CloseIcon from '../../icons/CloseIcon'
import ProtoTypes from 'prop-types'

interface DialogBoxProps {
  title: string
  open: boolean
  handleClose: () => void
  handleConfirm: () => void
  contentLine1: string
}

const SubmitDialogBox: React.FC<DialogBoxProps> = ({
  title,
  open,
  handleClose,
  handleConfirm,
  contentLine1
}) => {
  if (!open) return null

  const dialogStyle: React.CSSProperties = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const boxStyle: React.CSSProperties = {
    backgroundColor: '#fff',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    maxWidth: '400px',
    display: 'flex',
    flexDirection: 'column',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: '1px'
  }

  const titleStyle: React.CSSProperties = {
    padding: '10px 10px 1px 10px'
  }

  const contentStyle: React.CSSProperties = {
    padding: '8px 8px 8px 10px',
    fontSize: 'smaller'
  }

  const mainContentStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row'
  }

  const iconContentStyle: React.CSSProperties = {
    padding: '15px'
  }

  return (
    <div style={dialogStyle}>
      <div style={boxStyle}>
        <div style={mainContentStyle}>
          <div>
            <h4 style={titleStyle}>{title}</h4>
            <p style={contentStyle}>{contentLine1}</p>
          </div>
          <div style={iconContentStyle}>
            <CloseIcon onClick={handleClose} />
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            gap: '10px'
          }}
        >
          <Button
            color='cancel'
            shape='rectangle'
            justify='center'
            size='small'
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            shape='rectangle'
            justify='center'
            color='primary'
            size='small'
            onClick={handleConfirm}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  )
}

export default SubmitDialogBox

SubmitDialogBox.propTypes = {
  title: ProtoTypes.string.isRequired,
  open: ProtoTypes.bool.isRequired,
  handleClose: ProtoTypes.func.isRequired,
  handleConfirm: ProtoTypes.func.isRequired,
  contentLine1: ProtoTypes.string.isRequired
}
