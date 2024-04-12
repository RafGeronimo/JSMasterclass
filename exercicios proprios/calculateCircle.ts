import { ExcelData } from "./getData";

export default function calculateCircle(data: ExcelData[][]) {
  const tolerancia = 0.00000001;
  const results: { center: { x: number; y: number }; radius: number }[] = [];
  for (const chartData of data) {
    const calculateCenterDistances = (chartData: ExcelData[], center: { x: number; y: number }): number[] => {
      return chartData.map((c) => {
        const distanceX = c.x - center.x;
        const distanceY = c.y - center.y;
        return Math.sqrt(distanceX ** 2 + distanceY ** 2);
      });
    };

    const initialCenterAndRadius = (chartData: ExcelData[]): { center: { x: number; y: number }; radius: number } => {
      const centerX = chartData.reduce((acc, point) => acc + point.x, 0) / chartData.length;
      const centerY = chartData.reduce((acc, point) => acc + point.y, 0) / chartData.length;
      const distances = calculateCenterDistances(chartData, { x: centerX, y: centerY });
      const radius = distances.reduce((acc, distance) => acc + distance, 0) / distances.length;
      return { center: { x: centerX, y: centerY }, radius: radius };
    };
    const { center, radius } = initialCenterAndRadius(chartData);

    const calculateErrors = (distances: number[], radius: number, deviations: number[]): number[] => {
      return distances.map((d, i) => Math.abs(d - radius) * Math.abs(deviations[i]));
    };

    const optimizeCenterAndRadius = (
      chartData: ExcelData[],
      initialCenter: { x: number; y: number },
      initialRadius: number,
    ): { center: { x: number; y: number }; radius: number } => {
      let currentCenter = initialCenter;
      let currentRadius = initialRadius;
      let previousError = Infinity;
      let iteration = 0;

      const deviations = chartData.map((c) => c.deviation);

      while (true) {
        iteration++;
        const distances = calculateCenterDistances(chartData, currentCenter);
        const errors = calculateErrors(distances, currentRadius, deviations);
        const currentError = errors.reduce((acc, error) => acc + error ** 2, 0);

        if (Math.abs(currentError - previousError) < tolerancia || iteration > 1000) {
          break;
        }

        const centerXDerivativeError = distances.reduce((acc, distance, index) => {
          return acc + (2 * (distance - currentRadius) * (currentCenter.x - chartData[index].x)) / distance;
        }, 0);

        if (!centerXDerivativeError) break;

        const centerYDerivativeError = distances.reduce(
          (acc, distance, index) => acc + (2 * (distance - currentRadius) * (currentCenter.y - chartData[index].y)) / distance,
          0,
        );

        const radiusDerivativeError = errors.reduce((acc, error, index) => acc + (2 * error * (currentRadius - distances[index])) / error, 0);

        currentRadius -= radiusDerivativeError / chartData.length;
        currentCenter.x -= centerXDerivativeError / chartData.length;
        currentCenter.y -= centerYDerivativeError / chartData.length;

        previousError = currentError;
      }
      return { center: currentCenter, radius: currentRadius };
    };

    const { center: newCenter, radius: newRadius } = optimizeCenterAndRadius(chartData, center, radius);
    results.push({ center: newCenter, radius: newRadius });
  }
  console.log("results", results);
  return results;
}


//dados de entrada:
// const data = [
//     { x: 17.4903, y: 0.0012, deviation: -0.0097 },
//     { x: 16.7174, y: 5.1576, deviation: -0.0051 },
//     { x: 14.4597, y: 9.8579, deviation: 0.0005 },
//     { x: 10.9146, y: 13.6834, deviation: 0.0036 },
//     { x: 6.3967, y: 16.2969, deviation: 0.0033 },
//     { x: 1.3083, y: 17.4608, deviation: 0.0005 },
//     { x: -3.9017, y: 17.075, deviation: -0.0076 },
//     { x: -8.7595, y: 15.1655, deviation: -0.0095 },
//     { x: -12.8419, y: 11.9095, deviation: -0.0135 },
//     { x: -15.7892, y: 7.6, deviation: -0.0222 },
//     { x: -17.3197, y: 2.6061, deviation: -0.0151 },
//     { x: -17.316, y: -2.6122, deviation: -0.0114 },
//     { x: -15.7786, y: -7.6037, deviation: -0.0117 },
//     { x: -12.8444, y: -11.9188, deviation: -0.016 },
//     { x: -8.7539, y: -15.1654, deviation: -0.0039 },
//     { x: -3.8966, y: -17.0728, deviation: -0.0025 },
//     { x: 1.312, y: -17.4567, deviation: 0.0043 },
//     { x: 6.3998, y: -16.2982, deviation: 0.0063 },
//     { x: 10.9165, y: -13.684, deviation: 0.0054 },
//     { x: 14.4598, y: -9.8494, deviation: 0.0007 },
//     { x: 16.7138, y: -5.1526, deviation: -0.0087 }
// ];

// o código busca encontrar uma circunferencia (raio e centro) que melhor se ajuste aos pontos e seus respectivos desvios padrão.
