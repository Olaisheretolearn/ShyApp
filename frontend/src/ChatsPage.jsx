import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
    <div style={{height: '100vh'}}>
        <PrettyChatWindow
            projectId="ae31f86f-4fc6-42de-8ae6-d78de3b0a880"
            username={props.user.username}
            secret={props.user.secret}
            style={{ height: '100%' }}
        />
    </div>
    )
}

export default ChatsPage
