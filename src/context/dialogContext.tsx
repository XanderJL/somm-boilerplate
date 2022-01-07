import { createContext, FC, ReactNode } from 'react'

interface DialogContextInterface {
  title?: string
  data?: ReactNode
}

const DialogContext = createContext<DialogContextInterface | null>(null)

const defaultContext: DialogContextInterface = {
  title: 'Oops! Something Went Wrong.'
}

const DialogProvider: FC = ({ children }) => {
  return (
    <DialogContext.Provider value={defaultContext}>
      {children}
    </DialogContext.Provider>
  )
}

export default DialogProvider
