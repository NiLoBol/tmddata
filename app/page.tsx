"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

interface WeatherData {
  province: string;
  forecast: string;
  // Add other fields that are returned by the API
}

export default function Home() {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/getdata');
        const data = await res.json();
        console.log(data);
        
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div>tests</div>
  );
}
