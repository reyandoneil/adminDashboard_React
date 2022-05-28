import React from 'react'
import { Icon } from '../../Atoms'

import { ButtonIconWrapper } from './ElementsButtonIcon'

function ButtonIcon({src}) {
    console.log(src);
    return (
        <ButtonIconWrapper>
            <Icon src={src} />
        </ButtonIconWrapper>
    )
}

export default ButtonIcon