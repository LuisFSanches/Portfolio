import { createContext, ReactNode, useState } from "react";

interface NavBarProps{
    overlay: boolean
    showOpenMenu: boolean
    showCloseMenuButton: boolean
    handleOpenMenu: ()=> void
    handleCloseMenu: ()=> void
    zoomedImage: String
    showZoomedImage: boolean
    handleOpenZoomedImage: (image:string) => void
    handleCloseZoomedImage: ()=> void
    handleCloseModals: ()=> void
    sendingEmail: boolean
    setSendingEmail: (status:boolean)=> void
    emailSentMessage: boolean
    handleEmailSentMessage: ()=> void
    emailError: boolean
    setEmailError: (status:boolean)=> void
}

interface LayoutProviderProps{
    children:ReactNode
}

export const LayoutContext = createContext(
    {} as NavBarProps
)

export function LayoutProvider({children}:LayoutProviderProps){
    const [overlay, setOverlay] = useState(false)
    const [showOpenMenu, setOpenMenu] = useState(false)
    const [showCloseMenuButton, setShowCloseMenuButton] = useState(false)
    const [zoomedImage, setZoomedImage] = useState('')
    const [showZoomedImage, setShowZoomedImage] = useState(false)

    const [sendingEmail, setSendingEmail] = useState(false)
    const [emailSentMessage, setEmailSentMessage] = useState(false)
    const [emailError, setEmailError] = useState(false)


    function handleOpenMenu(){
        setOpenMenu(true)
        setShowCloseMenuButton(true)
        setOverlay(true)
    }

    function handleCloseMenu(){
        setOpenMenu(false)
        setShowCloseMenuButton(false)
        setOverlay(false)
        
    }

    function handleOpenZoomedImage(image: string){
        setZoomedImage(image)
        setShowZoomedImage(true)
        setOverlay(true)
    }

    function handleCloseZoomedImage(){
        setZoomedImage('')
        setShowZoomedImage(false)
        setOverlay(false)
        
    }

    function handleEmailSentMessage(){
        setEmailSentMessage(true)
        setTimeout(()=>{setEmailSentMessage(false)},2000)
    }

    function handleCloseModals(){
            handleCloseMenu()
            handleCloseZoomedImage()       
    }


    return(
        <LayoutContext.Provider value={
            {   
                showOpenMenu,showCloseMenuButton,
                handleOpenMenu,handleCloseMenu, 
                zoomedImage, showZoomedImage,
                handleOpenZoomedImage,handleCloseZoomedImage,
                overlay, handleCloseModals,
                sendingEmail, setSendingEmail,
                emailSentMessage, handleEmailSentMessage,
                emailError, setEmailError
            }
            }>
            {children}
        </LayoutContext.Provider>
    )
}