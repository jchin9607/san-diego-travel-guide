import moment from 'moment-timezone';

function Footer( ) {
    const now = moment();
    const sanDiegoTime = now.tz('America/Los_Angeles');

    

    return (
        
        <footer>
            
            <div className="footer-aside">
                <h1>San Diego</h1>
            
                <hr />
                <h1>{sanDiegoTime.format('HH:mm:ss')}</h1>
            </div>
            
        </footer>
    )
}

export default Footer