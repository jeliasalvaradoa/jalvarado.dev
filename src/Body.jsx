import { Servicios } from "./components/Servicios"
import { Skills } from "./components/Skills"
import { Proyectos } from "./components/Proyectos"
export function Body() {
    
    return (
        <main id="main">
         <div className="container">
          <Servicios/>
          <Skills/>
          <Proyectos/>
        </div>   
            
        </main>   
             
              )  
    
}