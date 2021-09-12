import React from 'react'

const CreatePost=()=>{
    const PostData=()=>{
        // if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
        //     M.toast({html:"Invalid Email Address",classes:"#ff1744 red accent-3"})
        //     return
        // }
        // else{
        // fetch("/login",{
        //     method:"post",
        //     headers:{
        //         "Content-Type":"application/json"
        //     },
        //     body:JSON.stringify({
               
        //     })
        // }).then(response=>response.json())
        //     .then(data=>{
        //         if(data.error){
        //             M.toast({html:data.error,classes:"#ff1744 red accent-3"})
        //         }
        //         else{
        //             M.toast({html:data.message,classes:"#69f0ae green accent-2"})
        //             // history.push('/login')
        //         }
        //     })
        // }
       
    }
    return(
        <div className="card input-filed" style={{
            maxWidth:"500px",
            margin:"10px auto",
            padding:"20px",
            textAlign:"center"
        }}>
            <input type="text" placeholder="title"/>
            <input type="text" placeholder="body"/>

            <div className="file-field input-field">
                <div className="btn">
                    <span>Upload Image</span>
                    <input type="file"/>
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text"/>
                </div>
            </div>
            <button className="btn waves-effect waves-light" type="submit" name="action" onClick={()=>PostData()}>
                <i className="material-icons right"></i>Submit Post
            </button>
        </div>
        
    )
}

export default CreatePost;