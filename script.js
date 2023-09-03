function getCurrentImageOfTheDay() {
    return fetch('https://api.nasa.gov/planetary/apod?api_key=KdxAhFIMcxbPmSpiJVt7POTa4XtdACYmCuId8HBq')
      .then(response => {
        return response.json();
      })
      .then(data => {

        let ele = document.getElementById('current-image-container');
        ele.innerHTML='';
        let cImage=document.createElement('img');
        cImage.src=data['url'];
        let title=document.createElement('h1');
        title.innerText=data.title;
        let p=document.createElement('p');
        p.innerText=data['explanation'];

        ele.appendChild(cImage);
        ele.appendChild(title);
        ele.appendChild(p);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  getCurrentImageOfTheDay();
  
  let arr=[];
  function getImageOfTheDay(arr){
    let formbtn=document.getElementById('btn');
    formbtn.addEventListener('click',function(event){
    event.preventDefault();
      let date=document.getElementById('search-input').value;
     
      arr.push(date);

      return fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=KdxAhFIMcxbPmSpiJVt7POTa4XtdACYmCuId8HBq`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        let heading=document.getElementById('heading');
        let ele = document.getElementById('current-image-container');
        ele.innerHTML='';
        heading.innerText=`Picture of Date: ${date}`;
        let cImage=document.createElement('img');
        cImage.src=data['url'];
        let title=document.createElement('h1');
        title.innerText=data.title;
        let p=document.createElement('p');
        p.innerText=data['explanation'];

        ele.appendChild(cImage);
        ele.appendChild(title);
        ele.appendChild(p);
       saveSearch(arr);
       addSearchToHistory(date);
        
      })
      .catch(error => {
        console.error('Error:', error);
      });

    })
  }


  getImageOfTheDay(arr);

function temp(itemValue){
    
      let date=itemValue;

      return fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=KdxAhFIMcxbPmSpiJVt7POTa4XtdACYmCuId8HBq`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        let heading=document.getElementById('heading');
        let ele = document.getElementById('current-image-container');
        ele.innerHTML='';
        heading.innerText=`Picture of Date: ${date}`;
        let cImage=document.createElement('img');
        cImage.src=data['url'];
        let title=document.createElement('h1');
        title.innerText=data.title;
        let p=document.createElement('p');
        p.innerText=data['explanation'];

        ele.appendChild(cImage);
        ele.appendChild(title);
        ele.appendChild(p);
        
      })
      .catch(error => {
        console.error('Error:', error);
      });

    
}

  function saveSearch(arr){

    localStorage.setItem('searches', JSON.stringify(arr));

  }



  function addSearchToHistory(date){
    let container=document.getElementById('sh');
    let el=document.createElement('li');
    el.innerText=`${date}`;
    container.appendChild(el);
    
  }



 
const myList = document.getElementById("sh");


myList.addEventListener("click", function (event) {

  if (event.target && event.target.nodeName === "LI") {
    
    const itemValue = event.target.textContent;
    

    temp(itemValue);
    
    
    
  }
});
