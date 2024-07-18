import { NextResponse } from "next/server";
import Salty from "../../(models)/saltyfood";

export async function GET() {
  try {
    const saltyfood = await Salty.find();
    console.log(saltyfood);
    return NextResponse.json({ saltyfood }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }

  // {
  // title: "Pasta al pomodoro",
  // ingredients: "Pasta e pomodoro",
  // steps: "Preparala",
  // time: "30 min",
  // vegan: true,
  //   }
}
