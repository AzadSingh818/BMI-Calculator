import { useState } from "react"
import "./calculator.css"

function BMICalculator() {
    const [height, setHeight] = useState("")
    const [weight, setWeight] = useState("")
    const [bmi, setBMI] = useState(null)
    const [bmiCategory, setBMICategory] = useState("")

    const calculateBMI = (e) => {
        e.preventDefault()

        const heightInMeters = Number.parseFloat(height) / 100
        const weightInKg = Number.parseFloat(weight)

        if (isNaN(heightInMeters) || isNaN(weightInKg) || heightInMeters <= 0 || weightInKg <= 0) {
            alert("Please enter valid height and weight values.")
            return
        }

        const bmiValue = weightInKg / (heightInMeters * heightInMeters)
        setBMI(Number.parseFloat(bmiValue.toFixed(1)))

        if (bmiValue < 18.5) {
            setBMICategory("Underweight")
        } else if (bmiValue >= 18.5 && bmiValue < 25) {
            setBMICategory("Normal weight")
        } else if (bmiValue >= 25 && bmiValue < 30) {
            setBMICategory("Overweight")
        } else {
            setBMICategory("Obese")
        }
    }

    return (
        <div className="bmi-calculator">
            <h1>BMI Calculator</h1>
            <form onSubmit={calculateBMI}>
                <div>
                    <label htmlFor="height">Height (cm)</label>
                    <input
                        id="height"
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        placeholder="Enter your height in cm"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="weight">Weight (kg)</label>
                    <input
                        id="weight"
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        placeholder="Enter your weight in kg"
                        required
                    />
                </div>
                <button type="submit">Calculate BMI</button>
            </form>
            {bmi !== null && (
                <div className="result">
                    <h2>Your BMI Result</h2>
                    <p className="bmi-value">{bmi}</p>
                    <p className="bmi-category">
                        Category: <span>{bmiCategory}</span>
                    </p>
                </div>
            )}
        </div>
    )
}

export default BMICalculator

