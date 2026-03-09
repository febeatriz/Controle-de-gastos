export function formatarData(dataISO) {
    if (!dataISO) return "";

    if (typeof dataISO === "string" && dataISO.includes("T")) {
        dataISO = dataISO.split("T")[0];
    }

    if (typeof dataISO === "string" && dataISO.includes("-")) {
        const [ano, mes, dia] = dataISO.split("-");
        return `${dia}/${mes}`;
    }

    return String(dataISO);
}