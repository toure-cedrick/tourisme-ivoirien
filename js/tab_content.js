var tab = function(){
	var hash = window.location.hash;
	var lien = document.querySelector('a[href="'+hash+'"]');
	var lien_li = lien.parentNode.classList;
	var div = lien.parentNode.parentNode.parentNode
	if(!lien_li.contains('active')){
		var old_lien = div.querySelector('.active');
		old_lien.classList.remove('active');
		lien_li.add('active');
		var lien_contenu = div.querySelector(''+hash+'');
		var old_lien_contenu = div.querySelector('.tab-active');
		//SUPPRESSION DES CLASSES ET EFFETS ACTIVES
		old_lien_contenu.classList.remove('tab-active');
		old_lien_contenu.classList.remove('apparait');
		old_lien_contenu.classList.remove('disparait');
		//AJOUT DES CLASSES ET EFFETS 
		lien_contenu.classList.add('tab-active');
		lien_contenu.classList.add('disparait');
		lien_contenu.offsetWidth;
		lien_contenu.classList.add('apparait');
	}
}
window.addEventListener('hashchange', tab);