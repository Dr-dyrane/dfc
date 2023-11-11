// Home.jsx
import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Card, Divider, Subtitle, Text } from "@tremor/react";
import CityPicker from "../components/CityPicker";
import { useNavigate } from "react-router-dom";
import UserProfile from "../components/UserProfie";

function Home({ onLocationSelect }) {
  const [dfc, setDfc] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Add an authentication listener to ensure Firebase is initialized
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        // User is not authenticated, navigate to login
        navigate('/login');
      }
    });

    // Clean up the listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center font-semibold p-10 min-h-screen">
      <div>
        <UserProfile />
      </div>
      <Card className="rounded-3xl text-slate-100 bg-slate-900 max-w-3xl">
        <Text className="text-6xl font-bold text-center mb-10">
          Dyrane's Farm Cast
        </Text>
        <Subtitle className="text-xl text-center text-cyan-200">
          Powered by OpenAI, Vite, Tailwind CSS, & Tremor
        </Subtitle>
        <Divider className="my-10"></Divider>
        <Card className="bg-gradient-to-br from-purple-200 to-blue-200 rounded-lg">
          <CityPicker onLocationSelect={onLocationSelect} />
        </Card>
      </Card>
    </div>
  );
}

export default Home;
