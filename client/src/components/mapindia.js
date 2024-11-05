// src/components/MapOfIndia.js

import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import indiaMapData from "../assets/map.json";

const MapOfIndia = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear any previous map drawings

    // Set up dimensions for a long, vertical map
    const width = 300;
    const height = 600;

    // Define a projection method for India
    const projection = d3
      .geoMercator()
      .center([78.9629, 22.5937]) // Centered on India's coordinates
      .scale(1000) // Adjust for size
      .translate([width / 2, height / 2]);

    const pathGenerator = d3.geoPath().projection(projection);

    // Draw India map outline using geoJSON data
    svg
      .append("g")
      .selectAll("path")
      .data(indiaMapData.features)
      .enter()
      .append("path")
      .attr("d", pathGenerator)
      .attr("fill", "none") // Keep map transparent
      .attr("stroke", "#333") // Outline color
      .attr("stroke-width", 1); // Outline width

    // Optional: Zoom behavior
    const zoom = d3.zoom().scaleExtent([1, 8]).on("zoom", (event) => {
      svg.attr("transform", event.transform);
    });

    svg.call(zoom);
  }, []);

  return <svg ref={svgRef} width="100%" height="600px" style={{ border: "1px solid #ddd" }} />;
};

export default MapOfIndia;
