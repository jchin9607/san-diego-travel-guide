function StickyPage(props) {
    return (
        
            <div className="sticky-page">
                <div className="sticky-about-header">
                    <h1>{props.title}</h1>
                    
                </div>
                <div className="sticky-about">
                    <img src={props.img} alt="" />
                    <hr />
                    <p>{props.desc}</p>
                </div>
            </div>
            
        
    )
}

export default StickyPage