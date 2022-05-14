import React from "react"



export default function MemeForm(props){

    return(
        <section className="meme--form-section">
            <form className="meme--from">
                <div className="form--inline-wrapper">
                    <input type="text" name="upText" onChange={props.onChange}/>
                    <input type="text" name="downText" onChange={props.onChange}/>
                </div>
                <button className="form--btn">Get a new meme image  🖼</button>
            </form>
        </section>
    )
}