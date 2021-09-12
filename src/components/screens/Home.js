import React from "react"

const Home=()=>{
    return(
        <div className="home">
            <div className="card home-card">
                <h5>Ramesh</h5>
                <div className="card-image">
                    <img src="https://picsum.photos/200/200?random=1"/>
                </div>
                <div className="card-content">
                    <i className="material-icons " style={{color:"red"}}>favorite</i>
                    <h6>Title Text</h6>
                    <p> this amazing post</p>
                    <input type="text" placeholder="add a comment"/>
                </div>
            </div>
            <div className="card home-card">
                <h5>Ramesh</h5>
                <div className="card-image">
                    <img src="https://picsum.photos/200/200?random=2"/>
                </div>
                <div className="card-content">
                    <i className="material-icons " style={{color:"red"}}>favorite</i>
                    <h6>Title Text</h6>
                    <p> this amazing post</p>
                    <input type="text" placeholder="add a comment"/>
                </div>
            </div>
            <div className="card home-card">
                <h5>Ramesh</h5>
                <div className="card-image">
                    <img src="https://picsum.photos/200/200?random=3"/>
                </div>
                <div className="card-content">
                    <i className="material-icons " style={{color:"red"}}>favorite</i>
                    <h6>Title Text</h6>
                    <p> this amazing post</p>
                    <input type="text" placeholder="add a comment"/>
                </div>
            </div>
        </div>
    )
}

export default Home;