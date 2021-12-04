function mostrarBanner ()
{
	document.getElementById("Banner").style.display = "flex";
	document.getElementById("Perfil").style.display = "none";
	document.getElementById("Projetos").style.display = "none";
	document.getElementById("Repositorios").style.display = "none";
}

function mostrarPerfil ()
{
	document.getElementById("Banner").style.display = "none";
	document.getElementById("Perfil").style.display = "flex";
	document.getElementById("Projetos").style.display = "none";
	document.getElementById("Repositorios").style.display = "none";
}

function mostrarProjetos ()
{
	document.getElementById("Banner").style.display = "none";
	document.getElementById("Perfil").style.display = "none";
	document.getElementById("Projetos").style.display = "flex";
	document.getElementById("Repositorios").style.display = "none";
}

function mostrarRepositorios ()
{
	document.getElementById("Banner").style.display = "none";
	document.getElementById("Perfil").style.display = "none";
	document.getElementById("Projetos").style.display = "none";
	document.getElementById("Repositorios").style.display = "flex";
}

function imprimirPerfil ()
{
	let xhr = new XMLHttpRequest ();
	xhr.onload = function ()
	{
		let data = JSON.parse (this.responseText);
		let impressao = 
		`	<div class="container">
					<div class="row">
						<div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
							<div class="meuGithub">
								<img src="${data.avatar_url}"/>
							</div>
						</div>
						<div class="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
							<div class="meuGithub">
								<h3>
									Info
								</h3>
								<ul>
									<li>
										<i class="fab fa-github"></i> ${data.login}
									</li>
									<li>
										<i class="far fa-building"></i> ${data.company}
									</li>
									<li>
										<i class="fas fa-map-marked-alt"></i> ${data.location}
									</li>
									<li>
										<i class="fas fa-globe"></i> ${data.blog}
									</li>
								</a>
									</li>
								</ul>
								<p>
									<i class="fas fa-book"></i> ${data.bio}
								</p>
								<span class="badge bg-dark">
									<i class="fas fa-code-branch"></i> Rep. Públicos ${data.public_repos}
								</span>
								<span class="badge bg-dark">
									<i class="fas fa-user-circle"></i> Seguindo ${data.following}
								</span>
								<span class="badge bg-dark">
									<i class="far fa-user-circle"></i> Seguidores ${data.followers}
								</span>
							</div>
							<div class="meuGithub">
								<h3>
									Buscar repositórios
								</h3>
								<div class="input-group rounded">
									<input type="text" class="form-control rounded" placeholder="Digite o repositório desejado" aria-label="Pesquisa" aria-describedby="search-addon" />
									<span class="input-group-text border-0" id="search-addon">
										<i class="fas fa-search"></i>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		`;
		document.getElementById ("Repositorios").innerHTML = impressao;
	};
	xhr.onerror = function ()
	{
		alert (`Erro na requisição: \n Código: ${this.status} - ${this.statusText}`);
	};
	xhr.open ('GET', 'https://api.github.com/users/pedroigorreis');
	xhr.send ();
}
