import React from "react"

const Profile=()=>{
    return(
        <div>
            <div style={{display:"flex",justifyContent:"space-around",margin:"18px 0px",borderBottom:"1px solid grey"}}>
                <div>
                    <img style={{width:"160px",height:"160px",borderRadius:"80px"}} src="https://picsum.photos/seed/picsum/200/200"/>
                </div>
                <div>
                    <h4>Ramesh Barma</h4>
                    <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}>
                        <h5>40 posts</h5>
                        <h5>40 followers</h5>
                        <h5>40 following</h5>
                    </div>
                </div>
            </div>
            <div className="gallery">
                <img className="item" src="https://picsum.photos/200/200?random=1"/>
                <img className="item" src="https://picsum.photos/200/200?random=2"/>
                <img className="item" src="https://picsum.photos/200/200?random=3"/>
                <img className="item" src="https://picsum.photos/200/200?random=4"/>
                <img className="item" src="https://picsum.photos/200/200?random=5"/>
                <img className="item" src="https://picsum.photos/200/200?random=6"/>
                <img className="item" src="https://picsum.photos/200/200?random=7"/>
                <img className="item" src="https://picsum.photos/200/200?random=8"/>
                <img className="item" src="https://picsum.photos/200/200?random=9"/>
                <img className="item" src="https://picsum.photos/200/200?random=10"/>
                <img className="item" src="https://picsum.photos/200/200?random=11"/>
                <img className="item" src="https://picsum.photos/200/200?random=12"/>
            </div>
        </div>
    )
}

export default Profile;