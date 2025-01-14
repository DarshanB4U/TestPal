import { Navbar } from "@/components/navbar";
import { Card } from "@/components/Card";
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom";

const units = [
    { unit:  1,name: "SOME BASIC CONCEPTS IN CHEMISTRY" },
    { unit:  2,name: "ATOMIC STRUCTURE" },
    { unit:  3,name: "CHEMICAL BONDING AND MOLECULAR STRUCTURE" },
    { unit:  4,name: "CHEMICAL THERMODYNAMICS" },
    { unit:  5,name: "SOLUTIONS" },
    { unit:  6,name: "EQUILIBRIUM" },
    { unit:  7,name: "REDOX REACTIONS AND ELECTROCHEMISTRY" },
    { unit:  8,name: "CHEMICAL KINETICS" },
    { unit:  9,name: "CLASSIFICATION OF ELEMENTS AND PERIODICITY IN PROPERTIES" },
    { unit:  1, name: "P- BLOCK ELEMENTS" },
    { unit:  1, name: "d - and f- BLOCK ELEMENTS" },
    { unit:  1, name: "CO-ORDINATION COMPOUNDS" },
    { unit:  1, name: "PURIFICATION AND CHARACTERISATION OF ORGANIC COMPOUNDS" },
    { unit:  1, name: "SOME BASIC PRINCIPLES OF ORGANIC CHEMISTRY" },
    { unit:  1, name: "HYDROCARBONS" },
    { unit:  1, name: "ORGANIC COMPOUNDS CONTAINING HALOGENS" },
    { unit:  1, name: "ORGANIC COMPOUNDS CONTAINING OXYGEN" },
    { unit:  1, name: "ORGANIC COMPOUNDS CONTAINING NITROGEN" },
    { unit:  1, name: "BIOMOLECULES" },
    { unit:  2, name: "PRINCIPLES RELATED TO PRACTICAL CHEMISTRY" },
  ];
  
  

export function Chemistry() {
    const navigate =useNavigate()
  return (
    <div>
      <Navbar></Navbar>
      <div >
        <Button onClick={function(){
            navigate("/")
        }} className="m-3"><svg
        
          xmlns="http://www.w3.org/2000/svg"
          height="40px"
          viewBox="0 -960 960 960"
          width="40px"
          fill="#e8eaed"
        >
          <path d="m287-446.67 240 240L480-160 160-480l320-320 47 46.67-240 240h513v66.66H287Z" />
        </svg>Subject</Button>
       
      </div>
      <div className="container mx-auto p-6 space-x-4">
        <h1 className="text-3xl font-bold text-center mb-6">Topics</h1>
        <div className="grid grid-col-1 sm:grid-cols-1  lg:grid-cols-3 gap-6">
          {units.map((card, index) => (
            <Card key={index} title={card.name} unit={card.unit} />
          ))}
        </div>
      </div>
    </div>
  );
}
