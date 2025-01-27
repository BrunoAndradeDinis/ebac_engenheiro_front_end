// variáveis
const form = document.querySelector("form");
const input = document.querySelector("#input-local");
const sectionInfos = document.querySelector("#weather-info");

// Verifica se os elementos essenciais existem
if (!form || !input || !sectionInfos) {
  console.error("Elementos necessários não encontrados no DOM.");
}

async function obterNomeCidade(latitude, longitude) {
  const apikey = "1492951fb1f540178a066143796e94d8";
  const url = `https://api.opencagedata.com/geocode/v1/json?key=${apikey}&q=${latitude}+${longitude}&pretty=1`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const cidade = data.results[0]?.components?.city || "Local desconhecido";

    if (input) input.value = cidade;
  } catch (error) {
    console.error("Erro ao obter a cidade:", error);
  }
}

// puxando os dados do form para utilizar na API.
form?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const idKey = "3f33e8701b88c84dfc5b106c23d3f0e0";

  if (!input || !sectionInfos) return;

  const local = input.value;

  if (local.length < 3) {
    alert("O local precisa ter, pelo menos, 3 letras!");
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${local}&appid=${idKey}&lang=pt_br&units=metric`
    );

    const data = await response.json();

    if (!response.ok || !data.main || !data.weather) {
      alert("Erro ao obter os dados do clima. Verifique o local informado.");
      return;
    }

    const infos = {
      temperatura: Math.round(data.main.temp),
      local: data.name,
      icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    };

    sectionInfos.innerHTML = `
      <div class="weather-data">
        <h2>${infos.local}</h2>
        <span>${infos.temperatura}ºC</span>
      </div>
      <img src="${infos.icon}" alt="Ícone do clima">
    `;
  } catch (error) {
    console.error("Erro ao obter os dados da API:", error);
  } finally {
    console.log("Processo concluído!");
  }
});
