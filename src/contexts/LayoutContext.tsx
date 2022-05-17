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
        console.log('abriu')
    }

    function handleCloseZoomedImage(){
        setZoomedImage('')
        setShowZoomedImage(false)
        setOverlay(false)
    }

    function handleCloseModals(){
        if (showOpenMenu === true){
            setOpenMenu(false)
            setShowCloseMenuButton(false)
        } else if(showZoomedImage === true){
            setShowZoomedImage(false)
        }
        setOverlay(false)
    }


    return(
        <LayoutContext.Provider value={
            {   
                showOpenMenu,showCloseMenuButton,
                handleOpenMenu,handleCloseMenu, 
                zoomedImage, showZoomedImage,
                handleOpenZoomedImage,handleCloseZoomedImage,
                overlay, handleCloseModals
            }
            }>
            {children}
        </LayoutContext.Provider>
    )
}