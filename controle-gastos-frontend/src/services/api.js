const API_URL = "https://controle-de-gastos-xvl2.onrender.com/transacoes";

export const buscarTodas = async () => {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Erro ao buscar transações.");
    }

    return response.json();
};

export const buscarPorMes = async (mes, ano) => {
    const response = await fetch(`${API_URL}/mes?mes=${mes}&ano=${ano}`);

    if (!response.ok) {
        throw new Error("Erro ao buscar transações do mês.");
    }

    return response.json();
};

export const buscarResumo = async (mes, ano) => {
    const response = await fetch(`${API_URL}/resumo?mes=${mes}&ano=${ano}`);

    if (!response.ok) {
        throw new Error("Erro ao buscar resumo.");
    }

    return response.json();
};

export const buscarCategorias = async () => {
    const response = await fetch(`${API_URL}/categorias`);

    if (!response.ok) {
        throw new Error("Erro ao buscar categorias.");
    }

    return response.json();
};

export const criarTransacao = async (transacao) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(transacao),
    });

    if (!response.ok) {
        throw new Error("Erro ao criar transação.");
    }
};

export const deletarTransacao = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
    });

    if (!response.ok) {
        throw new Error("Erro ao excluir transação.");
    }
};