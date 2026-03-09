function FloatingButton({ abrirModal }) {
    return (
        <button
            onClick={abrirModal}
            className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-violet-600 text-white text-3xl shadow-lg hover:scale-105 transition"
        >
            +
        </button>
    );
}

export default FloatingButton;