import CardSaldo from "./CardSaldo";
import CardReceitas from "./CardReceitas";
import CardDespesas from "./CardDespesas";
import CardInvestimentos from "./CardInvestimentos";
import { deletarTransacao } from "../../services/api";

function ResumoMensal({ mes, ano }) {

    const [resumo, setResumo] = useState({
        receitas: 0,
        despesas: 0,
        investimentos: 0,
        saldo: 0,
    });

    const excluir = async (id) => {
        await deletarTransacao(id);
        window.location.reload(); // simples por enquanto
    };

    const receitas = transacoes.filter(t => t.tipo === "RECEITA");
    const despesas = transacoes.filter(t => t.tipo === "DESPESA");
    const investimentos = transacoes.filter(t => t.tipo === "INVESTIMENTO");

    useEffect(() => {
        (async () => {
            const data = await buscarResumo(mes, ano);

            // garante números mesmo se vier "50.00" como string
            setResumo({
                receitas: Number(data.receitas ?? 0),
                despesas: Number(data.despesas ?? 0),
                investimentos: Number(data.investimentos ?? 0),
                saldo: Number(data.saldo ?? 0),
            });
        })();
    }, [mes, ano]);

    return (
        <div>
            <CardSaldo saldo={saldo} />

            <div className="flex flex-col sm:flex-col md:flex-row gap-4 md:gap-8 lg:gap-16 justify-center px-4 sm:px-0">
                <CardReceitas total={receitasTotal} lista={receitas} onExcluir={excluir} />
                <CardDespesas total={despesasTotal} lista={despesas} onExcluir={excluir} />
            </div>
            <CardInvestimentos total={investimentosTotal} lista={investimentos} onExcluir={excluir} />
        </div>
    );
}

export default ResumoMensal;