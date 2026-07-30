"use client";

import { Stage, Layer, Rect, Text, Line } from "react-konva";
import { useState } from "react";

import { Garden, Bed } from "@/types/garden";


const initialGarden: Garden = {
  id: "garden-1",
  name: "Mein Garten",
  width: 500,
  height: 400,
  unit: "cm",
  beds: [
    {
      id: "bed-1",
      name: "Beet 1",
      x: 50,
      y: 50,
      width: 120,
      height: 200,
      color: "#8BC34A"
    },
    {
      id: "bed-2",
      name: "Beet 2",
      x: 250,
      y: 80,
      width: 150,
      height: 120,
      color: "#689F38"
    }
  ]
};


export default function GardenCanvas() {

  const [garden, setGarden] =
    useState<Garden>(initialGarden);


  const updateBedPosition = (
    id:string,
    x:number,
    y:number
  ) => {

    setGarden((current)=>({

      ...current,

      beds:
      current.beds.map((bed)=>{

        if(bed.id === id){

          return {
            ...bed,
            x,
            y
          };

        }

        return bed;

      })

    }));

  };


  return (

    <div className="bg-white rounded-xl shadow p-4">

      <h2 className="text-2xl font-bold mb-4">
        🗺️ {garden.name}
      </h2>


      <Stage
        width={800}
        height={600}
        className="border"
      >

        <Layer>


          {/* Raster */}

          {
            Array.from(
              {length:16},
              (_,i)=>(

              <Line

                key={`v-${i}`}

                points={[
                  i*50,
                  0,
                  i*50,
                  600
                ]}

                stroke="#ddd"

              />

              )
            )
          }


          {
            Array.from(
              {length:12},
              (_,i)=>(

              <Line

                key={`h-${i}`}

                points={[
                  0,
                  i*50,
                  800,
                  i*50
                ]}

                stroke="#ddd"

              />

              )
            )
          }



          {/* Beete */}

          {
            garden.beds.map((bed:Bed)=>(


              <>

              <Rect

                key={bed.id}

                x={bed.x}

                y={bed.y}

                width={bed.width}

                height={bed.height}

                fill={bed.color}

                cornerRadius={12}


                draggable


                onDragEnd={(e)=>{

                  updateBedPosition(

                    bed.id,

                    e.target.x(),

                    e.target.y()

                  );

                }}

              />


              <Text

                key={`${bed.id}-text`}

                text={bed.name}

                x={bed.x+10}

                y={bed.y+10}

                fontSize={18}

              />

              </>

            ))

          }


        </Layer>

      </Stage>


    </div>

  );

}