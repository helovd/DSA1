//Validação do número máximo de filhos

document.getElementById("filhos").addEventListener("input", function () {
    let valor = parseInt(this.value);
    if (valor > 5) {
        this.value = 5;
        alert("O número mpaximo de filhos prmitido é 5.");
    } else if (valor < 0) {
        this.value = 0;
        alert("O valor mínimo de filhos permitido é 0.");
    }
});