import "./message.css"

export default function Message({own}) {
    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <img
                    className="messageImg"
                    src="https://www.investnational.com.au/wp-content/uploads/2016/08/person-stock-2.png"
                    alt=""
                />
                <p className="messageText">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
            </div>
            <div className="messageBottom">1 hour ago</div>
        </div>
    )
}
