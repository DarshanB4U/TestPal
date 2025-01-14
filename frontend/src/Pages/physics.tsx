import { Navbar } from "@/components/navbar";
import { Card } from "@/components/Card";
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom";

const units = [
  { unit: 1, name: "Physics and Measurement" },
  { unit: 2, name: "Kinematics" },
  { unit: 3, name: "Laws of Motion" },
  { unit: 4, name: "Work, Energy, and Power" },
  { unit: 5, name: "Rotational Motion" },
  { unit: 6, name: "Gravitation" },
  { unit: 7, name: "Properties of Solids and Liquids" },
  { unit: 8, name: "Thermodynamics" },
  { unit: 9, name: "Kinetic Theory of Gases" },
  { unit: 10, name: "Oscillations and Waves" },
  { unit: 11, name: "Electrostatics" },
  { unit: 12, name: "Current Electricity" },
  { unit: 13, name: "Magnetic Effects of Current and Magnetism" },
  { unit: 14, name: "Electromagnetic Induction and Alternating Currents" },
  { unit: 15, name: "Electromagnetic Waves" },
  { unit: 16, name: "Optics" },
  { unit: 17, name: "Dual Nature of Matter and Radiation" },
  { unit: 18, name: "Atoms and Nuclei" },
  { unit: 19, name: "Electronic Devices" },
  { unit: 20, name: "Experimental Skills" },
];

export function Physics() {
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
