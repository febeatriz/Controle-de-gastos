import { useEffect, useState } from "react";
import { buscarCategorias, criarTransacao } from "../../services/api";

function ModalTransacao({ fecharModal, atualizar }) {
    const [descricao, setDescricao] = useState("");
    const [valor, setValor] = useState("");
    const [data, setData] = useState("");
    const [tipo, setTipo] = useState("RECEITA");
    const [categoria, setCategoria] = useState("");
    const [categorias, setCategorias] = useState([]);
    const [erro, setErro] = useState("");

    useEffect(() => {
        const carregarCategorias = async () => {
            try {
                const data = await buscarCategorias();
                setCategorias(data);
            } catch (error) {
                console.error(error);
                setErro("Erro ao carregar categorias.");
            }
        };

        carregarCategorias();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setErro("");

            const novaTransacao = {
                descricao,
                valor: parseFloat(valor),
                data,
                tipo,
                categoria,
            };

            await criarTransacao(novaTransacao);
            await atualizar();
            fecharModal();
        } catch (error) {
            console.error(error);
            setErro("Erro ao salvar transação.");
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 px-4">
            <div className="bg-pink-200 p-8 rounded-2xl w-full max-w-md shadow-2xl border border-white/10">
                <h2 className="text-xl font-bold text-black mb-4">Nova Transação</h2>

                {erro && <p className="text-red-400 mb-3">{erro}</p>}

                <form onSubmit={handleSubmit} className="flex flex-col text-black">
                    <select
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                        className="mb-3 p-2 rounded-lg bg-pink-300 text-black border-0 focus:outline-none text-sm sm:text-base"
                        required
                    >
                        <option value="">Selecione a categoria</option>
                        {categorias.map((cat, index) => (
                            <option key={index} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </select>

                    <input
                        type="text"
                        placeholder="Descrição"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        className="mb-3 p-2 rounded-lg bg-pink-300 border-0 focus:outline-none text-sm sm:text-base"
                    />

                    <input
                        type="number"
                        placeholder="Valor"
                        value={valor}
                        onChange={(e) => setValor(e.target.value)}
                        className="mb-3 p-2 rounded-lg bg-pink-300 text-black border-0 focus:outline-none text-sm sm:text-base"
                        required
                    />

                    <input
                        type="date"
                        value={data}
                        onChange={(e) => setData(e.target.value)}
                        className="mb-3 p-2 rounded-lg bg-pink-300 text-black focus:outline-none text-sm sm:text-base"
                        required
                    />

                    <select value={tipo} onChange={(e) => setTipo(e.target.value)} className="mb-3 p-2 rounded-lg bg-pink-300 text-black border-0 focus:outline-none text-sm sm:text-base">
                        <option value="RECEITA">Receita</option>
                        <option value="DESPESA">Despesa</option>
                        <option value="INVESTIMENTO">Investimento</option>
                    </select>


                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between mt-2">
                        <button type="button" onClick={fecharModal} className="bg-red-500 border-0 px-3.5 py-2 rounded-lg text-black cursor-pointer hover:opacity-80 text-sm sm:text-base order-2 sm:order-1">
                            Cancelar
                        </button>
                        <button type="submit" className="bg-green-600 border-0 px-3.5 py-2 rounded-lg text-black cursor-pointer hover:opacity-80 text-sm sm:text-base order-1 sm:order-2">
                            Salvar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ModalTransacao;