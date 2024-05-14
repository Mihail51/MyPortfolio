
const select = document.querySelector('select');
const allLang = ['ru', 'en', 'he'];

//let page = document.getElementById("mystyle").href="css/style.css";

select.addEventListener('change', changeURLLanguage);   

function changeURLLanguage() {                           
	let lang = select.value;                               
	location.href = window.location.pathname + '#' + lang;
	location.reload();
}

function changeLanguage() {
	let hash = window.location.hash;
	hash = hash.substr(1);
	console.log(hash);
	if(!allLang.includes(hash)) {
		location.href = window.location.pathname + '#ru';
		location.reload();
	}
	select.value = hash;
	document.querySelector('title').innerHTML = langArr['heading'][hash];
	
	for (let key in langArr) {
		let elem = document.querySelector('.lng__' + key);
		if (elem) {
			elem.innerHTML = langArr[key][hash];
		}
	}

	// Обновление всех ссылок с классом 'page__link'
    document.querySelectorAll('.page__link').forEach(link => {
        link.href = `${link.href.split('#')[0]}#${hash}`;
    });

	// change dir
	let lang = select.value; 
	
	if (lang === "he") {
		console.log('кнопка нажата');
		document.getElementById("mylang").lang="he"
		document.getElementById("mystyle").href="css/rtl.css";
//		document.getElementById("mystyle-adapted").href="css/style-adapted-rtl.css"; 
		document.getElementById("my-description").content="תיאור"; 
		document.getElementById("my-keywords").content="";
		document.querySelectorAll('picture.image.certificate__image.ru').forEach(picture => {
		picture.classList.add('visually-hidden');
		});
	}
	else if (lang === "en") {
		console.log('кнопка нажата');
		document.getElementById("mylang").lang="en"
		document.getElementById("mystyle").href="-";
//		document.getElementById("mystyle-adapted").href="css/style-adapted-rtl.css"; 
		document.getElementById("my-description").content=""; 
		document.getElementById("my-keywords").content="";
		document.querySelectorAll('picture.image.certificate__image.ru').forEach(picture => {
		picture.classList.add('visually-hidden');
		});

	} else {
		 console.log('кнопка нажата');
		document.getElementById("mylang").lang="ru"
		document.getElementById("mystyle").href="-";
//		document.getElementById("mystyle-adapted").href="css/adapted.css"; 
		document.getElementById("my-description").content="Описание"; 
		document.getElementById("my-keywords").content="";
		document.querySelectorAll('picture.image.certificate__image.en').forEach(picture => {
		picture.classList.add('visually-hidden');
		});
	}  
}



changeLanguage();






