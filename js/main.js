   
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
  
  // document.getElementById('classes').addEventListener('click', onClick)
  
  
  
  function getFetch(id){
    
    const url = `https://www.dnd5eapi.co/api/classes/${id}`
  
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data=> {
            console.log(data)
              //Proficiencies       
              getProficiencies(data)
              //Saving throws
              getSavingThrows(data)
              //Starting equipment
              getStartingEquipment(data)
              //Subclasses
              getSubclass(data)
              //Spells
              getSpells(data) 
            })         
            .catch(err => {
              console.log(`error ${err}`)
          });
    }      
  
    
  //loopElements
  function loopElements(element, data){
    for (let i = 0; i < data[element].length; i++){
      const classInfo = data[element][i].name
      createP(classInfo)
    }
  } 
  
  //create h2     
    function createH2(innerText){
      const section = document.getElementById('details') 
      const headings = document.createElement('h2')
      headings.innerText = innerText
      section.appendChild(headings) 
    }
    //create p  
    function createP(innerText) {
      const section = document.getElementById('details') 
      const paragraph = document.createElement('p')
      paragraph.innerText = innerText   
      section.appendChild(paragraph)
    }
  
  
  // //  ---------------------------------------------- 
  
  
      //Proficiencies
    function getProficiencies(data) {
      createH2('Proficient In:')
      loopElements('proficiencies', data)
    }
      //Saiving Throws
    function getSavingThrows(data) {
      createH2('Saving Throws:')
      loopElements('saving_throws', data)  
    } 
      //Starting Equipment -> broken needs to be starting_equipment[i].equipment.name
    function getStartingEquipment(data) {
      createH2('Starting Equipment')
      loopElements('starting_equipment', data)
    }
    //Subclasses
    function getSubclass(data) {
      createH2('Sub Class(es):')
      loopElements('subclasses', data)  
    }
    
    //Spells -> would be interesting to work on, nest API?
    function getSpells(data) {
      createH2('Class Spells:')
      loopElements('spellcasting', data)
    }