import Banner from '../assets/images/skills1.png'
import Banner2 from '../assets/images/skills2.png'
export function Skills() {
    
    return (
        <>
        <div className="row section clients topspace">
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