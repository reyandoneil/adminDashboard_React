import { useIdleTimer } from 'react-idle-timer'
import { useDispatch } from 'react-redux'
import { setIsIdle } from '../../Store/Action/UserAction'

const SESSION_IDEL_MINUTES = 1;

const IdleMonitor = (props) => {
    const dispatch = useDispatch()
    const { ComposedClass } = props
    const handleOnIdle = () => {
        console.error('dispatch global action');
        dispatch(setIsIdle(true))
        console.error('user is idle')
        console.error('last active', getLastActiveTime())
    }

    const { getLastActiveTime } = useIdleTimer({
        timeout: 1000 * 60 * SESSION_IDEL_MINUTES,
        onIdle: handleOnIdle,
        debounce: 500,
    })

    return <ComposedClass />
}

export default IdleMonitor;