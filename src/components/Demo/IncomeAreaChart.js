import React from "react";
import { Bar } from "react-chartjs-2";
import { allGenders, countGender } from "./Dataset/genderData";
import { allIncome, allIncomeSorted, data } from "./Dataset/incomeData";

console.log(allIncome);
console.log(allIncomeSorted);
console.log(data);

const IncomeAreaChart = () => {
  return (
    <div>
      <Bar
        data={{
          labels: allGenders,

          datasets: [
            {
              data: countGender,
              backgroundColor: [
                "rgba(0, 63, 92, 1)",
                "rgba(47, 75, 124, 1)",
                "rgba(102, 81, 145, 1)",
                "rgba(160, 81, 149, 1)",
                "rgba(212, 80, 135, 1)",
                "rgba(249, 93, 106, 1)",
                "rgba(255, 124, 67, 1)",
                "rgba(255, 166, 0, 1)",
              ],
              borderColor: [
                "rgba(0, 63, 92, 1)",
                "rgba(47, 75, 124, 1)",
                "rgba(102, 81, 145, 1)",
                "rgba(160, 81, 149, 1)",
                "rgba(212, 80, 135, 1)",
                "rgba(249, 93, 106, 1)",
                "rgba(255, 124, 67, 1)",
                "rgba(255, 166, 0, 1)",
              ],
              borderWidth: 1,
              hoverBackgroundColor: [
                "rgba(0, 63, 92, 0.8)",
                "rgba(47, 75, 124, 0.8)",
                "rgba(102, 81, 145, 0.8)",
                "rgba(160, 81, 149, 0.8)",
                "rgba(212, 80, 135, 0.8)",
                "rgba(249, 93, 106, 0.8)",
                "rgba(255, 124, 67, 0.8)",
                "rgba(255, 166, 0, 0.8)",
              ],
              hoverBorderColor: [
                "rgba(0, 63, 92, 0.8)",
                "rgba(47, 75, 124, 0.8)",
                "rgba(102, 81, 145, 0.8)",
                "rgba(160, 81, 149, 0.8)",
                "rgba(212, 80, 135, 0.8)",
                "rgba(249, 93, 106, 0.8)",
                "rgba(255, 124, 67, 0.8)",
                "rgba(255, 166, 0, 0.8)",
              ],
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          legend: {
            position: "bottom",
            labels: {
              boxWidth: 15,
              padding: 15,
            },
          },
          pieceLabel: {
            render: "percentage",
            fontColor: "#fff",
            precision: 1,
            position: "border",
            fontStyle: "bold",
            fontSize: 14,
          },
          title: {
            display: true,
            text: "Income Distribution",
            fontSize: 24,
            padding: 24,
          },
          maintainAspectRatio: false,
          scales: {
            xAxes: [
              {
                gridLines: {
                  display: false,
                },
                ticks: {
                  display: false,
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  display: false,
                },
                gridLines: {
                  display: false,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default IncomeAreaChart;