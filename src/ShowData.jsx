import React from 'react'

function ShowData({data}) {

    console.log('showdata: ', data)
    if (!data) return <h3>Yükleniyor...</h3>;

// Veriler alındıktan sonra bileşeninizi normal şekilde görüntüleyin
return <div>
    {data.map((nasaData)=>{
        return nasaData.media_type === 'video' ? <video src={nasaData.url} width="800" height="400" controls /> : <img src={nasaData.url} />
    })}
    
    </div>
  
  
}

export default ShowData