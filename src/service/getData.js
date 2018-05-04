export const getData = () => {
  return fetch('/dados/data.json')
         .then(res => res.json())
        
}