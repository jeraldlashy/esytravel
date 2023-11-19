"use client";
import React from "react";
import HoverText from "@/components/hovertext";

export default function TravelDashoard() {
  return (
    <>
      <h1>Hover to Hear Text</h1>
      <p>
        Hover over the text below to hear it:
        <br />
        <HoverText text="This is the text to be spoken on hover" />
      </p>
    </>
  );
}
