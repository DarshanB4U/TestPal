import { Navbar } from "@/components/navbar";
import { Card } from "@/components/Card";
import biologylogo from "../assets/biology.jpeg";
import chemistrylogo from "../assets/chemistry.jpeg";
import physicslogo from "../assets/physics2.jpeg";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider"

export function Setup() {
  const navigate = useNavigate();
  const topicsData = [
    {
      title: "Physics",
      description:
        "Physics is the foundation of understanding the natural laws governing the universe. For NEET aspirants",
      imageUrl: physicslogo,
    },
    {
      title: "Chemistry",
      description:
       "Chemistry studies matter and its changes, essential for understanding reactions and principles for NEET.",
      imageUrl: chemistrylogo,
    },
    {
      title: "Biology",
      description:
        "Biology explores life and organisms, focusing on key concepts crucial for NEET preparation.",
      imageUrl: biologylogo,
    },
  ];
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    <div >
      <Navbar></Navbar>

      <div className="container mx-auto p-6 space-x-4">
        <div></div>
        <h1 className="text-3xl font-bold text-center mb-6">Topics</h1>
        <div className="grid grid-col-1 sm:grid-cols-1 lg:grid-cols-3 gap-6">
          {topicsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
              OnClick={function () {
                switch (card.title) {
                  case "Physics":
                    navigate("/phy"); // Code to execute if expression === value1

                    break;
                  case "Chemistry":
                    navigate("/chem");// Code to execute if expression === value2
                    break;
                  case "Biology":
                    navigate("/bio")// Code to execute if expression === value3
                    break;
                  // ... more cases
                 
                }
              }}
            />
          ))}
        </div>
      </div>
    </div>
    </ThemeProvider>
  );
}
