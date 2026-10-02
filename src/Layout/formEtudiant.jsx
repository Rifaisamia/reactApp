import {useState } from "react";
export  function FormEtudiant(){
    const [nom,setNom]=useState('')
    function sayHello(vnom){
        setNom(vnom);
    }
    return(
        <>
            <button onClick={()=>sayHello("amine")} className="bg-blue-500">say hello</button>
            {nom}
        </>
    )
}
export default FormEtudiant