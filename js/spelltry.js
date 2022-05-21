

const onClick = function() {    
  getInfo(this.innerHTML.toLowerCase())
  console.log(this.innerHTML.toLowerCase());
  } 
  
const spans = document.querySelectorAll('#classes > span')
spans.forEach(span => span.addEventListener('click', onClick))
 

// async function getInfo(id) {
//   try {          
//     const urls = [
//       `https://www.dnd5eapi.co/api/classes/${id}`,
//       `https://www.dnd5eapi.co/api/classes/${id}/spells`
//     ]  

//     let response = await Promise.all(
//             urls.map(url => fetch(url).then(res => res.json()))
//           )

//           for(let item of response) {
//             console.log('item', item)
//           }
//           console.log(response)
//             for(let item of response) {
//               console.log(item)
//             }

//         } catch (error) {
//           console.log("Error", error)
//         }
//       }


async function getInfo(id) {
  
  try {      
      const urls = [
      `https://www.dnd5eapi.co/api/classes/${id}`,
      `https://www.dnd5eapi.co/api/classes/${id}/spells`
      ]  

      let response = await Promise.all(
          urls.map(url => fetch(url).then(res => res.json()))
      )
      for (let item of response) {
          console.log("item: ", item);
      }
      console.log(response)
  } catch (error) {
          console.log("Error", error)
  }

}
      
      
      // async function getInfo(id) {
      //   urls = [
      //     `https://www.dnd5eapi.co/api/classes/${id}`,
      //     `https://www.dnd5eapi.co/api/classes/${id}/spells`
      //   ]

      //   try {
      //     let results = await Promise.all(
      //       urls.map(url => fetch(url)
      //         .then(r => r.json())
      //         .catch(error => ({ error, url }))
      //       )
      //     )
      //     for (let item of results) {
      //       console.log(item)
      //     }
      //   } catch (err) {
      //     console.log(err)
      //   }
      // }
     
