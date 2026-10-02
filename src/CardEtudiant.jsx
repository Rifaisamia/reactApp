export default function CardEtudiant({ etudiant, onClick }) {
    return (
        <div
            onClick={onClick}
            className={`p-5 rounded cursor-pointer ${
                etudiant.note < 10
                    ? "bg-pink-200"
                    : "bg-blue-200"
            }`}
        >
            <h3 className="text-lg">
                {etudiant.nom}
            </h3>
 
            <p className="text-blue-400">
                {etudiant.note}
            </p>
        </div>
    );
}
 