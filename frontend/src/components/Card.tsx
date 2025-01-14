import React from "react";

interface CardProps {
  unit?: any;
  title: string;
  description?: string;
  progress?: number;
  imageUrl?: string; // New prop for logo/image
  OnClick?:any
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  unit,
  OnClick,
}) => {
  return (
    <div onClick={OnClick} className="bg-card border  border-s-black shadow-md hover:shadow-lg border-solid border-neutral-950 hover; grid grid-cols-6 rounded-lg p-6">
      <div className="col-span-4">
        
        {unit && <div className="font-semibold  text-lg text-slate-800">Unit: {unit}</div>}
        <h2 className="text-xl font-bold text-foreground mb-4">{title}</h2>
        <p className="text-sm font-semibold  text-black text-muted-foreground">
          {description}
        </p>
      </div>
      <div className="col-span-2">
        <img src={imageUrl} className=" rounded-sm object-contain" />
      </div>
    </div>
  );
};
