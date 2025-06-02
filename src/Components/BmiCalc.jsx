import React, { useState } from "react";
import CustomButton from "./CustomButton";

const BmiCalc = () => {
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState(""); // Height in ft
  const [weight, setWeight] = useState(""); // Weight in kg
  const [bmiResult, setBmiResult] = useState("");
  const [classification, setClassification] = useState("");

  const calculateBMI = () => {
    if (!height || !weight) {
      setBmiResult("Please provide valid inputs for height and weight.");
      setClassification("");
      return;
    }

    const heightInMeters = parseFloat(height) * 0.3048; // Convert ft to meters
    const weightInKg = parseFloat(weight);

    if (isNaN(heightInMeters) || isNaN(weightInKg)) {
      setBmiResult("Please enter numeric values for height and weight.");
      setClassification("");
      return;
    }

    const bmi = (weightInKg / (heightInMeters * heightInMeters)).toFixed(1);
    setBmiResult(`Your BMI is: ${bmi}`);

    if (bmi < 18.5) {
      setClassification("Underweight");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setClassification("Normal Weight");
    } else if (bmi >= 25 && bmi <= 29.9) {
      setClassification("Overweight");
    } else if (bmi >= 30 && bmi <= 39.9) {
      setClassification("Obesity");
    } else {
      setClassification("Morbid Obesity");
    }
  };

  const resetFields = () => {
    setGender("");
    setHeight("");
    setWeight("");
    setBmiResult("");
    setClassification("");
  };

  return (
    <section className="min-h-[90vh]">
      <div className="mt-12">
        <h1 className="h1 text-center">BMI Calculator</h1>
        <div className="max-w-[800px] grid grid-cols-2 md:grid-cols-3 gap-3 my-12 px-4 mx-auto">
          <select
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="h-10 overflow-y-auto border-2 border-red-500 px-2 focus:outline-none"
          >
            <option value="">Your Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            type="text"
            name="height"
            placeholder="Your Height in ft"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="border-2 border-red-500 px-2 focus:outline-none"
          />
          <input
            type="text"
            name="weight"
            placeholder="Your Weight in kg"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="border-2 border-red-500 px-2 focus:outline-none"
          />
          <CustomButton
            containerStyles="px-5 py-3 bg-red-300"
            text={"Calculate it"}
            onClick={calculateBMI}
          />
          <CustomButton
            containerStyles="px-5 py-3 bg-red-300"
            text={"Reset it"}
            onClick={resetFields}
          />
          <div
            className="flex items-center border-2 border-red-500 px-2"
            id="result-box"
          >
            {bmiResult ? (
              <div>
                <p className="text-gray-800">{bmiResult}</p>
                <p className="text-gray-500">{classification}</p>
              </div>
            ) : (
              <span className="text-gray-400">Results here</span>
            )}
          </div>
        </div>
         <div className="flex flex-col justify-center items-center">
          <h3 className="h3 uppercase">Body Mass Index</h3>
          <p className="max-w-[600px] mx-5 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
          <div className="mt-10">
            <table className="border-2 border-red-500">
              <tbody>
                <tr className="uppercase border-b-2 border-red-500">
                  <th className="px-10 py-2">BMI</th>
                  <th className="px-10 py-2">Classification</th>
                </tr>
                <tr className="text-center">
                  <td className="px-10 py-2">18-24.9</td>
                  <td className="px-10 py-2">Normal Weight</td>
                </tr>
                <tr className="text-center">
                  <td className="px-10 py-2">25-29.9</td>
                  <td className="px-10 py-2">Overweight</td>
                </tr>
                <tr className="text-center">
                  <td className="px-10 py-2">30-39.9</td>
                  <td className="px-10 py-2">Obesity</td>
                </tr>
                <tr className="text-center">
                  <td className="px-10 py-1">40-above</td>
                  <td className="px-10 py-1">Morbid Obesity</td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>
      </div>
    </section>
  );
};

export default BmiCalc;
