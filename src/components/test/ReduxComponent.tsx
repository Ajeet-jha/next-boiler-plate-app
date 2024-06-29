"use client";
import React from "react";
import { useAppSelector, useAppDispatch, useAppStore } from "@/lib/hooks";

function ReduxComponent() {
  const store = useAppStore();
  const booking = useAppSelector((state) => state.booking);
  console.log(booking);

  const dispatch = useAppDispatch();
  return <h1>ReduxComponent</h1>;
}

export default ReduxComponent;
