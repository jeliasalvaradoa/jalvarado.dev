import Banner from '../assets/images/skills3.png'
import Banner2 from '../assets/images/skills4.png'

export function Skills() {
    
    return (
        <>
        <div id='skills' className="row section clients topspace">
        <h2 className="section-title"><span>Skills</span></h2>
        <div className="col-lg-12">
            <p>
                <img src={Banner} alt=""/>
            </p>
        </div>
        <div className="col-lg-12">
            <p>
                <img src={Banner2} alt=""/>
            </p>
        </div>
    </div> 
    </>      
    )  
}