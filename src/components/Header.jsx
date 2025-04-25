import React from 'react';
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = ({ setNavBarOpen }) => {

    return(
        <div className="h-20 w-full flex items-center pl-7" >
            <Button onClick={()=> setNavBarOpen(prev => !prev)} >
                <FontAwesomeIcon icon={faBars} size="xl" />
            </Button>
        </div>

        )

}

export default Header;