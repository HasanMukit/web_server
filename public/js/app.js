


const button = document.querySelector('button')
const search = document.querySelector('input')

button.addEventListener('click', (e) => {
    e.preventDefault();
    const address = search.value
    fetch('/weather?address='+address).then((response) => {
    response.json().then((data) => {
        if(data.error)
        {
            const elem = document.createElement('p')
            elem.innerText = data.error
            const target = document.querySelector('form')
            target.parentNode.insertBefore(elem, target.nextSibling)
            return
        }
        console.log(data.location)
        
        let forecast = {location: data.location, ...data.forecastData}
        
        
        
        console.log(forecast)
        const headers = Object.keys(forecast)
        
        console.log(headers)
        const table = document.querySelector('table')
        table.innerHTML =""
        const tbody = document.createElement('tbody')

        for (let i = 0; i < headers.length; i++) {
            let row = document.createElement('tr')
            let cell1 = document.createElement('td')
            cell1.textContent = headers[i]
            row.appendChild(cell1)
            let cell2 = document.createElement('td')
            if (i === 4)
            {
             const icon = document.createElement('img')  
             icon.src = forecast[headers[i]]
             icon.width = '30'
             cell2.appendChild(icon)
            }
            else {
                cell2.textContent = forecast[headers[i]]
            }

            
            row.appendChild(cell2)
            tbody.appendChild(row)
        }
        table.appendChild(tbody)

        


    })
})
    
})