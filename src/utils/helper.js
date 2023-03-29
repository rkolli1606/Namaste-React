export  function searchRestaurants(text,resData){
    const dat= resData.filter((res)=>{
        console.log(text+""+res.data.name)
        return res?.data?.name.includes(text)})

        return dat
    }