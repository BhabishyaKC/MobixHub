"use client";

import { useSelector } from "react-redux";

interface RootState {
  user: {
    lastName: string,
    firstName: string,
   
  };
}

export default function HomeClient() {
  const { firstName } = useSelector((state: RootState) => state.user);
  const { lastName } = useSelector((state: RootState) => state.user);

  return <div>{ firstName } {lastName}</div>;
}

