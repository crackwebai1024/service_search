import React, { useEffect, useState } from 'react';
import './App.css';
import Filter from './components/filter/Filter';
import Header from './components/header/Header';
import Service from './components/service/Service';
import SideNav from './components/sidenav/SideNav';

interface IService{
  activated:boolean;
  site: string;
  promocode: string;
}

function App() {
  let balance:number = 213920;
  let payout:number = 159465;
  const [services, setServices] = useState<IService[]>([]);
  const [filteredServices, setFilteredServices] = useState<IService[]>([])
  const [searchVal, setSearchVal] = useState<string>("");

  const handleSearchChange = (value:string) => {
    let val:string = value;
    let filterService:IService[] = services.filter((item:IService, key:number) => {
      let tempArr:string[] = item.site.split(".");
      tempArr.pop();
      if(tempArr.join(".").toLowerCase().indexOf(val.toLowerCase()) !== -1){
        return item
      }
    })
    setSearchVal(val)
    setFilteredServices(filterService);
  }

  const handleActive = (value:string) => {
    let temp:IService[] = filteredServices.filter((item:IService) => {
      if(item.site === value){
        item.activated = true;
      }
      return item; 
    })
    setFilteredServices(temp);
  }
  useEffect(() => {
    fetch("./mockData.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (mockData) {
        console.log(mockData)
        setServices(mockData.data);
        setFilteredServices(mockData.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])

  return (
    <div className="wrapper">
      <div className="side-nav">
        <SideNav />
      </div>
      <div className="content">
        <Header balance={balance} payout={payout}/>
        <p className="label">Services</p>
        <Filter searchVal={searchVal} handleSearchChange={handleSearchChange}/>
        {filteredServices.map((item:IService, key:number) => (
          <Service 
            key={key} 
            site={item.site} 
            activated={item.activated} 
            promocode={item.promocode}
            handleActive={handleActive} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;
