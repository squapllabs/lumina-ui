import React from 'react'
import CloseIcon from '../../icons/closeIcon'
import { useTheme } from '../../theme/ThemeProvider'

interface DialogBoxProps {
  open: boolean
  content: React.ReactNode
  title: string
  handleClose: () => void
  width: string
  theme?: string
}

const CustomSidePopup: React.FC<DialogBoxProps> = ({
  open,
  content,
  title,
  handleClose,
  width
}) => {
  if (!open) return null

  const { theme } = useTheme()
  const popupContainer: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    right: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(63, 63, 63, 0.6)'
  }
  const boxStyle: React.CSSProperties = {
    backgroundColor: theme === 'dark' ? 'rgb(49 49 49)' : 'white',
    padding: '2px',
    borderRadius: '4px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  }
  const closeButton: React.CSSProperties = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    outline: 'none'
  }
  const popupHeader: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0px 10px 0px 10px',
    borderBottom: '1px solid #e0e0e0',
    color: theme === 'dark' ? 'white' : 'black'
  }
  // const main_content: React.CSSProperties = {
  //   width: '100%',
  //   height: '100%'
  // }
  const dialogStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    right: 0,
    height: '100%',
    backgroundColor: 'rgba(118, 118, 118, 0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: width ? width : '50%'
  }

  return (
    <div style={popupContainer}>
      <div style={dialogStyle}>
        <div style={boxStyle}>
          <div style={popupHeader}>
            <div>
              <h4>{title}</h4>
            </div>
            <button style={closeButton}>
              <CloseIcon
                color={theme === 'dark' ? '#ccc' : '#475467'}
                onClick={handleClose}
              />
            </button>
          </div>
          <div
            style={{
              overflowX: 'hidden',
              overflowY: 'auto'
            }}
          >
            {content}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomSidePopup
