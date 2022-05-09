

const onClick = function() {    
    getFetch(this.innerHTML.toLowerCase())
  }
document.getElementById('barb').addEventListener('click', onClick)
document.getElementById('bard').addEventListener('click', onClick)
document.getElementById('cleric').addEventListener('click', onClick)
document.getElementById('druid').addEventListener('click', onClick)
document.getElementById('fighter').addEventListener('click', onClick)
document.getElementById('monk').addEventListener('click', onClick)
document.getElementById('paladin').addEventListener('click', onClick)
document.getElementById('ranger').addEventListener('click', onClick)
document.getElementById('rogue').addEventListener('click', onClick)
document.getElementById('sorcerer').addEventListener('click', onClick)
document.getElementById('warlock').addEventListener('click', onClick)
document.getElementById('wizard').addEventListener('click', onClick)

function getFetch(id){
  
  const url = `https://www.dnd5eapi.co/api/classes/${id}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
          console.log(data)

          let arr = [data.name, data.proficiencies, data.saving_throws[0].name, data.saving_throws[1].name, data.starting_equipment]
          console.log(arr);

          arr.forEach((e) => {
            const section = document.getElementById('details')
            let paragraph = document.createElement('p')
              if(e.length > 0) {                 // WE NEED A BREAK https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries#examples
                 e.forEach((ele) => {
                     paragraph.innerText = `${e.ele.key}:${e.ele.value}`
                     section.append(paragraph)
                 })
                 

              }            
            paragraph.innerText = `${e}`
            section.append(paragraph)        
          })

          
          //name
          
    //       section.replaceChildren()
    //       let paragraph = document.createElement('p')
    //       paragraph.innerText = `Name: ${data.name}`
          

    //       //proficiencies
    //       let paragraph2 = d
    //         paragraph.innerText = 'prof'
    //         section.append(paragraph)
        
    //       //saving_throws
    //       //starting_equipment 
      })   

      
      .catch(err => {
          console.log(`error ${err}`)
      });
}
