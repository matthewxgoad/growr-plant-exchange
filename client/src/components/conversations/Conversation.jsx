import "./conversation.css"

export default function Conversation() {
    return (
        <div className="conversation">
            <img 
            className="conversationImg" 
            src="data:image/jpeg;base64,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" 
            alt="" 
            />
            <span className="conversationName">John Doe</span>
        </div>
    )
}