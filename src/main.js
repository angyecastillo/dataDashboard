const printInf = students =>{
  //console.log(students);
}
const printSerch = student =>{
  document.getElementById('search').addEventListener('click',(event) =>{
    event.preventDefault();
        const name = document.getElementById('name-to-search').value;
        const searchResult = filtrerStudet(student,name);
    //para imprrimir en el dom
    console.log(searchResult);
  })
}
