
// Вывести общее кол-во элементов в консоль
 let allSiblings = document.querySelectorAll('li');
       console.log(allSiblings.length);

//    Вытянуть текст из тегов li и записать текст содержащийся в каждом элементе в массив — вывсести этот массив в консоль    
   let arr = [];
       for(let elem of allSiblings){
         arr.push(elem.innerHTML);
       }
   console.log(arr);

//    С помощью JS изменить текст в последнем теге li на — «Привет меня зовут » + Ваше имя
        const lastLi = document.querySelector('li:last-child');
        lastLi.innerHTML = "Привет меня зовут Саня!";

        // Добавить первому элементу li аттрибут ‘data-my-name‘ со значением в котором будет лежать Ваше имя
      const firstLi = document.querySelector('li:first-child');
      firstLi.setAttribute('data-my-name', 'Alexandr');

    //   Удалить у тега ul аттрибут ‘data-dog-tail‘
      let  ul = document.querySelector('ul');
      ul.removeAttribute('data-dog-tail');
      console.log(ul);

    // Вытянуть все аттрибуты которые есть в теге ul, перебрать их (for..of) и записать значение каждого аттрибута в массив — вывсести этот массив в консоль
    let arrValues = [];    
    for(let attr of ul.attributes) {
        arrValues.push(attr.value);   
    }
    console.log(arrValues)
    // Так-же записать в отдельный массив каждое имя аттрибута — вывести массив в консоль
    let arrNames = [];
    for(let attr of ul.attributes) {
        arrNames.push(attr.name);   
    }
    console.log(arrNames)
    

