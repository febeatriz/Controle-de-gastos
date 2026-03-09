import { formatarData } from "../../utilis/formatarData";
import { formatarMoeda } from "../../utilis/formatarMoeda";

function CardReceitas({ total, lista = [], onExcluir }) {
    return (
        <div className="bg-receita p-4 sm:p-5 rounded-xl mb-4 sm:mb-5 text-center bg-emerald-400 mx-4 sm:mx-0 md:min-w-[390px]">
            <h3 className="text-2xl sm:text-3xl font-bold text-black mb-2 sm:mb-3">
                Entradas
            </h3>

            <p className="text-lg sm:text-xl font-bold text-black mb-4 sm:mb-6">
                {formatarMoeda(total)}
            </p>

            <div className="mt-2 sm:mt-3">
                {lista.length === 0 && (
                    <p className="text-gray-900 text-sm sm:text-base">Nenhuma entrada</p>
                )}

                {lista.map((t) => (
                    <div key={t.id} className="grid grid-cols-[50px_1fr_80px_25px] sm:grid-cols-[70px_1fr_120px_30px] gap-1 sm:gap-2 sm:text-sm md:text-base py-1 px-2 items-center border-b border-black border-opacity-10">
                        <span className="text-black text-xs sm:text-sm">
                            {formatarData(t.data)}
                        </span>

                        <span className="text-black text-xs sm:text-sm truncate">
                            {t.categoria}
                        </span>

                        <span className="text-right text-black font-bold text-xs sm:text-sm">
                            {formatarMoeda(t.valor)}
                        </span>

                        <button
                            className="bg-transparent border-0 cursor-pointer sm:text-lg hover:text-red-600"
                            onClick={() => onExcluir(t.id)}
                        >
                            ✕
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CardReceitas;