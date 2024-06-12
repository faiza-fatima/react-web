import axios from 'axios'

async function Fetch(){
    try{

        const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
        // console.log(data[0].name)

        let allData= data.map((ele)=>({
            id : ele.id,
            name : ele.name
        }))

        console.log(allData)



    }catch(error){
        console.log(error)
    }
}

Fetch();