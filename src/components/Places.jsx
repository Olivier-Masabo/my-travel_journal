
function Places(){

    const placesInfo = [
    {
      imageSrc: "/fuji.png",
      locationImg:"/locations.png",
      CountryName: "Japan",
      google:"https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu",
      place: "Mount Fuji",
      date: "12 Jan, 2021-24 Jan,2021",
      desc: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
    },
    {
      imageSrc: "/australia.png",
      locationImg:"/locations.png",
      CountryName: "Australia",
      google:"https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu",
      place: "Sydney Opera House",
      date: "27 May, 2021-8 Jun,2021",
      desc: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
    },
    {
      imageSrc: "/river.png",
      locationImg:"/locations.png",
      CountryName: "Norway",
      google:"https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu",
      place: "Gairangerfjord",
      date: "27 May, 2021-8 Jun,2021",
      desc: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
    }
  ]


    return(
    
    <div className=" w-[45%] mx-auto space-y-5 p-6 mt-5 rounded-2xl">
    {placesInfo.map((place,index )=>
       ( <div  key={index} className="flex">
            <img src={place.imageSrc} alt="location" className="w-full mr-8" />
            <div className="space-y-3">
           <div className="flex gap-3 items-center">
             <img src={place.locationImg} alt="location icon" className="w-4 h-4 object-contain" />
            <span className="mr-4 uppercase">{place.CountryName}</span>
            <a href={place.google} target='_blank' className="underline decoration-gray-500">View on google Map</a>
           </div>
                <h2 className="text-xl font-bold pt-2">{place.place}</h2>
                <h3 className="font-bold">{place.date}</h3>
                <p className="pt-2">{place.desc}</p>
            </div>
        </div>
        
    ))}

    </div>

    )
}

export default Places;