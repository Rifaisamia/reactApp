import { useState } from "react";
import CardEtudiant from "../CardEtudiant";
export default function ContentA() {
    const [etudiants, setEtudiants] = useState([
        { id: 1, nom: "amine", note: 6 },
        { id: 2, nom: "salah dine", note: 16 },
        { id: 3, nom: "nour", note: 16 },
        { id: 4, nom: "maroua", note: 6 }
    ]);
    const [id, setID] = useState("");
    const [nom, setNom] = useState("");
    const [note, setNote] = useState("");
    // Quand on clique sur une carte
    function remplirInput(etudiant) {
        setID(etudiant.id);
        setNom(etudiant.nom);
        setNote(etudiant.note);
    }
    function Modifier() {
        const UpdateStudent = etudiants.map((item)=>{
            return  item.id==id?{...item,id:id,nom:nom,note:note}:item
        })
        setEtudiants(UpdateStudent)
    }
    function Supprimer() {
        const DeleteStudent = etudiants.filter((item)=>{
            return  item.id!=id
        })
        setEtudiants(DeleteStudent)
    }
    // Ajouter un étudiant
    function ajouter() {
        setEtudiants([...etudiants,{id: id,nom: nom,note: note}]);
    }
    return (
        <main className="flex-1 p-8">
            <h2 className="text-3xl font-bold">
                Bienvenue
            </h2>
            <input
                type="number"
                placeholder="ID"
                value={id}
                onChange={(e) => setID(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
            />
            <input
                type="text"
                placeholder="Nom"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
            />
            <input
                type="number"
                placeholder="Note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
            />
            <button
                onClick={ajouter}
                className="w-full bg-blue-700 mb-5 text-white px-4 py-2 rounded"
            >
                Ajouter
            </button>
            <button
                onClick={Modifier}
                className="w-full bg-blue-700 mb-5 text-white px-4 py-2 rounded"
            >
                Modifier
            </button>
 
 
            <button
                onClick={Supprimer}
                className="w-full bg-blue-700 mb-5 text-white px-4 py-2 rounded"
            >
                Supprimer
            </button>
 
 
           
 
 
 
 
            <div className="mt-6 grid grid-cols-3 gap-5">
 
                {etudiants.map((item) => (
                    <CardEtudiant
                        key={item.id}
                        etudiant={item}
                        onClick={() => remplirInput(item)}
                    />
                ))}
 
            </div>
 
        </main>
    );
}
 