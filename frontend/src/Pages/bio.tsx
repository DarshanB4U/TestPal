import { Navbar } from "@/components/navbar";
import { Card } from "@/components/Card";
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom";

const units = [
    { unit: 1, name: "Diversity in Living World" },
    { unit: 2, name: "Structural Organisation in Animals and Plants" },
    { unit: 3, name: "Cell Structure and Function" },
    { unit: 4, name: "Plant Physiology" },
    { unit: 5, name: "Human Physiology" },
    { unit: 6, name: "Reproduction" },
    { unit: 7, name: "Genetics and Evolution" },
    { unit: 8, name: "Biology and Human Welfare" },
    { unit: 9, name: "Biotechnology and Its Applications" },
    { unit: 10, name: "Ecology and Environment" },
  ];
  
  

export function Biology() {
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
