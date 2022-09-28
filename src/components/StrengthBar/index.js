import "./index.css"

const strengthBarDetailsImg = "https://res.cloudinary.com/ddry7fpzp/image/upload/v1664338089/Group_7681_wlm7kp.png"

const crossIcon = "https://res.cloudinary.com/ddry7fpzp/image/upload/v1664340035/Icon_ionic-ios-close_worfxe.png"

const StrengthBar = ()=>(
    <>
        <div className="card-container">
            <div className="cross-icon-container">
                <img
                className="cross-icon"
   
                 src={crossIcon} alt="Cross Icon" />
            </div>
            <div className="details-container">
                <h1 className="main-heading">Strength bar</h1>
                <p className="description">
                    Introducing strength bar to help you know your week subjects.
                </p>
            </div>
            <div>
                <img src={strengthBarDetailsImg} alt="Details" />
            </div>
            <div className="btn-container">
                <button type="button" className="finish-btn">
                    Finish
                </button>
            </div>
        </div>
    </>
)


export default StrengthBar