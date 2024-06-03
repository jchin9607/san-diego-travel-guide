function StickyPage(props) {
    return (
        
            <div className="sticky-page">
                <div className="sticky-about-header">
                    <h1>{props.title}</h1>
                    
                </div>
                <div className="sticky-about">
                    <img src={props.img} alt="" />
                    <hr />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit quibusdam laudantium perspiciatis deserunt repellendus, commodi voluptatem nemo, aliquid architecto ab accusamus dolores, illo quae cumque.</p>
                </div>
            </div>
            
        
    )
}

export default StickyPage