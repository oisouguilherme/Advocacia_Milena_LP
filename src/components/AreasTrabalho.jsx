import { CardArea } from "./CardArea";
import Foto1 from "../assets/im1.webp";
import Foto from "../assets/im4.webp";
import Foto2 from "../assets/im5.webp";
import Foto3 from "../assets/im6.webp";
import Foto4 from "../assets/im7.webp";

export function AreasTrabalho(){
  return(
    <div className="bg-black text-white">
      <div className="max-w-6xl mx-auto text-center py-24">
        <h2 className="text-3xl font-bold pb-2">Áreas de Atuação</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, <br />modiorem ipsum dolor sit amet consectetur adipisicing elit. Quae, modi.</p>
        <div className="space-y-8 pt-12">
          <CardArea img={Foto}/>
          <CardArea img={Foto2}/>
          <CardArea img={Foto3}/>
          <CardArea img={Foto4}/>
          <CardArea img={Foto1}/>
        </div>
      </div>
    </div>
  )
}