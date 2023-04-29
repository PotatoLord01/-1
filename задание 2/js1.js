
let i = 0, howManyTimes = 29, stop=0,letter=0,points=0,flag=0,comppoints=0,gamestop=0;
let yourname,yourriver,yourcity,youranimal;
let arr_RU = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Э', 'Ю', 'Я'];
let city = ['Абакан','Бабкино','Важины','Гаврилково','Давыдово','Евпатория','Железногорск','Заборки','Ибрагимово','Йошкар-Ола','Кабанск','Лабинск','Магадан','Набережные Челны','Обнинск','Павловицы','Радужный','Сабуровка','Тавайза','Убинская','Фадеево','Хабаровск','Царево','Чайковский','Шабановское','Щекино','Электрогорск','Юбилейный','Ягодное'];
let name = ['Абрам','Бахрам','Василий','Гарри','Дамир','Евгений','Ждан','Заур','Ибрагим','Йосиф','Кирилл','Леонард','Михаил','Назар','Олег','Панкрат','Радик','Савелий','Тагир','Уинслоу','Фарид','Хабиб','Цезарь','Чарльз','Шамиль','Щеголь','Эдгар','Юлиан','Ян'];
let river = ['Аба-эль-Кур','Бабарынка','Вавай','Гаварагет','Даворка','Евбаза','Жабечь','Забобуриха','Ибейка','Йезава','К’Аппель','Ла-Илья','Маальях','Налиминка','Обдыр','Пайсята','Райна','Сагала','Табачная','Уаимакарири','Фадеев ручей','Ха-Чу','Цага','Чабра','Шабанга','Щапина','Эбенки','Юбал','Яблоновая'];
let animal = ['Абидозавр','Бабакотии','Великолепный козодой','Гавайская казарка','Дакотараптор','Енот-полоскун','Жабки','Завропосейдон','Изящный круглопалый геккон','Йеменская синичья славка','Калифорнийский хохлатый перепел','Лемурийский погоныш','Маврикийская кваква','Наездник рогохвоста большого','Обрубленный мурекс','Папуанская ложнопищуха','Радужная меланотения Маккаллоча','Самоанский медосос-мао','Таитянский красноклювый пастушок','Узлоусый дровосек','Филиппинский висячий попугайчик','Хоботковая собачка Петерса','Центральноавстралийская тиликва','Червонец блестящий','Шероховатый бычерыл','Щетинистый короткоусый слоник','Эластичная черепаха','Юдолии','Язь'];
function ran(max) {
  return Math.floor(Math.random() * max);
}
function Counting() {
	if (stop!=1){
	
    let strings =arr_RU[i];
		test.textContent = strings;
    i++;
    setTimeout( Counting, 1000 );
    if( i > howManyTimes ){
        i=0;
    }}
}
 window.onload = Counting();
 function Game(letter){
 	 document.getElementById('inp').value = "";
 	 document.getElementById('inp1').value = "";
 	 document.getElementById('inp2').value = "";
 	 document.getElementById('inp3').value = "";
let timerId = setInterval(() => textname.textContent = name[ran(29)], 250);
let timerId1 = setTimeout(() => { clearInterval(timerId);
	if(gamestop==1){
		clearInterval(timerId);
		clearInterval(timerId1);
		clearInterval(timerId2);
		clearInterval(timerId3);
		clearInterval(timerId4);
		clearInterval(timerId5);
		clearInterval(timerId6);
		clearInterval(timerId7);
	}	
	else{textname.textContent = name[letter-1];}}, 5000);

let timerId2 = setTimeout(() => { timerId = setInterval(() => textcity.textContent = city[ran(29)], 250)},5000);
let timerId3 = setTimeout(() => { clearInterval(timerId); if(gamestop==1){
		clearInterval(timerId);
		clearInterval(timerId1);
		clearInterval(timerId2);
		clearInterval(timerId3);
		clearInterval(timerId4);
		clearInterval(timerId5);
		clearInterval(timerId6);
		clearInterval(timerId7);
	}	
	else{textcity.textContent = city[letter-1];}}, 10000);

let timerId4 = setTimeout(() => { timerId = setInterval(() => textriver.textContent = river[ran(29)], 250)},10000);
let timerId5 = setTimeout(() => { clearInterval(timerId);if(gamestop==1){
		clearInterval(timerId);
		clearInterval(timerId1);
		clearInterval(timerId2);
		clearInterval(timerId3);
		clearInterval(timerId4);
		clearInterval(timerId5);
		clearInterval(timerId6);
		clearInterval(timerId7);
	}	
	 else{textriver.textContent = river[letter-1];}}, 15000);

let timerId6 = setTimeout(() => { timerId = setInterval(() => textanimal.textContent = animal[ran(29)], 250)},15000);
let timerId7 = setTimeout(() => { clearInterval(timerId); if(gamestop==1){
		clearInterval(timerId);
		clearInterval(timerId1);
		clearInterval(timerId2);
		clearInterval(timerId3);
		clearInterval(timerId4);
		clearInterval(timerId5);
		clearInterval(timerId6);
		clearInterval(timerId7);
	}	
	else{ textanimal.textContent = animal[letter-1];ender();alert('Компьютер победил');var divsToHide = document.getElementsByTagName("input"); //divsToHide is an array
    for(var j = 0; j < divsToHide.length; j++){
        divsToHide[j].style.visibility = "hidden"; // or
        divsToHide[j].style.display = "none"; // depending on what you're doing
    };}}, 20000);
 }
function checker(word){
	
	if(word[0]==arr_RU[i-1]){
		if (flag==0){
			yourname=word;
			ansname.textContent = 'Правильно!';
		}
		if (flag==1){
			yourcity=word;
			anscity.textContent = 'Правильно!';
		}
		if (flag==2){
			yourriver=word;
			ansriver.textContent = 'Правильно!';
		}
		if (flag==3){
			youranimal=word;
			gamestop=1;
			ansanimal.textContent = 'Правильно!';
			ender();
			var divsToHide = document.getElementsByTagName("input"); //divsToHide is an array
    for(var k = 0; k < divsToHide.length; k++){
        divsToHide[k].style.visibility = "hidden"; // or
        divsToHide[k].style.display = "none"; // depending on what you're doing
    }

        
		}
		flag++;
	}
	else{
		var divsToHide = document.getElementsByTagName("input"); //divsToHide is an array
    for(var l = 0; l < divsToHide.length; l++){
        divsToHide[l].style.visibility = "hidden"; // or
        divsToHide[l].style.display = "none"; // depending on what you're doing
    }
		ansname.textContent = 'Неправильно!';
	}
}
function ender () {
	let endname=textname.textContent;
	let endcity=textcity.textContent;
	let endriver=textriver.textContent;
	let endanimal=textanimal.textContent;
	if(endname[0]==arr_RU[i-1]) comppoints+=15;
	if(endcity[0]==arr_RU[i-1]) comppoints+=15;
	if(endriver[0]==arr_RU[i-1]) comppoints+=15;
	if(endanimal[0]==arr_RU[i-1]) comppoints+=15;
	if (ansname.textContent=='Правильно!') points+=15;
	if (anscity.textContent=='Правильно!') points+=15;
	if (ansriver.textContent=='Правильно!') points+=15;
	if (ansanimal.textContent=='Правильно!') points+=15;
	if(endname==yourname) {comppoints-=5;points-=5;}
	if(endcity==yourcity) {comppoints-=5;points-=5;}
	if(endriver==yourriver) {comppoints-=5;points-=5;}
	if(endanimal==youranimal) {comppoints-=5;points-=5;}
	playscore.textContent = points;
	compscore.textContent = comppoints;

}