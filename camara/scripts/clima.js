// Coordenadas de Itapeva, SP e sua chave da API
const lat = '-23.98';
const lon = '-48.87';
const apiKey = '774dca97420805ff78532397e39e6983'; //chave

const urlClimaAtual = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=${apiKey}`;
const urlPrevisao = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=${apiKey}`;

async function buscarClima() {
    try {
        // 1. Clima Atual
        const respostaAtual = await fetch(urlClimaAtual);
        if (respostaAtual.ok) {
            const dadosAtual = await respostaAtual.json();
            const temperatura = Math.round(dadosAtual.main.temp);
            const descricao = dadosAtual.weather[0].description;

            const elTemp = document.getElementById('temperatura-atual');
            const elDesc = document.getElementById('descricao-clima');

            if (elTemp) elTemp.textContent = `${temperatura}°C`;
            if (elDesc) elDesc.textContent = descricao.charAt(0).toUpperCase() + descricao.slice(1);
        }

        // 2. Previsão para 3 dias
        const respostaPrevisao = await fetch(urlPrevisao);
        if (respostaPrevisao.ok) {
            const dadosPrevisao = await respostaPrevisao.json();
            
            // Filtra os horários para pegar apenas ao meio-dia (12:00) de cada dia, pegando 3 dias
            const listaPrevisao = dadosPrevisao.list.filter(item => item.dt_txt.includes('12:00:00')).slice(0, 3);
            
            const containerPrevisao = document.getElementById('previsao-3dias');
            if (containerPrevisao) {
                containerPrevisao.innerHTML = '';
                
                listaPrevisao.forEach(item => {
                    const data = new Date(item.dt_txt);
                    const nomeDia = data.toLocaleDateString('pt-BR', { weekday: 'long' });
                    const tempDia = Math.round(item.main.temp);
                    
                    const elementoDia = document.createElement('p');
                    elementoDia.innerHTML = `<strong>${nomeDia.charAt(0).toUpperCase() + nomeDia.slice(1)}:</strong> ${tempDia}°C - ${item.weather[0].description}`;
                    containerPrevisao.appendChild(elementoDia);
                });
            }
        }
    } catch (erro) {
        console.error("Erro ao carregar o clima:", erro);
    }
}

buscarClima();