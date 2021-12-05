function imprimirGithub()
{
	let xhr = new XMLHttpRequest ();
	xhr.onload = function ()
	{
		let data = JSON.parse (this.responseText);
		let impressao = 
		`
				<div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
					<div id="perfil" class="bio">
						<h6>
							[pedroigor@   <i class="fab fa-redhat"></i> ~] feh $USERGIT_AVATAR
						</h6>
						<img src="${data.avatar_url}" alt="Git Avatar"/>
						<h6>
							[pedroigor@   <i class="fab fa-redhat"></i> ~] echo $USERGITLINK
						</h6>
						<code>
							<a href="https://github.com/pedroigorreis/" taget="_blank">
								→ Github access
							</a>
						</code>
					</div>
					</div>
					<div class="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
						<div class="infoGit">
							<h6>
								[pedroigor@   <i class="fab fa-redhat"></i> ~] echo $(curl -i https://api.github.com/users/pedroigorreis) > myGit && cat myGit | less
							</h6>
							<div id="infoGit" class="bio">
								<code>
									<ul>
										<li>
											<i class="fas fa-user-plus"></i> followers => ${data.followers}
										</li>
										<li>
											<i class="fas fa-user-friends"></i> following ==> ${data.following}
										</li>
										<li>
											<i class="fab fa-git-alt"></i> public_repos => ${data.public_repos}
										</li>																													
										<li>
											<i class="far fa-building"></i> company => ${data.company}
										</li>
										<li>
											<i class="fab fa-github-alt"></i> username => ${data.login}
										</li>
										<li>
											<i class="fas fa-street-view"></i> location => ${data.location}
										</li>
										<li>
											<i class="fas fa-globe"></i> blog => ${data.blog}
										</li>
										<li>
											(END)
										</li>
									</ul>
								</code>
							</div>
						</div>
					</div>
			</code>
		`;
		document.getElementById ("infoGit").innerHTML = impressao;
	}
	xhr.open ('GET', 'https://api.github.com/users/pedroigorreis');
	xhr.send ();
}

(function()
{
	const limite = 5;
	const ordenar = "created: asc"
	const url = "https://api.github.com/users";
	const informacoes = document.getElementById("info");
	const pesquisa = document.getElementById("pesquisa");
	
	async function receberDados(usuario)
	{
		const perfilResposta = await fetch(`${url}/${usuario}`);
		const reposResposta = await fetch(`${url}/${usuario}/repos?per_page=${limite}&sort=${ordenar}`);
		const perfil = await perfilResposta.json();
		const repos = await reposResposta.json();
		return { perfil,repos };
	}
	function imprimirPerfil(usuario)
	{
		informacoes.innerHTML =
		`
			<img src="${usuario.avatar_url}" alt="User pic"/>
			<code>
				<ul>
					<li>
						<i class="fas fa-user-plus"></i> followers => ${usuario.followers}
					</li>
					<li>
						<i class="fas fa-user-friends"></i> following ==> ${usuario.following}
					</li>
					<li>
						<i class="fab fa-git-alt"></i> public_repos => ${usuario.public_repos}
					</li>																													
					<li>
						<i class="far fa-building"></i> company => ${usuario.company}
					</li>
					<li>
						<i class="fab fa-github-alt"></i> username => ${usuario.login}
					</li>
					<li>
						<i class="fas fa-street-view"></i> location => ${usuario.location}
					</li>
					<li>
						<i class="fas fa-globe"></i> blog => ${usuario.blog}
					</li>
				</ul>
			</code>
		`;
	}
	function imprimirRepos(repos)
	{
		let saida = "";
		repos.forEach(repos =>
		{
			saida += 
			`
				<code>
					<ul>
						<li>
							<i class="fab fa-git-alt"></i> public_repos => ${repos.name}
						</li>
						<li>
							<i class="far fa-star"></i> stars => ${repos.stargazers_count}
						</li>
						<li>
							<i class="fas fa-eye"></i> watchers => ${repos.watchers_count}
						</li>
					</ul>
				</code>
			`;
		});
		document.getElementById("repos").innerHTML = saida;
	}
	pesquisa.addEventListener("keyup", e =>
	{
		const usuario = e.target.value;
		if(usuario.length > 0)
		{
			receberDados(usuario).then(res => 
			{
				imprimirPerfil(res.perfil); 
				imprimirRepos(res.repos);
			});
		}
	});
})();
