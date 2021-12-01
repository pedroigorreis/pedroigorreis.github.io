function mostrarBanner()
{
	document.getElementById("Banner").style.display = "flex";
	document.getElementById("Perfil").style.display = "none";
	document.getElementById("Projetos").style.display = "none";
	document.getElementById("Repositorios").style.display = "none";
}

function mostrarPerfil()
{
	document.getElementById("Banner").style.display = "none";
	document.getElementById("Perfil").style.display = "flex";
	document.getElementById("Projetos").style.display = "none";
	document.getElementById("Repositorios").style.display = "none";
}

function mostrarProjetos()
{
	document.getElementById("Banner").style.display = "none";
	document.getElementById("Perfil").style.display = "none";
	document.getElementById("Projetos").style.display = "flex";
	document.getElementById("Repositorios").style.display = "none";
}

function mostrarRepositorios()
{
	document.getElementById("Banner").style.display = "none";
	document.getElementById("Perfil").style.display = "none";
	document.getElementById("Projetos").style.display = "none";
	document.getElementById("Repositorios").style.display = "flex";
}