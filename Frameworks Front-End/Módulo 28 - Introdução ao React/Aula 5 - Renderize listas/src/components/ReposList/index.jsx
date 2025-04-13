import { useState, useEffect } from "react";

export default function ReposList() {
  const url = "https://api.github.com/users/BrunoAndradeDinis/repos";
  const [repos, setRepos] = useState([]);
  const [estaCarregando, setEstacarregando] = useState(true)

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((resJson) => {
        setTimeout(()=>{
          setEstacarregando(false)
          setRepos(resJson);
        }, 2000)
        console.log(resJson);
      });
  }, []);

  return (
    <>
      <h3>Repositórios</h3>
      <ul>
        {estaCarregando && (
          <h4>Carregando ...</h4>
        )}
        {/* {repos.map((repo) => ( */}
        {repos.map(({id, name, language, html_url}) => (
          <li key={id}>
            <b>Nome:</b> {name} <br />
            <b>Linguagem:</b> {language} <br />
            <b>Link:</b> <a href={html_url} target="_blank" rel="noopener noreferrer">Visitar no github</a>
          </li>
        ))}
      </ul>
    </>
  );
}
